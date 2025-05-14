import type { BershkaSearchResponse } from "./types/bershka-search";
import type { BershkaProductsResponse } from "./types/bershka-products";
import type { SearchProductsResponse } from "../shops";
import axios from "axios";
import type { BershkaCategoryResponse } from "./types/bershka-category";
import fs from "fs";
const BASE_URL_SEARCH =
	"https://2kv2lbqg6e-dsn.algolia.net/1/indexes/pro_SEARCH_ES/query?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser&x-algolia-application-id=2KV2LBQG6E&x-algolia-api-key=MGY4YzYzZWI2ZmRlYmYwOTM1ZGU2NGI3MjVjZjViMjgyMDIyYWM3NWEzZTM5ZjZiOWYwMzAyYThmNTkxMDUwMGF0dHJpYnV0ZXNUb0hpZ2hsaWdodD0lNUIlNUQmYXR0cmlidXRlc1RvU25pcHBldD0lNUIlNUQmZW5hYmxlUGVyc29uYWxpemF0aW9uPWZhbHNlJmVuYWJsZVJ1bGVzPXRydWUmZmFjZXRpbmdBZnRlckRpc3RpbmN0PXRydWUmZ2V0UmFua2luZ0luZm89dHJ1ZSZzbmlwcGV0RWxsaXBzaXNUZXh0PSVFMiU4MCVBNiZzdW1PckZpbHRlcnNTY29yZXM9dHJ1ZQ%3D%3D";

const BASEU_URL_PRODUCTS =
	" https://www.bershka.com/itxrest/3/catalog/store/44009500/40259530/productsArray?appId=1&languageId=-5&locale=es_ES";

const BASE_URL_CATEGORY = "https://www.bershka.com/itxrest/3/catalog/store/44009500/40259530/category/:categoryId/product?showProducts=true&showNoStock=true&appId=2&languageId=-5&locale=es_ES"

export class SearchBershkaUseCase {

	static async search(
		search: string,
		gender: "WOMEN" | "MEN",
	): Promise<SearchProductsResponse> {
		const urlSearch = new URL(BASE_URL_SEARCH);
		const formattedGender = gender === "WOMEN" ? "women" : "men";

		const { hits } = await fetch(`${urlSearch}`, {
			method: "POST",
			body: JSON.stringify({
				params: `query=${search}&filters=categoryHierNamesEn%3A${formattedGender}&attributesToRetrieve=%5B%22pElement%22%5D&facets=%5B%22categoryHierNamesEn%22%2C%22categoryNameEn%22%2C%22sizes%22%2C%22price%22%2C%22discount%22%2C%22colorNameEs%22%5D&facetFilters=%5B%5D`,
			}),
		})
			.then(async (res) => {
				return await res.json();
			})
			.then((data) => {
				// console.log(data);
				return data as BershkaSearchResponse;
			})
			.catch((err) => {
				console.error("Error fetching Bershka search results", err);
				throw err;
			});

		// console.log("hits", hits);

		const ids = hits.map((item) => item.pElement);
		// console.log("ids", ids);
		const productsUrl = new URL(BASEU_URL_PRODUCTS);

		productsUrl.searchParams.append("productIds", ids.join(","));
		const { products } = await fetch(`${productsUrl}`, {
			method: "GET",
		})
			.then(async (res) => await res.json())
			.then((data) => {
				// console.log("data", data);
				return data as BershkaProductsResponse;
			});

		return {
			results:
				products?.map((item) => {
					// const images: string[] = [...new Set(item)].filter(
					// 	(image) => image !== "",
					// );
					const images: string[] = [
						...new Set(
							item.bundleProductSummaries[0].detail.xmedia[0].xmediaItems[0].medias
								.filter((media) => media.format === 1 && media.clazz !== 2)
								.map((image) => image.url ?? ""),
						),
					].filter((image) => image !== "");
					return {
						id: item.id,
						name: item.name,
						price: Number.parseInt(
							item.bundleProductSummaries[0].detail.colors[0].sizes[0].price,
						),
						image: images[0],
						images: images,
						brand: "Bershka",
						// item: item,
						product_link: `https://www.bershka.com/es/${item.productUrl}`,
						// availability: item.detail.colors[0].sizes[0].availability,
					};
				}) ?? [],
			status: true,
			// return products;
		};
	}

