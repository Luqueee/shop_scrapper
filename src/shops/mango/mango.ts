import * as path from 'path';
import * as fs from 'fs';
import csv from 'csv-parser';
import type { Product } from './types/mango-product';
import { SearchMangoUseCase } from './search-mango.use-case';
import { ProductEntity } from '../../db/product.db';
import { DOMParser } from 'xmldom';
import { normalizeText } from '../../normalize';
export async function Mango() {

    const productIds = (await Promise.all(["", "_2", "_3", "_4", "_5", "_6"].map(async (value: string) => {
        return await fetch(`https://shop.mango.com/sitemap-products/sitemap-products_es-es${value}.xml`)
            .then(async (res) => {
                const xmlText = await res.text();

                // console.log("xmlText", xmlText);

                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, "text/xml");
                // console.log("xmlDoc", xmlDoc);
                // const productUrls = Array.from(xmlDoc.getElementsByTagName("xhtml:link"))
                //     .map((loc) => loc.textContent?.trim())
                //     // .filter((url): url is string => !!url && url.startsWith("https://shop.mango.com"));

                // return productUrls;

                let productUrls: string[] = [];

                Array.from(xmlDoc.childNodes).forEach((node) => {

                    const item = node.textContent?.trim().replace(/\s+/g, ' ')
                    if (item) productUrls.push(item);
                });
                // console.log(productUrls)
                return productUrls.join(" ").split(" ")
            });

        // console.log(products, products.length)
    }))).flat().map((url) => {
        const urlParts = url.split("/");
        const id = urlParts[urlParts.length - 1].split("_")[1];

        return id
    }).filter((id) => !!id);

    console.log(productIds, productIds.length)

    // const csvFilePath = path.resolve(__dirname, 'data/store_mango.csv');
    // const products: Product[] = [];

    // await new Promise<void>((resolve, reject) => {
    //     fs.createReadStream(csvFilePath)
    //         .pipe(csv())
    //         .on('data', (data) => products.push(data))
    //         .on('end', () => {
    //             console.log('CSV file successfully read.');
    //             resolve();
    //         })
    //         .on('error', (err) => {
    //             console.error('Error reading CSV file:', err);
    //             reject(err);
    //         });
    // });



    // console.log('Products:', products);
    let count = 0
    productIds.forEach(async (productId) => {
        const res = await SearchMangoUseCase.getProduct(productId)
        // console.log("res", res)

        const productEntity = new ProductEntity({
            id: res.id,
            name: res.name,
            name_normalized: normalizeText(res.name),
            price: res.price,
            product_link: res.product_link,
            brand: res.brand,
            category: res.category,
            gender: res.gender,
            subcategory: "",
            shop: "mango",
            image: res.image,
            images: res.images,
            colors: res.colors
        })

        // console.log("productEntity", productEntity)
        await productEntity.save().then(() => {


            console.log("Product saved", res.name, `number: ${count}`);
            count++
        })
    }
    )

    // console.log("res", res)
}