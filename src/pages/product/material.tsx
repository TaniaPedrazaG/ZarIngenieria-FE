import { Layout } from "@/components/layouts"
import { initialData } from "@/database/products";
import { Grid, Box, Typography, Button, Card, CardActionArea, CardMedia } from '@mui/material';

const product = initialData.products[0];

const MaterialPage = () => {
    return (
        <Layout title={product.title}>
            <Grid container spacing={ 3 }>
                <Grid item xs={12} sm={7}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component={'img'}
                                className={'fadeIn'}
                                image={product.images[0]}
                                alt={product.title}
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant="h1" component={'h1'}>{product.title}</Typography>
                        <Typography variant="subtitle1" component={'h2'}>{`$${3500}`}</Typography>
                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle1">Cantidad</Typography>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2">Descripción</Typography>
                            <Typography variant="body2">{product.description}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default MaterialPage