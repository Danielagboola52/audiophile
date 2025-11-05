# Audiophile E-Commerce Platform

A modern, pixel-perfect e-commerce platform for premium audio equipment built with Next.js, TypeScript, Tailwind CSS, and Convex.

![Audiophile](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Convex](https://img.shields.io/badge/Convex-Database-orange?style=for-the-badge)

## 🎯 Project Overview

Audiophile is a fully functional e-commerce platform featuring a complete checkout flow, order management, and email confirmations. Built as a pixel-perfect implementation of the Figma design specifications.

### Live Demo
- **Production:** [https://audioecc.netlify.app/]
- **Repository:** [https://github.com/Danielagboola52/audiophile.git]

## ✨ Features

### Core Features
- 🛒 **Shopping Cart System** - Add, remove, and update product quantities
- 💳 **Complete Checkout Flow** - Fully validated multi-step checkout process
- 📧 **Order Confirmation Emails** - Automated HTML email notifications via Resend
- 💾 **Order Storage** - Persistent order data stored in Convex database
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop

### Product Features
- Product catalog with categories (Headphones, Speakers, Earphones)
- Individual product detail pages
- Product recommendations
- Dynamic pricing and quantity management

### Technical Features
- ✅ Form validation with Zod schema
- ✅ Type-safe database operations with Convex
- ✅ Real-time cart updates
- ✅ Accessible UI components
- ✅ Error handling and edge case management
- ✅ SEO optimized

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form + Zod
- **State Management:** React Context API

### Backend
- **Database:** Convex (real-time backend)
- **Email Service:** Resend
- **API:** Next.js API Routes

### Development Tools
- ESLint
- PostCSS
- Git & GitHub

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- A Convex account (free tier available)
- A Resend account (free tier available)

### Setup Instructions

1. **Clone the repository**
```bash
git clone [your-repo-url]
cd audiophile-ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Convex**
```bash
npx convex dev
```
This will:
- Create a new Convex project (or link to existing)
- Generate your Convex deployment URL
- Start the Convex development server

4. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=your-convex-url
CONVEX_DEPLOYMENT=your-convex-deployment

# Resend (Email Service)
RESEND_API_KEY=your-resend-api-key

# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Getting your API keys:**
- **Convex URL:** Generated when you run `npx convex dev`
- **Resend API Key:** Sign up at [resend.com](https://resend.com) and create an API key

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **Deploy Convex to Production**
```bash
npx convex deploy
```

## 🎨 Design System

### Colors
- Primary Orange: `#D87D4A`
- Primary Orange Hover: `#FBAF85`
- Black: `#000000`
- Light Grey: `#F1F1F1`
- White: `#FFFFFF`
- Error Red: `#CD2C2C`

### Typography
- Font Family: Manrope (400, 500, 700)
- Headings: H1-H6 with predefined sizes and letter spacing
- Body: 15px, line-height 25px

## 🧪 Testing the Application

### Testing Checkout Flow

1. **Add items to cart:**
   - Navigate to any product page
   - Adjust quantity
   - Click "Add to Cart"

2. **View cart:**
   - Click cart icon in header
   - Verify items display correctly
   - Test quantity adjustments

3. **Complete checkout:**
   - Click "Checkout" in cart
   - Fill in all required fields:
     - Name (min 2 characters)
     - Email (valid format)
     - Phone (min 10 digits)
     - Address (min 5 characters)
     - ZIP code, City, Country
   - Select payment method
   - Submit order

4. **Verify order confirmation:**
   - Success modal should appear
   - Check email for confirmation
   - Order should be stored in Convex

### Edge Cases Tested

✅ Empty cart checkout prevention
✅ Invalid email format
✅ Missing required fields
✅ Invalid quantities (negative, zero)
✅ Form validation errors
✅ API error handling
✅ Duplicate submission prevention

## 📧 Email Template

The confirmation email includes:
- Order ID and customer details
- Complete order summary with itemized list
- Grand total with pricing breakdown
- Next steps information
- Call-to-action button
- Support contact information
- Responsive HTML design

## 🗃️ Database Schema

### Orders Collection
```typescript
{
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: string
  zipCode: string
  city: string
  country: string
  paymentMethod: "e-money" | "cash"
  eMoneyNumber?: string
  eMoneyPin?: string
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    image: string
  }>
  subtotal: number
  shipping: number
  vat: number
  grandTotal: number
  orderStatus: string
  createdAt: number
}
```

## 🔑 Key Implementation Details

### Form Validation
- Uses Zod schema for type-safe validation
- Real-time inline error messages
- Conditional validation based on payment method
- Accessibility-compliant error handling

### Cart Management
- Persistent storage using localStorage
- Context API for global state
- Real-time updates across components
- Quantity management with bounds checking

### Order Processing
1. Client-side form validation
2. Data submission to Convex
3. Order ID generation
4. Email notification trigger
5. Success confirmation display
6. Cart clearance

## 🐛 Known Issues & Future Improvements

### Current Limitations
- Product images use placeholders (actual images in assets folder)
- Email service requires Resend API key setup
- No user authentication system
- No order history tracking

### Future Enhancements
- [ ] Add user authentication
- [ ] Implement order history page
- [ ] Add product search functionality
- [ ] Create admin dashboard
- [ ] Add payment gateway integration
- [ ] Implement inventory management
- [ ] Add product reviews and ratings
- [ ] Create category filtering

## 📚 Documentation

### Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Design inspiration from Frontend Mentor
- Icons from the project assets
- Built with ❤️ using modern web technologies

## 📞 Support

For support, email: danielagboola52@gmail.com

---

**Built by [Daniel Agboola]** | 