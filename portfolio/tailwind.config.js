/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        title: "title 3s ease-out forwards",
        fadeLeft: "fadeLeft 3s ease-in-out forwards",
				fadeRight: "fadeRight 3s ease-in-out forwards"
      },
      keyframes: {
        title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
        fadeLeft: {
					"0%": {
						transform: "translateX(100%)",
						opacity: 0,
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: 1,
					},
					"100%": {
						opacity: 0,
					},
				},
				fadeRight: {
					"0%": {
						transform: "translateX(-100%)",
						opacity: 0,
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: 1,
					},
					"100%": {
						opacity: 0,
					},
				},
      }
    },
  },
  plugins: [],
}
