module.exports = {
  title: 'Flaw Tech',
  tagline: 'All the help you need to understand Flaw Tech better',
  url: 'https://dev.flaw.tech',
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
          to: 'community/support', 
          label: 'Community', 
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
              to: 'docs',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Forum',
              href: 'https://flaw.tech',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: 'docs/legal-privacy-policy',
            },
            {
              label: 'Terms of Use',
              to: 'docs/legal-terms-of-use',
            },
            {
              label: 'Cookies Policy',
              to: 'docs/legal-cookies-policy',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Us',
              to: 'support',
            },
          ],
        },
        {
          title: 'Connect',
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
      logo: {
        alt: 'Flaw Tech Logo',
        src: 'img/logo-text.png',
        href: 'https://flaw.tech',
      },
      copyright: `Copyright © 2020-${new Date().getFullYear()} Flaw Tech Development. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'docs',
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/FlawTechOfficial/docusaurus-netlify-cms/edit/master/',
          showLastUpdateTime: true,
        },
        blog: {
          id: 'blog',
          routeBasePath: 'blog',
          path: 'blog',
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
  plugins: [
    ['@docusaurus/plugin-content-docs', {
      id: 'community',
      routeBasePath: 'community',
      path: 'community',
      sidebarPath: require.resolve('./community-sidebar.js'),
      editUrl:
            'https://github.com/FlawTechOfficial/docusaurus-netlify-cms/edit/master/',
      showLastUpdateTime: true,
    }],
  ],
};
