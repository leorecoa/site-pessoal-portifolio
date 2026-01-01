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
  icon: React.ElementType;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ElementType;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}