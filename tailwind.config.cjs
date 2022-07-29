/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
		'./src/components/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				disparoduplo: {
					primary: '#1c1917',
					secondary: '#f5f5f4',
					accent: '#e0f2fe',
					neutral: '#d6d3d1',
					'base-100': '#FFFFFF',
					info: '#57C2EF',
					success: '#149071',
					warning: '#FCBC1D',
					error: '#F7646E',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
