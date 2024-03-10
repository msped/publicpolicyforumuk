'use client';

import { Bricolage_Grotesque } from 'next/font/google';

import { createTheme } from '@mui/material/styles';

const bric = Bricolage_Grotesque({ subsets: ["latin"] });

const theme = createTheme({
    palette: {
        primary: {
            main: '#07081D',
        },
        secondary: {
            main: '#ff1744',
        },
        background: {
            default: '#07081D',
            paper: '#07081D'
        },
        pastel: {
            main: '#F1DDD9'
        }
    },
    typography: {
        fontFamily: bric.style.fontFamily,
        button: {
            textTransform: "none", // Keeps button text in regular case for readability
        },
        color: "#fff"
    },
    components: {
        // Customizations for specific components can go here
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8, // Rounded corners for buttons
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined', // Consistent text field styling
                margin: 'normal',
            },
        },
        // Additional component customizations can be added as needed
    },
});

export default theme;
