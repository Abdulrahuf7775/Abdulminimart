# Project Prompt: Abdulmart — Modern E-commerce Frontend

## 1. Project Overview

Build a modern, professional, responsive e-commerce website called **Abdulmart**, an online minimart inspired by the shopping experience of Amazon.

Abdulmart sells everyday household products, groceries, frozen foods, beverages, personal care products, cosmetics, cleaning supplies, and other essential items.

The objective is to create a complete, visually appealing frontend using **Next.js, TypeScript, and Tailwind CSS**, with a clean architecture that allows backend integration in a later development phase.

For this phase, focus exclusively on the frontend. Use realistic mock data and local state for all shopping interactions. Do not implement a real backend, database, authentication system, or payment processing yet.

## 2. Technology Stack

Use the following technologies:

- Next.js with the App Router.
- TypeScript.
- Tailwind CSS.
- React hooks for interactive UI state.
- Lucide React for icons.
- React Context API or an equivalent lightweight state management approach for the shopping cart.
- Local mock data stored in TypeScript files.
- Local storage for persisting the cart and selected shopping preferences.
- A suitable image source for realistic product images, with graceful fallbacks.
- React Hot Toast or Sonner for shopping notifications.

Use the latest stable versions compatible with the project environment. Follow modern Next.js conventions and use Server Components by default, adding Client Components only when interactivity is required.

## 3. Brand Identity and Design

Brand name: **Abdulmart**

Brand personality:
- Trustworthy.
- Affordable.
- Convenient.
- Modern.
- Customer-friendly.

Design a professional retail interface with a clean layout inspired by major e-commerce platforms, without copying Amazon's exact branding or interface.

### Visual direction

- Primary color: Deep green or emerald green.
- Secondary color: Warm yellow or amber for promotions and highlights.
- Background: White and very light gray.
- Text: Dark charcoal.
- Cards: White with subtle borders and soft shadows.
- Buttons: Rounded corners, clear hover states, and visible call-to-action text.
- Typography: Clean, modern, and readable.
- Use consistent spacing, alignment, and visual hierarchy.

The website should look like a real online minimart, not a generic dashboard or a basic student project.

## 4. Website Layout

### A. Announcement bar

At the top of the website, display a slim promotional announcement bar.

Example:

"Welcome to Abdulmart — Your everyday essentials, delivered with ease!"

Include an optional promotional message such as "Special offers on selected products."

### B. Main navigation header

Create a responsive header containing:

1. Abdulmart logo and wordmark.
2. A delivery location placeholder such as "Deliver to Nigeria."
3. A prominent search bar.
4. A search category selector.
5. A search button.
6. Account/sign-in placeholder.
7. Wishlist icon.
8. Shopping cart icon with a live item count.

On desktop, arrange the header horizontally. On mobile, use a compact layout with an accessible menu and a search bar that fits the screen.

Do not implement real sign-in functionality yet. The account section should be a frontend placeholder ready for future integration.

### C. Category navigation

Create a secondary navigation menu with these categories:

- All Products
- Groceries
- Frozen Foods
- Beverages
- Cosmetics
- Personal Care
- Household Cleaning
- Snacks
- Baby Products
- Kitchen Essentials

On mobile, make the category menu horizontally scrollable or accessible through a drawer.

### D. Hero section

Create an attractive homepage hero section with:

- A large headline: "Everything You Need, All in One Place."
- Supporting text: "Shop groceries, frozen foods, beauty essentials, and everyday household products at Abdulmart."
- A primary CTA: "Shop Now."
- A secondary CTA: "Explore Categories."
- A high-quality grocery/minimart shopping image.
- A promotional badge such as "Everyday Essentials, Made Easy."

Use a visually balanced split layout on desktop and a stacked layout on mobile.

The CTA buttons should scroll to or navigate to the appropriate product sections.

### E. Trust and benefits section

Display four compact benefits with icons:

- Quality Products
- Convenient Shopping
- Great Everyday Value
- Secure Checkout — UI placeholder only until a payment provider is integrated.

Do not claim verified delivery coverage, certifications, or payment security that has not yet been implemented.

## 5. Product Catalogue: 20 Sample Products

Create a centralized mock product dataset containing exactly these 20 initial sample products. Each product should have a unique ID, slug, name, category, description, price in Nigerian naira (NGN), original price where applicable, image, rating, review count, stock status, and featured status.

Use realistic demonstration prices that can easily be changed later. These are sample prices, not verified current market prices.

