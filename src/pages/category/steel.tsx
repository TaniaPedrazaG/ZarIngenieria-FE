import { Layout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { useProducts } from '@/hooks';
import { NextPage } from 'next';

const SteelPage:NextPage = () => {
    const { products, isLoading } = useProducts('/products?categoty=steel');

    return (
        <>
            <Layout title='Zar Ingeniería - Acero' pageDescription={'Encuentra los mejores productos de Teslo para niños'}>
                <ProductList products={products}/>
            </Layout>
        </>
    )
}

export default SteelPage