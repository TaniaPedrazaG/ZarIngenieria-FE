import { Layout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { Loading } from '@/components/ui';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';
import { NextPage } from 'next';

const SteelPage:NextPage = () => {
    const { products, isLoading } = useProducts('/products?category=steel');

    return (
        <>
            <Layout title='Zar Ingeniería - Acero' pageDescription={'Encuentra lo mejor en acero'}>
                <Typography variant='h1' component={'h1'}>Acero</Typography>
                <Typography variant='h2' sx={{ mb: 1 }}>Productos fabricados en acero</Typography>
                {
                    isLoading
                    ? <Loading/>
                    : <ProductList products={products}/>
                }
            </Layout>
        </>
    )
}

export default SteelPage