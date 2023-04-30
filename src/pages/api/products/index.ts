import type { NextApiRequest, NextApiResponse } from 'next'
import { db, CATEGORY_CONSTANTS, SUBCATEGORY_CONSTANTS } from '@/database';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';


type Data =
    | { message: string }
    | IProduct[]

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProducts(req, res);
        default:
            return res.status(400).json({ message: 'Bad request' });
    }
}

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { category = 'all', subcategory = 'all' } = req.query;

    let condition = {};

    if (category !== 'all' && CATEGORY_CONSTANTS.validCategories.includes(`${category}`)) {
        condition = { category };
    }

    if (subcategory !== 'all' && SUBCATEGORY_CONSTANTS.validCategories.includes(`${subcategory}`)) {
        condition = { subcategory };
    }

    await db.connect();
    const products = await Product.find(condition)
                                    .lean();
    await db.disconnect();

    const updatedProducts = products.map(product => {
        product.urlImage = product.urlImage.map(image => {
            console.log('image 5 ', image);
            return image.includes('http') ? image : `${process.env.HOST_NAME}/products/${image}`
        });
        return product;
    })

    return res.status(200).json(updatedProducts);
}
