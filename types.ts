// Fix: Added React import to provide the React namespace required by React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}