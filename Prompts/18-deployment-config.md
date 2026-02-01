# 18 - Deployment Configuration

Document the deployment setup and hosting configuration for the Point6 website.

## Instructions

Examine configuration files (app.yaml, package.json, scripts/) and document the deployment approach based on CLAUDE.md and project files.

## Output Format

Generate a file called `deployment-config.md` with the following structure:

```markdown
# Point6 Website - Deployment Configuration

> Generated: [DATE]
> Source: Analysis of project files and CLAUDE.md

## Hosting Overview

### Target Platform
- **Hosting**: Google App Engine (static files with caching)
- **Domain**: point6.io
- **SSL**: Google-managed (automatic with App Engine)

### Current Status
- [ ] Domain registered
- [ ] DNS configured
- [ ] SSL certificate active (auto with App Engine)
- [ ] Site deployed
- [ ] Cache headers configured (via app.yaml)

---

## Domain Configuration

### Domain Details
- **Primary domain**: point6.io
- **Registrar**: [unknown]
- **DNS provider**: [unknown]

### DNS Records Needed
```
Type    Name    Value
A       @       [GCS IP or load balancer]
CNAME   www     point6.io (or bucket URL)
```

### Subdomains
- www.point6.io → [redirect to root?]

---

## Google Cloud Storage Setup

### Bucket Configuration
- **Bucket name**: [e.g., point6-website or point6.io]
- **Region**: [e.g., us-central1]
- **Storage class**: Standard
- **Public access**: Enabled for static hosting

### Static Website Settings
```
Main page: index.html
Error page: 404.html (if exists)
```

### CORS Configuration
[If needed for any cross-origin requests]

---

## Deployment Process

### Build and Deploy
```bash
# Build production files
npm run build

# Deploy to Google App Engine
npm run deploy
# or directly:
gcloud app deploy dist/app.yaml --quiet
```

### Deployment Steps
1. Ensure all files are saved and committed
2. Run `npm run build` to create production build
3. Run `npm run deploy` to deploy to App Engine
4. Verify deployment at live URL
5. Check browser console for errors

### Files Excluded from Deploy
See `.gcloudignore` for exclusions:
```
.git/
.gitignore
node_modules/
Prompts/
New Project Files/
scripts/
*.md
package*.json
```

## App Engine Configuration

### app.yaml
Check for:
- Runtime configuration
- Static file handlers
- Cache control headers
- Error page handlers
- URL routing rules

---

## Local Development

### Python Server
```bash
python -m http.server 8000
# Access at http://localhost:8000
```

### Node Server
```bash
npx serve .
# Access at http://localhost:3000
```

### Live Server (VS Code)
- Install Live Server extension
- Right-click index.html → Open with Live Server

---

## Configuration Files

### Present in Project

| File | Present? | Purpose |
|------|----------|---------|
| .gitignore | | Git ignore rules |
| package.json | | Node dependencies (if any) |
| robots.txt | | Search engine directives |
| sitemap.xml | | Search engine sitemap |
| .htaccess | | Apache config (not needed for GCS) |
| 404.html | | Custom error page |

### .gitignore Contents
```
[paste contents if present]
```

### robots.txt Contents
```
[paste contents if present, or note if missing]
```

---

## Build Process

### Current State
- **Build tool**: Node.js scripts (see package.json)
- **CSS preprocessing**: None (vanilla CSS with custom properties)
- **CSS minification**: clean-css-cli
- **JS minification**: terser
- **HTML minification**: html-minifier-terser
- **Image optimization**: imagemin with plugins

### package.json Scripts
```bash
npm run build        # Full production build to dist/
npm run build:css    # Minify CSS only
npm run build:js     # Minify JS only
npm run build:html   # Minify HTML only
npm run build:images # Optimize images
npm run deploy       # Deploy to Google App Engine
npm run dev          # Start local development server
npm run clean        # Remove dist/ folder
```

### Build Output
- Production files go to `dist/` folder
- Source files remain in root for development

---

## Environment Configuration

### Environment Variables
- None required (static site)

### Sensitive Data
- No API keys in code
- No credentials in repository

---

## SSL/HTTPS

### Current Status
- Certificate provider: [Google-managed / Let's Encrypt / other]
- Auto-renewal: [Yes / No / Unknown]

### Setup Steps (if not configured)
1. Enable HTTPS on GCS bucket
2. Configure load balancer with SSL
3. Or use Cloudflare for SSL

---

## CDN Configuration

### Current Status
- CDN enabled: [Yes / No]
- Provider: [Cloud CDN / Cloudflare / none]

### Cache Settings
- Static assets: [cache duration]
- HTML pages: [cache duration]

---

## Analytics & Monitoring

### Google Analytics
- **Status**: [Configured / Not configured]
- **Tracking ID**: [if known]
- **Implementation**: [gtag.js / analytics.js]

### Other Analytics
- [ ] Google Search Console
- [ ] Uptime monitoring
- [ ] Error tracking

---

## Backup Strategy

### Code Backup
- Git repository: [location]
- Remote: [GitHub / GitLab / etc.]

### Content Backup
- GCS versioning: [enabled / disabled]

---

## Pre-Deployment Checklist

### Code Quality
- [ ] No console.log statements
- [ ] No TODO comments in production code
- [ ] All links working
- [ ] No placeholder content

### Performance
- [ ] Images optimized
- [ ] CSS/JS minified (optional)
- [ ] Gzip enabled on server

### SEO
- [ ] robots.txt present
- [ ] sitemap.xml present
- [ ] Meta tags complete

### Security
- [ ] HTTPS enforced
- [ ] No sensitive data exposed
- [ ] External links have rel="noopener"

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

- [ ] DNS configuration for point6.io
- [ ] SSL certificate setup
- [ ] Set up contact form backend
- [ ] Add Google Analytics
- [ ] Configure deployment pipeline

---

## Troubleshooting

### Common Issues

#### Site not updating after deploy
- Clear browser cache
- Clear CDN cache
- Verify gsutil completed successfully

#### CORS errors
- Check bucket CORS configuration
- Verify allowed origins

#### SSL certificate errors
- Verify certificate is valid
- Check domain matches certificate

---

## Commands Reference

```bash
# Deploy to GCS
gsutil -m rsync -r -d . gs://[BUCKET_NAME]/

# Check bucket contents
gsutil ls gs://[BUCKET_NAME]/

# Set public read access
gsutil iam ch allUsers:objectViewer gs://[BUCKET_NAME]

# Enable website configuration
gsutil web set -m index.html -e 404.html gs://[BUCKET_NAME]
```
```

## What to Analyze

1. Check for configuration files in project root
2. Reference CLAUDE.md for deployment info
3. Look for package.json or other config files
4. Note any build scripts or commands
5. Document the current deployment state
6. List remaining setup tasks

## Save Location

Save output to: `docs/deployment-config.md`
