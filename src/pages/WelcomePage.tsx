import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Feather,
  Layers,
  Compass,
  Check,
  ChevronRight,
} from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

// Subtle acoustic click synthesizer using Web Audio API
const playAcousticFeedback = (soundEnabled: boolean, freq: number = 320) => {
  if (!soundEnabled) return;
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // Graceful fallback if audio is blocked
  }
};

interface PillarCard {
  id: string;
  category: 'carteras' | 'morrales' | 'billeteras';
  title: string;
  subtitle: string;
  image: string;
  price: string;
  badge: string;
  specs: string[];
}

const PILLARS: PillarCard[] = [
  {
    id: 'cartera-tote-atelier',
    category: 'carteras',
    title: 'Carteras Atelier',
    subtitle: 'Siluetas arquitectónicas de hombro y mano',
    image: '/images/cartera-tote-atelier.jpg',
    price: 'Desde 95 €',
    badge: 'Pieza Insignia',
    specs: ['Piel vacuna lisa', 'Hebilla de latón macizo', 'Cremallera YKK oculta'],
  },
  {
    id: 'morral-city-pack',
    category: 'morrales',
    title: 'Morrales Urbanos',
    subtitle: 'Monolitos funcionales para la vida contemporánea',
    image: '/images/morral-city-pack.jpg',
    price: 'Desde 135 €',
    badge: 'Diseño Monolítico',
    specs: ['Acabado hidrófugo', 'Compartimento portátil 15"', 'Espaldar transpirable'],
  },
  {
    id: 'billetera-bifold-clasica',
    category: 'billeteras',
    title: 'Billeteras Esenciales',
    subtitle: 'Espesor ultradelgado y protección de tarjetas',
    image: '/images/billetera-bifold-clasica.jpg',
    price: 'Desde 39 €',
    badge: 'Cero Volumen',
    specs: ['Bloqueo RFID pasivo', 'Capacidad 8 tarjetas', 'Bordes bruñidos a mano'],
  },
];

interface LeatherTone {
  id: string;
  name: string;
  hex: string;
  origin: string;
  description: string;
  sampleImage: string;
}

const LEATHER_TONES: LeatherTone[] = [
  {
    id: 'siena',
    name: 'Cuero Siena Clásico',
    hex: '#8C5332',
    origin: 'Toscana, Italia',
    description: 'Pátina cálida que adquiere reflejos ambarinos y memoria con el uso continuo.',
    sampleImage: '/images/billetera-bifold-clasica.jpg',
  },
  {
    id: 'noir',
    name: 'Noir Carbón Mate',
    hex: '#1C1917',
    origin: 'Igualada, España',
    description: 'Piel anilina de poro cerrado profundo, tacto aterciopelado y sobriedad absoluta.',
    sampleImage: '/images/morral-compacto-matte.jpg',
  },
  {
    id: 'borgona',
    name: 'Borgoña Atelier',
    hex: '#631F28',
    origin: 'Santa Croce, Italia',
    description: 'Tinte botánico a base de corteza de mimosa con reflejos vino de alta distinción.',
    sampleImage: '/images/cartera-tote-atelier.jpg',
  },
  {
    id: 'oliva',
    name: 'Oliva Forestal',
    hex: '#3E4738',
    origin: 'Albacete, España',
    description: 'Curtición vegetal con extractos de castaño, sutil y naturalmente texturizada.',
    sampleImage: '/images/cartera-slim-esencial.jpg',
  },
];

