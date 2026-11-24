import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "AWS & Cloud", "Full Stack", "Arquitetura", "Segurança", "DevOps & CI/CD", 
    "Docker & K8s", "Clean Code", "IA & ML", "Software Livre", "Linux & BSD", 
    "PHP", "JavaScript", "React", "Laravel", "MySQL", "MongoDB"
  ];

  return (
    <section className="pt-4 pb-16 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-950/50 p-8 md:p-12 rounded-3xl border border-slate-800/80 shadow-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-3">
          <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
          Sobre Mim
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="text-slate-400 leading-relaxed space-y-4 text-lg text-justify">
            <p>
              Com mais de uma década de experiência na área de tecnologia da informação, minha jornada profissional tem sido marcada pelo desenvolvimento de soluções Web eficientes e pela criação de infraestruturas em nuvem seguras. Atualmente, na <strong className="text-slate-200">Expresso Tecnologia</strong>, destaco-me pela implementação de práticas <strong className="text-amber-400">Clean Code</strong>.
            </p>
            <p>
              Minha expertise técnica inclui um domínio profundo em linguagens como <strong className="text-slate-200">PHP e JavaScript</strong>. Sou um defensor ativo do software livre, o que me permite contribuir com a comunidade e estar sempre atualizado com as inovações do setor.
            </p>
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