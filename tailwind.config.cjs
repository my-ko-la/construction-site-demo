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
	plugins: [
		function ({addComponents}) {
			addComponents({
				'.debug': {
					border: '1px dotted red'
				},
				'.toBeShown': {
					opacity: '0',
					filter: 'blur(5px)',
					transition: 'all 0.3s'
				},
				'.Left': {
					transform: 'translateX(-100$)'
				},
				'.Right': {
					transform: 'translateX(100%)'
				},
				'.Up': {
					transform: 'translateY(100%)'
				},
				'.Down': {
					transform: 'translateY(-100%)'
				},
				'.Shown': {
					opacity: '1',
					filter: 'blur(0)',
					transform: 'translateX(0) translateY(0)'
				}
			})
		}
	],
}
