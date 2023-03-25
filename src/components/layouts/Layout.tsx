import Head from "next/head"

import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"
import { Navbar } from "../ui"

interface Props extends PropsWithChildren {
    title?: string
}

export const Layout:FC<Props> = ({ title = 'Zar Ingenieria', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
                <meta name="og:title" content={title} />
            </Head>
            <nav>
                <Navbar/>
            </nav>
            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                {children}
            </main>
            <footer>
            </footer>
        </Box>
    )
}
