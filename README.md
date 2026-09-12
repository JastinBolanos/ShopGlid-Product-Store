# 🌐 ShopGlid - Artisan Leather Goods & Digital Leather Atelier (v1.0.0-PROD)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-production-blue)
![Version](https://img.shields.io/badge/version-1.0.0--PROD-orange)
![Security](https://img.shields.io/badge/security-TLS_1.3-success)

> **Digital Boutique and Curated Catalog of Handcrafted Leather Goods.**  
> An e-commerce platform crafted with care for curating, discovering, and acquiring exclusive leather pieces from *ShopGlid*: elegant handbags, ergonomic urban backpacks, and ultra-slim genuine leather wallets. The system blends a sober, accessible, and minimalist visual experience with detailed material specification sheets, an interactive leather tone selector, and a seamless, transparent checkout flow.

🌍 **View Live Platform (Production) 🟢** https://shop-glid.vercel.app/

<img width="1920" height="1330" alt="screencapture-shop-glid-vercel-app-2026-09-10-15_02_57" src="https://github.com/user-attachments/assets/d91d56cf-58a5-45e6-b337-4f1d693e4959" />

---

## 🎥 Real-Time Experience Demo

**🎬 Collection Browsing and Shopping Experience**  
Store interface demonstration: smooth navigation through leather goods categories (handbags, backpacks, and wallets), instant search filtering and price range adjustments, detailed inspection of artisanal craftsmanship specifications, interactive color selection, and reactive shopping cart management with automatic free shipping calculations.

https://github.com/user-attachments/assets/3d44234b-b3d8-45f5-a9dc-1f1b7955c1c7

---

## 🏗️ System Architecture & Technology Stack

Built with an honest, clean, and professional approach to modern software engineering, this platform was developed from the ground up prioritizing rapid visual response, effortless user navigation, and high interaction reliability. We maintained a strict separation between the visual presentation layer, the product catalog, and global shopping session state.

- **Core & Runtime (Optimized for the Modern Web):**
  - `react` (`^19.0.1`) & `react-dom` for a reactive, smooth user interface with optimized rendering.
  - `typescript` (`~5.8.2`) with strict typing for product models, leather attributes, color variants, and cart transactions.
  - `vite` (`^6.2.3`) as an ultra-fast bundler with near-instant boot and optimized production builds.
  - `react-router-dom` (`^7.18.3`) for client-side declarative routing without flickers or page reloads.

- **UI & Styling:**
  - `tailwindcss` (`^4.1.14`) utilizing a contemporary design based on neutral stone and charcoal palettes, comfortable contrast, and harmonic spacing.
  - `lucide-react` (`^0.546.0`) for clean, functional, consistent iconography.
  - `motion` (`^12.23.24`) for subtle, refined animations across page transitions, sidebar drawer toggles, and cart button feedback.

- **Global State & Persistence:**
  - `CartContext` utilizing native React Context API and bidirectional automatic synchronization with `localStorage`, ensuring the customer's cart reliably persists across sessions and accidental reloads.

- **Media Optimization & Performance:**
  - Local product photography optimization with tailored compression to minimize bandwidth footprint and guarantee instant load times.

---

## 🚀 Operational Modules (Deployed)

1. **👜 Curated Catalog & Multi-Category Explorer (`HomePage` / `ProductGridCard`)**
   - Instant dynamic filtering across three primary categories: **Handbags**, **Backpacks**, and **Wallets**.
   - Real-time search by keywords, leather finishes, style, and product name.
   - Flexible sorting by price (ascending/descending) and alphabetical relevance.
   - Visual color palette indicators and featured badges (*Favorite*, *New*, *Popular*).

2. **🔍 Product Detail View & Craftsmanship Specifications (`ProductDetailPage`)**
   - High-definition photography focused on textures and material craftsmanship details.
   - Interactive leather colorway selector (Burgundy, Charcoal Black, Light Camel, etc.) with active state tracking.
   - Detailed technical specification sheet: tanning process, millimeter dimensions, volume capacity in liters, and security features (hidden zippers and RFID protection).
   - Automated recommendations module highlighting complementary pieces from the same collection.

3. **🛍️ Shopping Bag & Order Manager (`CartPage` / `CartContext`)**
   - Reactive quantity controls: add, subtract, and remove items with a single click.
   - Visual free-shipping progress tracker (orders over €50).
   - Interactive coupon engine (supporting promo codes such as `BIENVENIDA10`).
   - Transparent financial summary detailing subtotal, taxes, and applied discount.
   - Checkout flow with shipping address validation and order confirmation screen.

4. **👤 Customer Profile & Account Preferences (`ProfilePage` / `ProfileSubSectionPage`)**
   - Order history panel displaying previous purchases with dates and fulfillment status.
   - Saved address book management for recurring deliveries.
   - Preferred payment methods and account privacy settings.

5. **📱 Responsive Navigation & Drawer Menu (`Header` / `SidebarDrawer`)**
   - Minimalist top navigation bar with real-time cart badge counter.
   - Slide-out drawer menu optimized for mobile devices and touchscreens with quick links to categories and profile.

---

## 💻 Deployment & Execution Guide (Local Environment)

For any developer, designer, or contributor looking to audit, review, or run the project locally:

### 1. Clone the repository and setup the environment
```bash
git clone [insert link here]
cd shopglid
```

### 2. Dependency Installation (Node.js v18+)
```bash
npm install
```

### 3. Environment Configuration
Copy the template configuration file to configure any required environment variables:
```bash
cp .env.example .env
```

### 4. Start the local development server
```bash
npm run dev
```
The terminal will display the active local URL (default: `http://localhost:3000`).

### 5. Production Build & Verification (CI/CD Pipeline)
Check TypeScript typing and generate the production bundle:
```bash
npm run lint
npm run build
```

---

*Project crafted with artisanal dedication, web development best practices, and respect for the user.*  
**ShopGlid Atelier © 2026. All rights reserved.**
