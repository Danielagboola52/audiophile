# Audiophile E-commerce (HNG Task 3A)

Fully functional e-commerce store with cart, checkout, and product pages.

## Features

- **Home Page**: Hero + ZX9 Speaker + Categories
- **Category Pages**: Headphones, Speakers, Earphones
  - "ADD TO CART" with quantity
  - "SEE PRODUCT" → detail page
- **Product Detail Page**: `/[category]/[slug]`
  - Add to cart
  - Go back
- **Cart Modal**: Click cart icon
  - Update quantity
  - Remove all
  - Checkout link
- **Checkout Page**: `/checkout`
  - Form validation (Zod + React Hook Form)
  - Payment method (e-Money / Cash)
  - Order summary
  - Thank you modal
- **Responsive**: Mobile-first
- **Deployed on Vercel**

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Context API (Cart)

## Folder Structure
