module.exports = {
	purge: {
		enabled: true,
		content: ['./popup.html', './popup.js']
	},
	darkMode: false,
	theme: {
		fontFamily: {
			sans: 'Lexend'
		},
		extend: {
			colors: {
				blue: {
					dark: '#1c1c1c',
					light: '#252525'
				},
				white: '#D3D3D3',
				pink: '#fe2a70',
				input: {
					bg: '#2E2E2E'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
