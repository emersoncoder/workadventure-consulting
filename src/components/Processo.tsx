import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../i18n/useLanguage';

export function Processo() {
  const { dictionary } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 border-y border-slate-800 bg-slate-950/85" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">{dictionary.process.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-bold">{dictionary.process.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dictionary.process.stages.map((etapa, index) => (
            <motion.article
              key={etapa.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="tech-card rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <span className="text-sm font-bold text-cyan-400">{etapa.number}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{etapa.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{etapa.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
