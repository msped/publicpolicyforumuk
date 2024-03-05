'use client';

import { Bricolage_Grotesque } from 'next/font/google';

import { createTheme } from '@mui/material/styles';

const bric = Bricolage_Grotesque({ subsets: ["latin"] });

const theme = createTheme({
    palette: {
        primary: {
            main: '#07081D', // A professional blue for primary actions
        },
        secondary: {
            main: '#ff1744', // A striking red for urgent actions or highlights
        },
        background: {
            default: '#07081D', // A light grey for background to keep the focus on content
            paper: '#07081D', // White backgrounds for areas requiring user focus
        },
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
