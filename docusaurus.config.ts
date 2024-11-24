import type * as Preset from '@docusaurus/preset-classic'
import type {Config} from '@docusaurus/types'
import {themes as prismThemes} from 'prism-react-renderer'

const BASE_URL = process.env.BASE_URL ?? ''

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Website for Blogs and Others',
    tagline: 'Publishing words is cool',
    favicon: 'img/favicon.ico',
    url: 'https://www.mengtaoxin.com',
    baseUrl: BASE_URL,
    organizationName: 'mengtaoxin',
    projectName: 'site.github.io',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
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
                {
                    to: BASE_URL + '/blog',
                    label: 'Blog',
                    position: 'left'
                },
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
