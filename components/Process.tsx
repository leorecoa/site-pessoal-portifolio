
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <Section id="process">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Como eu crio</h2>
        <p className="text-white/40">Meu fluxo de trabalho otimizado para qualidade e velocidade.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={idx}
            className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="mb-6 w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
              {step.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
              {step.description}
            </p>

            <div className="absolute -bottom-2 -right-2 text-8xl font-black text-white/[0.02] pointer-events-none group-hover:text-indigo-500/[0.05] transition-colors">
              0{idx + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Process;
