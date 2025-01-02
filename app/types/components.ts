import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type Experience = {
  startDate: string;
  endDate: string;
  company?: string;
  title: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  images?: string[];
  skills?: string[];
  team?: string;
  location?: string;
  type?: string;
}; 

export type Profile = {
  name: string;
  description: string;
  image: string;
}

export interface Social {
  name: string;
  link: string;
  icon: IconDefinition;
}

export interface Bubble {
  id: number;
  x: number;
  y: number;
  label: string;
  color: string;
  icon: string;
  size: number;
  fx?: number | null;
  fy?: number | null;
}

export type Interests = {
  label: string;
  color: string;
  icon: string;
  size: number;
}

export type Projects = {
  id: number;
  name: string;
  description: string;
  link: string;
}


