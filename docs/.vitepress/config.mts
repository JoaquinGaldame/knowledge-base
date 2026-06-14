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
      { text: 'Overview', link: '/software-engineering/' },
      { text: 'Fundamentals', link: '/software-engineering/fundamentals/' },
      {
        text: 'Design Patterns',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/software-engineering/design-patterns/' },
          {
            text: 'Creational',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/software-engineering/design-patterns/creational/' },
              { text: 'Factory Method', link: '/software-engineering/design-patterns/creational/factory-method' },
              { text: 'Abstract Factory', link: '/software-engineering/design-patterns/creational/abstract-factory' },
              { text: 'Builder', link: '/software-engineering/design-patterns/creational/builder' },
              { text: 'Singleton', link: '/software-engineering/design-patterns/creational/singleton' },
              { text: 'Prototype', link: '/software-engineering/design-patterns/creational/prototype' }
            ]
          },
          {
            text: 'Structural',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/software-engineering/design-patterns/structural/' },
              { text: 'Adapter', link: '/software-engineering/design-patterns/structural/adapter' },
              { text: 'Facade', link: '/software-engineering/design-patterns/structural/facade' },
              { text: 'Decorator', link: '/software-engineering/design-patterns/structural/decorator' },
              { text: 'Composite', link: '/software-engineering/design-patterns/structural/composite' },
              { text: 'Flyweight', link: '/software-engineering/design-patterns/structural/flyweight' },
              { text: 'Proxy', link: '/software-engineering/design-patterns/structural/proxy' }
            ]
          },
          {
            text: 'Behavioral',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/software-engineering/design-patterns/behavioral/' },
              { text: 'Strategy', link: '/software-engineering/design-patterns/behavioral/strategy' },
              { text: 'Observer', link: '/software-engineering/design-patterns/behavioral/observer' },
              { text: 'Command', link: '/software-engineering/design-patterns/behavioral/command' },
              { text: 'Chain of Responsibility', link: '/software-engineering/design-patterns/behavioral/chain-of-responsibility' },
              { text: 'Iterator', link: '/software-engineering/design-patterns/behavioral/iterator' },
              { text: 'Mediator', link: '/software-engineering/design-patterns/behavioral/mediator' },
              { text: 'Memento', link: '/software-engineering/design-patterns/behavioral/memento' },
              { text: 'State', link: '/software-engineering/design-patterns/behavioral/state' },
              { text: 'Strategy', link: '/software-engineering/design-patterns/behavioral/strategy' },
              { text: 'Template Method', link: '/software-engineering/design-patterns/behavioral/template-method' },
              { text: 'Visitor', link: '/software-engineering/design-patterns/behavioral/visitor' }
            ]
          }
        ]
      },
      {
        text: 'Software Quality',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/software-engineering/software-quality/' },
          { 
            text: 'Conceptos',
            collapsed: true,
            items: [
              { text: 'Problema de Definición', link: '/software-engineering/software-quality/01-conceptos-fundacionales/01-el-problema-de-definir-calidad'}
            ]
          },
          {
            text: 'Modelos de Calidad',
            collapsed: true,
            items: [
              { text: 'McCall & Boehm', link: '/software-engineering/software-quality/02-modelos-de-calidad/01-mccall-y-boehm' },
              { text: 'ISO 9126 & Squale', link: '/software-engineering/software-quality/02-modelos-de-calidad/02-iso-9126-y-squarE' },
            ]
          },
          {
            text: 'Factores de Calidad',
            collapsed: true,
            items: [
              { text: 'Factores Externos', link: '/software-engineering/software-quality/03-factores-de-calidad/02-factores-externos' },
              { text: 'Factores Internos', link: '/software-engineering/software-quality/03-factores-de-calidad/03-factores-internos' },
              { text: 'Relaciones y Priorización Estratégica', link: '/software-engineering/software-quality/03-factores-de-calidad/04-relaciones-y-priorizacion-estrategica' },
            ]
          },
          {
            text: 'Medición y Métricas',
            collapsed: true,
            items: [
              { text: 'Fundamentos de Medición', link: '/software-engineering/software-quality/04-medicion-y-metricas/01-fundamentos-de-medicion'},
              { text: '', link: '/software-engineering/software-quality/04-medicion-y-metricas/02-metricas-de-defectos' },
            ]
          },
          {
            text: 'Gestión de Defectos',
            collapsed: true,
            items: [
              { text: 'Terminología y Relaciones Causales', link: '/software-engineering/software-quality/05-gestion-de-defectos/01-terminologia-y-relaciones-causales' },
              { text: 'Estrategias de Tratamiento', link: '/software-engineering/software-quality/05-gestion-de-defectos/02-estrategias-de-tratamiento' },
            ]
          },
          {
            text: 'Estrategía y Gestión',
            collapsed: true,
            items: [
              { text: 'Perspectiva del Proveedor', link: '/software-engineering/software-quality/06-estrategia-y-gestion/01-perspectiva-del-proveedor' },
              { text: 'Perspectiva del Cliente', link: '/software-engineering/software-quality/06-estrategia-y-gestion/02-perspectiva-del-cliente' },
            ]
          },
          {
            text: 'Marcos de Trabajo',
            collapsed: true,
            items: [
              { text: 'Taxonomía de Marcos', link: '/software-engineering/software-quality/07-marcos-de-trabajo-y-mejora-de-procesos/01-taxonomia-de-marcos' },
              { text: 'CMM y CMMI', link: '/software-engineering/software-quality/07-marcos-de-trabajo-y-mejora-de-procesos/02-cmm-y-cmmi' },
              { text: 'ISO 9001 y Tickit', link: '/software-engineering/software-quality/07-marcos-de-trabajo-y-mejora-de-procesos/03-iso-9001-y-tickit' },
              { text: 'Spice ISO 15504', link: '/software-engineering/software-quality/07-marcos-de-trabajo-y-mejora-de-procesos/04-spice-iso-15504' },
              { text: 'Otros Marcos', link: '/software-engineering/software-quality/07-marcos-de-trabajo-y-mejora-de-procesos/05-otros-marcos' },
              { text: 'Críticas y Desafíos', link: '/software-engineering/software-quality/07-marcos-de-trabajo-y-mejora-de-procesos/06-criticas-y-desafios' },
            ]
          },
          {
            text: 'Metodos Ágiles y Calidad',
            collapsed: true,
            items: [
              { text: 'Impacto de Enfoques', link: '/software-engineering/software-quality/08-metodos-agiles-y-calidad/01-impacto-de-enfoques-agiles-e-hibridos' },
            ]
          },
          {
            text: 'Referencias',
            collapsed: true,
            items: [
              { text: 'Glosario Unificado', link: '/software-engineering/software-quality/09-referencias/01-glosario-unificado' },
              { text: 'Bilbiografía Integrada', link: '/software-engineering/software-quality/09-referencias/02-bibliografía-integrada' },
            ]
          }
        ]
      }  
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
    nav: [ // NO SE TOCA NAV
      { text: 'Home', link: '/' },
      { text: 'Roadmaps', link: '/roadmaps/' },
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
