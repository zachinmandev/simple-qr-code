/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			colors: {
				blue: {
					dark: 'hsl(218, 44%, 22%)',
					grayish: 'hsl(220, 15%, 55%)',
				},
				gray: {
					light: 'hsl(212, 45%, 89%)',
				},
				white: 'hsl(0, 0%, 100%)',
			},
		},
		fontFamily: {
			sans: 'Outfit, san-serif',
		},
	},
	plugins: [],
};
