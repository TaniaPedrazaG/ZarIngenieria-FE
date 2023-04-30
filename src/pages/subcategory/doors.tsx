import { Layout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { Loading } from '@/components/ui';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';
import { NextPage } from 'next';

const DoorsPage:NextPage = () => {
    const { products, isLoading } = useProducts('/products?subcategory=doors');

    return (
        <>
            <Layout title='Zar Ingeniería - Hierro' pageDescription={'Encuentra lo mejor en hierro'}>
                <Typography variant='h1' component={'h1'}>Puertas</Typography>
                <Typography variant='h2' sx={{ mb: 1 }}>Las mejores puertas</Typography>
                {
                    isLoading
                    ? <Loading/>
                    : <ProductList products={products}/>
                }
            </Layout>
        </>
    )
}

export default DoorsPage