import NextLink from "next/link"

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import Image from "next/image";

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href={'/'} passHref legacyBehavior>
                    <Link display={'flex'} alignItems={'center'}>
                        <Typography variant="h6">Zar Ingenieria</Typography>
                    </Link>
                </NextLink>
                <Box flex={ 1 }/>
                <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
                    <NextLink href={'/category/kid'} passHref legacyBehavior>
                        <Link>
                            <Image
                              src={'/logo.jpg'}
                              alt={'LOGO'}
                              width={45}
                              height={25}
                            />
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
