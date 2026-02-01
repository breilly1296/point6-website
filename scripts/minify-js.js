/**
 * JavaScript Minification
 * Uses terser to minify scripts
 */

const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_JS = path.join(ROOT_DIR, 'js', 'main.js');
const DIST_JS = path.join(ROOT_DIR, 'dist', 'js', 'main.js');

// Ensure dist/js directory exists
const distJsDir = path.dirname(DIST_JS);
if (!fs.existsSync(distJsDir)) {
    fs.mkdirSync(distJsDir, { recursive: true });
}

async function minifyJS() {
    // Read source JS
    const sourceJS = fs.readFileSync(SRC_JS, 'utf8');

    // Minify with terser
    const result = await minify(sourceJS, {
        compress: {
            drop_console: false, // Keep console.log for form submission feedback
            drop_debugger: true,
            passes: 2
        },
        mangle: true,
        format: {
            comments: false
        }
    });

    if (result.error) {
        console.error('   ✗ JS minification error:', result.error);
        process.exit(1);
    }

    // Write minified JS
    fs.writeFileSync(DIST_JS, result.code);

    // Calculate savings
    const originalSize = Buffer.byteLength(sourceJS, 'utf8');
    const minifiedSize = Buffer.byteLength(result.code, 'utf8');
    const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

    console.log(`   ✓ main.js: ${(originalSize / 1024).toFixed(1)}KB → ${(minifiedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
}

minifyJS().catch(err => {
    console.error('   ✗ JS minification failed:', err);
    process.exit(1);
});
