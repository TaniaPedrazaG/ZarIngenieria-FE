import { IProduct } from "../interfaces";
import mongoose, { Schema, model, Model } from "mongoose";

const productSchema = new Schema<IProduct>({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    urlImage: [{
        type: String,
        required: true,
    }],
    category: [{
        type: String,
        enum: {
            values: ['iron', 'steel'],
            message: '{VALUE} no es una categoria valida'
        },
        required: true,
        default: 'iron'
    }],
    subcategory: [{
        type: String,
        enum: {
            values: ['doors', 'windows'],
            message: '{VALUE} no es una sub-categoria valida'
        },
        required: true,
        default: 'doors'
    }]
}, {
    timestamps: true
});

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default Product;