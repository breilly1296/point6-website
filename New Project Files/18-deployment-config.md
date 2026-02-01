# Point6 Website - Deployment Configuration

> Generated: 2026-02-01
> Source: Analysis of project files and CLAUDE.md

## Hosting Overview

### Target Platform
- **Hosting**: Google App Engine (static files with caching)
- **Domain**: point6.io
- **SSL**: Google-managed (automatic with App Engine)
- **Runtime**: Python 3.9 (lightweight runtime for static files)

### Current Status
- [ ] Domain registered (point6.io)
- [ ] DNS configured
- [x] SSL certificate active (auto with App Engine)
- [ ] Site deployed
- [x] Cache headers configured (via app.yaml)

---

## Domain Configuration

### Domain Details
- **Primary domain**: point6.io
- **Registrar**: Unknown
- **DNS provider**: Unknown

### DNS Records Needed
```
Type    Name    Value
A       @       [App Engine IP or load balancer]
CNAME   www     ghs.googlehosted.com (for App Engine custom domains)
```

### Subdomains
- www.point6.io - redirect to root recommended

---

## Google App Engine Configuration

### app.yaml Analysis

The `app.yaml` file configures Google App Engine for static site hosting:

```yaml
runtime: python39  # Lightweight runtime for static files
entrypoint: ""     # No entrypoint needed for static sites
```

### Static File Handlers

| URL Pattern | Source Location | Cache Duration | Cache-Control Header |
|-------------|-----------------|----------------|----------------------|
| `/css/(.*)` | `dist/css/\1` | 30 days | `public, max-age=2592000` |
| `/js/(.*)` | `dist/js/\1` | 30 days | `public, max-age=2592000` |
| `/assets/(.*)` | `dist/assets/\1` | 30 days | `public, max-age=2592000` |
| `/favicon.ico` | `dist/favicon.ico` | 7 days | Default |
| `/apple-touch-icon.png` | `dist/apple-touch-icon.png` | 7 days | Default |
| `/robots.txt` | `dist/robots.txt` | 1 day | Default |
| `/sitemap.xml` | `dist/sitemap.xml` | 1 day | Default |
| `/*.html` | `dist/*.html` | 1 hour | `public, max-age=3600, must-revalidate` |
| `/` (homepage) | `dist/index.html` | 1 hour | `public, max-age=3600, must-revalidate` |
| `/*` (catch-all) | `dist/\1.html` | Default | Clean URLs support |

### Error Handlers
```yaml
error_handlers:
  - file: dist/404.html
```

### Cache Strategy
- **Static assets** (CSS, JS, images): Long cache (30 days) - versioned files
- **Favicons**: Medium cache (7 days) - rarely change
- **SEO files** (robots.txt, sitemap.xml): Short cache (1 day) - may update
- **HTML pages**: Very short cache (1 hour) with must-revalidate - content updates

---

## Deployment Process

### Build and Deploy Commands

```bash
# Install dependencies (first time or after package.json changes)
npm install

# Build production files to dist/
npm run build

# Deploy to Google App Engine
npm run deploy

# Preview deploy (without traffic migration)
npm run deploy:preview
```

### Deployment Steps

1. Ensure all files are saved and committed to version control
2. Run `npm run build` to create production build in `dist/`
3. Run `npm run deploy` which executes:
   - `npm run build` (rebuilds)
   - `gcloud app deploy` (deploys to App Engine)
4. Verify deployment at live URL
5. Check browser console for errors
6. Test all functionality

### First-Time Setup

```bash
# Login to Google Cloud
gcloud auth login

# Set your project
gcloud config set project YOUR_PROJECT_ID

# Enable App Engine
gcloud app create --region=us-central

# Deploy
npm run deploy
```

---

## Build Process

### Build Tools (package.json)

```json
{
  "devDependencies": {
    "clean-css": "^5.3.3",
    "html-minifier-terser": "^7.2.0",
    "imagemin": "^8.0.1",
    "imagemin-mozjpeg": "^10.0.0",
    "imagemin-pngquant": "^9.0.2",
    "imagemin-svgo": "^10.0.1",
    "serve": "^14.2.1",
    "terser": "^5.26.0"
  }
}
```

### NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Full production build to `dist/` |
| `npm run build:css` | Minify CSS only |
| `npm run build:js` | Minify JS only |
| `npm run build:html` | Minify HTML only |
| `npm run build:images` | Optimize images |
| `npm run build:sitemap` | Generate sitemap.xml |
| `npm run clean` | Delete `dist/` folder |
| `npm run serve` | Serve production build locally (port 5000) |
| `npm run serve:dev` | Serve source files locally (port 3000) |
| `npm run deploy` | Build + deploy to App Engine |
| `npm run deploy:preview` | Build + deploy without traffic migration |
| `npm run lighthouse` | Run Lighthouse audit |

