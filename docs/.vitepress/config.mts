import { defineConfig, type DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Main',
    items: [
      { text: 'Home', link: '/' },
      { text: 'Roadmaps', link: '/roadmaps/' }
    ]
  },
  {
    text: 'Testing',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/testing/' },
      { text: 'Roadmap', link: '/testing/roadmap' },
      { text: 'Fundamentos de Testing', link: '/testing/01-fundamentos-de-testing' },
      { text: 'Tipos de Testing', link: '/testing/02-tipos-de-testing' },
      { text: 'Estrategias de Testing y TDD', link: '/testing/03-estrategias-de-testing-y-tdd' },
      { text: 'Testing Backend', link: '/testing/04-testing-backend' },
      { text: 'Testing Frontend', link: '/testing/05-testing-frontend' },
      { text: 'Testing en Sistemas Reales', link: '/testing/06-testing-sistemas-reales' },
      { text: 'Testing en CI/CD y Produccion', link: '/testing/07-testing-ci-cd-produccion' },
      { text: 'TDD Profesional', link: '/testing/08-tdd-profesional' },
      { text: 'Patrones y Anti-Patrones', link: '/testing/09-patrones-anti-patrones' },
      { text: 'Laboratorio Practico', link: '/testing/10-laboratorio-practico' }
    ]
  },
  {
    text: 'Architecture',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/architecture/' },
      { text: 'ADR', link: '/architecture/adr/' },
      { text: 'Clean Architecture', link: '/architecture/clean-architecture/' },
      { text: 'Event-Driven Architecture', link: '/architecture/event-driven/' },
      { text: 'Hexagonal Architecture', link: '/architecture/hexagonal/' },
      { text: 'Layered Architecture', link: '/architecture/layered/' },
      { text: 'Microservices', link: '/architecture/microservices/' },
      { text: 'Monoliths', link: '/architecture/monoliths/' },
      { text: 'Onion Architecture', link: '/architecture/onion/' }
    ]
  },
  {
    text: 'System Design',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/system-design/' },
      { text: 'Caching', link: '/system-design/caching/' },
      { text: 'Consistency', link: '/system-design/consistency/' },
      { text: 'Distributed Transactions', link: '/system-design/distributed-transactions/' },
      { text: 'Load Balacing', link: '/system-design/load-balacing/' },
      { text: 'Messaging', link: '/system-design/messaging/' },
      { text: 'Observability', link: '/system-design/observability/' },
      { text: 'Scalability', link: '/system-design/scalability/' }
    ]
  },
  {
    text: 'Backend',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/backend/' },
      { text: 'Best Practices', link: '/backend/best-practices/' },
      { text: 'Frameworks', link: '/backend/frameworks/' },
      { text: 'Languages', link: '/backend/languages/' },
      { text: 'API Design', link: '/backend/api-design/' },
      { text: 'Architecture', link: '/backend/architecture/' },
      { text: 'Patterns', link: '/backend/patterns/' },
      { text: 'Performance', link: '/backend/performance/' },
      { text: 'Principles', link: '/backend/principles/' },
      { text: 'Security', link: '/backend/security/' },
      { text: 'Testing', link: '/backend/testing/' }
    ]
  },
  {
    text: 'Frontend',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/frontend/' },
      { text: 'Accesibility', link: '/frontend/accesibility/' },
      { text: 'Angular', link: '/frontend/angular/' },
      { text: 'Best Practices', link: '/frontend/best-practices/' },
      { text: 'JavaScript', link: '/frontend/javascript/' },
      { text: 'React', link: '/frontend/react/' },
      { text: 'TypeScript', link: '/frontend/typescript/' }
    ]
  },
  {
    text: 'Databases',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/databases/' },
      { text: 'Indexing', link: '/databases/indexing/' },
      { text: 'MongoDB', link: '/databases/mongodb/' },
      { text: 'Performance', link: '/databases/performance/' },
      { text: 'PostgreSQL', link: '/databases/postgresql/' },
      { text: 'SQL Server', link: '/databases/sql-server/' },
      { text: 'Transactions', link: '/databases/transactions/' }
    ]
  },
  {
    text: 'Cloud',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/cloud/' },
      { text: 'AWS', link: '/cloud/aws/' },
      { text: 'Docker', link: '/cloud/docker/' },
      { text: 'Kubernetes', link: '/cloud/kubernetes/' },
      { text: 'Observability', link: '/cloud/observability/' },
      { text: 'Terraform', link: '/cloud/terraform/' }
    ]
  },
  {
    text: 'Blockchain',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/blockchain/' },
      { text: 'Fundamentals', link: '/blockchain/fundamentals/' },
      { text: 'Cryptography', link: '/blockchain/cryptography/' },
      { text: 'Architecture', link: '/blockchain/architecture/' },
      { text: 'Backend Integration', link: '/blockchain/backend-integration/' },
      { text: 'Smart Contracts', link: '/blockchain/smart-contracts/' },
      { text: 'Solidity', link: '/blockchain/solidity/' },
      { text: 'Security', link: '/blockchain/security/' },
      { text: 'Testing', link: '/blockchain/testing/' },
      { text: 'Projects', link: '/blockchain/projects/' },
      { text: 'DeFi', link: '/blockchain/defi/' },
      { text: 'Ethereum', link: '/blockchain/ethereum/' },
      { text: 'EVM', link: '/blockchain/evm/' },
      { text: 'Interoperability', link: '/blockchain/interoperability/' },
      { text: 'Layer 2', link: '/blockchain/layer2/' },
      { text: 'Tooling', link: '/blockchain/tooling/' }
    ]
  },
  {
    text: 'Computer Science',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/computer-science/' },
      { text: 'Algorithms', link: '/computer-science/algorithms/' },
      { text: 'Artificial Intelligence', link: '/computer-science/artificial-intelligence/' },
      { text: 'Compilers', link: '/computer-science/compilers/' },
      { text: 'Data Structures', link: '/computer-science/data-structures/' },
      { text: 'Databases', link: '/computer-science/databases/' },
      { text: 'Distributed Systems', link: '/computer-science/distributed-systems/' },
      { text: 'Theory of Computation', link: '/computer-science/theory-of-computation/' }
    ]
  },
  {
    text: 'Software Engineering',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/software-engineer/' },
      { text: 'Design Patterns', link: '/software-engineer/design-patterns/' },
      { text: 'Behavioral Patterns', link: '/software-engineer/design-patterns/behavioral/' },
      { text: 'Creational Patterns', link: '/software-engineer/design-patterns/creational/' },
      { text: 'Structural Patterns', link: '/software-engineer/design-patterns/structural/' }
    ]
  },
  {
    text: 'Projects',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/projects/' },
      { text: 'ADR', link: '/projects/adr/' },
      { text: 'Experience', link: '/projects/experience/' },
      { text: 'Chat Platform', link: '/projects/chat-platform/' },
      { text: 'Event-Driven Reservation Orchestrator', link: '/projects/event-driven-reservation-orchestrator/' },
      { text: 'IRB Gestion', link: '/projects/irb-gestion/' },
      { text: 'Point of Sales', link: '/projects/point-of-sales/' },
      { text: 'Smartirecontrol', link: '/projects/smartirecontrol/' }
    ]
  },
  {
    text: 'Career',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/career/' },
      { text: 'Code Reviews', link: '/career/code-reviews/' },
      { text: 'Communications', link: '/career/communications/' },
      { text: 'Engineering Principles', link: '/career/engineering-principles/' },
      { text: 'Interviews', link: '/career/interviews/' },
      { text: 'Seniority', link: '/career/seniority/' },
      { text: 'Technical Leadership', link: '/career/technical-leadership/' }
    ]
  },
  {
    text: 'References',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/references/' },
      { text: 'Books', link: '/references/books/' },
      { text: 'Certifications', link: '/references/certifications/' },
      { text: 'Standards', link: '/references/standards/' }
    ]
  }
]

export default defineConfig({
  title: 'Joaquin Galdame Docs',
  description: 'Biblioteca tecnica personal sobre testing, arquitectura, backend, frontend y sistemas.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roadmaps', link: '/roadmaps/' },
      { text: 'Testing', link: '/testing/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Backend', link: '/backend/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Blockchain', link: '/blockchain/' },
      { text: 'Software Engineering', link: '/software-engineer/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Portfolio', link: 'https://joaquingaldame.dev' }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JoaquinGaldame' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/joaquin-galdame' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0',
      copyright: 'Copyright © 2026 Joaquin Galdame'
    }
  }
})
