import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// Subtle acoustic click synthesizer using Web Audio API
const playAcousticFeedback = (freq: number = 320) => {
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
    osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // Audio fallback if restricted
  }
};

interface CollectionItem {
  id: string;
  category: 'carteras' | 'morrales' | 'billeteras';
  index: string;
  tag: string;
  title: string;
  material: string;
  price: string;
  image: string;
  accentColor: string;
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: 'cartera-tote-atelier',
    category: 'carteras',
    index: '01',
    tag: 'CARTERAS',
    title: 'Carteras Atelier',
    material: 'Piel vacuna de grano natural y estructura arquitectónica',
    price: 'Desde 95 €',
    image: '/images/cartera-tote-atelier.jpg',
    accentColor: '#B87333',
  },
  {
    id: 'morral-nomada-cuero',
    category: 'morrales',
    index: '02',
    tag: 'MORRALES',
    title: 'Morrales Nómada',
    material: 'Piel pull-up rústica con tratamiento de cera natural',
    price: 'Desde 145 €',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85',
    accentColor: '#8B5A2B',
  },
  {
    id: 'billetera-bifold-clasica',
    category: 'billeteras',
    index: '03',
    tag: 'BILLETERAS',
    title: 'Billeteras Esenciales',
    material: 'Perfil ultradelgado en cuero curtido vegetal con cantos bruñidos a mano',
    price: 'Desde 39 €',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=85',
    accentColor: '#A0522D',
  },
];

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleNavigate = (path: string, freq = 420) => {
    playAcousticFeedback(freq);
    navigate(path);
  };

  return (
    <div
      id="welcome-screen"
      className="min-h-screen bg-[#0d0d0c] text-stone-100 flex flex-col justify-between font-sans selection:bg-stone-100 selection:text-stone-950 relative overflow-hidden px-6 sm:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 lg:py-10"
    >
      {/* Dynamic Ambient Background Sheen */}
      <motion.div
        animate={{
          backgroundColor:
            hoveredIdx !== null ? COLLECTIONS[hoveredIdx].accentColor : '#8C5332',
          opacity: hoveredIdx !== null ? 0.08 : 0.04,
          scale: hoveredIdx !== null ? 1.15 : 1,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute -top-32 right-1/4 w-[750px] h-[750px] rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[600px] h-[600px] rounded-full bg-stone-800/15 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header - Spacious & Prominent Typography */}
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-[1800px] mx-auto flex items-center justify-between pb-6 sm:pb-8 border-b border-stone-800/80"
      >
        {/* Much larger, prominent brand name as requested */}
        <Link
          to="/welcome"
          onClick={() => playAcousticFeedback(380)}
          className="group flex items-center gap-4 cursor-pointer"
          title="ShopGlid Atelier"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-stone-100 text-stone-950 flex items-center justify-center p-2 transition-transform group-hover:scale-105 duration-300 shadow-md">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 10h18" />
              <path d="M14 14.5a2.5 2.5 0 0 1 2.5-2.5H21" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.38em] uppercase text-stone-50 group-hover:text-white transition-colors">
              ShopGlid
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-stone-400 font-light hidden sm:block">
              Atelier de Marroquinería
            </span>
          </div>
        </Link>

        {/* Minimalist direct enter link */}
        <motion.button
          id="welcome-skip-btn"
          onClick={() => handleNavigate('/home', 460)}
          whileHover={{ x: 3 }}
          className="group flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.25em] text-stone-400 hover:text-stone-100 transition-colors py-2 px-3"
        >
          <span className="font-light">Entrar a la tienda</span>
          <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-100 group-hover:translate-x-1 transition-all" />
        </motion.button>
      </motion.header>

      {/* Main Expansive Stage */}
      <main className="relative z-10 w-full max-w-[1800px] mx-auto my-auto py-6 sm:py-8 lg:py-10 flex flex-col justify-center gap-8 sm:gap-10 lg:gap-12 flex-1">
        {/* Expansive Headline Section using full width gracefully */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-stone-400 font-medium"
            >
              <span>Colección Permanente</span>
              <span className="w-8 h-px bg-stone-700" />
              <span>Edición 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-50 leading-[1.08]"
            >
              La forma esencial,{' '}
              <span className="font-normal text-stone-200">
                esculpida en piel pura.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-stone-400 text-sm sm:text-base font-light leading-relaxed max-w-md lg:text-right"
          >
            Siluetas arquitectónicas creadas para el uso diario sin ornamentos estériles ni piezas superfluas.
          </motion.p>
        </div>

        {/* Expansive 3-Column Visual Stage across the full screen */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
          {COLLECTIONS.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            const isDimmmed = isAnyHovered && !isHovered;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isDimmmed ? 0.45 : 1,
                  y: isHovered ? -8 : 0,
                  scale: isHovered ? 1.015 : 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: isAnyHovered ? 0 : 0.25 + idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  playAcousticFeedback(330 + idx * 45);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleNavigate(`/home?categoria=${item.category}`, 400 + idx * 50)}
                className="group cursor-pointer flex flex-col relative"
              >
                {/* Image Showcase Container with Majestic Proportions */}
                <div className="relative aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 xl:aspect-[3/3.8] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-900 border border-stone-800/90 group-hover:border-stone-600 transition-colors duration-500 shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Subtle Top Gradient Scrim */}
                  <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/45 via-black/15 to-transparent pointer-events-none z-10" />

                  {/* Bottom Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/35 to-transparent pointer-events-none transition-opacity duration-500 z-10" />

                  {/* Top Bar inside Card - More Transparent Frosted Pill */}
                  <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 shadow-sm transition-colors group-hover:bg-black/40 group-hover:border-white/30">
                      <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.2em] text-stone-300 drop-shadow-sm">
                        {item.index}
                      </span>
                      <span className="text-stone-400/80 text-xs">/</span>
                      <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.28em] uppercase text-white drop-shadow-sm">
                        {item.tag}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom Editorial Information */}
                  <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 space-y-2 z-20">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light text-stone-100 group-hover:text-white tracking-wide transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-400 font-light line-clamp-2 leading-relaxed">
                      {item.material}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-800/80 text-xs">
                      <span className="font-mono text-stone-300 text-[11px] sm:text-xs">
                        {item.price}
                      </span>
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 group-hover:text-stone-100 transition-colors flex items-center gap-1 font-medium">
                        Ver Colección <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>

      {/* Understated Minimalist Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-20 w-full max-w-[1800px] mx-auto pt-5 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400 font-light"
      >
        <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-stone-400">
          ShopGlid Studio · Marroquinería de Autor
        </span>
        <span className="text-[10px] sm:text-[11px] text-stone-400">
          Diseño esencial © {new Date().getFullYear()}
        </span>
      </motion.footer>
    </div>
  );
};
