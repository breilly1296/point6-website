/**
 * CSS Minification
 * Uses clean-css to minify stylesheets
 */

const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_CSS = path.join(ROOT_DIR, 'css', 'styles.css');
const DIST_CSS = path.join(ROOT_DIR, 'dist', 'css', 'styles.css');

// Ensure dist/css directory exists
const distCssDir = path.dirname(DIST_CSS);
if (!fs.existsSync(distCssDir)) {
    fs.mkdirSync(distCssDir, { recursive: true });
}

// Read source CSS
const sourceCSS = fs.readFileSync(SRC_CSS, 'utf8');

// Minify with clean-css
const minifier = new CleanCSS({
    level: {
        1: {
            specialComments: 0 // Remove all comments
        },
        2: {
            mergeSemantically: true,
            restructureRules: true
        }
    }
});

const output = minifier.minify(sourceCSS);

if (output.errors.length > 0) {
    console.error('   ✗ CSS minification errors:', output.errors);
    process.exit(1);
}

// Write minified CSS
fs.writeFileSync(DIST_CSS, output.styles);

// Calculate savings
const originalSize = Buffer.byteLength(sourceCSS, 'utf8');
const minifiedSize = Buffer.byteLength(output.styles, 'utf8');
const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

console.log(`   ✓ styles.css: ${(originalSize / 1024).toFixed(1)}KB → ${(minifiedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
