import type { JackJonesCategoryResponse } from "./types/jackjones-category";
import fs from "node:fs";
import type { JackJonesProductsResponse, Result } from "./types/jackjones-products";
import type { JackJonesProductResponse } from "./types/jackjones-product";
const BASE_URL = "https://www.jackjones.com"
const headers = {
    "accept": "text/plain",
    "accept-language": "es-US,es-419;q=0.9,es;q=0.8,ca;q=0.7,en;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/json-patch+json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "rid": "anti-csrf",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "st-auth-mode": "header",
    "cookie": "market=es-es; isAuthenticated=false; r_wishlist=095ab50bfcc34f7dbb65d8779a317849; r_basket=aee5aeb8c441401ba9a944ed76978582; displayGeoLocatorFlyout=0; cookieyes-consent=consentid:ZU5hNTNSTzY1SExLdUpOd2EwWlFmQXAyMFRMZkgxdkI,consent:yes,action:yes,necessary:yes,functional:yes,analytics:yes,advertisement:yes,other:yes; _gcl_gs=2.1.k1$i1746716948$u133467541; _gcl_au=1.1.271666587.1746716951; _scid=r4CBZbos923W0dqRD_-S9aCVTeN32800; _fbp=fb.1.1746716951484.900622658769973; _ga=GA1.1.1114103064.1746716952; _ScCbts=%5B%5D; _clck=1ikqu9e%7C2%7Cfvq%7C0%7C1954; _tt_enable_cookie=1; _pin_unauth=dWlkPVltTTBNekV5TlRjdE9URTNaaTAwWVRNeExXSm1OV0V0WkRFeE5HUXdZVE0zTkRoag; FPGCLGS=2.1.k1$i1746716948$u133467541; FPAU=1.1.271666587.1746716951; Raptor.CookieId=fef344ed-6734-457c-a7c2-a2bdd525b8b7; _ttp=WQY5bS25ykXkgsFsxCZ8QsBbUX0.tt.1; FPGCLAW=2.1.kCj0KCQjwrPHABhCIARIsAFW2XBOwE3zIGIVzuaTLfPjCW-fPQOkBzq1REOEoO-Ma2n6MYl3NH1gLzwkaAuSnEALw_wcB$i1746716966; _gcl_aw=GCL.1746716967.Cj0KCQjwrPHABhCIARIsAFW2XBOwE3zIGIVzuaTLfPjCW-fPQOkBzq1REOEoO-Ma2n6MYl3NH1gLzwkaAuSnEALw_wcB; Raptor.SessionId=70e9efe4-115c-4bcc-9ce3-c42c5552fb45; _uetsid=80af66602c1e11f090d08f6e43412525; _uetvid=80af62a02c1e11f0b3b7a31842096d21; _scid_r=qACBZbos923W0dqRD_-S9aCVTeN32800yuevQw; FPGSID=1.1746720081.1746721041.G-B0LPBSYH2P.mti36e_Zhv5nZ7z21xrQHQ; _derived_epik=dj0yJnU9OHFfU0FUYTZrVUFJMUk5UFpyX19Wd1RFOUZ5UTd6SHEmbj1rOHd0MHpzMGNWNUw3UGVVa3IyZURRJm09MSZ0PUFBQUFBR2djMlJFJnJtPTEmcnQ9QUFBQUFHZ2MyUkUmc3A9NQ; cto_bundle=6HPZgl9DNXdGZVU2NDg1MFVQdWx2VkhXRUxPdm04Y2NYdWIlMkJHRUN6ZzdTWk04dklTR25PMVR6NEswTGZ4VkZtdGl6YWclMkJGNkI5YlpKVDhqV2EwTHFEaDNYTm9IVEd5Wm9nWjZIbSUyRk0xNHZ3c1lMTTRNOTQ4S2IlMkZISmxOd2IlMkZEam1hVWFKRFJkam1QNnVqRGQ0WEFtYWFhTkN0cmpsZXpYQjFaZDNoSXp1QXNxQnFjJTNE; usizy.sk=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlMzg4YTg0ZTBiZWYxMWYwOTYzM2VlOWQ4MmUxOTgzNiIsIm5hdiI6eyI0MDA0IjpbIjAyMTVjZDM2MmMyNjExZjBhMzY3ZmFiNTJkNGU3ZDEyIiwxNzQ2NzIxMDQxLDFdfX0.SjKT-3b-Cw0waUs6H6KP_l5-7x-EvSMu4POWs749C5Q; _clsk=5zaujf%7C1746721042252%7C54%7C1%7Ck.clarity.ms%2Fcollect; _dd_s=rum=0&expire=1746721964428; _ga_B0LPBSYH2P=GS2.1.s1746716951$o1$g1$t1746721064$j0$l0$h419102271; _rdt_uuid=1746716951432.984f16e4-33c4-4878-879f-c72afef45bba; _ga_RQRHS6NZ8V=GS2.1.s1746716951$o1$g1$t1746721064$j0$l0$h0; ttcsid_C44GACMI9NESIEHLT5RG=1746716951662::hD0QZ5yExFOKaC6Vr91n.1.1746721064572; ttcsid=1746716951662::I3QinMgVvzhN_xP9T03I.1.1746721064572",
    "Referer": "https://www.jackjones.com/es-es/vaqueros",
    "Referrer-Policy": "strict-origin-when-cross-origin"
}
export class JackJonesSearchUseCase {

