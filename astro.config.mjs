// @ts-check
import { defineConfig } from 'astro/config';
import rehypeHeadingIds from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
	markdown: {
		rehypePlugins: [rehypeHeadingIds],
	},
});
