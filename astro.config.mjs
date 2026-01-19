// @ts-check
import { defineConfig } from 'astro/config';
import rehypeHeadingIds from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
	site: 'https://moritalous.github.io',
	base: '/morikaz-blog',
	markdown: {
		rehypePlugins: [rehypeHeadingIds],
	},
});
