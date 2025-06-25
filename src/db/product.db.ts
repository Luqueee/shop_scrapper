import mongoose, { Schema } from "mongoose";

export interface Product {
    id: string;
    name: string;
    name_normalized?: string;
    price: number;
    product_link: string;
    brand: string;
    category: string;
    subcategory?: string;
    gender: string;
    subgender?: string;
    colors?: {
        color: {
            name: string;
            id: string;
            // sizes: {
            //     name: string;
            //     id: number;
            //     price: number;
            // }[];
        };
        images?: string[];
    }[]
    image: string;
    images?: string[];
    shop: string;
}

const ProductSchema = new Schema<Product>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    name_normalized: { type: String, required: true },
    price: { type: Number, required: true },
    product_link: { type: String, required: true },
    brand: { type: String, required: true },
    colors: { type: Array, required: false, default: [] },
    category: { type: String, required: true },
    subcategory: { type: String, required: false, default: "" },
    gender: { type: String, required: true },
    subgender: { type: String, required: false, default: "" },
    shop: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: [String], required: false, default: [] },
} as Record<keyof Product, any>);


export class ProductEntity {

    constructor(private readonly product: Product) {
    }

    async save() {
        const product = new ProductModel(this.product);
        await product.save().catch((err) => {
            console.error("Error saving product", err);
            return
        });
    }



}


export const ProductModel = mongoose.model('Products', ProductSchema);

