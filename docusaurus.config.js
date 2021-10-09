const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'GitCoin Knowledge Base',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gitcoin.co', // Usually your GitHub org/user name.
  projectName: 'gitcoin-kb', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN', 'zh-TW', 'ro', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-CN': {
        label: '中文（简体）',
      },
      'zh-TW': {
        label: '中文（繁體）'
      },
      ro: {
        label: 'romanian',
      },
      es: {
        label: 'spanish'
      }
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ethlibrary/gkb/edit/main/',
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
        title: 'Knowledge Base',
        logo: {
          alt: 'GitCoin Knowledge Base',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/getting-started', label: 'Documentation', position: 'right'},
          {
            href: 'https://github.com/ethlibrary/gkb',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ethlibrary/gkb',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} gitcoin.co. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
