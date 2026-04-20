# Bieber 2026 — Trip Companion PWA

A mobile-first Progressive Web App for a weekend trip with friends.
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and `@ducanh2912/next-pwa`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your phone or browser.

## Editing trip data

All trip content lives in **`data/trip.ts`**. Edit the exported `trip` object:

- `name`, `destination`, `departureDate`, `returnDate` — top-level trip metadata
- `schedule` — array of `Day` objects, each with a list of `Activity` items
- `accommodation` — check-in/out, Wi-Fi, host contact, booking link
- `crew` — list of `Person` objects (name, arrival, dietary, phone)
- `info` — emergency contacts, tips, packing list, group chat / Splitwise links

TypeScript types are in **`types/trip.ts`** — the compiler will catch typos.

## PWA & icons

The app installs on iOS and Android home screens.

Placeholder icons were generated at `public/icons/icon-192.png` and `public/icons/icon-512.png`.
Replace them with real artwork before sharing the link. To regenerate the placeholders:

```bash
node scripts/generate-icons.mjs
```

> **Note:** `next-pwa` service worker is disabled in development mode (`NODE_ENV=development`).
> Install the built app to test offline behaviour:
> ```bash
> npm run build && npm start
> ```

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).
No environment variables are needed — everything is in `data/trip.ts`.

## Project structure

```
app/
  layout.tsx        Root layout with PWA meta tags + bottom nav
  page.tsx          Home / countdown
  schedule/         Day-by-day timeline
  stay/             Accommodation details
  crew/             Who's coming
  info/             Emergency numbers, tips, packing list
  offline/          Shown when the network is unavailable
components/
  BottomNav.tsx     Sticky 5-tab navigation bar
data/
  trip.ts           Single source of truth for all trip content
types/
  trip.ts           TypeScript interfaces
public/
  manifest.json     PWA manifest
  icons/            App icons (replace placeholders before launch)
scripts/
  generate-icons.mjs  Generates placeholder PNG icons
```

## Tech stack

| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v3 | Styling |
| `@ducanh2912/next-pwa` | Service worker / offline / installability |
| lucide-react | Icons |
| Vercel | Deployment |
