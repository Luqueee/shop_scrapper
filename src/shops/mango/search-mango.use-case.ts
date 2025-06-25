import { ProductEntity } from "../../db/product.db"
import type { MangoProductResponse } from "./types/mango-product"

const BASE_URL_PRODUCT = "https://online-orchestrator.mango.com/v4/products?countryIso=ES&channelId=shop&languageIso=es"
const BASE_URL_PRICE = "https://online-orchestrator.mango.com/v3/prices/products?countryIso=ES&languageIso=es&channelId=shop"
const BASE_URL_IMAGE = "https://st.mngbcn.com"
export class SearchMangoUseCase {


    static generateImageUrl(url: string) {
        return `${BASE_URL_IMAGE}/${url.split('/assets/')[1]}`
    }


    static async getProduct(productId: string) {
        const urlProduct = new URL(BASE_URL_PRODUCT)

        urlProduct.searchParams.append("productId", productId)

        const urlPrice = new URL(BASE_URL_PRICE)
        urlPrice.searchParams.append("productId", productId)

        const price = await fetch(urlPrice,).then((res) => res.json()).then((res) => {
            return res[Object.keys(res)[0]].price
        }) as number

        const { reference, colors, families, name, seller, genderId, url } = await fetch(urlProduct,).then((res) => res.json()) as MangoProductResponse

        // console.log("data", data)

        const images = colors.map((color) => {
            return Object.entries(color.looks).map(([key, value]) => {
                return Object.entries(value.images).map(([key, value]) => {

                    return SearchMangoUseCase.generateImageUrl(value.img)
                }
                )
            }).flat(3)
        }).flat()

        const colorsResult = colors.map((color) => {
            const images = Object.entries(color.looks).map(([key, value]) => {
                return Object.entries(value.images).map(([key, value]) => {

                    return SearchMangoUseCase.generateImageUrl(value.img)
                }
                )
            }).flat(3)

            return {

                color: {
                    name: color.label,
                    id: color.id,
                    sizes: color.sizes.map((size) => {
                        return {
                            name: size.label,
                            id: Number(size.id),
                            price: Number(price)
                        }
                    }
                    )
                },

                images: images,

            }
        })



        return {
            id: reference,
            name,
            images: images,
            image: images[0],
            colors: colorsResult,
            category: families[0].label,
            gender: genderId === "H" ? "man" : "woman",
            price: price,
            brand: seller,
            product_link: url,
        }

    }

}