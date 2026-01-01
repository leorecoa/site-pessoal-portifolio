
import React from 'react';
import Section from './Section';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 sticky top-32">
          <motion.span 
            className="text-indigo-400 font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Trajetória
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter font-display">
            Experiência <br />
            <span className="text-white/20 italic">& Evolução.</span>
          </h2>
          <p className="text-white/40 text-xl font-light leading-relaxed max-w-sm">
            Uma jornada marcada pela curiosidade constante e pela busca da perfeição técnica em cada linha de código.
          </p>
        </div>

        <div className="lg:col-span-7 relative pl-8 md:pl-20 py-10" ref={containerRef}>
          {/* Linha vertical de progresso */}
          <div className="absolute left-0 md:left-10 top-0 w-px h-full bg-white/5">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-indigo-500 via-cyan-400 to-pink-500"
            />
          </div>

          <div className="space-y-24">
            {EXPERIENCE.map((item, idx) => (
              <motion.div 
                key={idx}
                className="relative group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Indicador de nó na linha do tempo */}
                <div className="absolute -left-[33px] md:-left-[73px] top-0 w-16 h-16 flex items-center justify-center">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-black border-2 border-white/20 z-10 group-hover:border-indigo-500 group-hover:scale-125 transition-all duration-500"
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400/60 bg-white/5 px-4 py-1 rounded-full border border-white/5">
                    {item.year}
                  </span>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-white/5 text-white/50 group-hover:text-white transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                      <p className="text-sm text-white/30 font-bold">{item.company}</p>
                    </div>
                  </div>

                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-xl group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
