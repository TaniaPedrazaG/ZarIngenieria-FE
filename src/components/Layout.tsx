import Head from "next/head"
import { Login } from "./login"
import { Navbar } from "./navbar"
import { Products } from "./products/Products"

export const Layout = () => {
    return (
        <>
            <Head>
                <title>{'Zar Ingenieria'}</title>
                <meta name='author' content='Zar Ingenieria'></meta>
                <meta name='description' content={'Zar Ingenieria'}></meta>
                <meta name='keywords' content={'Zar Ingenieria'}></meta>
            </Head>
            <Navbar/>
            <Login/>
            <Products/>
        </>
    )
}
