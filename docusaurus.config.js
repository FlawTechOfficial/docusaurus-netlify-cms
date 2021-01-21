module.exports = {
  title: 'Flaw Tech Development',
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
          to: 'community', 
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
              to: 'docs/privacy-policy',
            },
            {
              label: 'Terms of Use',
              to: 'docs/terms-of-use',
            },
            {
              label: 'Cookies Policy',
              to: 'docs/cookies-policy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum Support',
              href: 'https://flaw.tech/t/support',
            },
            {
              label: 'Contact Us',
              to: 'community/email',
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
          sidebarPath: require.resolve('./docs-sidebar.js'),
          editUrl:
            'https://github.com/FlawTechOfficial/docusaurus-netlify-cms/edit/master/',
          showLastUpdateTime: true,
        },
        blog: {
          id: 'blog',
          routeBasePath: 'blog',
          path: 'blog',
          blogDescription: 'Our company\'s official Blog section',
          showReadingTime: true,
          editUrl:
            'https://github.com/FlawTechOfficial/docusaurus-netlify-cms/edit/master/blog/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2020-${new Date().getFullYear()} Flaw Tech Development. All Rights Reserved.`,
          },
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
