import type * as Preset from '@docusaurus/preset-classic'
import type {Config} from '@docusaurus/types'
import {themes as prismThemes} from 'prism-react-renderer'

const BASE_URL = process.env.BASE_URL ?? ''

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'My Website for Blogs',
    tagline: 'Publishing words is cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://www.mengtaoxin.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: BASE_URL,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'mengtaoxin',
    projectName: 'site.github.io',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    blogSidebarCount: 'ALL',
                    showReadingTime: false,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: `Mengtao's Website`,
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {to: BASE_URL + '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/mengtaoxin/site',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'About',
                            to: BASE_URL + '/docs/about',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'IMDB',
                            href: 'https://www.imdb.com/user/ur167379440',
                        },
                        {
                            label: 'GoodReads',
                            href: 'https://www.goodreads.com/user/show/81445634-mengtao',
                        },
                        {
                            label: 'Steam',
                            href: 'https://steamcommunity.com/id/mengtao-steam',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/mengtaoxin',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Mengtao Xin. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
}

export default config
