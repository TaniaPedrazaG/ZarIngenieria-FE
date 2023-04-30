import NextLink from "next/link"
import Image from "next/image";
import { Link, Box, Divider, Typography, Tooltip } from "@mui/material"
import { Facebook, FacebookOutlined, Instagram, Twitter } from "@mui/icons-material"

export const Footer = () => {
    return (
        <Box>
            <Box
                display={'flex'}
                
                sx={{
                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                    alignItems: 'center'
                }}
            >
                <Typography variant="caption">
                    © 2023 Zar Ingeniería. Todos los derechos reservados.
                </Typography>
                <Box flex={ 1 }/>
                <Box display={'flex'} flexDirection={'row'}>
                    <div style={{ padding: '0px 10px' }}>
                        <NextLink href={''} passHref legacyBehavior>
                            <Link color="#fff">
                                <Tooltip title={'Facebook'} arrow placement="top">
                                    <Facebook />
                                </Tooltip>
                            </Link>
                        </NextLink>
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <NextLink href={''} passHref legacyBehavior>
                            <Link color="#fff">
                                <Tooltip title={'Twitter'} arrow placement="top">
                                    <Twitter />
                                </Tooltip>
                            </Link>
                        </NextLink>
                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <NextLink href={''} passHref legacyBehavior>
                            <Link color="#fff">
                                <Tooltip title={'Instagram'} arrow placement="top">
                                    <Instagram />
                                </Tooltip>
                            </Link>
                        </NextLink>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}
