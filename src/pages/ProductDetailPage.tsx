import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PRODUCTS } from '../data';
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
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addToCart, cartCount } = useCart();
  const defaultColors = [
    { name: 'Negro Carbón', hex: '#1c1917' },
    { name: 'Cuero Habana', hex: '#78350f' },
    { name: 'Oliva Minimal', hex: '#3f4f44' },
  ];
  const colors = product.colors && product.colors.length > 0 ? product.colors : defaultColors;
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [justAdded, setJustAdded] = useState(false);

  // Sync selected color if product changes
  React.useEffect(() => {
    if (colors && colors.length > 0) {
      setSelectedColor(colors[0].name);
    }
  }, [product.id]);

  const handleAdd = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div id="product-detail-view" className="max-w-6xl mx-auto w-full space-y-8 animate-in fade-in duration-300">
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

      {/* Related Products from the collection */}
      <div className="pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-stone-900">Otras Piezas de la Colección</h2>
          <Link to="/home" className="text-xs text-stone-600 hover:text-stone-900 font-medium hover:underline">
            Ver todas las 15 piezas
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PRODUCTS.filter((p) => p.id !== product.id)
            .slice(0, 3)
            .map((related) => (
              <Link
                key={related.id}
                to={`/home/producto/${related.id}`}
                className="bg-white rounded-xl border border-stone-200 p-3 hover:border-stone-400 transition-all flex items-center gap-3 group shadow-2xs"
              >
                <img
                  src={related.imageUrl}
                  alt={related.name}
                  className="w-16 h-16 object-cover rounded-lg bg-stone-100 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-semibold text-stone-400">
                    {related.category}
                  </p>
                  <p className="text-xs font-semibold text-stone-900 truncate group-hover:text-stone-700">
                    {related.name}
                  </p>
                  <p className="text-xs font-bold text-stone-900 mt-0.5">
                    {related.price.toFixed(2)} {related.currency}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
