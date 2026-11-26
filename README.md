# Gyan Niketan School, Patna — website

Static Next.js site (`output: "export"`): pure HTML/CSS/JS, no server or database.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is written to `out/`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repository.
3. Leave the detected settings as they are (framework **Next.js**; install, build and headers come from `vercel.json`) and click **Deploy**.
4. Optional: under **Settings → Environment Variables**, set `NEXT_PUBLIC_SITE_URL` to your live domain (for example `https://gyanniketan.in`) so the sitemap, robots.txt and social previews use it. It defaults to `https://gyanniketan.in`.

Every push to the production branch redeploys automatically; other branches get preview URLs.

## Where things live

- `lib/site-data.ts` — contact details, social links and events (homepage and News & Events)
- `app/page.tsx` and `components/home/` — homepage sections
- `components/Navbar.tsx`, `components/Footer.tsx` — header, menu and footer
- `app/globals.css` — theme colours, fonts and shared styles
- `public/` — images
