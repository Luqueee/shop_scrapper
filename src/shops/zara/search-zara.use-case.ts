
import type { ZaraAutocompleteResponse } from "./types/zara-autocomplete";
import type { ZaraSearchResult } from "./types/zara-search";
import type { SearchProductsResponse } from "../shops"
import type { ZaraAvailabilityResponse } from "./types/zara-availability";
import type { ZaraProductsResponse } from "./types/zara-products";
import fs from "node:fs"

const BASE_URL_AUTOCOMPLETE =
	"https://www.zara.com/itxrest/1/search/store/10701/autocomplete?limit=10&ajax=true";

const BASE_URL_SEARCH =
	"https://www.zara.com/itxrest/1/search/store/10701/query?locale=es_ES&deviceType=desktop&deviceOS=Android&deviceOSVersion=6.0&catalogue=25551&warehouse=18563&offset=0&limit=36&scope=default&origin=default";

const BASE_URL_AVAILABILITY =
	"https://www.zara.com/itxrest/1/catalog/store/10701/product/id/:productid/availability";

const BASE_URL_PRODUCT_CATEGORY = "https://www.zara.com/es/es/category/:categoryId/products?regionGroupId=105&ajax=true"

export type ZaraGender = "WOMEN" | "MAN";

export class SearchZaraUseCase {
	constructor() { }

	async autocomplete(search: string, gender: ZaraGender, locale = "es_ES") {
		const url = new URL(BASE_URL_AUTOCOMPLETE);

		url.searchParams.append("query", search);
		url.searchParams.append("locale", locale);
		url.searchParams.append("section", gender);

		// console.log("url", url.toString());
		const { status, results } = await fetch(`${url}`, {
			method: "GET",
		})
			.then(async (res) => await res.json())
			.then((data) => {
				console.log("data", data);
				return data as ZaraAutocompleteResponse;
			});

		return { status, results };
	}

	async search(
		search: string,
		gender: string,
	): Promise<SearchProductsResponse> {
		const url = new URL(BASE_URL_SEARCH);
		url.searchParams.append("query", search);
		url.searchParams.append("section", gender === "WOMEN" ? "WOMAN" : "MAN");
		console.log("url", url.toString());
		const { status, results, facets } = await fetch(`${url}`, {
			method: "GET",
		})
			.then(async (res) => await res.json())
			.then((data) => {
				// console.log("data", data);
				return data as ZaraSearchResult;
			});

		// const colors = facets[1].values.reduce((acc, color) => {
		// 	acc[color.id] = {
		// 		hexCode: color.extraInfo?.color.hexCode,
		// 	};
		// 	return acc;
		// }, {});

		return {
			status: true,
			results:
				results?.map((item) => ({
					id: item.id,
					name: item.content.name,
					price: item.content.price,
					// images: item.content.xmedia.map((image) => ({
					// 	url: image.url,
					// })),
					section: item.content.sectionName,
					brand: item.content.brand.brandGroupCode,
					image: item.content.xmedia[0].url,
					images: item.content.xmedia.map((image) => image.url),
					mainColor: item.content.colorInfo.mainColorHexCode,
					colors: item.content.detail.colors.map((color) => ({
						id: color.id,
						productId: color.productId,
						color: color.name,
						image: color.xmedia[0].url,
						availability: color.availability,
						// hexCode: color[],
					})),
					product_link: `https://www.zara.com/es/es/${item.content.seo.keyword}-p${item.content.seo.seoProductId}.html`,
					// item,
				})) ?? [],
		};
	}

	static async getProductCategory(categoryid: number) {

		const url = new URL(BASE_URL_PRODUCT_CATEGORY);
		url.pathname = url.pathname.replace(":categoryId", categoryid.toString());

		console.log("url", url.toString());
		const { productGroups } = await fetch(`${url}`, {
			method: "GET",
		})
			.then(async (res) => await res.json())
			.then((data) => {
				return data as ZaraProductsResponse;
			}).catch((err) => {
				console.error("Error fetching products", err);
				return {
					productGroups: [],
				};
			});

		if (productGroups.length === 0) {
			return []
		}

		return productGroups.map((group) => {
			const products = group.elements.map((product) => {

				// fs.mkdirSync(`./data`, { recursive: true });
				// fs.writeFileSync(`./data/products.json`, JSON.stringify(product, null, 2));


				const elements = product.commercialComponents.map((element) => {

					// console.log("element", element);
					const images: string[] = [
						...new Set(
							element.detail.colors.map((color) => {
								return color.xmedia
									// .filter((image) => image.format === 1 && image.clazz !== 2)
									.map((image) => image.url ?? "");
							}
							).flat()
						),
					].filter((image) => image !== "");

					return {
						id: element.id,
						name: element.name,

						price: element.price,
						colors: element.detail.colors.map((color) => ({
							color: {
								name: color.name,
								id: color.id,
							},
							images: color.xmedia.map((image) => (image.url ?? "")).filter((image) => image !== ""),
						})),
						image: images?.find(image => image.includes("-p")) ?? images[0] ?? "",
						images: images,
						section: element.sectionName,
						brand: "Zara",
						product_link: `https://www.zara.com/es/es/${element.seo.keyword}-p${element.seo.seoProductId}.html`,
					};
				}
				);
				return elements;
			});

			return products.flat();
		});

		// return data;
	}

	async availability(productId: string) {
		const url = new URL(
			BASE_URL_AVAILABILITY.replace(":productid", productId),
		);
		console.log("url", url.toString());
		const { skusAvailability } = await fetch(`${url}`, {
			method: "GET",
		})
			.then(async (res) => await res.json())
			.then((data) => {
				console.log("data", data);
				return data as ZaraAvailabilityResponse;
			});

		return skusAvailability;
	}
}