### Build Script Workflow (scripts/build.js)

The main build script orchestrates the following steps:

1. **Clean** - Remove `dist/` folder
2. **Create directories** - Set up `dist/css`, `dist/js`, `dist/assets`, `dist/assets/images`
3. **Minify CSS** - `clean-css` (~40% reduction)
4. **Minify JS** - `terser` (~50% reduction)
5. **Minify HTML** - `html-minifier-terser` (~20% reduction)
6. **Optimize images** - `imagemin` with mozjpeg, pngquant, svgo
7. **Generate sitemap** - Dynamic sitemap.xml with current date
8. **Copy static files** - robots.txt, favicons, manifest

### CSS Minification (scripts/minify-css.js)

```javascript
// clean-css options
{
    level: {
        1: { specialComments: 0 },  // Remove all comments
        2: {
            mergeSemantically: true,
            restructureRules: true
        }
    }
}
```

### JS Minification (scripts/minify-js.js)

```javascript
// terser options
{
    compress: {
        drop_console: false,  // Keep console.log for form feedback
        drop_debugger: true,
        passes: 2
    },
    mangle: true,
    format: { comments: false }
}
```

### HTML Minification (scripts/minify-html.js)

Processes these files:
- index.html
- services.html
- ai-launchpad.html
- results.html
- about.html
- contact.html
- case-study-template.html
- 404.html

```javascript
// html-minifier-terser options
{
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true
}
```

### Sitemap Generation (scripts/generate-sitemap.js)

Automatically generates `sitemap.xml` with:
- Current date for `lastmod`
- Configured priorities and change frequencies
- Auto-detection of case study pages (matching `case-study-*.html`)

Pages included:
| URL | Priority | Change Frequency |
|-----|----------|------------------|
| `/` | 1.0 | weekly |
| `/services.html` | 0.9 | monthly |
| `/ai-launchpad.html` | 0.9 | monthly |
| `/results.html` | 0.9 | monthly |
| `/about.html` | 0.8 | monthly |
| `/contact.html` | 0.8 | monthly |
| `/case-study-*.html` | 0.7 | yearly |

### Build Output Structure

```
dist/
├── index.html
├── services.html
├── ai-launchpad.html
├── results.html
├── about.html
├── contact.html
├── case-study-template.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
        └── case-studies/
```

---

## Files Excluded from Deploy

### .gcloudignore Configuration

```
# Ignore everything except dist folder for deployment
*

# Include the dist folder (production build)
!dist/
!dist/**

# Include app.yaml for App Engine
!app.yaml
```

This ensures only the production build and configuration are uploaded to App Engine.

### .gitignore Configuration

```
# Dependencies
node_modules/

# Build output
dist/

# Environment variables
.env
.env.local
.env.production

# IDE
.idea/
.vscode/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db
desktop.ini

# Logs
*.log
npm-debug.log*

# Google Cloud
.gcloudignore

# Temporary files
tmp/
temp/
*.tmp

# Editor backups
*.bak
*.backup

# Sensitive files
credentials.json
service-account.json
*.pem
*.key
```

---

## Local Development

### Development Server Options

```bash
# Serve source files (for development)
npm run serve:dev
# Access at http://localhost:3000

# Serve production build (after npm run build)
npm run serve
# Access at http://localhost:5000

# Python server alternative
python -m http.server 8000
# Access at http://localhost:8000

# VS Code Live Server
# Right-click index.html -> Open with Live Server
```

---

## Configuration Files Summary

| File | Present | Purpose |
|------|:-------:|---------|
| `app.yaml` | Yes | Google App Engine configuration |
| `package.json` | Yes | Node.js dependencies and scripts |
| `.gitignore` | Yes | Git ignore rules |
| `.gcloudignore` | Yes | App Engine deploy exclusions |
| `robots.txt` | Yes | Search engine directives |
| `sitemap.xml` | Yes | Search engine sitemap |
| `DEPLOY.md` | Yes | Deployment guide and checklists |
| `CLAUDE.md` | Yes | Project documentation |
| `404.html` | Yes | Custom error page |

### robots.txt Contents

```
User-agent: *
Allow: /

Sitemap: https://point6.io/sitemap.xml
```

---

## Environment Configuration

### Environment Variables
- None required (static site)
- No server-side processing

### Sensitive Data
- No API keys in code
- No credentials in repository
- `.gitignore` excludes sensitive files (`.env`, `credentials.json`, `*.pem`, `*.key`)

