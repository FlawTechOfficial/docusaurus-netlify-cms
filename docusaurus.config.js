module.exports = {
  title: 'Flaw Tech',
  tagline: 'Documentation Section',
  url: 'https://flaw.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'flawtech', // Usually your GitHub org/user name.
  projectName: 'docusaurus-netlify-cms', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Flaw Tech',
      logo: {
        alt: 'Flaw Tech Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://flaw.tech/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/FlawTechOfficial',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'Docs',
              href: 'https://docs.flaw.tech',
            },
            {
              label: 'Forum',
              href: 'https://flaw.tech',
            },
            {
              label: 'Blog',
              href: 'https://flaw.tech/blog',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/FlawTechOfficial',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/FlawDotTech',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/FlawTechOfficial',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()-1}-${new Date().getFullYear()} Flaw Tech Development. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/FlawTechOfficial/docusaurus-netlify-cms/edit/master/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
