import NextLink from "next/link";
import React from 'react'
import { AuthLayout } from '@/components/layouts'
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';

const LoginPage = () => {
    return (
        <AuthLayout title={'Iniciar Sesión'}>
            <Box sx={{ width: 350, padding: '10px 20px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component={'h1'}>Iniciar Sesión</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label={'Correo'} variant={'filled'} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label={'Contraseña'} variant={'filled'} type={'password'} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color='primary' className='circular-btn' size='large' fullWidth>Ingresar</Button>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default LoginPage