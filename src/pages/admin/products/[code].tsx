import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Controller, useForm } from 'react-hook-form';
import { AdminLayout } from '../../../components/layouts';
import { DriveFileRenameOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import {
    Box,
    Button,
    capitalize,
    Card,
    CardActions,
    CardMedia,
    Chip,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import { Product } from '../../../models';
import { useRouter } from 'next/router';
import { IProduct } from '@/interfaces';
import { zaringenieriaApi } from '@/api';
import { dbProducts } from '@/database';

const validCategories = ['iron', 'steel'];
const validSubcategories = ['doors', 'windows'];

interface FormData {
    _id?: string,
    code: string;
    name: string;
    description: string;
    urlImage: string[];
    category: string;
    subcategory: string;
}

interface Props {
    product: IProduct;
}

const ProductAdminPage: FC<Props> = ({ product }) => {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isSaving, setIsSaving] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        getValues,
        setValue,
    } = useForm<FormData>({
        defaultValues: product,
    });

    const onFilesSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (!target.files || target.files.length === 0) {
            return;
        }

        try {
            for (const file of target.files) {
                const formData = new FormData();
                formData.append('file', file);
                const { data } = await zaringenieriaApi.post<{ message: string }>(
                '/admin/upload/',
                formData
                );
                setValue('urlImage', [...getValues('urlImage'), data.message], {
                shouldValidate: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onDeleteImage = (image: string) => {
        setValue(
        'urlImage',
        getValues('urlImage').filter((img) => img !== image),
        { shouldValidate: true }
        );
    };

    const onSubmit = async (form: FormData) => {
        if (form.urlImage.length < 2) return alert('Mínimo 2 imágenes');
        setIsSaving(true);

        try {
            const { data } = await zaringenieriaApi({
                url: '/admin/products',
                method: form._id ? 'PUT' : 'POST',
                data: form,
            });
            if (!form._id) {
                router.replace(`/admin/products/${form.code}`);
            } else {
                setIsSaving(false);
            }
        } catch (error) {
            console.log(error);
            setIsSaving(false);
        }
    };

    return (
        <AdminLayout
            title={'Producto'}
            subTitle={product.name ? `Editando: ${product.name}` : ''}
            icon={<DriveFileRenameOutline />}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label='Título'
                            variant='filled'
                            fullWidth
                            sx={{ mb: 1 }}
                            {...register('name', {
                                required: 'Este campo es requerido',
                                minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                            })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />

                        <TextField
                            label="Descripción"
                            variant="filled"
                            fullWidth 
                            multiline
                            sx={{ mb: 1 }}
                            { ...register('description', {
                                required: 'Este campo es requerido',
                            })}
                            error={ !!errors.description }
                            helperText={ errors.description?.message }
                        />

                        <FormGroup>
                            <FormControl sx={{ mt: 1, mb: 1 }}>
                                <FormLabel>Categoria</FormLabel>
                                <RadioGroup
                                    row
                                    value={getValues('category')}
                                    onChange={({ target }) =>
                                    setValue('category', target.value, { shouldValidate: true })
                                    }
                                >
                                    {validCategories.map((option) => (
                                    <FormControlLabel
                                        key={option}
                                        value={option}
                                        control={<Radio color='secondary' />}
                                        label={capitalize(option)}
                                    />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </FormGroup>

                        <FormGroup>
                            <FormControl sx={{ mt: 1 }}>
                                <FormLabel>Subcategoria</FormLabel>
                                <RadioGroup
                                    row
                                    value={getValues('subcategory')}
                                    onChange={({ target }) =>
                                    setValue('subcategory', target.value, { shouldValidate: true })
                                    }
                                >
                                    {validSubcategories.map((option) => (
                                    <FormControlLabel
                                        key={option}
                                        value={option}
                                        control={<Radio color='secondary' />}
                                        label={capitalize(option)}
                                    />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box display='flex' flexDirection='column' sx={{ mt: 1, mb: 1 }}>
                            <Button
                                color='secondary'
                                fullWidth
                                startIcon={<UploadOutlined />}
                                sx={{ mb: 3 }}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Cargar imágenes
                            </Button>
                            <input
                                ref={fileInputRef}
                                type='file'
                                multiple
                                accept='image/png, image/gif, image/jpeg'
                                style={{ display: 'none' }}
                                onChange={onFilesSelected}
                            />

                            <Chip
                                label='Es necesario al menos 2 imágenes'
                                color='error'
                                variant='outlined'
                                sx={{
                                    mb: 2,
                                    display: getValues('urlImage').length < 2 ? 'flex' : 'none',
                                }}
                            />

                            <Grid container spacing={2}>
                                {getValues('urlImage').map((img) => (
                                <Grid item xs={12} sm={4} key={img}>
                                    <Card>
                                    <CardMedia
                                        component='img'
                                        className='fadeIn'
                                        image={img}
                                        alt={img}
                                    />
                                    <CardActions>
                                        <Button
                                        fullWidth
                                        color='error'
                                        onClick={() => onDeleteImage(img)}
                                        >
                                        Borrar
                                        </Button>
                                    </CardActions>
                                    </Card>
                                </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent='center'
                            alignItems={'center'}
                            width={'100%'}
                            sx={{ mt: 1 }}
                        >
                            <Button
                                color='primary'
                                startIcon={<SaveOutlined />}
                                sx={{ width: { xs: '100%', sm: '50%' }, height: '100%' }}
                                type='submit'
                                disabled={isSaving}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </AdminLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { code = '' } = query;

    let product: IProduct | null;

    if (code === 'new') {
        const tempProduct = JSON.parse(JSON.stringify(new Product()));
        delete tempProduct._id;
        tempProduct.urlImage = ['img1.jpg', 'img2.jpg'];
        product = tempProduct;
    } else {
        product = await dbProducts.getProductByCode(code.toString());
    }

    if (!product) {
        return {
        redirect: {
            destination: '/admin/products',
            permanent: false,
        },
        };
    }
    return {
        props: {
            product,
        },
    };
};

export default ProductAdminPage;
