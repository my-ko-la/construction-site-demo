/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'backgroundColor': "#1f1f1f",
			},
		},
			fontFamily: {
				'chakra': ['Charka Petch', 'sans-serif'],
			}
	},
	plugins: [],
}
