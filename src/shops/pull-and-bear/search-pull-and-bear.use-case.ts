import type { PullAndBearSearchResponse } from "./types/pull-and-bear-search";
import type { PullAndBearProductsResponse } from "./types/pull-and-bear-products";
import type { SearchProductsResponse } from "../shops";
import type { PullAndBearCategory } from "./types/pull-and-bear-category";
import fs from "node:fs"

export const BASE_URL_CATEGORIES = "https://www.pullandbear.com/itxrest/2/catalog/store/24009509/20309449/category?languageId=-5&typeCatalog=1&appId=1"

export const BASE_URL_SEARCH =
	"https://www.pullandbear.com/itxrest/1/search/store/24009400/query?scope=mobile&locale=es&catalogue=20309449&warehouse=22109411&offset=0&limit=200&origin=default&returnableFields=internal_id%2Cname%2CproductId&session=.1744236000000&deviceOS=Windows&deviceType=mobile&user=";
export const BASE_URL_PRODUCTS =
	"https://www.pullandbear.com/itxrest/3/catalog/store/24009400/20309449/productsArray?languageId=-5";

export const BASE_URL_CATEGORY = "https://www.pullandbear.com/itxrest/3/catalog/store/24009400/20309449/category/:categoryId/product?languageId=-5&showProducts=true&priceFilter=true&appId=1"


export type PullAndBearGender = "WOMEN" | "MAN";

