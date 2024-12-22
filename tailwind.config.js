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
                secondary: '#FEF6E9',
                'custom-gray': 'rgba(165, 159, 159, 1)',
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
            backgroundImage: {
                'custom-gradient': 'linear-gradient(270deg, rgba(32, 27, 27, 0) 0%, rgba(32, 27, 27, 0.8) 100%)',
            },
        },
    },
    plugins: [],
}