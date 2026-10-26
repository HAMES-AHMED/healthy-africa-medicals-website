# Free website hosting guide
## Healthy Africa Medical and Engineering Solutions Limited

You can host this website for free on **Cloudflare Pages** or **GitHub Pages**. You only need to choose one to start. Both options publish the files in this folder as a static website.

## Before publishing
- Unzip `healthy-africa-medicals-website.zip` on your computer.
- Check that `index.html`, `styles.css`, `script.js`, `_headers`, `404.html`, `robots.txt`, `sitemap.xml`, and the `assets` folder are all together in the main website folder.
- Open `index.html` in a browser and test the navigation and contact form.
- Confirm the contact numbers and email are correct.
- Remember: the contact form opens a pre-filled email in the visitor's email application. It is not a server-backed form.
- Remote sample images need internet access. Replace them with approved product/company photographs when available.

---

## Option A — Cloudflare Pages (free static hosting)

1. Create or sign in to a Cloudflare account at `https://dash.cloudflare.com/`.
2. Put the website folder in a GitHub repository first (Option B steps 1–5), or use the current Cloudflare Pages upload workflow if it is offered in your dashboard. Cloudflare's dashboard options can change over time.
3. In Cloudflare, open **Workers & Pages** and choose to create a Pages project.
4. If connecting GitHub, select the repository containing the website files and authorize Cloudflare to read it.
5. For this plain HTML/CSS/JS website, select **no framework** if asked. Leave the build command empty. Set the build output directory to `/` or the repository root (`.`), depending on the interface's instructions.
6. Deploy the project. Cloudflare will provide a free `*.pages.dev` address.
7. Open that address on a phone and computer. Test every menu link, product enquiry shortcut, telephone link, email link and WhatsApp link.
8. For future changes, edit the files and push the changes to GitHub; Cloudflare Pages can automatically redeploy from the connected repository.

Official docs: `https://developers.cloudflare.com/pages/`

### Connect your domain later
When ready, add `healthyafricamedicals.com` in the Pages project's **Custom domains** section and follow Cloudflare's displayed DNS instructions. You must own/control the domain and complete the DNS verification. If your domain is registered elsewhere, follow Cloudflare's instructions for the exact DNS records or nameserver changes it requests. Do not guess DNS records.

---

## Option B — GitHub Pages (free static hosting)

1. Sign in or create an account at `https://github.com/`.
2. Create a new repository, for example `healthy-africa-medicals-website`. A public repository is the simplest option for free GitHub Pages.
3. Open the new repository and choose **Add file → Upload files**.
4. Upload the *contents* of this unzipped website folder (not just the ZIP file). Ensure `index.html` is at the repository root, not buried inside another folder.
5. Commit the uploaded files.
6. Open the repository's **Settings → Pages**.
7. Under build/deployment, choose **Deploy from a branch**, select the default branch (often `main`) and the root folder (`/ (root)`), then save.
8. Wait for the GitHub Pages deployment to finish. The published URL will usually look like `https://YOUR-USERNAME.github.io/healthy-africa-medicals-website/` for a project repository.
9. Visit the published address and test the site on desktop and mobile.

Official docs: `https://docs.github.com/pages`

### Connect your domain later
1. Buy/register `healthyafricamedicals.com` with a domain registrar if you have not already.
2. In the repository, open **Settings → Pages → Custom domain** and enter `healthyafricamedicals.com`.
3. Follow GitHub's current instructions for the required DNS records at your domain registrar. DNS instructions depend on whether you use an apex domain (`healthyafricamedicals.com`) or `www` subdomain.
4. Enable HTTPS in Pages settings when available and wait for DNS/HTTPS provisioning to finish.
5. Verify both the root domain and `www` version work, and decide which one should be canonical.

Official docs: `https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site`

---

## Updating the website later
- **Change text:** edit `index.html`.
- **Change colours, spacing or layout:** edit `styles.css`.
- **Change interactive behaviour:** edit `script.js`.
- **Replace the logo:** replace `assets/hames-logo.png` with the approved logo file, keeping the same filename.
- **Add the CEO photo:** add the approved photo to `assets/` and update the CEO section in `index.html`.
- **Add official suppliers:** edit the Suppliers & Partners section only after each relationship is confirmed.
- **Add real product images:** upload appropriately licensed images to `assets/` and change the relevant image `src` in `index.html` to a relative path such as `assets/dental-chair.jpg`.
- **Make the form submit directly on the website:** connect a form backend/service or implement a secure serverless function. Never put private API keys in browser-side JavaScript.

## Launch checklist
- [ ] Contact numbers and email verified
- [ ] CEO name/title and company name verified
- [ ] Approved product and company images added
- [ ] Supplier/partner names added only with permission and verified status
- [ ] All links tested on mobile and desktop
- [ ] Contact form tested on a device with an email app configured
- [ ] Domain registered and DNS configured when ready
- [ ] HTTPS working
- [ ] Privacy policy added if you later collect/store visitor data, use analytics, or add a form service
