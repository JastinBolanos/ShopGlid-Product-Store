import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Check, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductGridCardProps {
  product: Product;
}

export const ProductGridCard: React.FC<ProductGridCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const categoryLabels = {
    carteras: 'Cartera',
    morrales: 'Morral',
    billeteras: 'Billetera',
  };

  return (
    <article
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-stone-400/80 transition-all duration-300"
    >
      <div>
        {/* Image Container with Link */}
        <Link
          to={`/home/producto/${product.id}`}
          className="block relative aspect-4/3 bg-stone-100/70 overflow-hidden"
          tabIndex={-1}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400 text-xs">
              <span className="animate-pulse font-mono text-[11px]">Cargando...</span>
            </div>
          )}

          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full shadow-xs">
              {product.badge}
            </span>
          )}

          {/* Quick view indicator on hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-xs p-1.5 rounded-full text-stone-800 shadow-xs">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-500">
              {categoryLabels[product.category]}
            </span>

            {/* Colors preview dots */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-center gap-1" title={`${product.colors.length} tonos disponibles`}>
                {product.colors.slice(0, 3).map((c) => (
                  <span
                    key={c.name}
                    className="w-2.5 h-2.5 rounded-full border border-stone-300"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            )}
          </div>

          <Link to={`/home/producto/${product.id}`} className="block group-hover:text-stone-900">
            <h3 className="text-sm sm:text-base font-semibold text-stone-900 leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Footer: Price and Add to Cart */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 flex items-center justify-between border-t border-stone-100 gap-2">
        <div>
          <span className="text-base sm:text-lg font-bold text-stone-900">
            {product.price.toFixed(2)} {product.currency}
          </span>
        </div>

        <button
          onClick={handleAdd}
          id={`btn-add-grid-${product.id}`}
          className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all duration-200 active:scale-95 shadow-2xs ${
            justAdded
              ? 'bg-emerald-800 text-white'
              : 'bg-stone-900 hover:bg-stone-800 text-white'
          }`}
          aria-label={`Añadir ${product.name} al carrito`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Añadido</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Añadir</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};
