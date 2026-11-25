import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../i18n/useLanguage';

export function WorkAdventure() {
  const { dictionary } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workadventure" className="py-24 max-w-7xl mx-auto px-6" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{dictionary.work.title} <span className="text-cyan-400">WorkAdventure?</span></h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            {dictionary.work.description}
          </p>
          <ul className="space-y-4 mb-8">
            {dictionary.work.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3 text-slate-300">
                <span className="text-amber-500 font-bold">✓</span> {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden shadow-2xl"
        >
            <img
              src="/capa.webp"
              alt={dictionary.work.imageAlt}
              width="800"
              height="800"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
              <span className="rounded-full border border-cyan-400/30 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300">
                {dictionary.work.badge}
              </span>
            </div>
        </motion.div>
      </div>
    </section>
  );
}