import { FC } from 'react';
import Head from 'next/head';
import { Navbar, SideMenu } from '../ui';
import { Box, Typography } from '@mui/material';

interface Props {
    title: string;
    subTitle: string;
    icon?: JSX.Element;
    children: JSX.Element | JSX.Element[];
}

export const AdminLayout: FC<Props> = ({ children, title, subTitle, icon }) => {
    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
        <nav>
            <Navbar/>
        </nav>
        <SideMenu />
        <main
            style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 40px',
            }}
        >
            <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>
                {icon} {title}
            </Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>
                {subTitle}
            </Typography>
            </Box>
            <Box className='fadeIn'>{children}</Box>
        </main>
        </>
    );
};
