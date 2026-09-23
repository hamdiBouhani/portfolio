import type { Experience } from '../types';

export const experience: Experience[] = [
{
    title: 'Back End Developer',
    company: 'Dealroom.co',
    type: 'Contract',
    period: 'Jan 2023 – Present',
    location: 'Amsterdam, Netherlands · Hybrid',
    description:
      'Currently engaged in a significant project to split the PHP monolith into Golang microservices. Actively contribute to infrastructure components and ensure efficiency and functionality through Infrastructure as Code (IaC).',
    tech: ['Golang', 'Terraform', 'GCP', 'GKE', 'Kubernetes'],
  },
  {
    title: 'Back End Developer',
    company: 'Target Energy Solutions',
    type: 'Full-time',
    period: 'Nov 2018 – Dec 2022',
    location: 'Tunis, Tunisia',
    description:
      "Contributed to multiple projects, notably the 'Iskan' project for the Oman Ministry of Housing, integrating functionalities and developing APIs in Golang. Also worked on 'Oxy Expense Sheet', 'Timesheet', 'Permits', and 'Contact ref-book'.",
    bullets: [
      'Contribute to software architecture design and develop distributed APIs (REST, gRPC, GraphQL).',
      'Write automated unit tests.',
      'Monitor and troubleshoot operational or application issues in production.',
      'Develop proof-of-concept work as part of the technical design process.',
      'Interact with teams of engineers from multiple disciplines.',
    ],
    tech: ['Golang', 'Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Docker', 'gRPC', 'Gin'],
  },
  {
    title: 'Back End Developer',
    company: 'Alliance Technologies',
    type: 'Full-time',
    period: 'Dec 2017 – Nov 2018',
    location: 'El Manar I, Tunis, Tunisia',
    description:
      'Contributed to software architecture design and development of software applications.',
    bullets: [
      'Monitor and troubleshoot application issues in production.',
      'Develop proof-of-concept work as part of the technical design process.',
    ],
    tech: ['Java', 'Spring Boot', 'Angular 5', 'PostgreSQL'],
  },
  {
    title: 'Research Internship',
    company: 'LARODEC Laboratory',
    type: 'Internship',
    period: 'Jan 2017 – Nov 2017',
    location: 'Le Bardo, Tunisia',
    description:
      'Explored Machine Learning and Genetic Algorithms. Implemented an experiment to test a new approach in automated negotiations for multi-agent systems.',
    bullets: [
      'Created a software agent that negotiates with multiple agents simultaneously using Java multi-threading and the DEIWO algorithm.',
      'Published research in the International Journal of Interactive Multimedia and Artificial Intelligence.',
    ],
    tech: ['Java', 'Machine Learning', 'Genetic Algorithms'],
  },
  {
    title: 'Internship',
    company: 'Alliance Technologies',
    type: 'Internship',
    period: 'Jan 2015 – Jun 2015',
    location: 'Tunis, Tunisia',
    description:
      'Design and implementation of a web application for Sodexo Tunisia Pass Restaurant Card using ASP.NET MVC5.',
    tech: ['ASP.NET MVC5'],
  },
];