const headers = {
	"accept": "*/*",
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
	"sec-fetch-site": "same-origin",
	"cookie": "UAITXID=8d4bc9f267296799b4e1ba4787acc07b471d4fafe0adfcd57e619aebe95e1171; OptanonAlertBoxClosed=2025-03-25T17:18:13.083Z; opti_priority_load=true; _imutc=8750ce2970db8ee9d4dd60490193376dc5dc46feb4ac485d48b5be0c1245202c; optimizelyEndUserId=oeu1742923093123r0.5551609724566766; _scid=CjM6g7wIGpW4shXLtYnBjAVI9gCHhTGS; _ga=GA1.1.952314804.1742923093; _fbp=fb.1.1742923093224.3023930614238551; _tt_enable_cookie=1; _ttp=01JQ74ZNACS2ZNVG8YSDGC0EA3_.tt.1; _pin_unauth=dWlkPVltTTBNekV5TlRjdE9URTNaaTAwWVRNeExXSm1OV0V0WkRFeE5HUXdZVE0zTkRoag; ORA_FPC=id=1f232c85-29c0-4cd3-b7b4-21e011f75fba; WTPERSIST=; _gcl_au=1.1.152960739.1742923096; _hjSessionUser_1704171=eyJpZCI6IjI3NTQxNzQ3LTk1NmUtNTYxYS1hYThmLWJlYzBmYTYwM2Y0NyIsImNyZWF0ZWQiOjE3NDI5MjMwOTMzNjYsImV4aXN0aW5nIjp0cnVlfQ==; optimizelySession=0; _itxo11y_id.fb55=14f82418-6fe0-4894-ad73-e66a12565383.1742923091.8.1746000079.1745995047.377e1c9a-a71b-456e-a8da-ba651ff4de8f.f8b99b09-27a6-4531-a27e-1b6c23a32ab8.9fed845f-8a64-4735-834b-dbbefb5eb65c.1745999986948.3; 27d0b6ecbed4db02e6b1182341530324=e2e74ba12414803c1a1391e5b0d84c85; bm_sz=5183029A848502028C7E2F0354DB3953~YAAQPiMRAiJtWK2WAQAAvmZ/sBvMNAXgK+99zkFA4eF1Pdo9W3OjJ6NNVSCKWg7lCpPiIoq2fFNrlMZTnGoPhFN6mXWexpXt9sEnV7go5sweOILnxozdVMGv47WkXIUOQy43uwi3EmVgsWc8YDBEaEffAdQFOdzNaKr9HsfzsUgoO+bCHJC4RXShWnxDGf4TPN3dCh3wWUHJxXG1/0e2R8kS8HMMaf11er+xViUr6DOQDJeCpq3zRb5YFLFLbpzuA+yqm27BHE6zbRc+EAG+wA6RdTfmlG9Z8GTra9G+SBBVjfDIB8sM18OaZYjyPwAJf71XaHY4AYF4jRIMWHfQmPLBOpipJiGEOFZ6NQvRi/C1sQ4eYxUg+i9su8ig8foBFvpsncdFqnu0jlm5KtvyxpdjK82EDP7Y180ghiZJhQdh9ureBu8fy/JHkztlR7+zR8fSVuTy7y93ofe1YSDUvgQLkYriIg==~3683137~3290946; ITXSESSIONID=c1f50fe6a578e1ad420bf613e1aab40d; PBSESSION=63fb3dc2ba27a4393502adaac95e0976; bm_mi=E9A48E26FDAC344B0521368ECFB1D075~YAAQEfMUAvgbX62WAQAAEa/nsBssN9zKGHlyz0dgre8knzBSRrWEYjMnd2+bNLU/c5Y9Dq1mTK9w6NgMQgMxjBxNxkBZPYEzEUPDf7YUGmy7FZgyqOOfkNQ2Reo8DrH2E8Yomcb+6LK6mBrrxz8Gzyi3GhAPfDqFMw6X2LjKrWxqOp6m2td0gYSK6NDroXywsPLYxSKV8PzqXtt83hVFFK/GpHJ9CQ+OHxeY9qog5EZWYxqk/ubqgXVrzpMiU5/0PTtDStDo5PPWwMVlfaLuKIiW1jQLHgqgGDAjJd9kchRLZc8z0ha7W/GSy1sWc2OQScA7cQ==~1; IDROSTA=4eb27b611608:2eb4bdcce97bc4a86d4e68aff; _scid_r=H7M6g7wIGpW4shXLtYnBjAVI9gCHhTGScHHe5Q; _hjSession_1704171=eyJpZCI6ImJjZmQ1M2EzLWI3NzAtNGQ0ZC1hMGQxLTkwYTUwYzE5NzIzZiIsImMiOjE3NDY3MjQ2OTc1OTMsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; ak_bmsc=EE96FF42D55D7C4D34794F24D28E9F8A~000000000000000000000000000000~YAAQEfMUAi8cX62WAQAAQrPnsBucvq6JTylS1QNu1ibn/B/yn4NTRBIGREv5A5bwMlo+05+/nuSgsFJraXKPW4gTPFwVwalwwGkh3taZdzwmAjeZl1cHNyb2ySFmf05xy5+f88X++KMZtss1lFTZmg+lG7kWCUS+sF6zmqPiP0/tUUU/ZxizDus0pDJpm66UCwjnjhxuM7FTPx+Iwcyr1wNEMiknyeeY3VXhOtOEiw2Nc8E+wM8syNhDhQhrpRFLausqhPOBogwDeW6Ut5MnxgdpSzEEIwB+op92WOAfW9GRBmbquCOVYh6Ml9o+pzFRRTfwO+9gm3GF37BnWYiVfSKKcznpjubHB+jm7su/QbTS4otLHGxN4ADfGELRJ2EzsdxRGEpp7QNh6uC8c6H671KZ6LwxF4wt+sSwyFJVpeZ2LMTEMw1vOBBS1pZ4JSmOm0qO2Qnp9iEdumIu97qqbMnMcUtLalQ7B7W0pbQtXvmi0fWu4rooGoBHkWi+aPwAoq0pWuzu93V0QmgLPw8HPw+rnPKMy4LA4cZLaZAQUvFnUM3MaUtSwP6RzCzMcYK/YExcxqkNxMq6bau8Oww=; _ScCbts=%5B%5D; ttcsid_C29SV7NMU8Q03RAIHJ20=1746724697821::dGGVMuJDDYHOGpZPcM39.9.1746724697933; ttcsid=1746724697822::lMPNQOZjMoObmd_Qj4J3.9.1746724697933; _ga_WK516SYDRY=GS2.1.s1746724697$o12$g1$t1746724704$j53$l0$h1531153068; OptanonConsent=isGpcEnabled=0&datestamp=Thu+May+08+2025+19%3A18%3A25+GMT%2B0200+(hora+de+verano+de+Europa+central)&version=202211.2.0&isIABGlobal=false&hosts=&consentId=08fded2a-a30c-4247-8eaa-c7766b5377bb&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&geolocation=ES%3BCT&AwaitingReconsent=false; _derived_epik=dj0yJnU9ZnJjSzlFVDhtQnUzYW5rRE1XUEcyTFpnaWJIMlVfX0Ymbj1LNll4ZnkyRjlJUGNVUFZfU3JaV1Z3Jm09MSZ0PUFBQUFBR2djNTJBJnJtPTEmcnQ9QUFBQUFHZ2M1MkEmc3A9Mg; TS01a139e1=01aee7bf31117f12c850e884ffa53d8d76164e0d3a4c26257617f8981cdfd47c7697acf832ffac1b74a5715431032eb2fa072c7156; bm_sv=57714D69F6DD6F4D6B63FF741DF4DD69~YAAQEfMUAgcdX62WAQAAWdPnsBsNtblnZx8EGJh7j5v8UckXOp+iXKZj004DTVTIn2I0Z8fcTnAqyJqpUGrbCtaa/aPN0F/aKWfeG4K4r88UWMoN28KdLdfhWYTHKxPJ4XhFYyHuC4ogGjOBvqL81AP6LgVa7lO11lwPdlbKilw4oUpdmT0bRuazwML8hmSuO7JCYQPlVqES9aN5lxBH9fruls3Gc4fRFW7Anp+P2xGypjMeW36GQ+DXUKG4lyWRvwVXhSEb~1; _abck=6D529417A82A907DFB6DD9244F50B359~0~YAAQEfMUAggdX62WAQAAl9PnsA2Fd48HklAtyuHAWzn8y3nec1UCJOGhC2IXKcVHoD4baxVARUB/o53hYYeSjZlh3vzYSV4W23ciXbUKSVKxpHHkEXI9ZFkNZ+MlyaN2pVOJOOV3y09P/54Ut1/bu3y5k0RVO2L89merWVlepoVA8+BYLvg0Y88NTf2EzXOI7U4Ji1jvSkOnILudKa8/wghvT6Z7CDAg2SXClYwnU3UI7h5CULftYOHPJfsj+xcjZC9I0PNRp02lfB6atZIifcBO40YMSaJPFIq2KchP9UjsHczOecqeP8JMM8j6ScyA42csY29hY5MIW9ZufSnzB/exgBS3z23Pw2CDLyC3Ze2w1doH4sBd9zp+9GhHpCv45pp+46D2ytzIrvwyIXbfzfDUtrkPzunnUmYBqWbiLS+10mgROPQNaSBKGFLtl7GpGuoi6+vQnhZcpT3FVIYORndpc9JyGKVLnrSYNXoTqhhJEcHbGoDZeKjmp1SLnYuG6NbF2/nXyIGNfWwA6jICLAlQ9as4yKl5fQ1YV93Ju9C0~-1~-1~1746717946; _ga_NOTFORGA4TRACKING=GS2.1.s1746724697$o14$g0$t1746724705$j0$l0$h1155604193",
	"Referer": "https://www.pullandbear.com/",
	"Referrer-Policy": "origin"
}

