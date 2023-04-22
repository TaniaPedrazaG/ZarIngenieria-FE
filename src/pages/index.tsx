import { NextPage } from 'next';

import { Layout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';

const HomePage:NextPage = () => {
  const { products, isLoading } = useProducts('/products');

  return (
    <>
      <Layout title='Zar Ingeniería S.A.S' pageDescription={'Los mejores productos de la industria de metales'}>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      {
          isLoading
          ? <h1>Cargando</h1>
          : <ProductList products={products}/>
        }
      </Layout>
    </>
  )
}

export default HomePage;
