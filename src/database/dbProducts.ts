import { isValidObjectId } from 'mongoose';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import { db } from '.';

export const getProductByCode = async(code: string): Promise<IProduct | null> => {
    if (!isValidObjectId) return null;

    await db.connect();
    const product = await Product.findOne({code}).lean();
    await db.disconnect();

    if (!product) {
        return null;
    }
    product.urlImage = product.urlImage.map(image => {
        console.log('image 1 ', image);
        return image.includes('http') ? image : `${process.env.HOST_NAME}/products/${image}`
    })

    return JSON.parse(JSON.stringify(product));
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

export const getAllProducts = async (): Promise<IProduct[]> => {
    await db.connect();
    const products = await Product.find().lean();
    await db.disconnect();
    const updatedProducts = products.map(product => {
        product.urlImage = product.urlImage.map(image => {
            return image.includes('http') ? image : `${process.env.HOST_NAME}/products/${image}`
        });
        return product;
    })
    return JSON.parse(JSON.stringify(updatedProducts));
};