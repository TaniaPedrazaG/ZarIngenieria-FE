
import { FC } from 'react';
import Image from 'next/image';
import { Box, Fade, Slide, Stack, Typography, Zoom } from '@mui/material';

interface Props {
    direction: any;
    flexDirection: any;
    title: string;
    description: string;
    image: string;
}

export const LandingInfo:FC<Props> = ({ direction, flexDirection, title, description, image }) => {
    return (
        <Box sx={{ mb: 3 }}>
            <Slide direction={direction} in={true} mountOnEnter unmountOnExit>
                <Box
                    display={'flex'}
                    flexDirection={flexDirection}
                    alignItems={'center'}
                >
                    <Stack>
                        <Typography variant='h1'>
                            {title}
                        </Typography>
                        <Typography
                            variant='body2'
                            sx={{
                                lineHeight: '2',
                                textAlign: 'justify'
                            }}
                        >
                            {description}
                        </Typography>
                    </Stack>
                    <Image
                    alt='mission'
                    src={image}
                    width={50}
                    height={30}
                    />
                </Box>
            </Slide>
        </Box>
    )
}
