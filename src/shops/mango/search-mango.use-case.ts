import { ProductEntity } from "../../db/product.db"
import type { MangoProductResponse } from "./types/mango-product"

const BASE_URL_PRODUCT = "https://online-orchestrator.mango.com/v4/products?countryIso=ES&channelId=shop&languageIso=es"
const BASE_URL_IMAGE = "https://st.mngbcn.com"
export class SearchMangoUseCase {


    static generateImageUrl(url: string) {
        return `${BASE_URL_IMAGE}/${url.split('/assets/')[1]}`
    }


    static async getProduct(productId: string, price: string) {
        const url = new URL(BASE_URL_PRODUCT)

        url.searchParams.append("productId", productId)

        const { colors,  } = await fetch(url,).then((res) => res.json()) as MangoProductResponse

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
                images: images
            }
        })



        return {
            images: images,
            image: images[0],
            colors: colorsResult
        }

    }

}