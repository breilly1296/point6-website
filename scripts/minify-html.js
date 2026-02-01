/**
 * HTML Minification
 * Uses html-minifier-terser to minify HTML files
 */

const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');

const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// HTML files to process
const htmlFiles = [
    'index.html',
    'services.html',
    'ai-launchpad.html',
    'results.html',
    'about.html',
    'contact.html',
    'case-study-template.html',
    '404.html'
];

const minifyOptions = {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
    // Keep important attributes
    removeAttributeQuotes: false,
    // Preserve line breaks in pre/code/textarea
    preserveLineBreaks: false
};

async function minifyHTML() {
    let totalOriginal = 0;
    let totalMinified = 0;

    for (const file of htmlFiles) {
        const srcPath = path.join(ROOT_DIR, file);
        const distPath = path.join(DIST_DIR, file);

        if (!fs.existsSync(srcPath)) {
            console.log(`   ⚠ Skipping ${file} (not found)`);
            continue;
        }

        const sourceHTML = fs.readFileSync(srcPath, 'utf8');

        try {
            const minifiedHTML = await minify(sourceHTML, minifyOptions);
            fs.writeFileSync(distPath, minifiedHTML);

            const originalSize = Buffer.byteLength(sourceHTML, 'utf8');
            const minifiedSize = Buffer.byteLength(minifiedHTML, 'utf8');
            const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

            totalOriginal += originalSize;
            totalMinified += minifiedSize;

            console.log(`   ✓ ${file}: ${(originalSize / 1024).toFixed(1)}KB → ${(minifiedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
        } catch (err) {
            console.error(`   ✗ Error minifying ${file}:`, err.message);
        }
    }

    const totalSavings = ((1 - totalMinified / totalOriginal) * 100).toFixed(1);
    console.log(`   ─────────────────────────────────────`);
    console.log(`   Total HTML: ${(totalOriginal / 1024).toFixed(1)}KB → ${(totalMinified / 1024).toFixed(1)}KB (${totalSavings}% smaller)`);
}

minifyHTML().catch(err => {
    console.error('   ✗ HTML minification failed:', err);
    process.exit(1);
});
