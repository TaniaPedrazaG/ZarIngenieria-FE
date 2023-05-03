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
            ? product.urlImage[1]
            : product.urlImage[0];
    }, [isHovered, product.urlImage])

    return (
        <Grid
            item
            xs={ 12 }
            sm={ 4 }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <NextLink href={`/product/${product.code}`} passHref prefetch={false} legacyBehavior>
                    <Link>
                        <CardActionArea
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyItems: 'center',
                            }}
                        >
                            <CardMedia
                                component={'img'}
                                className={'fadeIn'}
                                image={productImage}
                                alt={product.name}
                                sx={{
                                    width: { sx: '150px', sm: '300px' },
                                    height: { sx: '150px', sm: '300px' },
                                }}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>
            <Box sx={{ mt: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{product.name}</Typography>
                <Typography fontWeight={500}>{product.category}</Typography>
            </Box>
        </Grid>
    )
}
