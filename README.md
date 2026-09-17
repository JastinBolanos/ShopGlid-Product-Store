<div align="center">
  <img alt="ShopGlid Banner" src="https://github.com/user-attachments/assets/47f86317-da3d-4fc5-836a-ab5b575382eb" width="50%" />

  <h3>Artisan Leather Goods & Digital Leather Atelier (v1.0.0-PROD)</h3>

  <p>
    <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status" />
    <img src="https://img.shields.io/badge/deployment-production-blue" alt="Deployment" />
    <img src="https://img.shields.io/badge/version-1.0.0--PROD-orange" alt="Version" />
    <img src="https://img.shields.io/badge/security-TLS_1.3-success" alt="Security" />
  </p>
</div>

<br>

> **Frontend E-Commerce Storefront & Artisan Goods Showcase.**  
> A client-side web application designed to present handcrafted leather goods through a clean, modern digital boutique. The interface combines accessible layouts and structured material specification sheets with interactive colorway selectors and a client-side shopping cart workflow.

<br>

<div align="center">
  <h3>🌍 <b><a href="https://shop-glid.vercel.app/">View Live Platform (Production) 🟢</a></b></h3>
  <br>
  <img alt="ShopGlid Preview" src="https://github.com/user-attachments/assets/d91d56cf-58a5-45e6-b337-4f1d693e4959" width="90%" />
</div>

## 🎥 Real-Time Experience Demo

**🎬 Collection Browsing and Shopping Experience**  
Frontend interface demonstration: browsing categories (handbags, backpacks, and wallets), search filtering and price adjustments, inspecting product material details, interactive colorway selection, and client-side shopping cart management with automatic shipping calculations.

https://github.com/user-attachments/assets/3d44234b-b3d8-45f5-a9dc-1f1b7955c1c7

---

## 🏗️ System Architecture & Technology Stack

This repository focuses on the client-side frontend architecture of the e-commerce boutique. The codebase separates UI presentation components, catalog schemas, and shopping cart state to maintain clarity and ease of maintenance.

- **Core & Runtime (Frontend Client):**
  - `react` (`^19.0.1`) & `react-dom` for declarative component rendering and responsive state updates.
  - `typescript` (`~5.8.2`) providing static typing across catalog items, product attributes, color variants, and cart actions.
  - `vite` (`^6.2.3`) for rapid development and optimized client bundle compilation.
  - `react-router-dom` (`^7.18.3`) for client-side single-page navigation without full page reloads.

- **UI & Styling:**
  - `tailwindcss` (`^4.1.14`) configured with neutral stone, charcoal, and warm leather tones with consistent layout spacing.
  - `lucide-react` (`^0.546.0`) for clean and standardized vector iconography.
  - `motion` (`^12.23.24`) for subtle page transitions, drawer animations, and button feedback.

- **Global State & Persistence:**
  - `CartContext` utilizing React Context and bidirectional synchronization with `localStorage` to keep cart data consistent across user visits.

- **Media Optimization & Performance:**
  - Optimized image assets structured for efficient loading and smooth rendering across viewports.

---

## 🚀 Operational Modules (Deployed)

1. **👜 Curated Catalog & Multi-Category Explorer (`HomePage` / `ProductGridCard`)**
   - Client-side category filtering across three collections: **Handbags**, **Backpacks**, and **Wallets**.
   - Keyword search by product name, finish, and style attributes.
   - Sorting options by price (ascending/descending) and name.
   - Visual color palette indicators and highlight badges (*Favorite*, *New*, *Popular*).

2. **🔍 Product Detail View & Craftsmanship Specifications (`ProductDetailPage`)**
   - High-resolution gallery displaying material textures and stitching details.
   - Interactive colorway switcher (Burgundy, Charcoal Black, Light Camel, etc.) with active state feedback.
   - Technical specifications breakdown: tanning style, dimensions, volume capacity, and closure details.
   - Recommendations module suggesting complementary pieces from related product lines.

3. **🛍️ Shopping Bag & Order Manager (`CartPage` / `CartContext`)**
   - Responsive quantity controls to increment, decrement, or remove items.
   - Progress bar indicator for free shipping thresholds (orders over €50).
   - Coupon code input supporting promotional discounts (such as `BIENVENIDA10`).
   - Order cost breakdown displaying subtotal, estimated taxes, and applied savings.
   - Client-side checkout step with delivery address validation and order confirmation summary.

4. **👤 Customer Profile & Account Preferences (`ProfilePage` / `ProfileSubSectionPage`)**
   - Mock order history view displaying past orders and delivery progress.
   - Saved address manager for delivery preferences.
   - Saved payment options and interface preferences.

5. **📱 Responsive Navigation & Drawer Menu (`Header` / `SidebarDrawer`)**
   - Top navigation bar featuring a dynamic shopping cart item counter.
   - Slide-over mobile drawer menu with straightforward links to categories and account preferences.

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

*ShopGlid Atelier © 2026. Technical Demonstration Project.*
