import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  User,
  MapPin,
  Package,
  ArrowRight,
  Shield,
  CreditCard,
  Settings,
  ChevronRight,
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  return (
    <div id="profile-view" className="max-w-4xl mx-auto w-full space-y-8 animate-in fade-in duration-300">
      {/* Hierarchical Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Perfil' }]} />

      {/* Profile Header Banner */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-stone-900 text-stone-100 flex items-center justify-center font-serif text-xl font-bold">
            AD
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-stone-900">Alexandre Durán</h1>
              <span className="bg-stone-100 text-stone-700 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-stone-200">
                Miembro Exclusivo
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">alexandre.duran@example.com · Cliente desde 2024</p>
          </div>
        </div>

        <div className="text-xs text-stone-500 flex sm:flex-col items-center sm:items-end gap-2">
          <span className="font-mono text-stone-700">ID: SG-992-ES</span>
          <span className="text-emerald-700 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Cuenta Verificada
          </span>
        </div>
      </div>

      {/* Address and Shipping Preferences Card */}
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
        {/* Recent Orders Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-stone-700" />
              <h3 className="text-sm font-semibold text-stone-900">Historial de Pedidos</h3>
            </div>
            <span className="text-xs text-stone-500">1 pedido</span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium text-stone-900">Pedido #SG-8942</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Entregado
              </span>
            </div>
            <p className="text-xs text-stone-700 font-medium">1x Cartera Slim Esencial (Piel de grano fino)</p>
            <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1 border-t border-stone-200/60">
              <span>Fecha: 24 Agosto 2026</span>
              <span className="font-semibold text-stone-900">49,00 €</span>
            </div>
          </div>
        </div>

        {/* Quick Address Summary & Link */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-700" />
                <h3 className="text-sm font-semibold text-stone-900">Dirección Registrada</h3>
              </div>
              <Link
                to="/home/perfil/sub-seccion"
                className="text-xs text-stone-900 font-medium hover:underline flex items-center gap-1"
              >
                <span>Editar</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="text-xs text-stone-600 space-y-1">
              <p className="font-semibold text-stone-900">Paseo de la Castellana 88, 4º B</p>
              <p>28046 Madrid, España</p>
              <p className="text-stone-500 pt-1">Teléfono: +34 600 123 456</p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-stone-700" />
              <span>Datos cifrados de extremo a extremo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