| ID | Product Name | Category | Sample Price (NGN) |
|---|---|---|---:|
| P001 | Frozen Chicken | Frozen Foods | ₦8,500 |
| P002 | Frozen Turkey Wings | Frozen Foods | ₦7,200 |
| P003 | Frozen Fish (Mackerel) | Frozen Foods | ₦4,500 |
| P004 | Premium Rice, 5kg | Groceries | ₦9,500 |
| P005 | Vegetable Cooking Oil, 1L | Groceries | ₦3,200 |
| P006 | Spaghetti, 500g | Groceries | ₦1,200 |
| P007 | Indomie Instant Noodles, Multipack | Groceries | ₦2,800 |
| P008 | Peak-Style Powdered Milk, 400g | Groceries | ₦4,800 |
| P009 | Coca-Cola, 50cl | Beverages | ₦700 |
| P010 | Bottled Water, 75cl | Beverages | ₦350 |
| P011 | Orange Juice, 1L | Beverages | ₦2,000 |
| P012 | Chocolate Sandwich Biscuits | Snacks | ₦800 |
| P013 | Potato Chips | Snacks | ₦1,000 |
| P014 | Body Lotion, 400ml | Cosmetics | ₦3,500 |
| P015 | Facial Cleanser | Cosmetics | ₦4,200 |
| P016 | Moisturizing Lip Balm | Cosmetics | ₦1,500 |
| P017 | Bathing Soap, Multipack | Personal Care | ₦2,000 |
| P018 | Shampoo, 400ml | Personal Care | ₦3,000 |
| P019 | Multipurpose Cleaning Liquid, 1L | Household Cleaning | ₦2,500 |
| P020 | Baby Diapers, Small Pack | Baby Products | ₦5,500 |

Important product data rules:

- Use generic product descriptions when a product is not tied to a specific brand.
- Do not use trademarked product names incorrectly. If an item is intended to be branded, use the correct brand name only when appropriate.
- Product prices must be stored as numeric values, not formatted strings.
- Format all prices consistently using the Nigerian naira symbol and appropriate thousands separators.
- Product ratings and review counts should be clearly treated as demonstration data.
- Provide meaningful image alt text.
- Include image fallbacks if external images fail to load.
- Do not allow broken images to disrupt the layout.

## 6. Homepage Product Sections

Build the homepage with the following sections:

### Featured Products

Display 4–8 featured products in a responsive grid.

Each product card should contain:

- Product image.
- Category label.
- Product name.
- Star rating and demonstration review count.
- Current price.
- Optional original price and discount badge.
- Stock availability indicator.
- Add to Cart button.
- Wishlist toggle.

### Shop by Category

Create attractive category tiles for:

- Groceries
- Frozen Foods
- Beverages
- Cosmetics
- Personal Care
- Snacks
- Household Cleaning
- Baby Products

Each tile should include an image or illustration, category name, and a link to filtered products.

### Best Sellers

Display a horizontally scrollable row or responsive grid of popular products.

### Special Offers

Create a promotional section for discounted products using mock promotional data.

Display the original price, sale price, and percentage discount only when the values are mathematically consistent.

### Recently Added

Display a small selection of recently added products.

### Newsletter section

Create a newsletter signup UI with an email input and subscribe button.

Since no backend exists yet, show a frontend-only success message after validating the email. Do not actually submit or store subscriber information remotely.

## 7. Product Cards and Shopping Interactions

Implement reusable product cards.

Required interactions:

1. Add products to the cart.
2. Increase or decrease item quantities in the cart.
3. Remove products from the cart.
4. Display the cart's total item count.
5. Calculate the cart subtotal.
6. Display an empty-cart state.
7. Toggle product wishlist status.
8. Show toast notifications when products are added or removed.
9. Disable the Add to Cart button for out-of-stock items.
10. Persist cart and wishlist state locally where appropriate.

Prevent duplicate cart entries for the same product. Instead, update the existing item's quantity.

Calculate prices and totals from numeric mock data. Format the results in NGN.

## 8. Search, Filtering, and Sorting

Build functional client-side search and catalogue filtering.

### Search

- Search by product name.
- Search by description.
- Search by category.
- Display an appropriate empty-results message.
- Include a clear-search action.
- Allow users to submit the search using Enter or the search button.

### Category filtering

Users should be able to filter products by category using category links, buttons, or a sidebar.

### Sorting

Provide these sorting options:

- Featured.
- Price: Low to High.
- Price: High to Low.
- Highest Rated.
- Alphabetical: A–Z.

### Additional filters

Where appropriate, add:

- Price range.
- In-stock products only.
- Featured products only.

All filtering and sorting should work with the mock dataset without requiring a backend.

## 9. Required Pages

Create the following pages using the Next.js App Router.

### Home page — `/`

Include the hero section, category tiles, featured products, promotions, best sellers, and newsletter section.

### All products — `/products`

Display the full catalogue with:

- Search.
- Category filters.
- Sorting controls.
- Product grid.
- Responsive filter controls.
- Result count.
- Empty-results state.

### Category pages — `/categories/[slug]`

Display products belonging to the selected category. Show the category title, description, product count, filters, and product grid.

### Product details — `/products/[slug]`

Display:

- Large product image.
- Product name.
- Category and rating.
- Price and optional discount.
- Product description.
- Stock status.
- Quantity selector.
- Add to Cart button.
- Product information.
- Related products.

Use the mock dataset to resolve product slugs. Display a proper not-found page for unknown products.

### Shopping cart — `/cart`

Display:

