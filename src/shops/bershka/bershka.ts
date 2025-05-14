import { SearchBershkaUseCase } from "./search-bershka.use-case"
import { ids } from './data/ids.json'
import { promises as fs } from 'fs';
import { Schema } from "mongoose";
import mongoose from "mongoose";
import axios from "axios";
import { ProductEntity, ProductModel } from "../../db/product.db";
// Define the product schema directly here or import a valid Mongoose schema




const categories_man = {
    camisetas: 1010193239,
    bermudas: 1010193242,
    camisas: 1010193240,
    jeans: 1010193238,
    punto: 1010630253,
    accesorios: 1010193172,
    polos: 1010808523,
    "cazadoras y abrigos": 1010193546,
    "pantalones baggy": 1010690760,
    bañadores: 1010484003,
    chandal: 1010580165,
    zapatos: 1010193202,

}

const categories_woman = {
    jeans: 1010276029,
    "bikinis - bañadores": 1010361506,
    vestidos: 1010193213,
    pantalones: 1010193216,
    faldas: 1010280023,
    "shorts y vermudas": 1010194517,
    "tops y bodies": 1010193220,
    camisetas: 1010193217,
    "camisas y blusas": 1010193221,
    "total look": 1010429555,
    cazadoras: 1010193212,
    sudaderas: 1010193222,
    "jersey y ropa de punto": 1010193223,

}

const categories_bskteen = {
    "camisetas y tops": 1010625290,
    jeans: 1010624332,
    "pantalones y cargo": 1010624288,
    "faldas y shorts": 1010623811,
    "vestidos y monos": 1010624264,
    "sudaderas y jerseis": 1010755409,
    cazadoras: 1010623764,
    zapatos: 1010625315,
    accesorios: 1010626251,

}

async function RunCategories(categories: Record<string, number>, gender: string) {
    await Object.entries(categories).map(async ([categoryName, categoryId]) => {
        const results = await SearchBershkaUseCase.getProducts(categoryId)
        console.log(results.length, categoryName)
        results.map(async (products) => {

            if (!products) return


            products.map(async (product) => {

                // console.log("Product", product)

                if (!product.id || !product.name || !product.price || !product.product_link || !product.brand || !product.image) {
                    // console.log("Product missing data", product)
                    return
                }

                const productEntity = new ProductEntity({
                    id: product.id.toString(),
                    name: product.name,
                    price: product.price,
                    product_link: product.product_link,
                    gender,
                    colors: product.colors,
                    brand: product.brand,
                    category: categoryName,
                    subcategory: "",
                    image: product.image,
                    images: product.images,
                    shop: "bershka"
                })

                await productEntity.save().then(() => {


                    console.log("Product saved", product.name, `Chunk: ${results.length}`);

                })


            }
            )
        })
    })
}


export async function Bershka() {

    const products = await ProductModel.find({ shop: "bershka" })
    console.log("Products in DB", products.length)

    // await RunCategories(categories_man, "man")
    // await RunCategories(categories_woman, "woman")
    // await RunCategories(categories_bskteen, "bskteen")
    let success = 0
    await products.forEach(async (product) => {
        // console.log(product.images?.filter((image) => image.includes('-a')), product.images?.find((image) => image.includes('f.')))
        const selected = product.images?.find((image) => image.includes('a4o'))

        if (selected) {
            success++

            await ProductModel.updateOne({ _id: product._id }, { $set: { image: selected } }).then(() => {
                console.log("Product updated", product.name, `Chunk: ${products.length}`);
            }
            ).catch((err) => {
                // console.log("Error updating product", product.name, err)
            }
            )

        }
    })

    console.log("Success", success, products.length)


    // return



}