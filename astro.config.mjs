// @ts-check
import { defineConfig } from 'astro/config';
import rehypeHeadingIds from 'rehype-autolink-headings';
import { visit } from 'unist-util-visit';

const basePath = '/morikaz-blog';

// Plugin to prepend base path to image URLs
function rehypeBaseUrlImages() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'img' && node.properties.src) {
				const src = node.properties.src;
				if (typeof src === 'string' && src.startsWith('/images/')) {
					node.properties.src = basePath + src;
				}
			}
		});
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://moritalous.github.io',
	base: basePath,
	markdown: {
		rehypePlugins: [rehypeHeadingIds, rehypeBaseUrlImages],
	},
});
