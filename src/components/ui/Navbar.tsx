import NextLink from "next/link"
import Image from "next/image";
import { useRouter } from "next/router";

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { AdminPanelSettingsOutlined } from "@mui/icons-material";

export const Navbar = () => {
    const { asPath } = useRouter();

    return (
        <AppBar>
            <Toolbar>
                <NextLink href={'/'} passHref legacyBehavior>
                    <Link display={'flex'} alignItems={'baseline'}>
                        <Image
                            src={'/logo.jpg'}
                            alt={'LOGO'}
                            width={50}
                            height={30}
                        />
                        <Typography variant="h5" fontWeight={500} sx={{ ml: 0.8 }}>| ZAR </Typography>
                        <Typography variant="h6" fontWeight={450} sx={{ ml: 0.5 }}>INGENIERÍA </Typography>
                        <Typography  fontWeight={400} sx={{ ml: 0.5 }}>S.A.S</Typography>
                    </Link>
                </NextLink>
                <Box flex={ 1 }/>
                <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
                    <NextLink href={'/category/steel'} passHref legacyBehavior>
                        <Link>
                            <Button color={asPath === '/category/steel' ? 'primary' : 'info'}>
                                ACERO
                            </Button>
                        </Link>
                    </NextLink>
                    <NextLink href={'/category/iron'} passHref legacyBehavior>
                        <Link>
                            <Button color={asPath === '/category/iron' ? 'primary' : 'info'}>
                                HIERRO
                            </Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box flex={ 1 }/>
                <NextLink href={'/admin/'} passHref legacyBehavior>
                    <Link>
                    <IconButton>
                        <AdminPanelSettingsOutlined/>
                    </IconButton>
                    </Link>
                </NextLink>
            </Toolbar>
        </AppBar>
    )
}