- Cart items.
- Product images and prices.
- Quantity controls.
- Remove-item buttons.
- Subtotal.
- Placeholder delivery fee.
- Estimated total.
- Continue Shopping link.
- Proceed to Checkout button.

Checkout should lead to a clearly marked placeholder page or disabled flow. Do not implement real orders or payments in this phase.

### Wishlist — `/wishlist`

Display saved products and allow users to remove items or add them to the cart.

### Search results — `/search`

Read the search query from URL search parameters and show matching products.

### Checkout placeholder — `/checkout`

Create a polished checkout UI preview with sample delivery and order-summary sections. Clearly mark it as a frontend prototype. Do not collect sensitive payment details or submit real orders.

## 10. Footer

Create a structured footer containing:

- Abdulmart logo.
- Short brand description.
- Shop links.
- Product categories.
- Customer support placeholders.
- Contact information placeholders.
- Social media link placeholders.
- Privacy Policy placeholder.
- Terms and Conditions placeholder.
- Copyright notice.

Do not invent a real business address, phone number, email address, or social account. Use clearly marked placeholders until the owner provides them.

## 11. Responsive Design

The website must work well on:

- Mobile phones.
- Tablets.
- Laptops.
- Large desktop screens.

Requirements:

- Use Tailwind responsive utilities.
- Avoid horizontal overflow.
- Keep product cards readable on narrow screens.
- Make interactive controls touch-friendly.
- Use responsive image sizing and aspect ratios.
- Keep navigation usable on mobile.
- Ensure buttons, forms, and dialogs are keyboard accessible.

## 12. Accessibility and Quality

Follow these practices:

- Semantic HTML.
- Accessible labels for form inputs.
- Visible focus indicators.
- Sufficient color contrast.
- Keyboard navigation.
- Descriptive image alt text.
- Accessible buttons and links.
- Appropriate loading, empty, and error states.
- Avoid unnecessary animations.
- Respect reduced-motion preferences.

## 13. Suggested Project Structure

Organize the application using a maintainable structure similar to:

```text
abdulmart/
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── categories/
│   │   └── banners/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── categories/
│   │   │   └── [slug]/page.tsx
│   │   ├── cart/page.tsx
│   │   ├── wishlist/page.tsx
│   │   ├── search/page.tsx
│   │   └── checkout/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── CategoryNav.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── CategorySection.tsx
│   │   │   └── ProductSection.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductFilters.tsx
│   │   │   └── ProductSort.tsx
│   │   └── ui/
│   ├── context/
│   │   ├── CartContext.tsx
│   │   └── WishlistContext.tsx
│   ├── data/
│   │   ├── products.ts
│   │   └── categories.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── currency.ts
│   └── types/
│       └── product.ts
├── package.json
└── README.md
```

Adjust the structure if the existing project already has a working architecture. Do not overwrite working files unnecessarily.

## 14. Future Backend Integration

Prepare the frontend for a future backend without implementing it now.

Keep product data access separate from UI components. Create a simple product-service abstraction if useful, so mock data can later be replaced with API calls.

Use clear TypeScript interfaces for:

- Product.
- Category.
- Cart item.
- Wishlist item.
- Order summary.

Do not introduce unnecessary infrastructure, database packages, payment SDKs, authentication libraries, or backend services at this stage.

The future backend may include:

- Product and inventory management.
- User registration and authentication.
- Admin dashboard.
- Order management.
- Payment gateway integration.
- Delivery management.
- Customer accounts.
- Transaction history.

These features are outside the current implementation scope.

## 15. Implementation Instructions

Follow this development sequence:

1. Inspect the existing project and identify its current Next.js and Tailwind setup.
2. If no project exists, initialize a Next.js project with TypeScript, App Router, and Tailwind CSS.
3. Establish the design system and global styles.
4. Define product and category types.
5. Create the 20-product mock dataset.
6. Build the shared header, category navigation, footer, and product cards.
7. Build the homepage.
8. Implement search, filtering, sorting, and category navigation.
9. Implement cart and wishlist state with local persistence.
10. Build the product detail, cart, wishlist, search, and checkout-preview pages.
11. Verify responsiveness and accessibility.
12. Run linting, TypeScript checks, and a production build.
13. Fix any errors and test the main user flows.

Do not stop after creating the homepage or merely provide code snippets. Implement the actual files in the project workspace.

If an essential asset or business detail is missing, use a reasonable placeholder and continue.

## 16. Definition of Done

The frontend is complete when:

- The application starts successfully.
- All specified pages render correctly.
- All 20 sample products appear in the catalogue.
- Search, category filtering, and sorting work.
- Product detail pages resolve the correct product.
- Cart quantity, subtotal, and total calculations work.
- Cart and wishlist persist locally across page navigation and refreshes.
- Mobile and desktop layouts work correctly.
- No real backend or payment service is required.
- No broken images, missing routes, or TypeScript errors remain.
- The README explains installation, startup, and the frontend-only scope.

**Final instruction:** Prioritize a polished shopping experience, clean code, reusable components, and maintainability. Build Abdulmart as a frontend-ready e-commerce application that can be connected to a real backend in the next development phase.