export class SearchPullAndBearUseCase {
	constructor() { }

	static async search(
		search: string,
		gender: string,
	): Promise<SearchProductsResponse> {
		const formattedGender = gender === "WOMEN" ? "mujer" : "hombre";
		const formattedSection = gender === "WOMEN" ? "Women" : "Man";
		const url = new URL(BASE_URL_SEARCH);
		url.searchParams.append("section", formattedGender);
		url.searchParams.append("sections", formattedSection);
		url.searchParams.append("query", search);
		const { results } = await fetch(`${url}`, {
			method: "GET",
		})
			.then(async (res) => await res.json())
			.then((data) => {
				// console.log("data", data);
				return data as PullAndBearSearchResponse;
			});

		const ids = results.map((item) => item.id);
		const productsUrl = new URL(BASE_URL_PRODUCTS);

		productsUrl.searchParams.append("productIds", ids.join(","));


		const { products } = await fetch(`${productsUrl}`, {
			method: "GET",
		})
			.then(async (res) => await res.json())
			.then((data) => {
				// console.log("data", data);
				return data as PullAndBearProductsResponse;
			});



		return {
			status: true,
			results:
				products?.map((item) => {
					const images: string[] = item.detail?.xmedia?.[0]?.xmediaItems?.[0]
						?.medias
						? [
							...new Set(
								item.detail.xmedia[0].xmediaItems[0].medias
									.filter((media) => media.format === 1 && media.clazz !== 2)
									.map((image) => image.url ?? ""),
							),
						].filter((image) => image !== "")
						: [];

					return {
						id: item.id,
						name: item.name,
						price: Number.parseInt(
							item.detail?.colors?.[0]?.sizes?.[0]?.price ?? "0",
						),
						image:
							item.detail?.xmedia?.[0]?.xmediaItems?.[0]?.medias?.[0]?.url ??
							"",
						images,
						// images: item.detail.xmedia[0],
						brand: "Pull&Bear",
						section: item.sectionNameEN ?? "",
						product_link: `https://www.pullandbear.com/es/${item.productUrl ?? ""}`,
					};
				}) ?? [],
		};
	}


