// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sunrooporg.github.io',
	base: '/mary-playbook',
	integrations: [
		starlight({
			title: 'UP Marketing Playbook',
			description: 'Marketing operating system and playbook for Utility Profit. Built for Mary.',
			customCss: ['./src/styles/custom.css'],
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			sidebar: [
				{ label: 'Welcome', slug: 'welcome' },
				{
					label: 'The Operating System',
					items: [
						{ label: 'The Business', slug: 'operating-system/the-business' },
						{ label: 'Unit Economics', slug: 'operating-system/unit-economics' },
						{ label: 'CAC & LTV', slug: 'operating-system/cac-and-ltv' },
						{ label: 'Market & ICP', slug: 'operating-system/market-and-icp' },
						{ label: 'Seasonality', slug: 'operating-system/seasonality' },
					],
				},
				{
					label: 'The Playbook',
					items: [
						{ label: 'Who We Sell To', slug: 'playbook/who-we-sell-to' },
						{ label: 'Why They Buy', slug: 'playbook/why-they-buy' },
						{ label: 'The Pitch', slug: 'playbook/the-pitch' },
						{ label: 'Objections & Competition', slug: 'playbook/objections-and-competition' },
						{
							label: 'Channels',
							items: [
								{ label: 'Overview', slug: 'playbook/channels' },
								{ label: 'Email Outbound', slug: 'playbook/channels/email-outbound' },
								{ label: 'Direct Mail', slug: 'playbook/channels/direct-mail' },
								{ label: 'Conferences', slug: 'playbook/channels/conferences' },
								{ label: 'Paid Social (Meta)', slug: 'playbook/channels/paid-social' },
								{ label: 'API Partner Outbound', slug: 'playbook/channels/api-partner-outbound' },
							],
						},
						{ label: 'Tools', slug: 'playbook/tools' },
						{ label: 'How We Measure', slug: 'playbook/how-we-measure' },
					],
				},
				{
					label: 'Operating',
					items: [
						{ label: 'Quarterly Plan', slug: 'operating/quarterly-plan' },
						{ label: 'Frameworks', slug: 'operating/frameworks' },
						{ label: 'Reviews', slug: 'operating/reviews' },
					],
				},
			],
		}),
	],
});
