/**
 * Sitemap Generator
 * Generates sitemap.xml with current dates
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const DOMAIN = 'https://point6.io';

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Page configuration
const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services.html', priority: '0.9', changefreq: 'monthly' },
    { url: '/ai-launchpad.html', priority: '0.9', changefreq: 'monthly' },
    { url: '/results.html', priority: '0.9', changefreq: 'monthly' },
    { url: '/about.html', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact.html', priority: '0.8', changefreq: 'monthly' }
];

// Check for case study files and add them
const caseStudyPattern = /^case-study-(?!template).+\.html$/;
const rootFiles = fs.readdirSync(ROOT_DIR);
rootFiles.forEach(file => {
    if (caseStudyPattern.test(file)) {
        pages.push({
            url: `/${file}`,
            priority: '0.7',
            changefreq: 'yearly'
        });
    }
});

// Generate XML
const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
const urlsetClose = '</urlset>';

const urlEntries = pages.map(page => `    <url>
        <loc>${DOMAIN}${page.url}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`).join('\n');

const sitemap = `${xmlHeader}
${urlsetOpen}
${urlEntries}
${urlsetClose}
`;

// Write sitemap
const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`   ✓ Generated sitemap.xml with ${pages.length} URLs`);
console.log(`   ✓ Last modified: ${today}`);
