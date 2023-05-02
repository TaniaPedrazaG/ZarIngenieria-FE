
import { FC } from 'react';
import Image from 'next/image';
import { Box, Divider, Fade, Grid, Slide, Stack, Typography, Zoom } from '@mui/material';

interface Props {
    direction: any;
    flexDirection: any;
    title: string;
    description: string;
    image: string;
    pos: number;
}

export const LandingInfo:FC<Props> = ({ direction, flexDirection, title, description, image, pos }) => {
    const textAlign = pos === 1 ? 'end' : 'start';
    return (
        <Box sx={{ mb: 3, mt: 3 }}>
            <Slide direction={direction} in={true} mountOnEnter unmountOnExit>
                <Box
                    display={'flex'}
                    flexDirection={flexDirection}
                    alignItems={'center'}
                >
                    <Grid
                        container
                        spacing={ 4 }
                        sx={{
                            display: 'flex',
                            flexDirection: pos === 1 ? 'row-reverse' : 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Grid
                            item 
                            xs={ 12 }
                            sm={ 6 }
                        >
                            <Stack>
                                <Typography
                                    variant='h1'
                                    sx={{
                                        mb: 2,
                                        textAlign: 'center'
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    sx={{
                                        lineHeight: '2',
                                        textAlign: { xs: 'justify', sm: textAlign }
                                    }}
                                >
                                    {description}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid
                            item 
                            xs={ 12 }
                            sm={ 6 }
                            sx={{
                                mb: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems:'center'
                            }}
                        >
                            <Image
                                alt='mission'
                                src={image}
                                width={400}
                                height={400}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Slide>
        </Box>
    )
}
