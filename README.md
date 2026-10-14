# Muhammad Zain — Full Stack Developer Portfolio

An editable, responsive one-page portfolio built with Next.js App Router, React, TypeScript, and custom CSS. No database required.

## Run locally

Install Node.js 20+, then:

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production

```bash
npm run build
npm run start
```

To deploy as a Node.js app to Hostinger, use its Next.js/Node.js deployment option. This is **not** a PHP/Laravel app: do not copy `.next` into Laravel public and expect server rendering without Node.js.

## Important content checks before publishing

- The Projects section describes *representative work*, not public case studies. Replace text and add links/screenshots only for projects you have permission to share.
- **Fiverr testimonials intentionally do not use invented text.** The supplied screenshot is only 340 pixels wide. Exact customer names and review text can't reliably be extracted. Send a Fiverr profile URL, copy/paste the selected reviews, or larger screenshots; then add one genuine review per distinct client in the `testimonials` array near the top of `app/page.tsx`.
- Review entries use the format `{client:'...',country:'...',review:'...',rating:5,source:'Fiverr'}`. Add each client only once.
- Verify job descriptions and technologies reflect your personal responsibilities before publishing.
- The contact email is `iamzainzai@gmail.com`; edit it in `app/page.tsx`.
- Add your actual GitHub, LinkedIn, and live project URLs when available.

## Main files

- `app/page.tsx` — page content and components
- `app/globals.css` — styling and responsive rules
- `app/layout.tsx` — page title and SEO metadata
- `public/Muhammad_Zain_CV.pdf` — download-ready resume supplied in this project

The design intentionally avoids invented client testimonials, fake client counts, and fabricated commercial impact metrics.


## Fiverr reviews

The Reviews section contains seven unique Fiverr clients selected from user-provided screenshots, with one genuine comment per client, their country and 5-star rating. The displayed overall profile score of 5.0 / 21 reviews is from those screenshots (as of October 2026). All review source links point to https://www.fiverr.com/thetechnology6. To change testimonials, edit the `testimonials` array in `app/page.tsx`. Avoid duplicating clients.
