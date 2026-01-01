
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <Section id="stack">
      <div className="text-center mb-20">
        <motion.span 
          className="text-indigo-400 font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Minhas Ferramentas
        </motion.span>
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech <span className="text-white/20 italic">Arsenal</span>
        </motion.h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {TECH_STACK.map((tech, idx) => (
          <motion.div
            key={tech.name}
            className="relative flex items-center gap-4 px-8 py-5 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 group cursor-default overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.05,
              borderColor: 'rgba(99, 102, 241, 0.4)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 20px 40px -20px rgba(99, 102, 241, 0.3)'
            }}
            transition={{ 
              delay: idx * 0.05, 
              type: 'spring', 
              stiffness: 400, 
              damping: 15 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-3 rounded-2xl bg-white/5 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
              <tech.icon className="w-6 h-6" />
            </div>

            <span className="relative z-10 font-bold text-lg tracking-tight text-white/40 group-hover:text-white transition-colors duration-500">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
