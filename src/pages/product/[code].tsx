import { Layout } from "@/components/layouts"
import { ProductSlideShow } from "@/components/products";
import { dbProducts } from "@/database";
import { IProduct } from "@/interfaces";
import { Grid, Box, Typography, Card, CardActionArea, CardMedia } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
    product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
    return (
        <>
            <Layout title={product.name} pageDescription={product.description}>
                <Grid container spacing={ 3 }>
                    <Grid item xs={12} sm={7}>
                        <ProductSlideShow images={product.urlImage}/>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography variant="h1" component={'h1'}>{product.name}</Typography>
                            <Typography variant="subtitle1" component={'h2'}>{product.category}</Typography>
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle2">Descripción</Typography>
                                <Typography variant="body2">{product.description}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const productCodes = await dbProducts.getAllProductCodes()

    return {
        paths: productCodes.map(({ code }) => ({
            params: {
                code
            }
        })),
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { code = '' } = params as { code: string }
    const product = await dbProducts.getProductByCode(code)

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24
    }
}

export default ProductPage