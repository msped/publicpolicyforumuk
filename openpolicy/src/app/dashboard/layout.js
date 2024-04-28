"use client";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SideNav from './_components/SideNav';

export default function DashboardLayout({ children }) {

    return (
        <Container maxWidth='xl' sx={{ marginTop: 3, height: '80vh'}}>
            <Box display='flex' flexWrap='wrap'>
                <SideNav />
                <Box width='100%'>
                    {children}
                </Box>
            </Box>
        </Container>
    );
}
