import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	site: 'https://30daysof.github.io',
	base: '/promptflow',
	trailingSlash: "always",
	
	integrations: [
		starlight({
			title: 'Promptflow Cookbook',
			logo: {
				light: './src/assets/logo.png',
				dark: './src/assets/logo.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/30DaysOf/promptflow',
				twitter: 'https://twitter.com/nitya',
				linkedin: 'https://linkedin.com/in/nityan',
				youtube: 'https://www.youtube.com/@NityaNarasimhan',
			},
			
			defaultLocale: 'root', // optional
			locales: {
			  root: {
				label: 'English',
				lang: 'en', // lang is required for root locales
			  },
			},

			sidebar: [
				{
					label: '1️⃣ | Fundamentals',
					autogenerate: { directory: 'week-1' },
				},
				{
					label: '2️⃣ | Developer Tools',
					autogenerate: { directory: 'week-2' },
				},
				{
					label: '3️⃣ | End-to-End App',
					items: [
						{ label: 'Overview', link: '/week-3/' },
					],
				},
				{
					label: '4️⃣ | Best Practices',
					items: [
						{ label: 'Overview', link: '/week-4/' },
					],
				},
			],
		}),

	],
});