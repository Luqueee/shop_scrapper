import type { HmProductResponse } from "./types/hm-product";

const BASE_URL_PRODUCT = "https://api.hm.com/search-services/v1/es_es/search/byids?touchPoint=DESKTOP&pageSource=pdp-shopthelook"
export const BASE_URL_HM = 'https://www2.hm.com';

export class HmSearchUseCase {

    static async getProduct(productId: string) {

        const url = new URL(BASE_URL_PRODUCT);
        url.searchParams.append("ids", productId);

        // console.log("URL:", url.toString());

        const data = await fetch(url, {
            "headers": {
                "accept": "application/json",
                "accept-language": "es-US,es-419;q=0.9,es;q=0.8,ca;q=0.7,en;q=0.6",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "pragma": "no-cache",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "x-customer-key": "3081de73-ac48-4d2e-a989-7e0d415a31a5",
                "x-session-key": "3081de73-ac48-4d2e-a989-7e0d415a31a5",
                "Referer": "https://www2.hm.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
        }).then((res) => res.json()).catch((err) => {
            console.error("Error fetching product data:", err);
            return null
        }
        ) as HmProductResponse;



        if (!data) {

            return []
        }

        const products = data.articles.productList.map((product) => {
            return {
                id: product.id,
                name: product.productName,
                image: product.productImage,
                images: product.images.map((image) => image.url),
                price: product.prices[0].price,
                colors: product.swatches.map((color) => {
                    return {
                        color: {
                            name: color.colorName,
                            id: color.colorCode,

                        },
                        images: [color.productImage]
                    }
                }),
                product_link: `${BASE_URL_HM}${product.url}`,
                brand: product.brandName,

            }
        })

        // console.log("Product data:", data);

        return products



    }
}