	static async getProducts(categoryId: number) {

		console.log("categoryId", categoryId);
		const productsUrl = new URL(BASE_URL_CATEGORY.replace(":categoryId", categoryId.toString()));

		const { products, productIds } = await fetch(`${productsUrl}`, {
			method: "GET",
			"headers": {
				"accept": "*/*",
				"accept-language": "es-US,es-419;q=0.9,es;q=0.8,ca;q=0.7,en;q=0.6",
				"cache-control": "no-cache",
				"pragma": "no-cache",
				"priority": "u=1, i",
				"sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"cookie": "OptanonAlertBoxClosed=2025-02-02T15:39:40.810Z; UAITXID=3129dfa26eb7d121860a23649f5fb83e4fcadbbb1edd4bffb95161707c8e25d2; BSKGeoStore=/es/; _dyid=-4728778653517770310; _dy_geo=ES.EU.ES_CT.ES_CT_Sabadell; _dy_df_geo=Spain..Sabadell; _ga=GA1.1.1851115154.1742127523; _scid=0iS5WiKF3tBub7lGxHkWrtA5ddfNp4fi; optimizelyEndUserId=oeu1742127523531r0.595471300085642; _fbp=fb.1.1742127523574.318487796924838988; _tt_enable_cookie=1; _ttp=01JPFE8SSE64RKZ6QBHNNTPFA4_.tt.1; FPC=id=bdc986ed-02a8-4b46-a919-16dc773dcdeb; optimizelySession=0; _gcl_au=1.1.381275835.1742911893; recentSearches=[\"Pantalones\",\"Pantalones%20cortos\"]; BershkaGenderCategoryKey=BERSHKA_BSKTEEN; ITXSESSIONID=4640d2a4ff68f0036082a269e4dfbff0; BSKSESSION=80eca88e153b80a3dcc480f8f4569a95; bm_mi=42EE35E53358576BD85FA5E82E866F0D~YAAQRiMRAg9yUImWAQAAa1blsBsc3W4q6+S2mvYkDvQr8T4tpI1cxC/k6Y4OswsXH4Ix8N4xCRonGg64V/a7HTA2uv0Tk7JQlZGxzQsgXhs2aNSylxNKVSL4mdxAAHfxB1CX1YOTdspYAOtgeHsPBAimkY64FFZfNPqzBrcm1BTOGwZhCh3eDh1Z+2YvLvu9MX/iMusY5Pz822PMSG53ZWlxUxBYc/XDur3PL1lVpepYl5IRtWxIyuZj0UBTeONGTPCUXmpCFPrFEnW+gvWK8a0/rCMU41oYKaYKBp2QxL7q/zaBwBl+Vc/kDN0h~1; _dyjsession=uflhs63ijxsmika9t98ii7wysytqw1w7; dy_fs_page=www.bershka.com%2Fes%2Fh-bskteen.html; _dy_toffset=-1; ak_bmsc=9168AC07DBB055A85772A4F3E4D36828~000000000000000000000000000000~YAAQRiMRAlhyUImWAQAALlzlsBtJY60fou37/8g+eDUOVvLMf3YvAwH1PhmjqbBg5WMapsdefK+nf/1yt2LDt9kjrMPThobF7gJDRH8Te3ZhIxqfBfXIsp3dHhaHeYdGbN6r26jww8atdfiXuXlBXanZwzIop6llFSco6e8qiTpTH7k+Qq4EVH7ZfRoqXpgAmhCdCIvh1sLVy/PW2Gx0aBZr6861Ly20BRcoU3BO9Eb1EtqR0kLE1ySY44EcOQqHkrStqIdiDyvsYDJWt/aU/A79lpX5GRRcDk8kXkRk7ffOMFOYI9oLsvscBRaigPVwegvLVO2mEOcoDtM1G/GTa0qMlalCMhY6OlJXh4NzmBXOtlm4K99Ointl3L/zpBC1viwpk5FRbld+5CDOfYQhF4yhPxyu9z3bkCex2Qk+iXDF/9T/Gpg45uZJLjapFKpKjEs//LQ40ndgAbCTglo9dxT6vmkCc+VE5X0yZmUH8ohGccgLaAdRyf7povz0XxnYZhtnsWFMJepBGtW6HWNah8HQX6JmTAx6jqp53MGWqkxWV1DCjiChZOIm3bSUbc/nmuMROFUtSA==; IDROSTA=bc28744e391e:2afc4be7690febbe5603f88f9; _scid_r=56S5WiKF3tBub7lGxHkWrtA5ddfNp4fij2EjUg; _ScCbts=%5B%5D; _uetsid=14b6a0902c3011f084fa450842a14d25; _uetvid=cd80bf00026011f090f71be846f57ef8; ttcsid=1746724546621::KLSk6j1mvmqZGzYl99RB.9.1746724549377; ttcsid_CD4ISPBC77U9UGLCVP60=1746724546621::PwNI0bto2NVFgWPjeq59.9.1746724549666; _ga_3W4Z1T7RNM=GS2.1.s1746724546$o15$g1$t1746724553$j53$l0$h0; TS01a8c9e3=0151a414e7c0b4c95d55b1d19b774158ad49d948de392d2fe1abe6b0a811241c627ff7cb599ba584437e3a6c4072e765d1962144ae; bm_sz=3EB2CF303F23A96CFB89A4B8886E8A5A~YAAQRiMRAhl0UImWAQAAl4HlsBuqUpuaaZlL3q2vFDYctrANytZctkHFsFd+negSCE3IH9DC0jz60e4sWdEAtjvULgNOeuZt0+3wUi/UGp9/TqQXcLK+i/1BwAU4ok0aSA3z1QoIogvG9H6YaXTK6W5jUJ6/69Dyh8YWcQsFdrn7cw4X5KwBKwom1VkFtvAd6UqRtEFR/eOiZejg1dVAnjl0CjpFLKu+SgDTWEabSMxXE2IqluthMNQLv6Vrtpylt3zGiw/pO5XyvyYodJuc4s9PklHdKyDny/SXRRS6r3F6AWy7m86q6NFvPxjAPXBk0rW4kp8eUDvV1k2wgedBNah3rJicfnda2HrCs2MoHKZpT6ygxrcoDY9t5g+vEAxhDzJH7R9rQh4P/raLiKMsLbxKP1dt20jk/pqb3op4vuoH11Zr+VIabsAT~4277574~3749681; _ga_NOTFORGA4TRACKING=GS2.1.s1746724546$o14$g0$t1746724553$j0$l0$h448533267; _dy_soct=1746724554!1359781.-8208019!4pf2v17ry2sbak5bnvbxvy35w4yqunt8~1096124.-8213770'1096125.0'1113871.0'1202086.0'1202087.-613828'1202088.-4597034; _abck=7A389FED732748384191266982200625~0~YAAQRiMRAj90UImWAQAAtYXlsA3jubSUu9K3XqPoV4fz1saQFGSPGdE3xIbum/W9YIzO4DaKhtWiA2dbKbXbvSzhCFZW9iIxibNt08IlrPoAl1vxm7EzRQYyZBkUZvha0ZePPW9UO2ASHfdqOhVNEQyVt9iVq2d8qYRKvr0IBSbhDqiSqc/6jB7A9nd/nCgTJpFizHxsyjbPly2yMM9xCr5oJd+4/fYfF2rMOaqYnBhQ/PWiGlEswc3w9VApVukZ7nllt3lLadlPzGmFVNg70adHP2SIn64/7hwkbLZ+u5n6gAJIrd6QxeB49GBTNIumwPQSNHDO52wQJ4nYLtzhsKtEWKCOl6iEx+pM5Un0ZpMXKJp0v/DL0PRYTO07fxAIv6FLcekenWbMNgUY0kf10l2x4JEkIVFjMkEBa2AQJYaLvob4HJp8iyS218fFJDJgMeNyuOIxjDE4lIrXvJuI+GljuL37g/01EYQh4rOpHg6fUUqsuvJEVEH3y0YhZxM5wkzoG+Mf3KjkTCNNkmOP5KrcrKzAuTqdlM8c7XnCog5UAsoSuUdNpGIz3/dNPOY4s4EAdtxmAeGRPTywyF1koiszx8ljI3o+57odLkFBzQuIHPPVuoUxmv5qR8U5j07tSbf5EJQihqcxDmf+MyN5q9IbUCfA76FYRwGvOlzCda0XeDV9ccfRDKhsqYARKT/KNKbAKO1g1XdvBiAlrk4MmEK4Uq1T4b+2926i6LPe+mOWTjk=~-1~-1~1746728143; bm_sv=A74FAC0B43B0D1400E91E0B46A86E05E~YAAQRiMRAnR0UImWAQAAI4vlsBvR8H7CdpmZdyfhrCyH33IPeWsukPmK/nA4twq3fSuEPbG4xNEAgXjyFatRLPYHDtmWVEzEIbwz8KbHBdRlmoM9TbY1eV+Fh0PgKi5X+cjBHP07+THmYJf8GuoPFO4az37+bulQLQH3SaxvSxrbBeJwe6EEiCwbjjUu3K6O4w0KE8u8vMQ6ddV26HjZAvEyULOHkn2MsnRfXTmpeNkTx5shCxTiNdm7NAnwGYcnJmI=~1; OptanonConsent=isGpcEnabled=0&datestamp=Thu+May+08+2025+19%3A15%3A56+GMT%2B0200+(hora+de+verano+de+Europa+central)&version=202302.1.0&isIABGlobal=false&hosts=&consentId=f768d409-b92c-4718-a4bd-5c1aa5c1e96e&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1&geolocation=ES%3BCT&AwaitingReconsent=false",
				"Referer": "https://www.bershka.com/",
				"Referrer-Policy": "origin"
			},
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": null,

		})
			.then(async (res) => {
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return await res.json();
			})
			.then((data) => {
				if (!data.products || !data.productIds) {
					throw new Error("Unexpected response structure");
				}
				return data as BershkaCategoryResponse;
			});


		// console.log("products", productIds);

		const productsArrays = await this.getProductsArray(productIds);

		return productsArrays

	}

	static async getProductsArray(ids: number[]) {

		const productsUrl = new URL(BASEU_URL_PRODUCTS);

		productsUrl.searchParams.append("productIds", ids.join(","));

		const { products } = await fetch(`${productsUrl}`, {
			method: "GET",
		})
			.then(async (res) => await res.json())
			.then((data) => {
				// console.log("data", data);
				return data as BershkaProductsResponse;
			});


		return products?.map((item) => {

			if (!item.bundleProductSummaries) return

			const productsSummaries = item.bundleProductSummaries.map((productSummary) => {
				const images: string[] = [
					...new Set(
						productSummary?.detail?.xmedia?.map((xmediaItem) => {
							return xmediaItem.xmediaItems?.[0]?.medias
								?.filter((media) => media.format === 1 && media.clazz !== 2)
								?.map((image) => image.url ?? "") ?? []
						}).flat(),
					)
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
						name: string, id: string,
						sizes: { name: string, id: number, price: number }[]
					}
				}) ?? {};


				const imagesColors = productSummary.detail.xmedia.map((medias) => {
					const color_match = colorsProduct[medias.colorCode]

					const images = medias.xmediaItems.map((image) => {
						return image.medias.filter((media) => media.format === 1 && media.clazz !== 2).map((image) => image.url ?? "");
					}).flat().filter((image) => image !== "") ?? [];
					return {
						color: color_match,
						images: images,
					};
				})

				// console.log("colors_product", colorsProduct, imagesColors);

				return {
					id: item.id,
					name: item.name,
					price: Number.parseInt(
						item.bundleProductSummaries?.[0]?.detail?.colors?.[0]?.sizes?.[0]?.price ?? "0"
					),
					image: images[0],
					images: images,
					colors: imagesColors,
					brand: "Bershka",
					// item: item,
					product_link: `https://www.bershka.com/es/${item.productUrl}`,
					// availability: item.detail.colors[0].sizes[0].availability,
				};
			})

			// console.log("item", item.detail);
			// if (item.bundleProductSummaries.length > 1) {
			// 	fs.writeFile('product.json', JSON.stringify(item), (err) => {
			// 		if (err) {
			// 			console.error("Error writing file", err);
			// 		} else {
			// 			console.log("File written successfully");
			// 		}
			// 	});
			// }

			return productsSummaries


		}) ?? []

		// return products;


	}
}
