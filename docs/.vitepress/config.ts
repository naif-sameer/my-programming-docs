import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Naif docs 🚀',
  description: 'Naif sameer web tools and libraries docs.',

  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/naif-sameer' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} for Naif Sameer`,
    },
  },
});

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: 'Changelog',
      link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
    },
  ];
}

function sidebar() {
  return [
    {
      text: 'html',
      collapsed: true,
      collapsible: true,
      items: [{ text: 'html', link: '/html/' }],
    },

    {
      text: 'css',
      collapsed: true,
      collapsible: true,
      items: [{ text: 'css', link: '/css/' }],
    },

    {
      text: 'javascript',
      collapsed: true,
      collapsible: true,
      items: [{ text: 'javascript', link: '/javascript/' }],
    },

    {
      text: 'Php',
      collapsed: true,
      collapsible: true,
      items: [
        { text: 'php', link: '/php/' },
        { text: 'laravel', link: '/php/laravel' },
        { text: 'best practice', link: '/php/laravel-best-practices' },
      ],
    },

    {
      text: 'issues',
      collapsed: true,
      collapsible: true,
      items: [
        { text: 'axios', link: '/issues/axios' },
        { text: 'css', link: '/issues/css' },
        { text: 'laravel-php', link: '/issues/laravel-php' },
        { text: 'typescript', link: '/issues/typescript' },
      ],
    },
  ];
}
