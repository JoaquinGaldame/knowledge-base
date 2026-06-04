import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Joaquin Galdame Docs",
  description: "Biblioteca técnica personal sobre testing, arquitectura, backend, frontend y sistemas.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: "Testing", link: "/testing/"  },
      { text: 'Portfolio', link: 'https://joaquingaldame.dev' }
    ],

    sidebar: [
      {
        text: 'Testing',
        items: [
          { text: 'Inicio', link: '/testing/' },
          { text: 'Roadmap', link: '/testing/roadmap' },
          { text: '01 - Fundamentos', link: '/testing/01-fundamentos-de-testing' },
          { text: '02 - Tipos de Testing', link: '/testing/02-tipos-de-testing' },
          { text: '03 - Estrategias y TDD', link: '/testing/03-estrategias-de-testing-y-tdd' },
          { text: '04 - Testing Backend', link: '/testing/04-testing-backend' },
          { text: '05 - Testing Frontend', link: '/testing/05-testing-frontend' },
          { text: '06 - Sistemas Reales', link: '/testing/06-testing-sistemas-reales' },
          { text: '07 - Test CI/CD & Production', link: '/testing/07-testing-ci-cd-produccion.md' },
          { text: '08 - TDD Profesional', link: '/testing/08-tdd-profesional.md' },
          { text: '09 - Patrones y Anti-Patrones', link: '/testing/09-patrones-anti-patrones.md' },
          { text: '10 - Laboratorio Práctico', link: '/testing/10-laboratorio-practico.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JoaquinGaldame' },
      { icon: 'linkedin', link: 'www.linkedin.com/in/joaquin-galdame' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0',
      copyright: 'Copyright © 2026 Joaquín Galdame'
    }
  }
})
