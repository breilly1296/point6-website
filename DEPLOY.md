# Point6 Website Deployment Guide

## Quick Start

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy to Google App Engine
npm run deploy
```

---

## Deployment Options

### Option 1: Google App Engine (Recommended)

App Engine provides automatic SSL, scaling, and CDN.

#### Prerequisites
1. [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
2. Google Cloud project created
3. Billing enabled on the project

#### Setup (First Time)

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

#### Subsequent Deploys

```bash
npm run deploy
```

#### Preview Deploy (without traffic)

```bash
npm run deploy:preview
```

---

### Option 2: Cloud Storage + Cloud CDN

Better for high-traffic sites needing global CDN.

#### Setup

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

#### Configure Cloud CDN
1. Go to Cloud Console → Network Services → Cloud CDN
2. Add origin: Cloud Storage bucket
3. Configure cache settings
4. Note the CDN IP address

#### Configure DNS
Point your domain to the CDN IP or use Cloud Load Balancing.

---

## Build Process

### Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Full production build |
| `npm run build:css` | Minify CSS only |
| `npm run build:js` | Minify JS only |
| `npm run build:html` | Minify HTML only |
| `npm run build:images` | Optimize images |
| `npm run clean` | Delete dist folder |
| `npm run serve` | Serve production build locally |
| `npm run serve:dev` | Serve source files locally |

### What the Build Does

1. **Cleans** `dist/` folder
2. **Minifies CSS** with clean-css (~40% smaller)
3. **Minifies JS** with terser (~50% smaller)
4. **Minifies HTML** with html-minifier-terser (~20% smaller)
5. **Optimizes images** with imagemin (if installed)
6. **Generates sitemap.xml** with current date
7. **Copies static files** (robots.txt, favicons)

### Output Structure

```
dist/
├── index.html
├── services.html
├── results.html
├── about.html
├── contact.html
├── case-study-template.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── apple-touch-icon.png
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
        └── case-studies/
```

---

## Pre-Launch Checklist

### Content
- [ ] All placeholder text replaced with real content
- [ ] All TODO comments addressed
- [ ] Company stats are accurate
- [ ] Team bios and photos added
- [ ] At least 2-3 case studies completed
- [ ] Testimonials have real names and companies
- [ ] Contact email verified (hello@point6.io)

### Forms & Integrations
- [ ] Contact form connected to backend (Formspree/Netlify/custom)
- [ ] Form tested end-to-end (receives emails)
- [ ] Calendly link added (if using)
- [ ] Google Analytics 4 installed
- [ ] LinkedIn Insight Tag installed (if using)

### Images & Assets
- [ ] Logo files added
- [ ] Favicon files in place
- [ ] OG images created (1200x630px)
- [ ] All images optimized
- [ ] Alt text on all images

### Testing
- [ ] All pages load without errors
- [ ] All links working (no 404s)
- [ ] Mobile tested on real devices (iOS + Android)
- [ ] Tablet layout verified
- [ ] Form validation working
- [ ] Contact form submits successfully

### Performance
- [ ] Lighthouse score > 90 (Performance)
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Lighthouse score > 90 (Best Practices)
- [ ] Lighthouse score > 90 (SEO)
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s

### SEO
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] OG tags validated with Facebook debugger
- [ ] Twitter cards validated
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] Canonical URLs correct

### Security
- [ ] HTTPS enabled (automatic with App Engine)
- [ ] No sensitive data in source code
- [ ] No API keys exposed
- [ ] Form has CSRF protection (if applicable)

### DNS & Domain
- [ ] Domain purchased (point6.io)
- [ ] DNS configured for Google Cloud
- [ ] SSL certificate active
- [ ] www redirect configured
- [ ] Old URLs redirect (if migrating)

---

## Post-Launch

### Monitoring
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Google Analytics receiving data
- [ ] Uptime monitoring configured

### Ongoing
- [ ] Update sitemap when adding case studies
- [ ] Monitor Core Web Vitals
- [ ] Regular security updates
- [ ] Backup any form submissions

---

## Troubleshooting

### Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Deploy fails
```bash
# Check gcloud auth
gcloud auth list

# Re-authenticate if needed
gcloud auth login

# Verify project
gcloud config get-value project
```

### Images not optimizing
The build will work without imagemin. To enable optimization:
```bash
npm install imagemin imagemin-mozjpeg imagemin-pngquant imagemin-svgo
```

### Cache issues after deploy
App Engine: New version auto-invalidates cache.
Cloud Storage: Manually invalidate CDN cache or wait for TTL.

---

## Useful Commands

```bash
# View App Engine logs
gcloud app logs tail -s default

# List deployed versions
gcloud app versions list

# Rollback to previous version
gcloud app versions migrate VERSION_ID

# Check billing
gcloud beta billing accounts list
```

---

## Cost Estimate

### App Engine (Standard)
- Free tier: 28 instance hours/day
- Expected cost for low-traffic site: $0-5/month
- Includes free SSL

### Cloud Storage + CDN
- Storage: ~$0.02/GB/month
- CDN egress: $0.08-0.12/GB
- Expected cost: $1-10/month depending on traffic

---

## Support

For issues with deployment, check:
1. [App Engine Documentation](https://cloud.google.com/appengine/docs)
2. [Cloud Storage Static Hosting](https://cloud.google.com/storage/docs/hosting-static-website)
3. [Google Cloud Console](https://console.cloud.google.com)
