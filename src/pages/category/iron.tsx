import { Layout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { Loading } from '@/components/ui';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';
import { NextPage } from 'next';

const IronPage:NextPage = () => {
    const { products, isLoading } = useProducts('/products?category=iron');

    return (
        <>
            <Layout title='Zar Ingeniería - Hierro' pageDescription={'Encuentra lo mejor en hierro'}>
                <Typography variant='h1' component={'h1'}>Hierro</Typography>
                <Typography variant='h2' sx={{ mb: 1 }}>Productos fabricados en hierro</Typography>
                {
                    isLoading
                    ? <Loading/>
                    : <ProductList products={products}/>
                }
            </Layout>
        </>
    )
}

export default IronPage