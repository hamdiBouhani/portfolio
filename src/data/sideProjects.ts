import type { SideProject } from '../types';

export const sideProjects: SideProject[] = [
  {
    name: 'goakt-actor-examples',
    description: 'This example demonstrates how to build a simple actor-based bank account using GoAkt v4.',
    url: 'https://github.com/hamdiBouhani/goakt-actor-examples',
    tags: ['Golang', 'actor-based system'],
  },
  {
    name: 'clojure-workspace',
    description:
      'Projects and scripts I implemented to learn and get familiar with Clojure — my first step into functional programming.',
    url: 'https://github.com/hamdiBouhani/clojure-workspace',
    tags: ['Clojure', 'Functional Programming'],
  },
  {
    name: 'rust-playground-project',
    description: 'A playground of projects and scripts I built while learning the Rust programming language.',
    url: 'https://github.com/hamdiBouhani/rust-playground-project',
    tags: ['Rust'],
  },
  {
    name: 'mongodb-data-migrate',
    description:
      'A package to perform versioned migrations on MongoDB using the official Go driver. Depends only on the standard library and the MongoDB Go Driver. Inspired by mongo-migrate.',
    url: 'https://github.com/hamdiBouhani/mongodb-data-migrate',
    tags: ['Go', 'MongoDB', 'Migrations'],
  },
];