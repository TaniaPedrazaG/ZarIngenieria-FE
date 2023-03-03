import {useMemo} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { productsApi } from 'api';
import { NextPage } from 'next';
import { Product } from 'interfaces';

interface Props {
    products: Product
}

export const Products:NextPage<Props> = () => {

    const data = [
        {
            "products": [
                {
                    "_id": "63d411c7d57be4f0a60cbae0",
                    "code": "78dd5bdf-8431-47d1-bfba-40044427727d",
                    "name": "Puerta sencilla",
                    "description": "Es NO es una puerta doble :(",
                    "urlImage": "www.imagen.com",
                    "category": "iron",
                    "subcategory": "doors",
                    "createdAt": "2023-01-27T18:02:47.541Z",
                    "updatedAt": "2023-01-28T02:24:38.123Z",
                    "__v": 0
                },
                {
                    "_id": "63d486a3b89f8f30ceacb517",
                    "code": "b3ca3473-37d6-4b47-bde0-9b684d6f434b",
                    "name": "Puerta doble",
                    "description": "Es una puerta doble :)",
                    "urlImage": "www.imagen.com",
                    "category": "iron",
                    "subcategory": "doors",
                    "createdAt": "2023-01-28T02:21:23.055Z",
                    "updatedAt": "2023-01-28T02:21:23.055Z",
                    "__v": 0
                }
            ]
        }
    ]

    
    useMemo(() => {
        console.log(data[0].products);
        
    }, [])

    return (
        <div style={{padding: '10px'}}>
            <Typography variant="h4" color="text.secondary">
                Puertas
            </Typography>
            <br/>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Puerta"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Puerta sencilla
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Iron
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
