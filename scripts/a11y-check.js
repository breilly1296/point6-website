/**
 * Accessibility Check Script
 * Run with: node scripts/a11y-check.js
 * 
 * For full Lighthouse audit, run:
 * npm run serve && npx lighthouse http://localhost:5000 --only-categories=accessibility --view
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const htmlFiles = [
    'index.html',
    'services.html', 
    'ai-launchpad.html',
    'results.html',
    'about.html',
    'contact.html',
    '404.html',
    'case-study-template.html'
];

console.log('🔍 Running Accessibility Checks...\n');

let issues = 0;
let warnings = 0;

htmlFiles.forEach(file => {
    const filePath = path.join(ROOT_DIR, file);
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${file}: File not found`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const fileIssues = [];
    const fileWarnings = [];

    // Check for skip link
    if (!content.includes('skip-link') && file !== '404.html') {
        fileIssues.push('Missing skip link');
    }

    // Check for main landmark
    if (!content.includes('<main') && !content.includes('role="main"')) {
        fileIssues.push('Missing <main> landmark');
    }

    // Check for lang attribute
    if (!content.includes('lang="en"')) {
        fileIssues.push('Missing lang attribute on <html>');
    }

    // Check for viewport meta
    if (!content.includes('viewport')) {
        fileIssues.push('Missing viewport meta tag');
    }

    // Check for h1
    if (!content.includes('<h1')) {
        fileWarnings.push('Missing <h1> heading');
    }

    // Check for aria-hidden on decorative elements
    if (content.includes('class="logo-dot"') && !content.includes('logo-dot" aria-hidden')) {
        fileWarnings.push('Logo dot may need aria-hidden');
    }

    // Check for form labels
    if (content.includes('<input') && !content.includes('<label')) {
        fileIssues.push('Inputs may be missing labels');
    }

    // Report
    if (fileIssues.length === 0 && fileWarnings.length === 0) {
        console.log(`✅ ${file}: All checks passed`);
    } else {
        console.log(`📄 ${file}:`);
        fileIssues.forEach(issue => {
            console.log(`   ❌ ${issue}`);
            issues++;
        });
        fileWarnings.forEach(warning => {
            console.log(`   ⚠️  ${warning}`);
            warnings++;
        });
    }
});

console.log('\n' + '='.repeat(50));
console.log(`Results: ${issues} issues, ${warnings} warnings`);

if (issues === 0) {
    console.log('✅ Basic accessibility checks passed!');
    console.log('\nFor a complete audit, run:');
    console.log('  npm run serve');
    console.log('  npx lighthouse http://localhost:5000 --only-categories=accessibility --view');
} else {
    console.log('\n⚠️  Please fix the issues above');
    process.exit(1);
}
