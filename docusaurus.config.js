// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lit-cn.startrace.games',
  tagline: "翻译持续中",
  url: 'https://lit-cn.startrace.games',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
 organizationName: 'STARTRACEX',
  projectName: 'lit-cn',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/docs",
          editUrl:
            'https://github.com/STARTRACEX/lit-cn/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'lit-cn.startrace.games',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: '中文文档',
          },
          {
            position: 'left',
            label: '教程',
            href: "https://lit.dev/tutorials/"
          },
          {
            position: 'left',
            label: 'Playaround',
            href:"https://lit.dev/playground/"
          },
          {
            type: "dropdown",
            label: "链接",
            position: "right",
            items: [
              {
                href: 'https://guide.startrace.games/',
                label: 'Guide',
              },
              {
                href: 'https://docs.startrace.games/',
                label: 'Docs',
              },
              {
                href: 'https://next.startrace.games/',
                label: 'Next',
              },
            ]
          },
          {
            to: 'https://github.com/STARTRACEX/lit-cn',
            label: ' ',
            position: 'right',
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Lit',
            items: [
              {
                label: '网站',
                href: '//lit.dev/',
              },
              {
                label: '文档',
                href: '//lit.dev/docs',
              },
              {
                label: '中文文档',
                to: '/docs',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://space.bilibili.com/372446173',
              },
              {
                label: 'Steam',
                href: 'https://steamcommunity.com/id/startracefez/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/STARTRACEX/guide',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://www.docusaurus.io/',
              },
              {
                label: 'Guide',
                href: 'https://guide.startrace.games/',
              },
              {
                label: 'Docs',
                href: 'https://docs.startrace.games/',
              },
              {
                label: 'Next',
                href: 'https://next.startrace.games/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} STARTRACEX (Built with docusaurus).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
