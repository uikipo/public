// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kdx.nightcord.com.de',
	integrations: [
		starlight({
			title: 'KanadeDX',
			social: {
				discord: "https://discord.gg/DR5zBEb47a",
				telegram: "https://t.me/KanadeDX",
				github: "https://github.com/KanadeDX/Public",
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'start' },
				},
				{
					label: 'Information',
					autogenerate: { directory: 'general' },
				},
			],

			logo: {
				src: './src/assets/kanade.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],

			// Set English as the default language for this site.
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				root: {
					label: 'English',
					lang: 'en',
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				zh: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
		}),
	],
});
