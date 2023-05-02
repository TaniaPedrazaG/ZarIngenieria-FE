import { GetServerSideProps } from 'next';
import { signIn, getSession } from 'next-auth/react';
import { AuthLayout } from '@/components/layouts'
import { useForm } from 'react-hook-form';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { validations } from '../../utils';

type FormData = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onLoginUser = async ({ email, password }: FormData) => {
        await signIn('credentials', { email, password });
    };

    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={handleSubmit(onLoginUser)} noValidate>
                <Box sx={{ width: 350, padding: '10px 20px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component='h1'>
                                Iniciar Sesión
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='email'
                                label={'Correo'}
                                variant={'filled'}
                                fullWidth
                                {...register('email', {
                                    required: 'Este campo es requerido',
                                    validate: validations.isEmail,
                                  })}
                                  error={!!errors.email}
                                  helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                typeof='password'
                                label={'Contraseña'}
                                variant={'filled'}
                                type={'password'}
                                fullWidth
                                {...register('password', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type='submit'
                                color='primary'
                                className='circular-btn'
                                size='large'
                                fullWidth
                            >
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    const session = await getSession({ req });

    const { p = '/' } = query;

    if (session) {
        return {
            redirect: {
            destination: p.toString(),
            permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

export default LoginPage