module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: '#8a00d4',
                primary: '#d527b7',
                primaryLight: '#f782c2',
                secondary: '#f9c46b',
                accent: '#e3e3e3',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
