import * as path from 'path';
import * as fs from 'fs';
import csv from 'csv-parser';
import type { Product } from './types/mango-product';
import { SearchMangoUseCase } from './search-mango.use-case';
import { ProductEntity } from '../../db/product.db';
import {DOMParser} from 'xmldom';
export async function Mango() {
    console.log("Fetching products")
    const products = await fetch("https://shop.mango.com/sitemap-products/sitemap-products_es-es.xml")
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
                if(item) productUrls.push(item);
            });
            // console.log(productUrls)
            return productUrls.join(" ").split(" ")
        });

    console.log(products, products.length)

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
    // let count = 0
    // products.map(async (product) => {
    //     const res = await SearchMangoUseCase.getProduct(product.sku, product.price)
    //     // console.log("res", res)

    //     const productEntity = new ProductEntity({
    //         id: product.sku.toString(),
    //         name: product.name,
    //         price: parseFloat(product.price),
    //         product_link: product.url,
    //         brand: product.brand,
    //         category: product.category,
    //         gender: product.section === "H" ? 'man' : 'woman',
    //         subcategory: "",
    //         shop: "mango",
    //         image: res.image,
    //         images: res.images,
    //         colors: res.colors
    //     })

    //     // console.log("productEntity", productEntity)
    //     await productEntity.save().then(() => {


    //         console.log("Product saved", product.name, `number: ${count}`);
    //         count++
    //     })
    // }
    // )

    // console.log("res", res)
}