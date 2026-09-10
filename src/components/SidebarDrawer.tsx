import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  X,
  Home,
  User,
  Sliders,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  ChevronRight,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useCart } from '../context/CartContext';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { cartCount } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    {
      to: '/home',
      label: 'Catálogo de Productos',
      icon: Home,
      exact: true,
    },
    {
      to: '/home/perfil',
      label: 'Mi Perfil',
      icon: User,
      exact: false,
    },
    {
      to: '/home/carrito',
      label: 'Carrito de Compra',
      icon: ShoppingBag,
      count: cartCount,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="drawer-container" className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <motion.div
            id="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Drawer content */}
          <motion.aside
            id="sidebar-drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative z-10 w-full max-w-xs sm:max-w-sm bg-stone-50 h-full shadow-2xl flex flex-col justify-between border-r border-stone-200"
            role="dialog"
            aria-modal="true"
            aria-label="Bandeja lateral de ShopGlid"
          >
            {/* Top section: Brand Logo and Close Button */}
            <div className="p-6 border-b border-stone-200/80">
              <div className="flex items-center justify-between">
                {/* Logo and Brand Name inside the Drawer */}
                <Link
                  to="/welcome"
                  onClick={onClose}
                  className="hover:opacity-85 transition-opacity"
                  title="Ir a Bienvenida"
                >
                  <BrandLogo size="md" />
                </Link>

                <button
                  id="btn-close-drawer"
                  onClick={onClose}
                  className="p-2 -mr-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200/60 transition-colors focus:outline-hidden focus:ring-2 focus:ring-stone-400"
                  aria-label="Cerrar bandeja"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Middle Section: Clean Navigation Links */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold mb-2">
                  Menú Principal
                </p>

                <nav className="space-y-1.5">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.exact}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `w-full text-left py-3 px-3.5 rounded-xl transition-all flex items-center justify-between group ${
                            isActive
                              ? 'bg-stone-900 text-white shadow-xs'
                              : 'text-stone-800 hover:bg-stone-200/70'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className="flex items-center gap-3">
                              <Icon
                                className={`w-4 h-4 ${
                                  isActive ? 'text-white' : 'text-stone-600 group-hover:text-stone-900'
                                }`}
                              />
                              <span className="text-sm font-medium">{item.label}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {typeof item.count === 'number' && (
                                <span
                                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                    isActive
                                      ? 'bg-white text-stone-900'
                                      : 'bg-stone-200 text-stone-800'
                                  }`}
                                >
                                  {item.count}
                                </span>
                              )}
                              <ChevronRight
                                className={`w-3.5 h-3.5 ${
                                  isActive ? 'text-stone-300' : 'text-stone-400 group-hover:text-stone-900'
                                }`}
                              />
                            </div>
                          </>
                        )}
                      </NavLink>
                    );
                  })}
                </nav>
              </div>

              {/* Minimal Brand Values */}
              <div className="border-t border-stone-200/80 pt-5 space-y-3">
                <p className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">
                  Filosofía ShopGlid
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Piezas de marroquinería depuradas hasta su esencia más pura, sin adornos superfluos.
                </p>

                <div className="space-y-2 pt-1 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                    <span>Piel genuina con acabado prémium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                    <span>Envíos discretos y protegidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                    <span>Garantía de confección artesanal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="p-5 border-t border-stone-200/80 bg-stone-100/50">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span>© {new Date().getFullYear()} ShopGlid</span>
                <span className="text-[10px] tracking-wider text-stone-400">Edición Minimalista</span>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
