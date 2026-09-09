import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  MapPin,
  PackageCheck,
  Shield,
  Check,
  ArrowLeft,
  Sliders,
  Sparkles,
  Save,
} from 'lucide-react';

export const ProfileSubSectionPage: React.FC = () => {
  const [street, setStreet] = useState('Paseo de la Castellana 88, 4º B');
  const [city, setCity] = useState('Madrid');
  const [postalCode, setPostalCode] = useState('28046');
  const [country, setCountry] = useState('España');

  const [ecoPackaging, setEcoPackaging] = useState(true);
  const [signatureRequired, setSignatureRequired] = useState(false);
  const [discreetDelivery, setDiscreetDelivery] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 2500);
  };

  return (
    <div
      id="profile-sub-section-view"
      className="max-w-3xl mx-auto w-full space-y-8 animate-in fade-in duration-300"
    >
      {/* Breadcrumbs: Home > Perfil > Preferencias de Entrega */}
      <Breadcrumbs
        items={[
          { label: 'Perfil', path: '/home/perfil' },
          { label: 'Preferencias de Entrega' },
        ]}
      />

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Preferencias de Entrega
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Gestiona tu domicilio principal y las especificaciones personalizadas de entrega y empaque para tus carteras y accesorios ShopGlid.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: Default Address */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-4">
            <MapPin className="w-4 h-4 text-stone-900" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
              Dirección Principal de Entrega
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="input-street" className="text-xs font-medium text-stone-700">
                Calle y número / Piso
              </label>
              <input
                id="input-street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-stone-900 focus:outline-hidden transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="input-city" className="text-xs font-medium text-stone-700">
                Ciudad / Población
              </label>
              <input
                id="input-city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-stone-900 focus:outline-hidden transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="input-postal" className="text-xs font-medium text-stone-700">
                Código Postal
              </label>
              <input
                id="input-postal"
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-stone-900 focus:outline-hidden transition-colors"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="input-country" className="text-xs font-medium text-stone-700">
                País
              </label>
              <input
                id="input-country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-stone-900 focus:outline-hidden transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Delivery Preferences */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-4">
            <PackageCheck className="w-4 h-4 text-stone-900" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
              Preferencias de Embalaje y Entrega
            </h2>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-3 p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={ecoPackaging}
                onChange={(e) => setEcoPackaging(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-stone-900 focus:ring-stone-900 accent-stone-900"
              />
              <div className="text-xs space-y-0.5">
                <p className="font-semibold text-stone-900">Empaque Minimalista 100% Biodegradable</p>
                <p className="text-stone-500">
                  Caja de cartón virgen reciclado sin plásticos ni tintas contaminantes.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={discreetDelivery}
                onChange={(e) => setDiscreetDelivery(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-stone-900 focus:ring-stone-900 accent-stone-900"
              />
              <div className="text-xs space-y-0.5">
                <p className="font-semibold text-stone-900">Envío Discreto sin marcas exteriores</p>
                <p className="text-stone-500">
                  Empaque exterior neutro para máxima privacidad del contenido.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={signatureRequired}
                onChange={(e) => setSignatureRequired(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-stone-900 focus:ring-stone-900 accent-stone-900"
              />
              <div className="text-xs space-y-0.5">
                <p className="font-semibold text-stone-900">Firma Obligatoria en la Recepción</p>
                <p className="text-stone-500">
                  El mensajero requerirá firma manuscrita y DNI al entregar la cartera.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <Link
            id="link-back-profile"
            to="/home/perfil"
            className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-stone-950 transition-colors py-2 px-3 rounded-lg hover:bg-stone-200/50"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a Mi Perfil</span>
          </Link>

          <button
            id="btn-save-sub-seccion"
            type="submit"
            className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all shadow-xs ${
              savedSuccess
                ? 'bg-emerald-800 text-white'
                : 'bg-stone-900 hover:bg-stone-800 text-white active:scale-98'
            }`}
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Preferencias guardadas</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Guardar Preferencias</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
