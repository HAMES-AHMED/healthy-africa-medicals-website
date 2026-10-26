# Healthy Africa Medicals — Website files

A responsive, static website for **Healthy Africa Medical and Engineering Solutions Limited (HAMES)**, Kampala, Uganda.

## Included
- `index.html` — all website sections and content
- `styles.css` — responsive corporate styling (blue, white, purple and red)
- `script.js` — mobile navigation, enquiry form email handoff, product enquiry shortcuts and active navigation
- `assets/hames-logo.png` — supplied company logo
- `_headers` — optional security and cache headers for Cloudflare Pages
- `404.html` — friendly not-found page
- `robots.txt` and `sitemap.xml` — basic search-engine files
- `DEPLOYMENT-GUIDE.md` — step-by-step free hosting instructions

## Contact details used
Extracted from the supplied invoice:
- Phone: +256 778 641390
- Alternate phone: +256 702 648137
- Email: healthyafricamedical@gmail.com
- Location: Kampala, Uganda
- CEO: Engineer Waladde Ahmed (provided in the website brief)

## Important notes before launch
1. **Domain:** `healthyafricamedicals.com` is the requested domain. It is not purchased, registered, or connected by these files. You can first publish using the free URL supplied by GitHub Pages or Cloudflare Pages, then connect the domain later.
2. **Contact form:** This is a free static website, so the form prepares an email using the visitor's default email application. It does not silently send or store messages. For a true web-based form that works without an email app, connect a form service or add a backend later.
3. **Images:** Product and hero images use remote images from Unsplash. Internet access is required to load them. They are illustrative examples only, not proof of stock, exact models, manufacturer endorsement or supplier relationships. For best reliability and control, replace these URLs with approved photos of your actual products before launch.
4. **Supplier partners:** The site includes a supplier/partner section but does not invent partner company names or claim unconfirmed official relationships.
5. **CEO photo:** A placeholder is included. Replace it with the approved CEO photo when available.
6. **Claims:** Check all service descriptions, product categories, contact details and business claims before publishing.

## Quick local preview
Open `index.html` in a modern browser. For a closer hosting preview, run a simple local HTTP server from this folder (optional):
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

No build step, npm, or paid software is required.
