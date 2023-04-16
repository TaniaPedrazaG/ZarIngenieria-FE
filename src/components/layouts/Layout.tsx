import Head from "next/head"

import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"
import { Navbar } from "../ui"

interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const Layout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                {imageFullUrl && (
                    <meta name="og:image" content={imageFullUrl} />
                )}
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
