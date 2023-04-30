import React from 'react'
import { Triangle } from 'react-loader-spinner'
import { Box, Typography } from '@mui/material'

export const Loading = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent='center'
            alignItems={'center'}
            height='calc(100vh - 300px)'
        >
            <Triangle
                height="100"
                width="100"
                color={'#f7921c'}
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                visible={true}
            />
            <Typography
                color={'primary'}
                sx={{ mt: 3 }}
                variant={'h2'}
                fontSize={ 25 }
                fontWeight={ 400 }
            >
                Cargando ...
            </Typography>
        </Box>
    )
}
