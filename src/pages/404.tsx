import { Layout } from "@/components/layouts"
import { Box, Typography } from "@mui/material"

const Custom404 = () => {
    return (
        <Layout title={"Page not found"} pageDescription={'Page not found'}>
            <Box
                display={'flex'}
                justifyContent='center'
                alignItems={'center'}
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' }}}
            >
                <Typography variant="h1" component={'h1'} fontSize={80} fontWeight={200}>404 |</Typography>
                <Typography marginLeft={ 2 }>No encontramos ninguna página aqui</Typography>
            </Box>
        </Layout>
    )
}

export default Custom404
