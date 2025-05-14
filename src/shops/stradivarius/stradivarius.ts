import mongoose, { Schema } from "mongoose";
import { ids } from './data/ids.json'
import { StradivariusUseCase } from "./stradivarius.use-case";
import { ProductEntity } from "../../db/product.db";
import fs from "node:fs"
import { normalizeText } from "../../normalize";
export async function Stradivarius() {
    try {

        const categories = await StradivariusUseCase.getCategories()


        fs.writeFileSync("src/shops/stradivarius/data/categories.json", JSON.stringify(categories, null, 2))

        let count_ids = 0
        let count_products = 0
        let saved_products = 0
        // console.log("categories", categories)
        categories.forEach(async (category) => {
            // console.log("category", category)
            const products = (await Promise.all(category.subcategories.map(async (subcategory) => {

                // console.log("subcategory", subcategory)


                const ids_main = await StradivariusUseCase.getIdsFromCategory(subcategory.id)
                const ids_subcategory = (await Promise.all(subcategory.subcategory.map(async (subsubcategory) => {
                    const ids_subcategory = await StradivariusUseCase.getIdsFromCategory(subsubcategory.id)
                    console.log("ids", `CATEGORY: ${subcategory.name}`, `SUBCATEGORY: ${subsubcategory.name} ${subsubcategory.id}`, `COUNT: ${ids_subcategory.length}`)

                    const products = await StradivariusUseCase.getProducts(ids_subcategory)
                    if (products.length > 0) console.log(`Fetched ${products?.length} products for category ${subcategory.name} subcategory: ${subsubcategory.name} ${ids_subcategory.length}`);
                    count_products += products.length

                    products.forEach(async (product) => {

                        if (!product) return

                        const productEntity = new ProductEntity({
                            ...product,
                            name_normalized: normalizeText(product.name),
                            id: product.id.toString(),
                            category: category.name,
                            subcategory: `${subcategory.name} - ${subsubcategory.name}`,
                            shop: "stradivarius",
                        });
                        await productEntity.save()
                            .then(() => {
                                console.log(`Saved product ${saved_products}:`, product.name, `CATEGORY: ${subcategory.name}`, `SUBCATEGORY: ${subsubcategory.name} ${ids_subcategory.length}`);
                            })
                            .finally(() => {
                                saved_products++
                            });
                    })

                    return ids_subcategory
                }))).flat(3)


                // console.log("IDS_SUM", `CATEGORY: ${subcategory.name}`, `COUNT: ${ids_main.length + ids_subcategory.length}`)
                count_ids += ids_main.length + ids_subcategory.length
                // console.log(ids)

                // const ids_final = [...ids_main, ...ids_subcategory]

                const products_main = await StradivariusUseCase.getProducts(ids_main)

                if (products_main.length > 0) {
                    console.log(`Fetched ${products_main?.length} products for category ${subcategory.name}`)

                    products_main.forEach(async (product) => {
                        if (!product) return

                        const productEntity = new ProductEntity({
                            ...product,
                            id: product.id.toString(),
                            category: category.name,
                            subcategory: subcategory.name,
                            shop: "stradivarius",
                        });
                        await productEntity.save()
                            .then(() => {
                                console.log(`Saved product ${saved_products}:`, product.name, `CATEGORY: ${subcategory.name}`, `SUBCATEGORY: ${subcategory.name} ${ids_main.length}`);
                            })
                            .catch((err) => {
                                console.error("Error saving product", err);
                            }).finally(() => {
                                saved_products++
                            });
                    })
                };

                count_products += products_main.length

                return products_main

            }))).flat(3)

            console.log("stats stradivarius", `IDS: ${count_ids}`, `PRODUCTS FETCHED: ${count_products}`)
        })




        // console.log("categories", categories)

        // return
    } catch (error) {
        console.error("Error in Stradivarius", error);
    }

}