# Abdulmart

Abdulmart is a responsive, frontend-only minimart shopping experience built with Next.js App Router, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20.9 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Available commands

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run typecheck` — run the TypeScript check

## Frontend demo scope

The app contains a 20-item mock product catalogue, searchable and filterable product listings, category and product pages, a cart, wishlist, and a checkout preview. Cart and wishlist are stored in browser local storage.

All products, ratings, review counts, availability, delivery fees, and prices are demonstration data only and are not verified current market information. The checkout is a non-functional preview: the app has no backend, account system, order placement, payment processing, or remote newsletter signup. Contact and social links are not invented.

Product photos use Unsplash URLs and gracefully fall back to an image placeholder when unavailable.