---

## SSL/HTTPS

### Current Status
- **Certificate provider**: Google-managed (automatic with App Engine)
- **Auto-renewal**: Yes (automatic)
- **HTTPS enforcement**: Automatic with App Engine

### No Additional Setup Required
App Engine provides automatic SSL certificates for:
- Default `appspot.com` domain
- Custom domains configured in Cloud Console

---

## CDN Configuration

### Current Status
- **CDN enabled**: Yes (App Engine includes Cloud CDN)
- **Provider**: Google Cloud CDN (integrated with App Engine)

### Cache Settings (from app.yaml)
- Static assets (CSS, JS, images): 30 days
- HTML pages: 1 hour with must-revalidate
- SEO files: 1 day

---

## Analytics & Monitoring

### Google Analytics
- **Status**: Not configured (TODO item)
- **Implementation**: gtag.js recommended

### Monitoring Checklist
- [ ] Google Analytics 4 configured
- [ ] Google Search Console verified
- [ ] Uptime monitoring configured
- [ ] Error tracking enabled

---

## Alternative Deployment: Cloud Storage + Cloud CDN

For high-traffic sites needing global CDN:

```bash
# Create a Cloud Storage bucket
gsutil mb -l US gs://point6-website

# Enable website hosting
gsutil web set -m index.html -e 404.html gs://point6-website

# Make bucket public
gsutil iam ch allUsers:objectViewer gs://point6-website

# Upload files
gsutil -m rsync -r dist/ gs://point6-website/

# Set cache headers
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" gs://point6-website/*.html
gsutil -m setmeta -h "Cache-Control:public, max-age=2592000" gs://point6-website/css/*
gsutil -m setmeta -h "Cache-Control:public, max-age=2592000" gs://point6-website/js/*
```

---

## Pre-Deployment Checklist

### Code Quality
- [ ] No console.log statements (except form feedback)
- [ ] No TODO comments in production code
- [ ] All links working
- [ ] No placeholder content

### Performance
- [ ] Images optimized
- [ ] CSS/JS minified
- [ ] Gzip enabled (automatic with App Engine)

### SEO
- [ ] robots.txt present
- [ ] sitemap.xml present
- [ ] Meta tags complete
- [ ] Canonical URLs correct

### Security
- [ ] HTTPS enforced (automatic)
- [ ] No sensitive data exposed
- [ ] External links have `rel="noopener"`

---

## Post-Deployment Checklist

- [ ] Verify all pages load
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate
- [ ] Test booking links
- [ ] Check analytics tracking
- [ ] Submit sitemap to Google Search Console

---

## TODO Items (from CLAUDE.md)

- [ ] Get real copy from founder
- [ ] Confirm second product/platform name
- [ ] Add logo and favicon files
- [ ] Add OG images for social sharing
- [ ] Configure Formspree form ID in contact.html
- [ ] Deploy to Google Cloud
- [ ] Submit sitemap to Google Search Console
- [ ] Run Lighthouse audit and verify scores

---

## Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Deploy Fails

```bash
# Check gcloud auth
gcloud auth list

# Re-authenticate if needed
gcloud auth login

# Verify project
gcloud config get-value project
```

### Images Not Optimizing

The build will work without imagemin. To enable optimization:

```bash
npm install imagemin imagemin-mozjpeg imagemin-pngquant imagemin-svgo
```

### Cache Issues After Deploy

App Engine: New version auto-invalidates cache.
Cloud Storage: Manually invalidate CDN cache or wait for TTL.

---

## Useful Commands Reference

```bash
# View App Engine logs
gcloud app logs tail -s default

# List deployed versions
gcloud app versions list

# Rollback to previous version
gcloud app versions migrate VERSION_ID

# Check billing
gcloud beta billing accounts list

# Browse deployed app
gcloud app browse
```

---

## Cost Estimate

### App Engine (Standard)
- **Free tier**: 28 instance hours/day
- **Expected cost**: $0-5/month for low-traffic site
- **Includes**: Free SSL, automatic scaling

### Cloud Storage + CDN (Alternative)
- **Storage**: ~$0.02/GB/month
- **CDN egress**: $0.08-0.12/GB
- **Expected cost**: $1-10/month depending on traffic

---

## Support Resources

- [App Engine Documentation](https://cloud.google.com/appengine/docs)
- [Cloud Storage Static Hosting](https://cloud.google.com/storage/docs/hosting-static-website)
- [Google Cloud Console](https://console.cloud.google.com)
- [Custom Domain Setup](https://cloud.google.com/appengine/docs/standard/mapping-custom-domains)
