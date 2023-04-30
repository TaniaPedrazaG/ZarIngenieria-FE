import NextLink from 'next/link';
import useSWR from 'swr';
import { AdminLayout } from '@/components/layouts'
import { Box, Button, CardMedia, Grid, Link } from '@mui/material'
import { AddOutlined, CategoryOutlined } from '@mui/icons-material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { IProduct } from '@/interfaces';

const columns: GridColDef[] = [
    {
        field: 'img',
        headerName: 'Foto',
        renderCell: ({ row }: GridRenderCellParams) => {
            return (
            <a href={`/product/${row.code}`} target='blank' rel='noreferrer'>
                <CardMedia
                component='img'
                alt={row.name}
                className='fadeIn'
                image={row.img}
                />
            </a>
            );
        },
        },
        {
        field: 'name',
        headerName: 'Nombre',
        width: 200,
        renderCell: ({ row }: GridRenderCellParams) => {
            return (
            <NextLink href={`/admin/products/${row.code}`} passHref>
                <Link underline='always'>{row.name}</Link>
            </NextLink>
            );
        },
    },
    { field: 'description', width: 400, headerName: 'Descripción' },
    { field: 'category', headerName: 'Categoria' },
    { field: 'subcategory', headerName: 'Subcategoria' },
];

const ProductsPage = () => {
    const { data, error } = useSWR<IProduct[]>('/api/admin/products');

    if (!data && !error) return <></>;

    const rows = data!.map((product) => ({
        _id: product._id,
        code: product.code,
        name: product.name,
        img: product.urlImage[0],
        description: product.description,
        category: product.category,
        subcategory: product.subcategory,
    }));

    return (
        <AdminLayout
            title={`Productos (${data?.length})`}
            subTitle={'Mantenimiento de productos'}
            icon={<CategoryOutlined />}
        >
            <Box display='flex' justifyContent='end' sx={{ mb: 2, mt: 1 }}>
                <Button
                startIcon={<AddOutlined />}
                color='primary'
                href='/admin/products/new'
                >
                Crear producto
                </Button>
            </Box>
            <Grid container className='fadeIn'>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                <DataGrid
                    getRowId={(row) => row.code}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
                </Grid>
            </Grid>
        </AdminLayout>
    )
}

export default ProductsPage