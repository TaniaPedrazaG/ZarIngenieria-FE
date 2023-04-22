import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import { db } from '.';

export const getProductByCode = async(code: string): Promise<IProduct | null> => {
    await db.connect();
    const product = await Product.findOne({code}).lean();
    await db.disconnect();
    if ( !product ) {
        return null;
    }
    return JSON.parse(JSON.stringify(product) );
};

interface ProductCode {
    code: string;
}

export const getAllProductCodes = async(): Promise<ProductCode[]> => {
    await db.connect()
    const codes = await Product.find().lean()
    await db.disconnect()
    return codes;
}

export const getProductsByTerm = async( term: string ): Promise<IProduct[]> => {
    term = term.toString().toLowerCase();

    await db.connect();
    const products = await Product.find({ $text: { $search: term } })
                                    .select('title images price inStock code -_id')
                                    .lean()
    await db.disconnect();

    return products;
}

export const getAllProducts = async (): Promise<IProduct[]> => {
    await db.connect();
    const products = await Product.find().lean();
    await db.disconnect();

    return JSON.parse(JSON.stringify(products));
};