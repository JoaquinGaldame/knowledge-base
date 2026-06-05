import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Joaquin Galdame Docs",
  description: "Biblioteca técnica personal sobre testing, arquitectura, backend, frontend y sistemas.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roadmaps', link: '/roadmaps/' },
      { text: 'Testing', link: '/testing/' },
      { text: 'Software Engineering', link: '/software-engineering/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Portfolio', link: 'https://joaquingaldame.dev' }
    ],
    sidebar: [
      {
        text: 'Main',
        items: [
          { text: 'Roadmaps', link: '/roadmaps/' },
          { text: 'Testing', link: '/testing/' },
          { text: 'Software Engineering', link: '/software-engineering/' },
          { text: 'Architecture', link: '/architecture/' },
          { text: 'System Design', link: '/system-design/' },
          { text: 'Backend', link: '/backend/' },
          { text: 'Frontend', link: '/frontend/' },
          { text: 'Databases', link: '/databases/' },
          { text: 'Cloud', link: '/cloud/' },
          { text: 'Computer Science', link: '/computer-science/' },
          { text: 'Projects', link: '/projects/' },
          { text: 'Career', link: '/career/' },
          { text: 'References', link: '/references/' }
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
