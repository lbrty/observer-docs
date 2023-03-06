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
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/$' },
    { text: 'Configs', link: '/guide/configuration', activeMatch: '/guide/configuration' },
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
        { text: 'Supporting project', link: '/guide/supporting-project' },
      ]
    },
    {
      text: 'Guide',
      items: [
        { text: 'Tech', link: '/guide/tech' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' },
        { text: 'Invite only mode', link: '/guide/invite-only-mode' },
        { text: 'Allowed documents', link: '/guide/allowed-documents' },
        { text: 'Internationalization', link: '/guide/i18n' },
        { text: 'Development', link: '/guide/dev/setup' },
      ]
    },
    {
      text: 'Security',
      collapsed: false,
      items: [
        { text: 'Audit logs', link: '/guide/audit-logs' },
        { text: 'Session handling', link: '/guide/sessions' },
        { text: 'Two factor authentication', link: '/guide/otp' },
        { text: 'Permissions', link: '/guide/permissions' },
      ]
    },
    {
      text: 'Encryption',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/encryption/intro' },
        { text: 'Keys', link: '/guide/encryption/keys' },
        { text: 'Keychain', link: '/guide/encryption/keychain' },
        { text: 'Documents', link: '/guide/encryption/documents' },
      ]
    },
    {
      text: 'CLI',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/cli/' },
        { text: 'Keys', link: '/guide/encryption/keys' },
        { text: 'Database migrations', link: '/guide/cli/migrations' },
        { text: 'Dev server', link: '/guide/cli/server' },
        { text: 'OpenAPI', link: '/guide/cli/openapi' },
      ]
    },
  ]
}
