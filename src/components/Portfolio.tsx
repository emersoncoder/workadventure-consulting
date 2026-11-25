import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../i18n/useLanguage';

export function Portfolio() {
  const { dictionary } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 bg-slate-950/85 border-y border-slate-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{dictionary.portfolio.title}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">{dictionary.portfolio.subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dictionary.portfolio.projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="tech-card group relative min-h-80 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-7 text-left"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-cyan-400"></div>
              <span className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400">
                {proj.tag}
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{proj.title}</h3>
              <p className="mt-4 leading-relaxed text-slate-400">{proj.description}</p>
              <div className="absolute bottom-7 left-7 right-7 border-t border-slate-800 pt-5 text-sm font-medium text-cyan-300">
                {proj.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}