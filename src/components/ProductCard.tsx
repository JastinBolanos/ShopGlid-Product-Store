import React, { useState } from 'react';
import { Check, Plus, Minus, ShoppingBag, Shield } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  cartCount: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cartCount,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart();
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1600);
  };

  return (
    <article
      id="product-card"
      className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Product Image Showcase */}
        <div className="md:col-span-6 bg-stone-100/60 p-6 sm:p-10 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-stone-200/80">
          <div className="relative w-full aspect-square max-w-sm overflow-hidden rounded-xl bg-stone-200/50 shadow-inner flex items-center justify-center">
            {/* Fallback silhouette if loading or error */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-stone-600 animate-pulse">
                <span className="text-xs uppercase tracking-widest font-mono">Cargando fotografía...</span>
              </div>
            )}
            
            <img
              id="product-image"
              src={product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                // Fallback to another clean leather wallet image if primary fails
                const target = e.currentTarget;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = 'true';
                  target.src = 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1000&q=80';
                }
              }}
              className={`w-full h-full object-cover object-center transition-all duration-700 ease-out hover:scale-105 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
              }`}
            />

            {/* Subtle floating badge */}
            <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-stone-100 text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full">
              Edición única
            </div>
          </div>
        </div>

        {/* Product Information & Action Area */}
        <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-600 font-medium mb-1">
                {product.tagline}
              </p>
              <h1
                id="product-title"
                className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight"
              >
                {product.name}
              </h1>
            </div>

            {/* Price display */}
            <div className="flex items-baseline gap-2">
              <span id="product-price" className="text-3xl font-bold text-stone-900">
                {product.price.toFixed(2)} {product.currency}
              </span>
              <span className="text-xs text-stone-600">IVA incluido</span>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed pt-2">
              {product.description}
            </p>

            {/* Minimal Specifications */}
            <div className="pt-2 border-t border-stone-200 space-y-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-700">
                Detalles esenciales
              </p>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button: Añadir al carrito */}
          <div className="pt-8 space-y-3">
            <button
              id="btn-add-to-cart"
              onClick={handleAdd}
              className={`w-full py-3.5 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2.5 transition-all duration-200 shadow-sm active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-stone-900 ${
                justAdded
                  ? 'bg-emerald-800 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Añadido al carrito!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Añadir al carrito</span>
                </>
              )}
            </button>

            {/* Cart summary feedback if item has been added */}
            {cartCount > 0 && (
              <div
                id="cart-quantity-controls"
                className="flex items-center justify-between px-3 py-2 bg-stone-100 rounded-lg text-xs text-stone-700"
              >
                <span>{cartCount} unidad{cartCount > 1 ? 'es' : ''} en tu carrito</span>
                <div className="flex items-center gap-1.5">
                  <button
                    id="btn-decrement-cart"
                    onClick={onRemoveFromCart}
                    className="p-1 rounded-md hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
                    aria-label="Disminuir cantidad"
                    title="Disminuir cantidad"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-semibold px-1 min-w-4 text-center">{cartCount}</span>
                  <button
                    id="btn-increment-cart"
                    onClick={onAddToCart}
                    className="p-1 rounded-md hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
                    aria-label="Aumentar cantidad"
                    title="Aumentar cantidad"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-600 pt-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Compra directa · Envío estándar gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
