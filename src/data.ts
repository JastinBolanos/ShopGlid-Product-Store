import { Product } from './types';

export const INITIAL_PRODUCT: Product = {
  id: 'cartera-slim-esencial',
  name: 'Cartera Slim Esencial',
  tagline: 'Piel de grano fino · Hecha a mano',
  price: 49.00,
  currency: '€',
  description: 'Diseñada bajo el principio de eliminar lo superfluo. Perfil ultradelgado con capacidad para 6-8 tarjetas y billetes doblados, elaborada en piel genuina tratada de tacto suave.',
  details: [
    'Piel vacuno legítima curtida artesanalmente',
    'Grosor ultraplano de solo 6 mm',
    '6 ranuras para tarjetas + compartimento central para billetes',
    'Costuras reforzadas al tono'
  ],
  imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80'
};
