import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ProductGridCard } from '../components/ProductGridCard';
import { PRODUCTS } from '../data';
import { ProductCategory } from '../types';
import { Search, RotateCcw, SlidersHorizontal } from 'lucide-react';

interface OutletContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const HomePage: React.FC = () => {
  const { searchQuery, setSearchQuery } = useOutletContext<OutletContextType>();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('todos');

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    // Filter by category
    if (selectedCategory !== 'todos') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.details.some((d) => d.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  // Counts for each category
  const counts = useMemo(() => {
    return {
      todos: PRODUCTS.length,
      carteras: PRODUCTS.filter((p) => p.category === 'carteras').length,
      morrales: PRODUCTS.filter((p) => p.category === 'morrales').length,
      billeteras: PRODUCTS.filter((p) => p.category === 'billeteras').length,
    };
  }, []);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'todos', label: 'Todos los Productos' },
    { id: 'carteras', label: 'Carteras' },
    { id: 'morrales', label: 'Morrales' },
    { id: 'billeteras', label: 'Billeteras' },
  ];

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* Categories & Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = counts[cat.id];
              return (
                <button
                  key={cat.id}
                  id={`filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-stone-200/60 border border-stone-200/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active status */}
          <div className="flex items-center gap-2 text-xs text-stone-500 self-end sm:self-center">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>
              Mostrando <strong className="text-stone-900">{filteredProducts.length}</strong> de{' '}
              {PRODUCTS.length} piezas
            </span>
          </div>
        </div>

        {/* If searching, show search alert */}
        {searchQuery.trim() && (
          <div className="flex items-center justify-between bg-stone-100 rounded-xl px-4 py-2.5 text-xs text-stone-700">
            <span>
              Resultados para: <strong className="text-stone-900">&ldquo;{searchQuery}&rdquo;</strong>
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-stone-500 hover:text-stone-900 font-medium hover:underline"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>

      {/* Products Grid (15 items) */}
      {filteredProducts.length > 0 ? (
        <div
          id="products-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 sm:gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty state when search or filter returns zero */
        <div
          id="empty-search-state"
          className="text-center py-16 px-4 max-w-md mx-auto bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-4"
        >
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-600">
            <Search className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h2 className="text-base font-semibold text-stone-900">
              Sin resultados encontrados
            </h2>
            <p className="text-xs text-stone-600">
              No hay productos con los criterios actuales de búsqueda en esta categoría.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('todos');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer filtros</span>
          </button>
        </div>
      )}
    </div>
  );
};
