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
                secondary: '#FEF6E9'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],  // Adding Inter as default sans-serif font
            },
            screens: {
                sm: '640px',  // Small screens
                'min-sm': '749px',
                md: '768px',  // Medium screens
                'semi-md': '900px',
                lg: '1024px', // Large screens
                'max-lg': '1395px',
            },
        },
    },
    plugins: [],
}