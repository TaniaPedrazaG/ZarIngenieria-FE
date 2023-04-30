import { isValidObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { v2 as cloudinary } from 'cloudinary'
import { Product } from '../../../models';
import { IProduct } from '@/interfaces';
import { db } from '../../../database';
import { v4 as uuid } from 'uuid';

cloudinary.config(process.env.CLOUDINARY_URL || '');

type Data =
    | { message: string }
    | IProduct[]
    | IProduct

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProducts(req, res);
        case 'PUT':
            return updateProducts(req, res);
        case 'POST':
            return createProduct(req, res);
        default:
            return res.status(400).json({ message: 'Bad Request' })
    }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    await db.connect();
    const products = await Product.find()
        .sort({ title: 'asc' })
        .lean();
    await db.disconnect();
    
    const updatedProducts = products.map(product => {
        product.urlImage = product.urlImage.map(image => {
            console.log('image 3 ', image);
            return image.includes('http') ? image : `${process.env.HOST_NAME}/products/${image}`
        });
        return product;
    })
    res.status(200).json(updatedProducts);
}

const updateProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { _id = '', urlImage = [] } = req.body as IProduct;
    if (!isValidObjectId(_id)) {
        return res.status(400).json({ message: 'El id del producto no es válido' });
    }
    if (urlImage.length < 2) {
        return res.status(400).json({ message: 'Es necesario al menos 2 imágenes' });
    }

    try {
        await db.connect();
        const product = await Product.findById(_id);
        if (!product) {
            await db.disconnect();
            return res.status(400).json({ message: 'No existe un produto con este ID' });
        }
        product.urlImage.forEach(async (image) => {
            if (!urlImage.includes(image)) {
                const [fileId, extension] = image.substring(image.lastIndexOf('/') + 1).split('.');
                console.log({ image, fileId, extension });
                await cloudinary.uploader.destroy(fileId);
            }
        })
        await product.updateOne(req.body);
        await db.disconnect();
        return res.status(200).json(product);
    } catch (error) {
        console.log(error)
        await db.disconnect();
        return res.status(400).json({ message: 'Revisar la consola del servidor' });
    }
}

const createProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { urlImage = [] } = req.body as IProduct;
    if (urlImage.length < 2) {
        return res.status(400).json({ message: 'el producto necesita al menos 2 imágenes' })
    }

    try {
        await db.connect();
        const productInDB = await Product.findOne({ code: req.body.code });
        if (productInDB) {
            await db.disconnect();
            return res.status(400).json({ message: 'Ya existe un producto con ese code' })
        }
        const { name, description, urlImage, category, subCategory } = req.body
        const product = new Product({
            code: uuid(),
            name,
            description,
            urlImage,
            category,
            subCategory
        });
        await product.save();
        await db.disconnect();
        return res.status(201).json(product);
    } catch (error) {
        await db.disconnect();
        return res.status(400).json({ message: 'revisar logs del servidor' })
    }
}
