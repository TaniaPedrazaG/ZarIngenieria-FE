import { NextPage } from "next";
import { FilterBy, Loading } from "@/components/ui";
import { ProductList } from "@/components/products";
import { Layout } from "@/components/layouts";
import { useProducts } from "@/hooks";
import { Box, Typography } from "@mui/material"

const Products:NextPage = () => {
    const { products, isLoading } = useProducts('/products');
    return (
        <Layout title='Zar Ingeniería S.A.S' pageDescription={'Los mejores productos de la industria de metales'}>
            <Typography variant='h1' component={'h1'}>Catálogo</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
            <Box display={'flex'} justifyContent={'end'} sx={{ mb: 2 }}>
                <FilterBy/>
            </Box>
            {
                isLoading
                ? <Loading/>
                : <ProductList products={products}/>
            }
        </Layout>
    )
}

export default Products;