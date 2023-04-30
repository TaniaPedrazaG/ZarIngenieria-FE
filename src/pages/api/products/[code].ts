import { db } from '@/database';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
    | { message: string }
    | IProduct

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProductByCode(req, res)
        default:
            return res.status(400).json({ message: 'Bad request' });
    }
}

const getProductByCode = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    await db.connect()
    const { code } = req.query;
    const product = await Product.findOne({ code }).lean();
    await db.disconnect();

    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }
    product.urlImage = product.urlImage.map(image => {
        console.log('image 4 ', image);
        return image.includes('http') ? image : `${process.env.HOST_NAME}/products/${image}`
    });
    return res.json(product);
}
