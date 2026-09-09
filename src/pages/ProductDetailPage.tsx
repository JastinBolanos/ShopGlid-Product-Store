import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { INITIAL_PRODUCT } from '../data';
import { useCart } from '../context/CartContext';
import {
  ShoppingBag,
  Check,
  Shield,
  Truck,
  Sparkles,
  ArrowLeft,
  Layers,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = INITIAL_PRODUCT; // currently our single featured luxury wallet
  const { addToCart, cartCount } = useCart();
  const [selectedColor, setSelectedColor] = useState('Negro Carbón');
  const [justAdded, setJustAdded] = useState(false);

  const colors = [
    { name: 'Negro Carbón', hex: '#1c1917' },
    { name: 'Cuero Habana', hex: '#78350f' },
    { name: 'Oliva Minimal', hex: '#3f4f44' },
  ];

  const handleAdd = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div id="product-detail-view" className="max-w-4xl mx-auto w-full space-y-8 animate-in fade-in duration-300">
      {/* Breadcrumbs: Home > Producto > Cartera Slim Esencial */}
      <Breadcrumbs
        items={[
          { label: 'Productos', path: '/home' },
          { label: product.name },
        ]}
      />

      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Image */}
          <div className="md:col-span-6 bg-stone-100/70 p-8 sm:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-200">
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-inner bg-stone-200/50">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Information and Purchasing */}
          <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                  ShopGlid Selección
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {product.name}
                </h1>
                <p className="text-xs text-stone-500 mt-0.5">{product.tagline}</p>
              </div>

              <div className="text-2xl font-bold text-stone-900">
                {product.price.toFixed(2)} {product.currency}
              </div>

              {/* Color selector */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <span className="text-xs text-stone-600 font-medium">
                  Tono de Piel: <strong className="text-stone-900">{selectedColor}</strong>
                </span>
                <div className="flex items-center gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColor === c.name
                          ? 'border-stone-900 scale-110'
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed pt-2">
                {product.description}
              </p>

              {/* Technical Specifications */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 space-y-2 text-xs">
                <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-stone-700" />
                  <span>Especificaciones Artesanales</span>
                </span>
                <ul className="space-y-1.5 text-stone-600">
                  {product.details.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <button
                onClick={handleAdd}
                className={`w-full py-3.5 px-5 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all ${
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
                    <span>Añadir al Carrito ({product.price.toFixed(2)} {product.currency})</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2">
                <Link to="/home" className="hover:text-stone-900 flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" />
                  <span>Volver al Catálogo</span>
                </Link>

                <Link to="/home/carrito" className="font-semibold text-stone-900 hover:underline">
                  Ir al Carrito ({cartCount})
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
