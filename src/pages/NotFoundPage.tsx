import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto w-full py-16 text-center space-y-5 animate-in fade-in duration-300">
      <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-700">
        <Compass className="w-7 h-7" />
      </div>
      <div className="space-y-1">
        <h1 className="text-xl font-bold text-stone-900">Página no encontrada (404)</h1>
        <p className="text-xs text-stone-600">
          La ruta a la que intentas acceder no existe en la estructura de ShopGlid.
        </p>
      </div>
      <div className="pt-2">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a /home</span>
        </Link>
      </div>
    </div>
  );
};
