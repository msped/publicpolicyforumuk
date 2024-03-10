import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const menuContents = [
    {
        name: "Design",
        link: "design"
    },
    {
        name: "Collaborate",
        link: "collaborate"
    },
    {
        name: "Integrate",
        link: "integrate"
    },
    {
        name: "Pricing",
        link: "pricing"
    },
    {
        name: "Support",
        link: "support"
    },
]

const styles = {
    copyright: {
        textDecoration: 'underline',
        color: '#fff',
        '&:hover': {
            color: '#bfbfbf'
        }
    },
    footerContainer: {
        position: 'static',
        bottom: 0,
        flexGrow: 1,
        paddingTop: 3,
        width: '100%',
    }
}

function Copyright() {
    return (
        <Box sx={{ textAlign: {
            xs: 'center',
            md: 'left'
        }}}>
            <Typography variant="body2" fontSize={14}>
                {"Copyright © "}
                <Link color="inherit" href="/" sx={{...styles.copyright}}>
                    OpenPolicy
                </Link>{" "}
                {new Date().getFullYear()}
                {", All Rights Reserved."}
            </Typography>
        </Box>
    );
}

export default function index() {
    return (
        <Box sx={styles.footerContainer}>
            <AppBar position="static">
                <Toolbar sx={{ padding: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                                <Link href="/" aria-label='Home'>
                                    <Typography
                                        variant="h6"
                                        sx={{ flexGrow: 1 }}
                                        fontSize="1.5rem"
                                        fontWeight={700}
                                        color='#fff'
                                    >
                                        OPENPOLICY
                                    </Typography>
                                </Link>
                            </Stack>
                        </Grid>
                    
                        <Grid item xs={12}>
                            <Stack 
                                sx={{
                                    flexGrow: 1
                                }}
                                direction="row" 
                                spacing={2} 
                                justifyContent='center'
                            >
                                {menuContents.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`/${item.link}`}
                                        sx={{ 
                                            textDecoration: 'none',
                                            fontSize: '14px'
                                        }}
                                        color='#fff'
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider variant='middle' sx={{ borderColor: '#fff' }}/>
                        </Grid>

                        <Grid item container xs={12} spacing={2}>
                            <Grid item xs={12} md={6}>
                                {Copyright()}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ 
                                    display: 'flex',
                                    justifyContent: {
                                        xs: 'center',
                                        md: 'flex-end'
                                    }
                                }}>
                                    <Stack direction='row' spacing={2}>
                                        <IconButton
                                            aria-label='Twitter'
                                            sx={{color:'#fff'}}
                                        >
                                            <TwitterIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label='Facebook'
                                            sx={{color:'#fff'}}
                                        >
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label='Instagram' 
                                            sx={{color:'#fff'}} 
                                        >
                                            <InstagramIcon/>
                                        </IconButton>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
