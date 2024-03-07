"use client"

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// import { signIn, useSession } from "next-auth/react";

const menuContents = [
    {
        name: "Collaborate",
        link: "collaborate"
    },
    {
        name: "Review",
        link: "review"
    },
    {
        name: "Integrate",
        link: "integrate"
    },
    {
        name: "Support",
        link: "support"
    },
]

const styles = {
    menuHamburger: {
        display: {
            xs: 'block',
            md: 'none'
        },
        cursor: 'pointer'
    },
    accountMenuBox: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    accountAvatar: {
        width: 32,
        height: 32,
        mx: .5 
    },
    menuPaperProps: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        minWidth: '200px',
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    }
}

export default function Header() {
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('md')) 

    const [menuHamburger, setMenuHamburger] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const accountMenu = Boolean(anchorEl)
    // const { data: session, status } = useSession();

    const handleMenuNavigation = () => {
        setMenuHamburger(!menuHamburger)
        if (accountMenu) {
            handleAccountMenu();
        }
    }

    const handleAccountMenu = (event) => {
        if (accountMenu) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
        if (menuHamburger) {
            handleMenuNavigation()
        }
    };

    const handleClickAway = () => {
        setAnchorEl(null);
        setMenuHamburger(false)
    }

    const session = null

    const loginRegisterButtons = () => {
        return (
            <Stack direction='row' spacing={3} justifyContent='space-evenly'>
                <Button sx={{ color: '#fff' }}>
                    Login
                </Button>
                <Button variant='contained' sx={{ backgroundColor: '#C9B8F9', color: '#07081D' }}>
                    Register
                </Button>
            </Stack>
        )
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Box onClick={handleMenuNavigation} sx={styles.menuHamburger}>
                            <MenuIcon sx={{ marginX: 2 }}/>
                        </Box>
                        <Link href='/' aria-label="Home">
                            <Image
                                src='/logo.webp'
                                alt='OpenPolicy'
                                height={60}
                                width={60}
                            />
                        </Link>
                        <Link href="/" aria-label='Home'>
                            <Typography
                                variant="h6"
                                sx={{ 
                                    flexGrow: 1,
                                }}
                                fontSize="1.5rem"
                                fontWeight={700}
                            >
                                OPENPOLICY
                            </Typography>
                        </Link>

                        {/* Menu Desktop View */}
                        {isDesktop ? ( <Stack 
                            sx={{
                                flexGrow: 1,
                                display: 'flex'
                                
                            }}
                            direction="row" 
                            spacing={2} 
                            justifyContent='center'
                        >
                            {menuContents.map((item, index) => (
                                <Link key={index} href={`/${item.link}`}>{item.name}</Link>
                            ))}
                        </Stack>): 
                        <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}></Box>}

                        {/* Account Settings Desktop View */}
                        {session ? (
                        <Box>
                            <Box sx={styles.accountMenuBox}>
                                <Tooltip title="Account settings">
                                    <Stack direction='row' spacing={1}>
                                        <Avatar 
                                            sx={styles.accountAvatar} 
                                            alt={session.user.username}
                                            src={session.picture}
                                            onClick={handleAccountMenu}
                                            aria-controls={accountMenu ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={accountMenu ? 'true' : undefined}
                                        />
                                    </Stack>
                                </Tooltip>
                            </Box>
                            {isDesktop && (<Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={accountMenu}
                                onClose={handleAccountMenu}
                                onClick={handleAccountMenu}
                                slotProps={{
                                    elevation: 0,
                                    sx: styles.menuPaperProps,
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                sx={{ display: 'flex' }}
                            >
                                <MenuItem href='/dashboard' sx={{ color: "#fff" }}>
                                    Dashboard
                                </MenuItem>
                                <MenuItem href='/settings' sx={{ color: "#fff" }}>
                                    Settings
                                </MenuItem>
                                <MenuItem sx={{ color: "#fff" }}>
                                    Logout
                                </MenuItem>
                            </Menu>)}
                        </Box>):  
                            isDesktop && (
                            <Box sx={{ display: 'flex' }}>
                                {loginRegisterButtons()}
                            </Box>)
                        }
                        

                    </Toolbar>

                    {/* Menu Mobile View */}
                    { !isDesktop && (
                    <Collapse 
                        in={menuHamburger}
                        aria-label='menu'
                        sx={{
                            minHeight: '200px',
                            backgroundColor: 'inherit'
                        }}
                    >
                        <Box sx={{
                            display: 'inline'
                        }}>
                            <List>
                                {menuContents.map((item, index) => (
                                    <ListItemButton key={index} component={Link} href={`/${item.link}`}>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                ))}
                                {!session &&  (
                                    <>
                                    <Divider variant='middle' sx={{ borderColor: '#fff' }}/>
                                    <Box sx={{ marginY: 1 }}>
                                        {loginRegisterButtons()}
                                    </Box>
                                    </>
                                    )}
                            </List>
                        </Box>
                    </Collapse>)}

                    {/*  Account Settings Mobile View */}
                    {session && !isDesktop && <Collapse in={accountMenu} sx={{
                        minHeight: '200px',
                        backgroundColor: 'inherit'
                    }}>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <List>
                                <ListItemButton component={Link} href="/dashbord">
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                                <ListItemButton component={Link} href="/settings">
                                    <ListItemText primary="Settings" />
                                </ListItemButton>
                                <ListItemButton component={Link} href="/logout">
                                    <ListItemText primary="Logout" />
                                </ListItemButton>
                            </List>
                        </Box>
                    </Collapse>}
                </AppBar>
            </Box>
        </ClickAwayListener>
    );
}