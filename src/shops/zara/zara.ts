import mongoose, { Schema } from "mongoose";
import { categories } from './data/ids.json'
import { SearchZaraUseCase } from "./search-zara.use-case";
import { type Product } from "../../..";
import type { Category, ZaraCategoriesResponse } from "./types/zara-category";
import { ProductEntity } from "../../db/product.db";
import { normalizeText } from "../../normalize";
type CategoryResponse = Record<number, CategoryResponseData>;


interface CategoryResponseData {
    id: number;
    name: string;
    subcategories: SubcategoryResponse;
}

type SubcategoryResponse = Record<number, { name: string, id: number }>;


function MapSubcategories(category: Category) {
    return category.subcategories.reduce((acc: Record<number, CategoryResponseData>, category) => {
        acc[category.id] = {
            id: category.id,
            name: category.name,
            subcategories: category.subcategories.reduce((subAcc: SubcategoryResponse, subcategory) => {
                subAcc[subcategory.id] = {
                    id: subcategory.id,
                    name: subcategory.name,
                };
                return subAcc;
            }, {} as SubcategoryResponse)
        };
        return acc;
    }, {});
}

async function FetchProducts(categories: CategoryResponse, gender: string) {

    let count_total = 0

    Object.entries(categories).map(async ([id, category]) => {
        // console.log("category", category)
        if (category.name === "+ INFO") return

        Object.entries(category.subcategories).map(async ([id, subcategory]) => {
            // console.log("subcategory", subcategory)

            const products = await (await SearchZaraUseCase.getProductCategory(subcategory.id)).flat()

            if (products.length <= 0) return

            console.log(`Fetched ${products?.length} products for category ${category.name}`);

            let count = 0

            const productsResponse: Product[] = products?.map((product) => ({
                id: String(product.id),
                category: category.name,
                subcategory: subcategory.name,
                colors: product.colors,
                name: product.name,
                name_normalized: normalizeText(product.name),
                price: product.price ?? 0,
                product_link: product.product_link,
                brand: product.brand,
                image: product.image,
                section: product.section,
                images: product.images,
                shop: "zara",
                gender, // Add appropriate logic to determine gender if needed
            }))



            // console.log(productsResponse)
            productsResponse?.map(async (product) => {
                await new ProductEntity(product).save().then(() => {
                    console.log("Product saved", product.name, `Category: ${category.name}`, `Subcategory: ${subcategory.name}`, `Index: ${count}-${products.length} || ${count_total}`);

                }).catch(() => {
                    // console.error("Error saving product", err);
                    return
                }).finally(() => {
                    count++
                    count_total++
                }
                )
            })

        })

    })

}




export async function Zara() {

    const { categories } = await fetch("https://www.zara.com/es/es/categories?categoryId=2443335&categorySeoId=7465&ajax=true", {

    }).then(async (res) => await res.json()) as ZaraCategoriesResponse

    const woman = MapSubcategories(categories[0])
    const man = MapSubcategories(categories[1])
    const kids = MapSubcategories(categories[2])
    const beauty = MapSubcategories(categories[3])
    const zara_pre_owned = MapSubcategories(categories[4])

    await FetchProducts(woman, "woman")
    await FetchProducts(man, "man")
    await FetchProducts(kids, "kids")

}