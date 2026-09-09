import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  User,
  MapPin,
  Package,
  Shield,
  LogIn,
  ArrowRight,
  Sparkles,
  X,
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const [showProximamente, setShowProximamente] = useState(false);

  return (
    <div
      id="profile-view"
      className="max-w-6xl mx-auto w-full space-y-8 animate-in fade-in duration-300"
    >
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Perfil' }]} />

      {/* Profile Header: Empty State */}
      <div
        id="profile-guest-card"
        className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-xs flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left"
      >
        <div className="flex flex-col sm:flex-row items-center gap-5 max-w-xl">
          {/* Empty Minimalist Avatar Icon */}
          <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 border border-stone-200 flex items-center justify-center shrink-0">
            <User className="w-8 h-8 text-stone-400 stroke-1.5" />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-stone-900">
                Tu Perfil de Usuario
              </h1>
              <span className="bg-stone-100 text-stone-600 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-stone-200">
                Modo Invitado
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
              Inicia sesión o regístrate para acceder a tus pedidos, guardar tus
              direcciones de envío y gestionar tus preferencias de compra en ShopGlid.
            </p>
          </div>
        </div>

        {/* Requested Button */}
        <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            id="btn-login-register"
            onClick={() => setShowProximamente(true)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
            aria-label="Iniciar sesión o registrarse"
          >
            <LogIn className="w-4 h-4" />
            <span>Iniciar sesión o registrarse</span>
          </button>
        </div>
      </div>

      {/* Address & Preferences Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <h2 className="text-base sm:text-lg font-semibold text-stone-900">
              Dirección y Preferencias de Envío
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Configura tu domicilio predeterminado, empaque ecológico y preferencias de entrega para tus pedidos de marroquinería.
            </p>
          </div>

          <Link
            id="btn-goto-sub-seccion"
            to="/home/perfil/sub-seccion"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-all shrink-0 group shadow-2xs"
          >
            <span>Configurar entrega</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Profile Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order History Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-stone-700" />
              <h3 className="text-sm font-semibold text-stone-900">Historial de Pedidos</h3>
            </div>
            <span className="text-xs text-stone-400">0 pedidos</span>
          </div>

          <div className="text-center py-8 px-4 rounded-xl bg-stone-50/70 border border-dashed border-stone-200 space-y-2">
            <Package className="w-8 h-8 text-stone-300 mx-auto" />
            <p className="text-xs font-medium text-stone-700">
              No tienes pedidos registrados todavía
            </p>
            <p className="text-[11px] text-stone-500 max-w-xs mx-auto">
              Cuando compres una de nuestras piezas de marroquinería, el seguimiento aparecerá aquí.
            </p>
            <div className="pt-2">
              <Link
                to="/home"
                className="text-xs font-semibold text-stone-900 hover:underline"
              >
                Explorar catálogo
              </Link>
            </div>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-700" />
                <h3 className="text-sm font-semibold text-stone-900">Dirección Guardada</h3>
              </div>
              <Link
                to="/home/perfil/sub-seccion"
                className="text-xs text-stone-900 font-medium hover:underline flex items-center gap-1"
              >
                <span>Añadir</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="text-center py-8 px-4 rounded-xl bg-stone-50/70 border border-dashed border-stone-200 space-y-2">
              <MapPin className="w-8 h-8 text-stone-300 mx-auto" />
              <p className="text-xs font-medium text-stone-700">
                Sin dirección registrada
              </p>
              <p className="text-[11px] text-stone-500 max-w-xs mx-auto">
                Guarda tu dirección principal para tramitar tus envíos en un solo clic.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-stone-700" />
              <span>Privacidad y seguridad garantizadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Próximamente */}
      {showProximamente && (
        <div
          id="modal-profile-proximamente-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowProximamente(false)}
        >
          <div
            id="modal-profile-proximamente"
            className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-8 text-center shadow-2xl border border-stone-200 space-y-5 animate-in zoom-in-95 duration-200 relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setShowProximamente(false)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors"
              aria-label="Cerrar mensaje"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-800 flex items-center justify-center mx-auto shadow-2xs">
              <Sparkles className="w-7 h-7 text-amber-600" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">
                ShopGlid · Acceso
              </span>
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                Próximamente
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
                El módulo de inicio de sesión y registro de clientes estará disponible muy pronto en una próxima actualización.
              </p>
            </div>

            <button
              id="btn-close-profile-proximamente"
              onClick={() => setShowProximamente(false)}
              className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-all shadow-xs"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
