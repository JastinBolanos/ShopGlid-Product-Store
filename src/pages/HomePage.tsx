import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { INITIAL_PRODUCT } from '../data';
import { useCart } from '../context/CartContext';
import { Search, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';

interface OutletContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const HomePage: React.FC = () => {
  const { searchQuery, setSearchQuery } = useOutletContext<OutletContextType>();
  const { cartCount, addToCart, removeFromCart } = useCart();

  const matchesSearch = React.useMemo(() => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const p = INITIAL_PRODUCT;
    return (
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.details.some((d) => d.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="w-full space-y-8">
      {/* Search match condition */}
      {matchesSearch ? (
        <div className="space-y-6">
          <ProductCard
            product={INITIAL_PRODUCT}
            cartCount={cartCount}
            onAddToCart={() => addToCart(INITIAL_PRODUCT)}
            onRemoveFromCart={() => removeFromCart(INITIAL_PRODUCT.id)}
          />

          {/* Quick links to additional routes */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              to="/home/producto/cartera-slim-esencial"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-stone-400 transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">Ver Ficha Técnica Ampliada</p>
                  <p className="text-[11px] text-stone-600">Piel, dimensiones y cuidados</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              to="/home/perfil"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-stone-400 transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800">
                  <span className="text-xs font-bold font-mono">ID</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">Mi Perfil y Pedidos</p>
                  <p className="text-[11px] text-stone-600">Historial y preferencias de cuenta</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      ) : (
        <div
          id="empty-search-state"
          className="text-center py-16 px-4 max-w-md mx-auto bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-4"
        >
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-600">
            <Search className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h2 className="text-base font-semibold text-stone-900">
              Sin resultados
            </h2>
            <p className="text-xs text-stone-600">
              No encontramos productos que coincidan con &ldquo;{searchQuery}&rdquo;.
            </p>
          </div>
          <button
            onClick={() => setSearchQuery('')}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer búsqueda</span>
          </button>
        </div>
      )}
    </div>
  );
};
