export type EmploymentType = 'Contract' | 'Full-time' | 'Internship' | 'Freelance' | 'Part-time';

export interface Experience {
  title: string;
  company: string;
  type: EmploymentType;
  period: string;
  location: string;
  description: string;
  bullets?: string[];
  tech?: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  detail: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
  summary: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SideProject {
  name: string;
  description: string;
  url: string;
  tags: string[];
}