	static async getProducts(
		categoryId: number,
	) {
		console.log("categoryId", categoryId);

		const url = new URL(BASE_URL_CATEGORY.replace(":categoryId", categoryId.toString()));


		const { productIds } = await fetch(`${url}`, {
			method: "GET",
			headers
		})
			.then(async (res) => await res.json())
			.then((data) => {
				return data as PullAndBearCategory;
			});

		// console.log("productIds", productIds);
		const products = await this.getProductsArray(productIds);

		return {
			status: true,
			results: products,
		}
	}


	static async getProductsArray(
		ids: number[],
	) {
		const productsUrl = new URL(BASE_URL_PRODUCTS);

		productsUrl.searchParams.append("productIds", ids.join(","));


		const { products } = await fetch(`${productsUrl}`, {
			method: "GET",
			headers
		})
			.then(async (res) => await res.json())
			.then((data) => {
				// console.log("data", data);
				return data as PullAndBearProductsResponse;
			});

		// console.log("products", productsUrl.href);

		return products?.map((item) => {
			if (!item.bundleProductSummaries) return;

			const productsSummaries = item.bundleProductSummaries.map((productSummary) => {
				const images: string[] = [
					...new Set(
						productSummary?.detail?.xmedia?.map((xmediaItem) => {
							return xmediaItem.xmediaItems?.[0]?.medias
								?.filter((media) => media.format === 1 && media.clazz !== 2)
								?.map((image) => image.url ?? "") ?? [];
						}).flat(),
					),
				].filter((image) => image !== "") ?? [];

				const colorsProduct = productSummary.detail.colors?.reduce((acc: { [key: string]: { name: string, id: string, sizes: { name: string, id: number, price: number }[] } }, color) => {
					const colorName = color.name;

					acc[color.id] = {
						name: colorName,
						id: color.id,
						sizes: color.sizes.map((size) => {
							return {
								name: size.name,
								id: size.sku,
								price: Number(size.price),
							};
						}),
					};
					return acc;
				}, {} as {
					[key: string]: {
						name: string;
						id: string;
						sizes: { name: string; id: number; price: number }[];
					};
				}) ?? {};

				const imagesColors = productSummary.detail.xmedia.map((medias) => {
					const color_match = colorsProduct[medias.colorCode];

					const images = medias.xmediaItems
						.map((image) => {
							return image.medias
								.filter((media) => media.format === 1 && media.clazz !== 2)
								.map((image) => image.url ?? "");
						})
						.flat()
						.filter((image) => image !== "") ?? [];
					return {
						color: color_match,
						images: images,
					};
				});

				return {
					id: productSummary.id,
					name: productSummary.name,
					price: Number.parseInt(
						productSummary.detail?.colors?.[0]?.sizes?.[0]?.price ?? "0",
					),
					image: images[0],
					images: images,
					colors: imagesColors,
					brand: "Pull&Bear",
					product_link: `https://www.pullandbear.com/es/${productSummary.productUrl}`,
				};
			});

			return productsSummaries;
		}).flat() ?? []

	};
}


