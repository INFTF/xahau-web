// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    starlight({
      title: 'Xahau Docs',
      description: 'Documentation for the Xahau blockchain',
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 2,
      },
      editLink: {
        baseUrl: 'https://github.com/xahau-network/docs/edit/main/src/content/',
      },
      components: {
        PageFrame: './src/layouts/DocsLayout.astro',
        TwoColumnContent: './src/components/DocsTwoColumnContent.astro',
        PageSidebar: './src/components/DocsPageSidebar.astro',
      },
      sidebar: [
        'docs',
        'docs/what-is-different',
        'docs/hooks',
        {
          label: 'Concepts',
          items: [
            'docs/concepts',
            {
              label: 'Introduction',
              autogenerate: { directory: 'docs/concepts/introduction' }, 
            },
            'docs/concepts/terminology'
          ]
        },
        {
          label: 'Get started', 
          items: [
            'docs',
            'docs/what-is-different',
            'docs/hooks',
            
          ],
        },
        {
          label: 'Features',
          autogenerate: { directory: 'docs/features' },
        },
        {
          label: 'Infrastructure',
          autogenerate: { directory: 'docs/infrastructure' },
        },
        {
          label: 'Technical',
          autogenerate: { directory: 'docs/technical' },
        },
        {
          label: 'Support',
          autogenerate: { directory: 'docs/support' },
        },
      ],
    }),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
    site: 'https://www.xahau.network/'
});