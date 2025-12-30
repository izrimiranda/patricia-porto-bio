/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                nude: {
                    50: '#faf7f5', // Approximate nude/light beige color
                }
            }
        },
    },
    plugins: [],
}
