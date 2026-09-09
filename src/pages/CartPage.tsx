import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useCart } from '../context/CartContext';
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cartItems,
    cartCount,
    totalPrice,
    currency,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    clearCart();
  };

  if (checkoutComplete) {
    return (
      <div className="max-w-md mx-auto w-full py-12 text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-stone-900">¡Pedido Confirmado!</h1>
          <p className="text-xs text-stone-600 leading-relaxed">
            Hemos recibido tu solicitud para tu cartera artesanal ShopGlid. Recibirás un correo con el número de seguimiento.
          </p>
          <p className="text-[11px] font-mono text-stone-600 pt-1">
            Referencia de pedido: SG-{Math.floor(100000 + Math.random() * 900000)}
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/home"
            className="w-full sm:w-auto px-6 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            Volver al Catálogo
          </Link>
          <Link
            to="/home/perfil"
            className="w-full sm:w-auto px-6 py-2.5 bg-stone-100 text-stone-900 rounded-xl text-xs font-medium hover:bg-stone-200 transition-colors"
          >
            Ver en Mi Perfil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="cart-view" className="max-w-4xl mx-auto w-full space-y-8 animate-in fade-in duration-300">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Carrito de Compras' }]} />

      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">Tu Carrito</h1>
          <p className="text-xs text-stone-500 mt-1">
            {cartCount} artículo{cartCount !== 1 ? 's' : ''} seleccionado{cartCount !== 1 ? 's' : ''}
          </p>
        </div>
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs text-stone-500 hover:text-red-700 transition-colors flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Vaciar</span>
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-4 shadow-2xs max-w-md mx-auto">
          <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-400">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-base font-semibold text-stone-900">Tu carrito está vacío</h2>
            <p className="text-xs text-stone-500">
              Añade una de nuestras carteras minimalistas para continuar.
            </p>
          </div>
          <Link
            to="/home"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            <span>Explorar Carteras</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Items list */}
          <div className="lg:col-span-7 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 flex gap-4 items-center shadow-2xs"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-xl bg-stone-100 shrink-0 border border-stone-100"
                />

                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="text-sm font-semibold text-stone-900 truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-stone-500 truncate">{item.product.tagline}</p>
                  <p className="text-xs font-bold text-stone-900 pt-1">
                    {item.product.price.toFixed(2)} {item.product.currency}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                    <button
                      onClick={() => updateQuantity(item.product.id, -1)}
                      className="p-1.5 hover:bg-stone-200 text-stone-700 rounded-l-lg transition-colors"
                      aria-label="Restar una unidad"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-xs font-semibold text-stone-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, 1)}
                      className="p-1.5 hover:bg-stone-200 text-stone-700 rounded-r-lg transition-colors"
                      aria-label="Añadir una unidad"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1.5 text-stone-400 hover:text-stone-700 transition-colors"
                    title="Eliminar producto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-900 border-b border-stone-100 pb-3">
              Resumen del Pedido
            </h2>

            <div className="space-y-3 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal ({cartCount} artículos)</span>
                <span className="font-medium text-stone-900">
                  {totalPrice.toFixed(2)} {currency}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Envío asegurado</span>
                <span className="text-emerald-700 font-medium">Gratis</span>
              </div>
              <div className="flex justify-between">
                <span>Embalaje minimalista ShopGlid</span>
                <span className="text-emerald-700 font-medium">Incluido</span>
              </div>

              <div className="border-t border-stone-200 pt-3 flex justify-between text-sm font-bold text-stone-900">
                <span>Total</span>
                <span>{totalPrice.toFixed(2)} {currency}</span>
              </div>
            </div>

            <button
              id="btn-confirm-checkout"
              onClick={handleCheckout}
              className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-98"
            >
              <span>Tramitar Pedido</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-700" />
              <span>Garantía de satisfacción y devolución en 30 días</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