    static async getCategory(url: string) {
        const res = await fetch(url).then(async (res) => await res.json()) as JackJonesCategoryResponse
        // console.log(res);
        return {
            url,
            mainCategory: res.breadcrumb?.slice(1).map((category) => ({
                id: category.categoryId,
                title: category.title,
            })) ?? [],
            subcategories: res.childCategories?.map((subcategory) => ({
                id: subcategory.categoryId,
                title: subcategory.title,
            })) ?? [],
        }

    }


    static async getProducts(category: {
        id: string
        title: string
    }) {

        // console.log("category", category);

        let finalResults: Result[] = []

        for (let i = 0; i < 2; i++) {
            const { results } = await fetch("https://www.jackjones.com/api/catalog/es-es/search?useNewIndex=true&type=json&redirect=false", {
                headers,
                "body": JSON.stringify({
                    from: i * 100,
                    size: 100,
                    tags: [["jack", "clothing", "jeans"], ["productset", "jeansproductset"]],
                    daysToTreatAsNew: 14,
                    origin: "categoryPage",
                    category: category.id,
                }),
                "method": "POST"
            })
                .then(async (res) => {
                    if (!res.ok) {
                        // throw new Error(`HTTP error! status: ${res.status}`);
                        return {results: []}
                    }
                    return await res.json();
                })
                .catch((err) => {
                    console.error("Error fetching products data:", err);
                    return { results: [] }; // Return an empty results array on error
                }) as JackJonesProductsResponse;
            console.log(`Fetched results ${i} ${results.length}`)
            finalResults = finalResults.concat(results);
        }

        // console.log(finalResults);

        // fs.writeFileSync("src/shops/jackjones/data/products.json", JSON.stringify(results, null, 2))

        return await Promise.all(finalResults.map(async (product) => {
            const url = new URL(`${BASE_URL}${product.url}?type=json`);
            const data = await fetch(url, {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "es-US,es-419;q=0.9,es;q=0.8,ca;q=0.7,en;q=0.6",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "priority": "u=1, i",
                    "rid": "anti-csrf",
                    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "st-auth-mode": "header",
                    "cookie": "market=es-es; isAuthenticated=false; r_wishlist=095ab50bfcc34f7dbb65d8779a317849; r_basket=aee5aeb8c441401ba9a944ed76978582; displayGeoLocatorFlyout=0; cookieyes-consent=consentid:ZU5hNTNSTzY1SExLdUpOd2EwWlFmQXAyMFRMZkgxdkI,consent:yes,action:yes,necessary:yes,functional:yes,analytics:yes,advertisement:yes,other:yes; _gcl_gs=2.1.k1$i1746716948$u133467541; _gcl_au=1.1.271666587.1746716951; _scid=r4CBZbos923W0dqRD_-S9aCVTeN32800; _fbp=fb.1.1746716951484.900622658769973; _ga=GA1.1.1114103064.1746716952; _ScCbts=%5B%5D; _clck=1ikqu9e%7C2%7Cfvq%7C0%7C1954; _tt_enable_cookie=1; _pin_unauth=dWlkPVltTTBNekV5TlRjdE9URTNaaTAwWVRNeExXSm1OV0V0WkRFeE5HUXdZVE0zTkRoag; FPGCLGS=2.1.k1$i1746716948$u133467541; FPAU=1.1.271666587.1746716951; Raptor.CookieId=fef344ed-6734-457c-a7c2-a2bdd525b8b7; _ttp=WQY5bS25ykXkgsFsxCZ8QsBbUX0.tt.1; FPGCLAW=2.1.kCj0KCQjwrPHABhCIARIsAFW2XBOwE3zIGIVzuaTLfPjCW-fPQOkBzq1REOEoO-Ma2n6MYl3NH1gLzwkaAuSnEALw_wcB$i1746716966; _gcl_aw=GCL.1746716967.Cj0KCQjwrPHABhCIARIsAFW2XBOwE3zIGIVzuaTLfPjCW-fPQOkBzq1REOEoO-Ma2n6MYl3NH1gLzwkaAuSnEALw_wcB; Raptor.SessionId=70e9efe4-115c-4bcc-9ce3-c42c5552fb45; _scid_r=qACBZbos923W0dqRD_-S9aCVTeN32800yuevQw; _derived_epik=dj0yJnU9OHFfU0FUYTZrVUFJMUk5UFpyX19Wd1RFOUZ5UTd6SHEmbj1rOHd0MHpzMGNWNUw3UGVVa3IyZURRJm09MSZ0PUFBQUFBR2djMlJFJnJtPTEmcnQ9QUFBQUFHZ2MyUkUmc3A9NQ; cto_bundle=6HPZgl9DNXdGZVU2NDg1MFVQdWx2VkhXRUxPdm04Y2NYdWIlMkJHRUN6ZzdTWk04dklTR25PMVR6NEswTGZ4VkZtdGl6YWclMkJGNkI5YlpKVDhqV2EwTHFEaDNYTm9IVEd5Wm9nWjZIbSUyRk0xNHZ3c1lMTTRNOTQ4S2IlMkZISmxOd2IlMkZEam1hVWFKRFJkam1QNnVqRGQ0WEFtYWFhTkN0cmpsZXpYQjFaZDNoSXp1QXNxQnFjJTNE; _dd_s=rum=0&expire=1746722143949; FPGSID=1.1746720081.1746721243.G-B0LPBSYH2P.mti36e_Zhv5nZ7z21xrQHQ; _rdt_uuid=1746716951432.984f16e4-33c4-4878-879f-c72afef45bba; _uetsid=80af66602c1e11f090d08f6e43412525; _uetvid=80af62a02c1e11f0b3b7a31842096d21; ttcsid=1746716951662::I3QinMgVvzhN_xP9T03I.1.1746721244415; _clsk=5zaujf%7C1746721244652%7C56%7C1%7Ck.clarity.ms%2Fcollect; ttcsid_C44GACMI9NESIEHLT5RG=1746716951662::hD0QZ5yExFOKaC6Vr91n.1.1746721244678; usizy.sk=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlMzg4YTg0ZTBiZWYxMWYwOTYzM2VlOWQ4MmUxOTgzNiIsIm5hdiI6eyI0MDA0IjpbIjAyMTVjZDM2MmMyNjExZjBhMzY3ZmFiNTJkNGU3ZDEyIiwxNzQ2NzIxMjQ0LDFdfX0.tr1X6QTl0MFadVvWHwWUiZEnT8JfeRmPhjh_opNoY_c; _ga_B0LPBSYH2P=GS2.1.s1746716951$o1$g1$t1746721250$j0$l0$h419102271; _ga_RQRHS6NZ8V=GS2.1.s1746716951$o1$g1$t1746721250$j0$l0$h0",
                    "Referer": "https://www.jackjones.com/es-es/product/12243592_3561/vaqueros-corte-slim-tiro-bajo",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": null,
                "method": "GET"
            }).then(async (res) => {
                return await res.json() as JackJonesProductResponse
            }).catch((err) => {
                console.error("Error fetching product data:", err);
                return null
            })

            // console.log(data)

            if (!data) {
                return null
            }
            const { product: productData } = data

            // fs.writeFileSync("src/shops/jackjones/data/product.json", JSON.stringify(productData, null, 2))


            return {
                id: product.id,
                price: product.price.salesPrice.amount,
                name: product.name,
                image: product.frontImage,
                images: productData.images,
                brand: product.brand,
                shop: "jack&jones",
                colors: product.productRelations,
                product_link: `${BASE_URL}${product.url}`,
            }
        }))
    }

}