/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { SidebarDrawer } from './components/SidebarDrawer';
import { HomePage } from './pages/HomePage';
import { WelcomePage } from './pages/WelcomePage';
import { ProfilePage } from './pages/ProfilePage';
import { ProfileSubSectionPage } from './pages/ProfileSubSectionPage';
import { CartPage } from './pages/CartPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      {/* Lateral Drawer Navigation */}
      <SidebarDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* Main Top Header with Menu Button, Brand & Search Bar */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1700px] mx-auto px-4 sm:px-8 xl:px-12 py-6 sm:py-10 flex flex-col">
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </main>

      {/* Subtle Minimalist Footer with Hierarchical Site Info */}
      <footer className="border-t border-stone-200/80 py-6 text-center text-xs text-stone-500">
        <p>
          <Link
            to="/welcome"
            className="hover:text-stone-900 font-medium transition-colors"
            title="Ir a Bienvenida"
          >
            ShopGlid
          </Link>{' '}
          · Diseño esencial sin artificios
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Welcome Screen with immersive interactive experience */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />

          {/* Main Store Layout containing Header, SidebarDrawer and Footer */}
          <Route element={<AppLayout />}>
            {/* /home routes hierarchy */}
            <Route path="/home" element={<HomePage />} />

            {/* Hierarchical sub-routes */}
            <Route path="/home/perfil" element={<ProfilePage />} />
            <Route
              path="/home/perfil/sub-seccion"
              element={<ProfileSubSectionPage />}
            />

            {/* Additional contextual store routes */}
            <Route path="/home/carrito" element={<CartPage />} />
            <Route
              path="/home/producto/:id"
              element={<ProductDetailPage />}
            />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
