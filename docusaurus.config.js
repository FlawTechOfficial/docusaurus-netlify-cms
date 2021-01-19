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
        href: 'https://flaw.tech',
        alt: 'Flaw Tech Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://flaw.tech', 
          label: 'Forum', 
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
              href: 'https://dev.flaw.tech/docs',
            },
            {
              label: 'Forum',
              href: 'https://flaw.tech',
            },
            {
              label: 'Blog',
              href: 'https://dev.flaw.tech/blog',
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
      copyright: `Copyright © 2020-${new Date().getFullYear()} Flaw Tech Development. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/FlawTechOfficial/docusaurus-netlify-cms/edit/master/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/FlawTechOfficial/docusaurus-netlify-cms/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
