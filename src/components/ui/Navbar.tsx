import { useContext } from "react";
import NextLink from "next/link"
import Image from "next/image";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts";
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { CategoryOutlined } from "@mui/icons-material";

export const Navbar = () => {
    const { asPath } = useRouter();
    const { toogleSideMenu } = useContext(UiContext)

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
                <Box
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    <NextLink href={'/products'} passHref legacyBehavior>
                        <Link>
                            <Button
                                startIcon={<CategoryOutlined/>}
                                color={asPath === '/products' ? 'primary' : 'info'}
                            >
                                Productos
                            </Button>
                        </Link>
                    </NextLink>
                </Box>
                <IconButton onClick={toogleSideMenu}>
                    <MenuOutlinedIcon color="primary"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
