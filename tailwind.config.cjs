module.exports = {
	content: ['./src/**/*/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svelte}'],
	theme: {
		extend: {
			borderWidth: {
				'hair': '1px', // Adjust the thickness as needed (smaller values for thinner lines)
			  },
			textColor: {
				'gradient': 'var(--accent-gradient)', // Replace with your actual gradient variable name
			  },
		},
	},
	plugins: [],
}
