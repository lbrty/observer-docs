import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require("../../package.json")

export default defineConfig({
  lang: 'en-US',
  title: 'Observer',
  description: 'Help and support people in need',
  base: '/observer-docs/',

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig()
    },

    editLink: {
      pattern: 'https://github.com/lbrty/observer-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lbrty/observer' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Sultan Iman'
    },
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/lbrty/observer/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/lbrty/observer/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Observer?', link: '/guide/' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Allowed documents', link: '/guide/allowed-documents' },
        { text: 'Deploying', link: '/guide/deploying' },
        { text: 'Internationalization', link: '/guide/i18n' }
      ]
    },
    {
      text: 'Encryption',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/encryption/intro' },
        { text: 'Keys', link: '/guide/encryption/keys' },
        { text: 'Documents', link: '/guide/encryption/documents' },
      ]
    },
    {
      text: 'Security',
      collapsed: false,
      items: [
        { text: 'Audit logs', link: '/guide/audit-logs' },
      ]
    },
    {
      text: 'CLI',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
      ]
    }
  ]
}
