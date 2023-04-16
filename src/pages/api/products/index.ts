import type { NextApiRequest, NextApiResponse } from 'next'
import { db, CATEGORY_CONSTANTS } from '@/database';
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
    const { category = 'all' } = req.query;

    let condition = {};

    if (category !== 'all' && CATEGORY_CONSTANTS.validCategories.includes(`${category}`)) {
        condition = { category };
    }

    await db.connect();
    const products = await Product.find(condition)
                                    .lean();
    await db.disconnect();

    return res.status(200).json(products);
}
