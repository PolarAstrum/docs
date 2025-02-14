// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PolarAstrum Plugins',
    url: 'https://github.com/PolarAstrum',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },
    plugins: [],
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                indexPages: false,
                hashed: true,
                language: ["en", "zh"],
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],
    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/'
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            navbar: {
                hideOnScroll: false,
                title: 'PolarAstrum Plugins',
                logo: {
                    src: 'img/icon.png',
                },
                items: [],
            },
            footer: {
                copyright: `Copyright © 2022 ~ ${new Date().getFullYear()} <b style="color: #0180c4">PolarAstrum Software</b> All Rights Reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['java', 'kotlin', 'groovy', 'properties', 'bash'],
            },
        }),
};

export default {
    stylesheets: [
      {
        href: 'katex/katex.min.css',
        type: 'text/css',
      },
    ],
  };

module.exports = config;
