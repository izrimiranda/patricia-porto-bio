/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            colors: {
                nude: {
                    50: '#fcfaf8',
                    100: '#f7f3ef',
                    200: '#efe6dd',
                    300: '#e3d2c2',
                    400: '#d3b6a0',
                    800: '#735b4c',
                    900: '#5e4b3f',
                }
            }
        },
    },
    plugins: [],
}
