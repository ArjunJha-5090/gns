# Soladity Ventures — Website

Website for **Soladity Ventures**: a startup with its own products (starting with **Campus Comfort**) and digital services such as web development, app development, UI/UX, custom software, AI, e-commerce, cloud and marketing.

Built with Next.js 16, Tailwind CSS v4 and Framer Motion. It is designed mobile-first and exports as a **fully static site** with no server needed.

## Edit the content
Everything (text, services, product features, FAQ, email, phone, WhatsApp, social links) lives in **`lib/content.ts`**.
Search that file for `TODO` to find the placeholders you need to replace.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy
```bash
npm run build      # outputs static site to ./out
```
Upload the `out/` folder to any host (Netlify, Vercel, GitHub Pages, Hostinger/cPanel).
On Vercel, set the project's **Root Directory** to `soladity-ventures`.

## Pages
- `/` Home: hero, products & services, Campus Comfort spotlight, services, stats, process, why us, FAQ, CTA
- `/products/campus-comfort/`
- `/services/`
- `/about/`
- `/contact/`: the form opens a pre-filled Email or WhatsApp message, so no backend is needed
