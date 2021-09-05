const constants = {
    header: '4.5rem',
    sidebar: '24rem',
};

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
            height: {
                header: constants.header,
            },
            width: {
                sidebar: constants.sidebar,
            },
            inset: {
                header: constants.header,
            },
            spacing: {
                header: constants.header,
                sidebar: constants.sidebar,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
