/** @type {import('tailwindcss').Config} */

const animationsObject = {
	'.debug': {
		border: '1px dotted red'
	},
	
	'.Left': {
		transform: 'translateX(-100%)'
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
}

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
				'.notshown': {
					opacity: '0',
					filter: 'blur(5px)',
					transition: 'all 0.3s'
				},
			})
		},
		function ({addComponents}) {
			addComponents({
				'.shown': {
					opacity: '1',
					filter: 'blur(0)',
					transition: 'translateX(0)', 
					transition: 'translateY(0)'
				},
			})
		},
		function ({addComponents}) {
			addComponents({
				'.Left': {
					transform: "translateX(-1000px)"
				},
			})
		},
		function ({addComponents}) {
			addComponents({
				'.Right': {
					transform: "translateX(1000px)"
				},
			})
		},
		function ({addComponents}) {
			addComponents({
				'.Down': {
					transform: "translateY(-1000px)"
				},
			})
		},
		function ({addComponents}) {
			addComponents({
				'.Up': {
					transform: "translateY(1000px)"
				},
			})
		}	
	],
}
