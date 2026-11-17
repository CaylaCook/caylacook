# Cayla Cook

Personal realtor website for [caylacook.com](https://caylacook.com) — Middle Tennessee (Nashville, Franklin, Brentwood, and nearby communities). Brand-first landing with featured homes, approach, and contact.

**Contact:** (615) 618-9499 · cayla@caylacook.com

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Local sample listing imagery (replace with live MLS photos)

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (defaults to port **3456**).

## Customize

- **Logo**: `src/components/logo.tsx` and `public/brand/logo.svg` (vector recreation of the CC monogram wordmark)
- **Listings**: `src/data/listings.ts` and images in `public/images/`
- **Contact**: form opens mail to `cayla@caylacook.com`

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |
