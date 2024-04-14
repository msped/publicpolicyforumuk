"use client"

import { OrganizationSwitcher } from "@clerk/nextjs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideNav() {
    const pathname = usePathname();

    return (
        <Stack direction='column' spacing={2} sx={{
            padding: 1,
            width: '225px',
            alignItems: 'flex-start',
        }}>
            <OrganizationSwitcher />
            <Link href='/documents/new' passHref>
                <Button
                    sx={{
                        display: 'flex',
                        color: '#000',
                        backgroundColor: '#C9B8F9',
                        ':hover': {
                            bgcolor: '#8862f7',
                            color: '#fff'
                        },
                        fontWeight: pathname.includes('/new') ? "700" : "400"
                    }}
                    startIcon={<AddIcon />}
                >
                    New document
                </Button>
            </Link>
            <Link href='/documents/documents' passHref>
            <Button
                sx={{
                    display: 'flex',
                    color: '#fff',
                    fontWeight: pathname.includes('/documents') ? "700" : "400"
                }}
                startIcon={pathname.includes('/documents') ? <ArticleIcon/> : <ArticleOutlinedIcon />}
            >
                Documents
            </Button>
            </Link>
            <Link href='/documents/favourites' passHref>
            <Button
                sx={{
                    display: 'flex',
                    color: '#fff',
                    fontWeight: pathname.includes('/favourites') ? "700" : "400"
                }}
                startIcon={pathname.includes('/favourites') ? <StarIcon/> : <StarBorderIcon />}
            >
                Favourites
            </Button>
            </Link>
        </Stack>
    )
}
