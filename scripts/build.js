/**
 * Point6 Website Build Script
 * Orchestrates the full production build process
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

console.log('🚀 Starting Point6 production build...\n');

// Track build time
const startTime = Date.now();

// Step 1: Clean
console.log('🧹 Cleaning dist folder...');
require('./clean');

// Step 2: Create dist directory structure
console.log('\n📁 Creating directory structure...');
const dirs = ['dist', 'dist/css', 'dist/js', 'dist/assets', 'dist/assets/images', 'dist/assets/images/case-studies'];
dirs.forEach(dir => {
    const fullPath = path.join(ROOT_DIR, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }
});

// Step 3: Minify CSS
console.log('\n🎨 Minifying CSS...');
require('./minify-css');

// Step 4: Minify JS
console.log('\n⚡ Minifying JavaScript...');
require('./minify-js');

// Step 5: Minify HTML
console.log('\n📄 Minifying HTML...');
require('./minify-html');

// Step 6: Copy and optimize images
console.log('\n🖼️  Processing images...');
require('./optimize-images');

// Step 7: Generate sitemap
console.log('\n🗺️  Generating sitemap...');
require('./generate-sitemap');

// Step 8: Copy static files
console.log('\n📋 Copying static files...');
const staticFiles = [
    'robots.txt',
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'apple-touch-icon.png',
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'site.webmanifest'
];
let copiedCount = 0;
staticFiles.forEach(file => {
    const src = path.join(ROOT_DIR, file);
    const dest = path.join(DIST_DIR, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`   ✓ ${file}`);
        copiedCount++;
    } else {
        console.log(`   ⚠ ${file} (not found - create from logo)`);
    }
});
if (copiedCount === 0) {
    console.log('   ⚠ No favicon files found. Generate from logo at https://realfavicongenerator.net/');
}

// Calculate build time
const endTime = Date.now();
const buildTime = ((endTime - startTime) / 1000).toFixed(2);

console.log('\n' + '='.repeat(50));
console.log(`✅ Build complete in ${buildTime}s`);
console.log(`📦 Output: ${DIST_DIR}`);
console.log('='.repeat(50));

// Show dist folder size
const getDirectorySize = (dirPath) => {
    let size = 0;
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            size += getDirectorySize(filePath);
        } else {
            size += stats.size;
        }
    });
    return size;
};

const distSize = getDirectorySize(DIST_DIR);
const sizeKB = (distSize / 1024).toFixed(2);
console.log(`\n📊 Total size: ${sizeKB} KB`);
