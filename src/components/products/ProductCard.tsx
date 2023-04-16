import { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { IProduct } from "@/interfaces";

interface Props {
    product: IProduct;
}

export const ProductCard:FC<Props> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false)

    const productImage = useMemo(() => {
        return isHovered
            ? `products/${product.urlImage[1]}`
            : `products/${product.urlImage[0]}`
    }, [isHovered, product.urlImage])

    /* const category = useMemo(() => {
        return product.category === 'iron'
            ? 'Hierro'
            : 'Acero'
    }, [product.category]) */

    return (
        <Grid
            item
            xs={ 6 }
            sm={ 4 }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <NextLink href={`product/${product.code}`} passHref prefetch={false} legacyBehavior>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                component={'img'}
                                className={'fadeIn'}
                                image={productImage}
                                alt={product.name}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>
            <Box sx={{ mt: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{product.name}</Typography>
                <Typography fontWeight={500}>iron</Typography>
            </Box>
        </Grid>
    )
}
