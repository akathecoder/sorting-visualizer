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
                accent: {
                    1: '#fafafa',
                    2: '#f2f2f2',
                    3: '#e6e6e6',
                    4: '#d9d9d9',
                    5: '#cccccc',
                    6: '#bfbfbf',
                    7: '#b3b3b3',
                    8: '#a6a6a6',
                    9: '#999999',
                    10: '#8c8c8c',

                    // 1: '#e3e3e3',
                    // 2: '#bfbfbf',
                },
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
