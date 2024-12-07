/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFD448',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],  // Adding Inter as default sans-serif font
            },
        },
    },
    plugins: [],
}