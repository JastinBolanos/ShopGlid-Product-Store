import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Search, X, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenDrawer: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
  searchQuery,
  onSearchChange,
}) => {
  const { cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (value: string) => {
    onSearchChange(value);
    // If user starts typing search and isn't on home, navigate to home so they see results
    if (value && location.pathname !== '/home') {
      navigate('/home');
    }
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-30 bg-stone-50/90 backdrop-blur-md border-b border-stone-200"
    >
      <div className="max-w-[1700px] w-full mx-auto px-4 sm:px-8 xl:px-12 h-18 flex items-center justify-between gap-4 sm:gap-6">
        {/* Left: Button to toggle Sidebar Drawer & Brand Link to /home */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="btn-open-drawer"
            onClick={onOpenDrawer}
            className="flex items-center gap-2 p-2 rounded-lg text-stone-800 hover:text-stone-950 hover:bg-stone-200/60 transition-colors focus:outline-hidden focus:ring-2 focus:ring-stone-400"
            aria-label="Abrir bandeja lateral"
            title="Abrir menú"
          >
            <Menu className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-medium hidden md:inline">
              Menú
            </span>
          </button>

          <Link
            to="/home"
            className="flex items-center gap-2 pl-1 sm:pl-2 border-l border-stone-300 hover:opacity-85 transition-opacity"
            title="Ir a Inicio"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-stone-900">
              ShopGlid
            </span>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md sm:max-w-xl mx-2 sm:mx-4">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 pointer-events-none" />
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Buscar cartera..."
              className="w-full bg-stone-100/90 text-stone-900 placeholder:text-stone-500 text-xs sm:text-sm pl-9 sm:pl-10 pr-8 sm:pr-9 py-2 rounded-full border border-stone-300/80 focus:border-stone-900 focus:bg-white focus:outline-hidden transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                id="btn-clear-search"
                onClick={() => onSearchChange('')}
                className="absolute right-3 p-0.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200/60"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right: Profile Link & Cart Link */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* User Profile Link: /home/perfil */}
          <Link
            id="nav-profile-header-btn"
            to="/home/perfil"
            className={`p-2 rounded-full transition-colors ${
              location.pathname.startsWith('/home/perfil')
                ? 'bg-stone-900 text-white'
                : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
            }`}
            title="Mi Perfil (/home/perfil)"
            aria-label="Ir a Perfil"
          >
            <User className="w-4 h-4" />
          </Link>

          {/* Cart Status indicator: /home/carrito */}
          <Link
            id="cart-indicator-btn"
            to="/home/carrito"
            className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              location.pathname === '/home/carrito'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-stone-100 text-stone-800 border-stone-200 hover:bg-stone-200/70'
            }`}
            title={`${cartCount} artículos en el carrito (/home/carrito)`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Carrito</span>
            <span
              id="cart-badge-count"
              className={`min-w-5 h-5 flex items-center justify-center rounded-full text-[11px] font-semibold px-1 transition-colors ${
                location.pathname === '/home/carrito'
                  ? 'bg-stone-100 text-stone-900'
                  : cartCount > 0
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-200 text-stone-600'
              }`}
            >
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
