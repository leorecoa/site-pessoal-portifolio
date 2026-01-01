
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <Section id="stack">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>
        <motion.p
          className="text-white/40 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          As ferramentas que utilizo para dar vida às ideias.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {TECH_STACK.map((tech, idx) => (
          <motion.div
            key={tech.name}
            className="relative flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 group cursor-default overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              borderColor: 'rgba(99, 102, 241, 0.4)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }}
            transition={{ delay: idx * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Efeito de brilho interno sutil no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Ícone com animação de pulso e rotação */}
            <motion.span
              className="text-2xl z-10"
              variants={{
                hover: {
                  scale: [1, 1.3, 1.15],
                  rotate: [0, -10, 10, 0],
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }
                }
              }}
              whileHover="hover"
            >
              {(() => {
                const Icon = tech.icon;
                return <Icon />;
              })()}
            </motion.span>

            {/* Nome da tecnologia com transição para branco */}
            <span className="relative z-10 font-bold tracking-tight text-white/30 group-hover:text-white transition-colors duration-500">
              {tech.name}
            </span>

            {/* Partícula decorativa sutil */}
            <motion.div
              className="absolute -right-2 -top-2 w-8 h-8 bg-indigo-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
