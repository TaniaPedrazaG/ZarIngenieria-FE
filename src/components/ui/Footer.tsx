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
                    alignItems: 'center'
                }}
            >
                <Box flex={ 1 }/>
                <Typography variant="caption">
                    © 2023 Zar Ingeniería. Todos los derechos reservados.
                </Typography>
                <Box flex={ 1 }/>
            </Box>
        </Box>
    )
}
