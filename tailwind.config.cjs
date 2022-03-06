const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
		fontFamily: {
			sans: ['Fira Code', 'sans-serif']
		}
	},

	plugins: [
		require('tailwind-nord')
	],
};

module.exports = config;
