import Head from "next/head"

import { FC, PropsWithChildren } from "react"

import { Box } from "@mui/material"
import { Footer, Navbar, SideMenu } from "../ui"

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
            <SideMenu/>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Box>
    )
}
