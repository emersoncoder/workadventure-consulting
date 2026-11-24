import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  const skills = [
    "AWS & Cloud", "Full Stack", "Arquitetura", "Segurança", "DevOps & CI/CD", 
    "Docker & K8s", "Clean Code", "IA & ML", "Software Livre", "Linux & BSD", 
    "PHP", "JavaScript", "React", "Laravel", "MySQL", "MongoDB"
  ];

  return (
    <section className="pt-4 pb-16 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div 
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-slate-950/50 p-8 md:p-12 rounded-3xl border border-slate-800/80 shadow-2xl group"
      >
        {/* O Brilho (Spotlight) */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245, 158, 11, 0.1), transparent 40%)`,
          }}
        />

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-3 relative z-10">
          <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
          Sobre Mim
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
          {/* ... Restante do conteúdo do Sobre igual ao anterior ... */}
          <div className="text-slate-400 leading-relaxed space-y-4 text-lg text-justify">
            <p>Com mais de uma década de experiência...</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Qualificações Técnicas</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700 rounded-lg hover:border-amber-500 hover:text-amber-400 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}