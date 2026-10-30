# Abdulmart

Abdulmart is a responsive minimart shopping experience built with Next.js App Router, TypeScript, Tailwind CSS, and Supabase authentication.

## Requirements

- Node.js 20.9 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Supabase Google sign-in and profiles

1. Create a Supabase project, copy `.env.example` to `.env.local`, and fill in the project URL and anon key. Never put a Supabase service-role key in this app.
2. Create a Google OAuth client in Google Cloud. Add `https://<your-project-ref>.supabase.co/auth/v1/callback` as its authorized redirect URI, then enable Google in Supabase Authentication and enter the Google client ID and secret.
3. In Supabase Authentication URL settings, set the local site URL to `http://localhost:3000` and add `http://localhost:3000/auth/callback` to the allowed redirect URLs. Add your deployed site URL and its `/auth/callback` URL before production deployment.
4. Run `supabase/migrations/20261025000000_create_profiles.sql` in the Supabase SQL Editor.
5. Restart the dev server. Users can create an account or sign in with Google at `/login`, and manage their saved name and phone number at `/account`.

The first Google sign-in creates an auth account and a corresponding profile row. Profile access is restricted to the signed-in user by row-level security. Signing in is required before adding products to the cart or wishlist; those lists are currently stored in the browser separately for each signed-in account. Checkout remains a demo feature and is not persisted to Supabase.

## Available commands

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run typecheck` — run the TypeScript check

## Demo scope

The app contains a 20-item mock product catalogue, searchable and filterable product listings, category and product pages, a cart, wishlist, and a checkout preview. Cart and wishlist are stored in browser local storage.

All products, ratings, review counts, availability, delivery fees, and prices are demonstration data only and are not verified current market information. The checkout is a non-functional preview with no order placement or payment processing, and newsletter signup is not connected to a backend. Contact and social links are not invented.

Product photos use Unsplash URLs and gracefully fall back to an image placeholder when unavailable.
