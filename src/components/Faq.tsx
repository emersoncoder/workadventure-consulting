import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../i18n/useLanguage';

export function Faq() {
  const { dictionary } = useLanguage();
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="py-24 px-6" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">{dictionary.faq.eyebrow}</p>
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold">{dictionary.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {dictionary.faq.questions.map((item, index) => {
            const expanded = aberto === index;
            return (
              <article key={item.question} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-white"
                    aria-expanded={expanded}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setAberto(expanded ? null : index)}
                  >
                    {item.question}
                    <span aria-hidden="true" className="text-2xl text-amber-400">{expanded ? '−' : '+'}</span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.p
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden px-6 pb-6 leading-relaxed text-slate-400"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
