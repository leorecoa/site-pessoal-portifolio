
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <Section id="stack">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        <p className="text-white/40">As ferramentas que utilizo para dar vida às ideias.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {TECH_STACK.map((tech, idx) => (
          <motion.div
            key={tech.name}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <span className="text-2xl group-hover:animate-bounce">{tech.icon}</span>
            <span className="font-bold tracking-tight text-white/60 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
