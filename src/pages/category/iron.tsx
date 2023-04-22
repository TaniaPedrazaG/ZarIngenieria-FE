import { Layout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { useProducts } from '@/hooks';
import { NextPage } from 'next';

const IronPage:NextPage = () => {
    const { products, isLoading } = useProducts('/products?categoty=iron');

    return (
        <>
            <Layout title='Zar Ingeniería - Hierro' pageDescription={'Encuentra los mejores productos de Teslo para niños'}>
                <ProductList products={products}/>
            </Layout>
        </>
    )
}

export default IronPage