const MANIFESTO_ITEMS = [
  {
    icon: Feather,
    number: '01',
    title: 'Pureza de Líneas',
    desc: 'Descartamos forros plásticos y herrajes superfluos para dar protagonismo total a la materia noble.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Curtición Vegetal',
    desc: 'Sin sales de cromo. Un reposo de sesenta días en bombos de madera con taninos vegetales biológicos.',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Bordes Bruñidos',
    desc: 'Cada canto es biselado, teñido y encerado manualmente con cera pura de abejas para una suavidad táctil eterna.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Memoria y Pátina',
    desc: 'Nuestras piezas no envejecen: maduran. Cada roce imprime una historia personal en su superficie.',
  },
];

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [activeTone, setActiveTone] = useState<LeatherTone>(LEATHER_TONES[0]);
  const soundEnabled = true; // Acoustic feedback always active
  const [expandedManifesto, setExpandedManifesto] = useState<number | null>(0);

  const handleEnterStore = (category?: string) => {
    playAcousticFeedback(soundEnabled, 480);
    if (category) {
      navigate(`/home?categoria=${category}`);
    } else {
      navigate('/home');
    }
  };

  const handlePillarClick = (index: number) => {
    playAcousticFeedback(soundEnabled, 340 + index * 40);
    setSelectedPillar(index);
  };

  const handleToneChange = (tone: LeatherTone) => {
    playAcousticFeedback(soundEnabled, 400);
    setActiveTone(tone);
  };

  const currentPillar = PILLARS[selectedPillar];

  return (
    <div
      id="welcome-screen"
      className="min-h-screen bg-stone-900 text-stone-100 flex flex-col font-sans selection:bg-stone-100 selection:text-stone-950 relative overflow-hidden"
    >
      {/* Dynamic Ambient Background Glow responsive to selected leather tone */}
      <motion.div
        animate={{
          backgroundColor: activeTone.hex,
          opacity: 0.14,
        }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-stone-800/40 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Atmospheric Navigation Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between border-b border-stone-800/80">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-900 flex items-center justify-center p-1.5 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 10h18" />
              <path d="M14 14.5a2.5 2.5 0 0 1 2.5-2.5H21" />
            </svg>
          </div>
          <div>
            <span className="text-sm tracking-[0.28em] uppercase font-bold text-stone-100">
              ShopGlid
            </span>
            <span className="hidden sm:inline-block ml-3 text-[10px] tracking-[0.2em] uppercase text-stone-400 font-light border-l border-stone-700 pl-3">
              Marroquinería de Autor
            </span>
          </div>
        </div>

        {/* Right Controls: Direct Enter Button */}
        <div className="flex items-center gap-3">
          {/* Quick Access to Catalog */}
          <button
            id="welcome-skip-btn"
            onClick={() => handleEnterStore()}
            className="group px-4 py-2 rounded-full bg-stone-100 hover:bg-white text-stone-950 text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Ir a la Tienda</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </header>

      {/* Main Interactive Stage */}
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 py-8 sm:py-14 flex flex-col justify-between gap-12">
        {/* Hero Typography with Motion Stagger */}
        <div className="max-w-3xl space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-[11px] font-medium tracking-[0.2em] uppercase text-stone-300"
          >
            <Compass className="w-3.5 h-3.5 text-stone-400" />
            <span>Colección Permanente · 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-50 leading-[1.12]"
          >
            La elegancia de lo esencial,{' '}
            <span className="font-semibold text-stone-200 underline decoration-stone-600 underline-offset-8">
              esculpida en cuero puro.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-2xl font-light"
          >
            Bienvenido al espacio editorial de ShopGlid. Diseñamos piezas de marroquinería
            depuradas hasta su silueta más sincera: sin adornos estériles, con tacto sedoso y
            costuras proyectadas para perdurar décadas.
          </motion.p>
        </div>

        {/* Section 1: Interactive Three Pillars Showcase */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-800 pb-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium">
                Pilar I · Exploración Táctil
              </p>
              <h2 className="text-lg sm:text-xl font-medium text-stone-100 mt-1">
                Tres Siluetas, Un Propósito
              </h2>
            </div>
            <p className="text-xs text-stone-400 hidden sm:block">
              Interactúa con cada categoría para inspeccionar su diseño y especificaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 3 Interactive Selectors */}
            <div className="lg:col-span-5 space-y-3">
              {PILLARS.map((pillar, idx) => {
                const isActive = selectedPillar === idx;
                return (
                  <motion.button
                    key={pillar.id}
                    id={`pillar-btn-${pillar.category}`}
                    onClick={() => handlePillarClick(idx)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-start gap-4 ${
                      isActive
                        ? 'bg-stone-800/90 border-stone-500 shadow-lg text-stone-50'
                        : 'bg-stone-900/50 border-stone-800/80 hover:bg-stone-850 hover:border-stone-700 text-stone-400'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activePillarBar"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-stone-100"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-stone-950 border border-stone-700/60">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-stone-100 tracking-wide">
                          {pillar.title}
                        </span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-stone-800 border border-stone-700 text-stone-300">
                          {pillar.badge}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-1">
                        {pillar.subtitle}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-800/60 text-xs">
                        <span className="text-stone-300 font-mono text-[11px]">
                          {pillar.price}
                        </span>
                        <span className="text-[11px] text-stone-400 flex items-center gap-1 font-medium group-hover:text-stone-200">
                          Ver detalles <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right Interactive Hero Preview with Animated Reveal */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPillar.id}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="bg-stone-950/80 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle watermarked category label */}
                  <span
                    className="absolute -right-6 -bottom-6 text-7xl font-bold uppercase tracking-widest text-stone-900/60 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {currentPillar.category}
                  </span>

                  {/* Image with tactile frame */}
                  <div className="w-full md:w-1/2 aspect-4/3 md:aspect-square rounded-2xl overflow-hidden bg-stone-900 border border-stone-700/70 shadow-inner relative group">
                    <img
                      src={currentPillar.image}
                      alt={currentPillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-wider text-stone-200 border border-stone-700">
                      {currentPillar.badge}
                    </div>
                  </div>

                  {/* Information & Action */}
                  <div className="w-full md:w-1/2 space-y-4 relative z-10">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest font-mono text-stone-400">
                        Selección Destacada
                      </span>
                      <h3 className="text-xl sm:text-2xl font-medium text-stone-100 mt-1">
                        {currentPillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed font-light">
                        {currentPillar.subtitle}
                      </p>
                    </div>

                    {/* Specific handcrafted specs */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                        Especificaciones de Taller
                      </p>
                      <ul className="space-y-1">
                        {currentPillar.specs.map((spec, i) => (
                          <li
                            key={i}
                            className="text-xs text-stone-300 flex items-center gap-2"
                          >
                            <Check className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button to explore this specific category */}
                    <div className="pt-3">
                      <button
                        id={`btn-explore-${currentPillar.category}`}
                        onClick={() => handleEnterStore(currentPillar.category)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-white text-stone-950 text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span>Explorar {currentPillar.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Leather & Texture Atelier */}
        <section className="bg-stone-950/50 border border-stone-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium">
                Pilar II · Cartas de Curtición
              </p>
              <h2 className="text-lg sm:text-xl font-medium text-stone-100 mt-1">
                Gama Cromática & Origen Natural
              </h2>
            </div>
            <p className="text-xs text-stone-400">
              Pieles teñidas al tambor con extractos botánicos de castaño y corteza de roble.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {LEATHER_TONES.map((tone) => {
              const isSelected = activeTone.id === tone.id;
              return (
                <button
                  key={tone.id}
                  id={`swatch-${tone.id}`}
                  onClick={() => handleToneChange(tone)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-stone-800/90 border-stone-400 shadow-md ring-1 ring-stone-400/50'
                      : 'bg-stone-900/40 border-stone-800 hover:bg-stone-850 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="w-7 h-7 rounded-full shadow-inner border border-white/20 transition-transform duration-300"
                      style={{
                        backgroundColor: tone.hex,
                        transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                      }}
                      aria-hidden="true"
                    />
                    {isSelected && (
                      <span className="text-[10px] font-mono text-stone-300 uppercase tracking-widest bg-stone-700/80 px-2 py-0.5 rounded-full">
                        Activo
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-semibold text-stone-200">{tone.name}</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5 font-mono">{tone.origin}</p>
                </button>
              );
            })}
          </div>

          {/* Active Leather Note Description */}
          <motion.div
            key={activeTone.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-2xl bg-stone-900/70 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest font-mono text-stone-400">
                Nota de Taller ({activeTone.name})
              </span>
              <p className="text-xs text-stone-300 leading-relaxed max-w-2xl font-light">
                {activeTone.description}
              </p>
            </div>
            <button
              onClick={() => handleEnterStore()}
              className="shrink-0 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-medium transition-colors self-start sm:self-center flex items-center gap-1.5"
            >
              <span>Ver piezas en este acabado</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </section>

        {/* Section 3: Interactive Manifesto Pillars */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-800 pb-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium">
                Pilar III · Manifiesto de Calidad
              </p>
              <h2 className="text-lg sm:text-xl font-medium text-stone-100 mt-1">
                El Compromiso ShopGlid
              </h2>
            </div>
            <p className="text-xs text-stone-400">
              Haz clic en cada principio para desplegar el proceso artesanal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MANIFESTO_ITEMS.map((item, idx) => {
              const isExpanded = expandedManifesto === idx;
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    playAcousticFeedback(soundEnabled, 360 + idx * 20);
                    setExpandedManifesto(isExpanded ? null : idx);
                  }}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isExpanded
                      ? 'bg-stone-800/90 border-stone-500 shadow-md'
                      : 'bg-stone-900/40 border-stone-800/80 hover:bg-stone-850 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-stone-400 mb-3">
                    <span className="font-mono text-xs font-bold text-stone-400">
                      {item.number}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isExpanded ? 'text-stone-100' : 'text-stone-500'
                      }`}
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-stone-100">{item.title}</h4>
                  <p className="text-xs text-stone-300 font-light mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Final Entrance Dock */}
        <section className="pt-4 border-t border-stone-800/80 flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-light text-stone-100">
              ¿Listo para descubrir la colección completa?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light">
              Explora carteras, morrales y billeteras con especificaciones milimétricas y
              disponibilidad inmediata.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <motion.button
              id="welcome-enter-main-btn"
              onClick={() => handleEnterStore()}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-stone-100 hover:bg-white text-stone-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl flex items-center justify-center gap-3 group"
            >
              <span>Entrar al Catálogo ShopGlid</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <button
              id="welcome-featured-piece-btn"
              onClick={() => {
                playAcousticFeedback(soundEnabled, 440);
                navigate('/home/producto/cartera-tote-atelier');
              }}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-medium text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Pieza Insignia (€119)</span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
          </div>

          {/* Direct Category Quick Access */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-stone-400">
            <span className="text-[11px] uppercase tracking-widest text-stone-400 mr-2">
              Acceso Rápido:
            </span>
            <button
              onClick={() => handleEnterStore('carteras')}
              className="px-3 py-1 rounded-lg bg-stone-800/80 hover:bg-stone-700 hover:text-stone-100 text-stone-300 transition-colors border border-stone-700 text-xs"
            >
              Carteras (5)
            </button>
            <button
              onClick={() => handleEnterStore('morrales')}
              className="px-3 py-1 rounded-lg bg-stone-800/80 hover:bg-stone-700 hover:text-stone-100 text-stone-300 transition-colors border border-stone-700 text-xs"
            >
              Morrales (5)
            </button>
            <button
              onClick={() => handleEnterStore('billeteras')}
              className="px-3 py-1 rounded-lg bg-stone-800/80 hover:bg-stone-700 hover:text-stone-100 text-stone-300 transition-colors border border-stone-700 text-xs"
            >
              Billeteras (5)
            </button>
          </div>
        </section>
      </main>

      {/* Subtle Minimalist Atelier Footer */}
      <footer className="relative z-10 border-t border-stone-850 py-5 text-center text-xs text-stone-400 font-light flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-6 sm:px-10 w-full gap-2">
        <div className="flex items-center gap-2 text-stone-400 text-xs">
          <span>ShopGlid Studio · Edición Minimalista</span>
          <span>·</span>
          <span>Piel Genuina de Selección</span>
        </div>
        <p className="text-[11px] text-stone-400">
          Diseño esencial sin artificios © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
