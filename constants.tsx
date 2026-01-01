
import React from 'react';
import { Lightbulb, Cpu, Layout, Code, TrendingUp } from 'lucide-react';
import { Project, TechItem, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Dashboard Prototype',
    description: 'A high-fidelity dashboard built with React and Tailwind, focused on real-time data visualization.',
    image: 'https://picsum.photos/seed/dash/800/600',
    tags: ['React', 'AI', 'Tailwind'],
    github: 'https://github.dev/leorecoa'
  },
  {
    id: '2',
    title: 'Neural Creative Engine',
    description: 'Experimental design tool that uses generative models to assist in UI layout discovery.',
    image: 'https://picsum.photos/seed/neural/800/600',
    tags: ['Next.js', 'PyTorch', 'Framer'],
    github: 'https://github.dev/leorecoa'
  },
  {
    id: '3',
    title: 'Minimalist E-commerce',
    description: 'Clean UX focused shopping experience with smooth micro-interactions.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['UI/UX', 'JavaScript', 'Design'],
    github: 'https://github.dev/leorecoa'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind', icon: '🌊' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Gemini AI', icon: '✨' },
  { name: 'Figma', icon: '📐' }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Ideia',
    description: 'Conceptualization of problems and identifying opportunities for digital solutions.',
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: 'IA',
    description: 'Using Generative AI to brainstorm, refactor code, and accelerate the creative loop.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: 'Prototipação',
    description: 'Quick iterations in Figma to define the visual language and user flow.',
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: 'Código',
    description: 'Implementing high-performance, accessible, and clean React codebases.',
    icon: <Code className="w-6 h-6" />
  },
  {
    title: 'Evolução',
    description: 'Constant learning, feedback cycles, and performance optimization.',
    icon: <TrendingUp className="w-6 h-6" />
  }
];
