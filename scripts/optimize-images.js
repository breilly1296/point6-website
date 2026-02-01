/**
 * Image Optimization
 * Copies and optimizes images for production
 *
 * Note: imagemin has ESM-only dependencies in newer versions.
 * This script handles both cases and falls back to simple copy if optimization fails.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_IMAGES = path.join(ROOT_DIR, 'assets', 'images');
const DIST_IMAGES = path.join(ROOT_DIR, 'dist', 'assets', 'images');

// Ensure dist directory exists
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Copy file
function copyFile(src, dest) {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
}

// Recursively copy directory
function copyDirectory(src, dest) {
    if (!fs.existsSync(src)) {
        console.log(`   ⚠ Source directory not found: ${src}`);
        return 0;
    }

    ensureDir(dest);
    let count = 0;

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            count += copyDirectory(srcPath, destPath);
        } else if (entry.isFile()) {
            // Skip README and other non-image files
            const ext = path.extname(entry.name).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico'].includes(ext)) {
                copyFile(srcPath, destPath);
                count++;
            } else if (entry.name !== 'README.md') {
                // Copy other files too (except README)
                copyFile(srcPath, destPath);
            }
        }
    }

    return count;
}

// Main function
async function processImages() {
    ensureDir(DIST_IMAGES);

    // Check if source images directory exists
    if (!fs.existsSync(SRC_IMAGES)) {
        console.log('   ⚠ No images directory found - creating placeholder structure');
        ensureDir(DIST_IMAGES);
        ensureDir(path.join(DIST_IMAGES, 'case-studies'));
        return;
    }

    // Try to use imagemin for optimization
    let useImagemin = false;

    try {
        // Dynamic import for ESM modules
        const imagemin = await import('imagemin');
        const imageminMozjpeg = await import('imagemin-mozjpeg');
        const imageminPngquant = await import('imagemin-pngquant');
        const imageminSvgo = await import('imagemin-svgo');

        useImagemin = true;
        console.log('   Using imagemin for optimization...');

        // Optimize images
        const files = await imagemin.default([`${SRC_IMAGES}/**/*.{jpg,jpeg,png,svg}`], {
            destination: DIST_IMAGES,
            plugins: [
                imageminMozjpeg.default({ quality: 80 }),
                imageminPngquant.default({ quality: [0.6, 0.8] }),
                imageminSvgo.default({
                    plugins: [
                        { name: 'removeViewBox', active: false }
                    ]
                })
            ]
        });

        console.log(`   ✓ Optimized ${files.length} images`);
    } catch (err) {
        // Fallback to simple copy if imagemin fails
        console.log('   ⚠ imagemin not available, copying images without optimization');
        console.log('   (Run "npm install" to enable image optimization)');
    }

    // Copy images (either as fallback or for files imagemin didn't process)
    const copiedCount = copyDirectory(SRC_IMAGES, DIST_IMAGES);

    if (!useImagemin && copiedCount > 0) {
        console.log(`   ✓ Copied ${copiedCount} image files`);
    } else if (copiedCount === 0) {
        console.log('   ⚠ No images to process (add images to assets/images/)');
    }
}

processImages().catch(err => {
    console.error('   ✗ Image processing failed:', err);
    // Don't exit with error - images are optional
});
