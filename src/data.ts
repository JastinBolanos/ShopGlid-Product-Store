import { Product } from './types';

export const PRODUCTS: Product[] = [
  // --- CARTERAS (5) ---
  {
    id: 'cartera-tote-atelier',
    name: 'Cartera Tote Atelier en Piel Lisa',
    category: 'carteras',
    tagline: 'Capacidad generosa · Cuero vacuno curtido al vegetal',
    price: 119.0,
    currency: '€',
    badge: 'Más Vendido',
    description:
      'Concebida para acompañarte de sol a sol. Su diseño diáfano en cuero liso de primera selección combina ligereza estructural con una resistencia insuperable ante el uso diario.',
    details: [
      'Asas reforzadas para hombro y mano de longitud ergonómica',
      'Compartimento interior flotante con cremallera YKK metálica',
      'Forro en algodón crudo natural transpirable',
      'Dimensiones: 38 cm (ancho) x 32 cm (alto) x 14 cm (base)',
    ],
    imageUrl: '/images/cartera-tote-atelier.jpg',
    colors: [
      { name: 'Borgoña Intenso', hex: '#631f28' },
      { name: 'Negro Azabache', hex: '#1c1917' },
      { name: 'Cuero Natural', hex: '#8c5332' },
    ],
  },
  {
    id: 'cartera-bandolera-demi',
    name: 'Cartera Bandolera Demi-Lune',
    category: 'carteras',
    tagline: 'Silueta semicircular · Hebilla de latón macizo',
    price: 95.0,
    currency: '€',
    badge: 'Nuevo',
    description:
      'Una silueta geométrica refinada inspirada en la media luna. Su cuerpo firme protege tus pertenencias mientras aporta un acento sofisticado a cualquier estilismo.',
    details: [
      'Correa regulable desmontable para llevar al hombro o cruzada',
      'Bolsillo posterior exterior plano de acceso inmediato',
      'Cierre magnético oculto de alta fijación',
      'Dimensiones: 24 cm x 18 cm x 7 cm',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Tostado Clásico', hex: '#92400e' },
      { name: 'Negro Carbón', hex: '#1c1917' },
    ],
  },
  {
    id: 'cartera-hombro-noir',
    name: 'Cartera de Hombro Sillón Noir',
    category: 'carteras',
    tagline: 'Estructura arquitectónica · Tacto ultrasuave',
    price: 129.0,
    currency: '€',
    badge: 'Exclusivo',
    description:
      'Una pieza de presencia serena y líneas limpias. La piel seleccionada a mano exhibe un poro natural cerrado que resiste los roces y mantiene su forma impecable.',
    details: [
      'Base reforzada con topes metálicos protectores de latón',
      'Doble fuelle interior con separador central de seguridad',
      'Cantos tintados y pulidos manualmente por maestros marroquineros',
      'Dimensiones: 29 cm x 22 cm x 10 cm',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Negro Carbón', hex: '#1c1917' },
      { name: 'Oliva Forestal', hex: '#3f4f44' },
    ],
  },
  {
    id: 'cartera-clutch-minimal',
    name: 'Cartera Clutch Minimalist Pouch',
    category: 'carteras',
    tagline: 'Piel napa flexible · Para veladas y ocasiones',
    price: 65.0,
    currency: '€',
    description:
      'La quintaesencia del minimalismo para momentos donde solo requieres lo indispensable. Piel napa ultrasuave que se adapta al agarre con absoluta naturalidad.',
    details: [
      'Asa de muñeca extraíble en piel tono sobre tono',
      '6 ranuras interiores para tarjetas de crédito integradas',
      'Cremallera de latón envejecido de deslizamiento silencioso',
      'Dimensiones: 22 cm x 14 cm x 3 cm',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Negro Mate', hex: '#1c1917' },
      { name: 'Marrón Chocolate', hex: '#451a03' },
    ],
  },
  {
    id: 'cartera-hobo-artesanal',
    name: 'Cartera Hobo Piel Envejecida',
    category: 'carteras',
    tagline: 'Caída orgánica · Textura granulada natural',
    price: 135.0,
    currency: '€',
    description:
      'Con un drapeado natural y generoso, esta cartera hobo se funde con tus movimientos. Desarrollada en piel de tacto céreo que envejece con una pátina única con el paso del tiempo.',
    details: [
      'Cierre central por botón magnético encastrado',
      'Bolsillo interior dedicado para smartphones de gran formato',
      'Tacto sedoso de tacto cálido no plastificado',
      'Dimensiones: 34 cm x 30 cm x 12 cm',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Mostaza Terroso', hex: '#a16207' },
      { name: 'Negro Tinta', hex: '#1c1917' },
    ],
  },

  // --- MORRALES (5) ---
  {
    id: 'morral-urbano-rolltop',
    name: 'Morral Urbano Roll-Top Piel & Canvas',
    category: 'morrales',
    tagline: 'Cierre enrollable adaptable · Repelente al agua',
    price: 145.0,
    currency: '€',
    badge: 'Destacado',
    description:
      'La versatilidad de la ciudad moderna en un morral híbrido. Su sistema enrollable te permite modular el volumen según lo que tu jornada demande sin perder la compostura.',
    details: [
      'Capacidad graduable de 18 a 24 litros con cierre de hebilla de aleación',
      'Compartimento acolchado independiente para portátil de hasta 16"',
      'Espaldar ergonómico con malla antitranspirante',
      'Bolsillo lateral exterior para termo o paraguas compacto',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Grafito & Cuero', hex: '#374151' },
      { name: 'Verde Bosque & Habana', hex: '#3f4f44' },
    ],
  },
  {
    id: 'morral-ejecutivo-slim',
    name: 'Morral Ejecutivo Slimpack 15"',
    category: 'morrales',
    tagline: 'Silueta pulcra para oficina · Protección antichoque',
    price: 159.0,
    currency: '€',
    badge: 'Premium',
    description:
      'Diseñado para profesionales que valoran la discreción y el orden meticuloso. Construcción en piel lisa con panel termoformado que preserva su silueta intacta.',
    details: [
      'Compartimento con acolchado de memoria para laptop de 15.6" y tablet',
      'Cinta pasante posterior para deslizar sobre trolley de cabina',
      'Bolsillo de seguridad invisible para pasaporte o cartera',
      'Dimensiones exteriores: 42 cm x 30 cm x 11 cm',
    ],
    imageUrl: '/images/morral-ejecutivo-slim.jpg',
    colors: [
      { name: 'Negro Carbón', hex: '#1c1917' },
      { name: 'Gris Plomo', hex: '#334155' },
    ],
  },
  {
    id: 'morral-nomada-cuero',
    name: 'Morral Nómada de Cuero Encerado',
    category: 'morrales',
    tagline: 'Piel pull-up rústica · Confección artesanal indestructible',
    price: 175.0,
    currency: '€',
    badge: 'Artesanal',
    description:
      'Un morral legendario inspirado en las expediciones de campo. Cada pliegue de su cuero encerado refleja la historia de tus viajes con un encanto eterno.',
    details: [
      'Cuero vacuno grueso de 2.2 mm con tratamiento de cera natural',
      'Doble bolsillo exterior de fuelle con broches de remache',
      'Tirantes anchos forrados con fieltro de lana para aliviar la carga',
      'Herrajes de latón macizo forjado que no se oxidan',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    colors: [
      { name: 'Cuero Canela', hex: '#78350f' },
      { name: 'Marrón Ébano', hex: '#292524' },
    ],
  },
  {
    id: 'morral-compacto-matte',
    name: 'Morral Compacto Monocromo Matte',
    category: 'morrales',
    tagline: 'Minimalismo absoluto · Ideal para el día a día',
    price: 129.0,
    currency: '€',
    description:
      'Liviano, estilizado y libre de costuras innecesarias. Perfecto para llevar tus dispositivos esenciales, libro y libreta con una comodidad ingrávida.',
    details: [
      'Peso ligero de tan solo 680 gramos en vacío',
      'Cremalleras termoselladas repelentes a la llovizna',
      'Bolsillo superior de acceso rápido para auriculares y llaves',
      'Capacidad compacta de 14 litros',
    ],
    imageUrl: '/images/morral-compacto-matte.jpg',
    colors: [
      { name: 'Camel Claro', hex: '#b45309' },
      { name: 'Negro Mate', hex: '#1c1917' },
    ],
  },
  {
    id: 'morral-city-cierre',
    name: 'Morral City Pack Cierre Oculto',
    category: 'morrales',
    tagline: 'Seguridad urbana · Líneas geométricas limpias',
    price: 140.0,
    currency: '€',
    description:
      'La respuesta definitiva a los traslados en transporte público y tren. Su apertura invertida sitúa las cremalleras pegadas a tu espalda, imposibilitando el acceso ajeno.',
    details: [
      'Apertura total a 180 grados tipo maleta para empacar sin esfuerzo',
      'Estructura multicapa con lámina interior anticorte',
      'Franja reflectante sutil para visibilidad nocturna',
      'Dimensiones: 44 cm x 31 cm x 13 cm',
    ],
    imageUrl: '/images/morral-city-pack.jpg',
    colors: [
      { name: 'Negro Obsidiana', hex: '#0f172a' },
      { name: 'Gris Marengo', hex: '#475569' },
    ],
  },

  // --- BILLETERAS (5) ---
  {
    id: 'cartera-slim-esencial',
    name: 'Billetera Slim Esencial Cardholder',
    category: 'billeteras',
    tagline: 'Piel de grano fino · Perfil ultradelgado de 6 mm',
    price: 39.0,
    currency: '€',
    badge: 'Favorito',
    description:
      'Diseñada bajo el principio de eliminar lo superfluo. Perfil ultradelgado con capacidad para 6-8 tarjetas y billetes doblados, elaborada en piel genuina tratada de tacto suave.',
    details: [
      'Piel vacuno legítima curtida artesanalmente al vegetal',
      'Grosor ultraplano de solo 6 mm que no deforma el bolsillo',
      '6 ranuras para tarjetas + compartimento central para billetes',
      'Costuras reforzadas al tono con hilo alemán de alta resistencia',
    ],
    imageUrl: '/images/cartera-slim-esencial.jpg',
    colors: [
      { name: 'Negro Carbón', hex: '#1c1917' },
      { name: 'Cuero Habana', hex: '#78350f' },
      { name: 'Oliva Minimal', hex: '#3f4f44' },
    ],
  },
  {
    id: 'billetera-bifold-clasica',
    name: 'Billetera Clásica Bifold de Cuero',
    category: 'billeteras',
    tagline: 'Plegable tradicional · Doble compartimento para billetes',
    price: 55.0,
    currency: '€',
    description:
      'La cartera de dos cuerpos reinterpretada con proporción áurea y acabados modernos. Cuero flexible que se adapta cómodamente a tu bolsillo posterior.',
    details: [
      '8 ranuras para tarjetas con corte diagonal para extracción fluida',
      'Doble división para separar billetes locales de divisas de viaje',
      'Forro textil suave que previene la desmagnetización de bandas',
      'Bordes pulidos a la cera de abeja natural',
    ],
    imageUrl: '/images/billetera-bifold-clasica.jpg',
    colors: [
      { name: 'Marrón Cognac', hex: '#9a3412' },
      { name: 'Negro Clásico', hex: '#1c1917' },
    ],
  },
  {
    id: 'billetera-pasaporte-travel',
    name: 'Billetera Pasaporte & Travel Organizer',
    category: 'billeteras',
    tagline: 'Viajes sin fricción · Guarda pasaporte, boarding pass y divisas',
    price: 68.0,
    currency: '€',
    badge: 'Viajes',
    description:
      'Tu pasaporte hacia la tranquilidad en cada terminal del mundo. Mantén documentos de viaje, tarjetas de embarque, tarjetas bancarias y un bolígrafo en un solo lugar.',
    details: [
      'Compartimento a medida que no dobla las esquinas del pasaporte',
      'Ranura elástica para bolígrafo y bolsillo para tarjeta micro SIM',
      'Protección perimetral con bloqueo RFID contra clonaciones',
      'Cuero de tacto sedoso agradable durante largas esperas',
    ],
    imageUrl: '/images/billetera-pasaporte-travel.jpg',
    colors: [
      { name: 'Piel Nuez', hex: '#713f12' },
      { name: 'Negro Carbón', hex: '#1c1917' },
    ],
  },
  {
    id: 'billetera-zip-rfid',
    name: 'Billetera Zip-Around con Bloqueo RFID',
    category: 'billeteras',
    tagline: 'Cierre perimetral · Blindaje anti-escaneo electromagnético',
    price: 49.0,
    currency: '€',
    description:
      'Seguridad total para quienes necesitan llevar monedas, llaves y tarjetas sin riesgo de caídas accidentales. Cremallera perimetral de deslizamiento impecable.',
    details: [
      'Cierre completo con cremallera reforzada antienganches',
      'Blindaje interno de aleación probado contra lectores electromagnéticos',
      'Compartimento monedero interno con broche plano',
      'Capacidad para hasta 10 tarjetas y documentos de identidad',
    ],
    imageUrl: '/images/billetera-zip-rfid.jpg',
    colors: [
      { name: 'Negro Grafito', hex: '#1f2937' },
      { name: 'Marrón Terracota', hex: '#9a3412' },
    ],
  },
  {
    id: 'billetera-tarjetero-mecanico',
    name: 'Billetera Tarjetero Mecánico Piel & Metal',
    category: 'billeteras',
    tagline: 'Eyector en cascada · Carcasa de aluminio aeroespacial',
    price: 45.0,
    currency: '€',
    badge: 'Tecnológico',
    description:
      'Acceso instantáneo con un solo clic. Su mecanismo eyector despliega tus 5 tarjetas principales en abanico sin abrir la billetera, envuelto en auténtica piel natural.',
    details: [
      'Gatillo inferior ergonómico patentado con despliegue en cascada',
      'Carcasa de aluminio aeroespacial que bloquea dobleces y quiebres',
      'Funda exterior en cuero vacuno para billetes y 3 tarjetas adicionales',
      'Grosor compacto de solo 14 mm',
    ],
    imageUrl: '/images/tarjetero-mecanico.jpg',
    colors: [
      { name: 'Titanio & Piel Negra', hex: '#1c1917' },
      { name: 'Bronce & Cuero Caramelo', hex: '#b45309' },
    ],
  },
];

// Fallback or featured first product
export const INITIAL_PRODUCT: Product = PRODUCTS[0];
