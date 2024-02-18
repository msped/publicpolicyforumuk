'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1565c0', // A professional blue for primary actions
        },
        secondary: {
            main: '#ff1744', // A striking red for urgent actions or highlights
        },
        background: {
            default: '#f5f5f5', // A light grey for background to keep the focus on content
            paper: '#ffffff', // White backgrounds for areas requiring user focus
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        button: {
            textTransform: 'none', // Keeps button text in regular case for readability
        },
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
