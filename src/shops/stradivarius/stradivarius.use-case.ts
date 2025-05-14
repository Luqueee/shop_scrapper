
import type { StradivariusAutocompleteResponse } from "./types/stradivarius-autocomplete";
import type { StradivariusSearchResponse } from "./types/stradivarius-search";
import type { StradivariusProductsResponse } from "./types/stradivarius-products";
import type { StradivariusCategoryResponse } from "./types/stradivarius-category";
import type { StradivariusIdSResponse } from "./types/stradivarius-ids";

const BASE_URL_CATREGORIES = "https://www.stradivarius.com/itxrest/2/catalog/store/54009550/50331075/category?languageId=-5&appId=1"
const BASE_URL_PRODUCTS =
	"https://www.stradivarius.com/itxrest/3/catalog/store/54009550/50331075/productsArray";

const BASE_URL_PRODUCT_ID_FROM_CATEGORY = "https://www.stradivarius.com/itxrest/3/catalog/store/54009550/50331075/category/:categoryid/product?languageId=-5&showProducts=false&priceFilter=true&appId=1"

const headers = {

	"accept": "*/*",
	"accept-language": "es-US,es-419;q=0.9,es;q=0.8,ca;q=0.7,en;q=0.6",
	"cache-control": "no-cache",
	"content-type": "application/json",
	"pragma": "no-cache",
	"priority": "u=1, i",
	"sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
	"sec-ch-ua-mobile": "?0",
	"sec-ch-ua-platform": "\"Windows\"",
	"sec-fetch-dest": "empty",
	"sec-fetch-mode": "cors",
	"sec-fetch-site": "same-origin",
	"cookie": "UAITXID=07808ad8c91558cd8e460f978b8918b3c5ffcbdd41f848e7ad2df3166d36c067; OptanonAlertBoxClosed=2025-03-25T18:26:32.859Z; _gcl_au=1.1.124931899.1742927193; _imutc=b8fbdd4cd7d41c94ff55327213fd741ed1c39e112dcba96eaae8ed2217e64e63; _scid=1-ytWmqM8TAxOaVp67ZsZs7xadc1SKch; _ga=GA1.1.2001507419.1742927193; optimizelyEndUserId=oeu1742927193135r0.781021443276277; _fbp=fb.1.1742927193486.267915969827072114; _tt_enable_cookie=1; _ttp=01JQ78WSDR939N5R4W3WGV4YKB_.tt.1; _pin_unauth=dWlkPVltTTBNekV5TlRjdE9URTNaaTAwWVRNeExXSm1OV0V0WkRFeE5HUXdZVE0zTkRoag; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Mar+28+2025+18%3A04%3A20+GMT%2B0100+(hora+est%C3%A1ndar+de+Europa+central)&version=202403.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=e86e3cad-202e-4867-8b3d-150c089f43d1&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1&intType=1&geolocation=ES%3BCT&AwaitingReconsent=false; optimizelySession=0; lantern=9e69a9d8-b4a8-4048-ac45-dd378092ce68; _ScCbts=%5B%5D; _scid_r=5mytWmqM8TAxOaVp67ZsZs7xadc1SKchpq55ug; _itxo11y_id.4654=a25db9c0-858c-4e53-b782-46ec5059443a.1742927190.6.1746724837.1746009965.3d51c9c2-c630-41c5-8900-768fd8e2d243.4b31aef9-758b-4c9f-8263-73a15048b4f8.750758dc-eb6e-49d8-b0d8-0a5f45afb466.1746724836935.1; ITXSESSIONID=de6d460c5af0564af825cedff56ccb93; STDSESSION=d6d59f0f1bc842cf4880885d0fde3b08; bm_mi=A3870490BE0D284590C08990B5ACB32C~YAAQfyMRAn6TNrKWAQAArPJ2tRt9cVTk6oS0u3oyWSKmDgAoKQEVezGuCGBx0W2A5vybCVHC01Oq78rK0at3oMHPWLvCg0gAEmoLqqXePJit9NJwHJxHACe5pbR2ha0kWxyHrmc40AsL60JZkhcLfHfDtGIzq6/V2ggZuTJwyvBQVZDXJIJShCWgro5+8I7iGlxWM2Du0eNA0U5P+IrjEe3/nN56wSpoeRmQHcgMUqpWpxtWXiyylvDQTQbW8rGgMxAuDyT+g7KLUfIph/h1NPyZEMpdbGzHjVgqsFumA2LxerR7s1f6IdV1fE/EsHj13kHtsWQV9ZVczqSo+PW2E05zE+r+NKUfHFVbddCI7H/wd24LzbMzu6jFWdwK32AoLhhxZyIC~1; bm_sz=22382885552E8ED6AFCCA10811E01388~YAAQfyMRAoCTNrKWAQAArPJ2tRu6l5UINuBFvWK7Z0NibTdSlFgIKqZsVJe0KaXXoEoo12M4gce6IG99kDsyl0jczJ217XJmvT7ch03GMxk7aIUZnVj6Fd5UcVatvHpSwH1vfEsdaXBcivbxu03FdYODCk5nxmz/BPiOZiRCyy6I8endI1KAtkcUoLXtXw+6Fsilmh1NbJiYH9MubL4k9VEP6D7Nl59odM350onMfQ/K1MfcDDgasz8jSYQqxn/qV6Czniv8xwjIo/hhHyLPGXdmQh4PfdVtH6jpItx6zPdAAYgV35zt5jLILOtimIcC7eiDj8du6TyFlg4RulQEb/mKGg1gqi0C165qHWUfvVPevAslBTzpnt7wFirn0GCCkQQf71tjAhUb7vqhIYhLj47Bq/MQ9o7l~3163443~3158073; OptanonConsent=isGpcEnabled=0&datestamp=09%2F05%2F2025&version=202404.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=e86e3cad-202e-4867-8b3d-150c089f43d1&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1&intType=1&geolocation=ES%3BCT&AwaitingReconsent=false; IDROSTA=c33ad51421f6:278e92e558e3d8163e0bf0c81; ak_bmsc=55AC734D2FF585A302D57E358F5A9984~000000000000000000000000000000~YAAQfyMRAtOTNrKWAQAA+fZ2tRugeqGclpWpvIAvh+cwekFbMs7YjLrJLqU2SVN1cbzLXJVueTLEoaI21J4AVzJDiImAYvsnl5bPSSBhe9LXeypKujpCCPCspBjEvR8nVjNFsKOsDphC00U6dB43wpsu9/XpGLmjWPJATsR3J9veNpQOQqkCqFWnyGN1NgMRjG63iBhr9lXF6r5OGvcTNILWjVyyN7O0lFpwhdUi7w9XtTqm/I5EqouvyqL2UjdLiMeV0kHKdDaMxIaLA11u6lyoQhFVdVcZH1Kut+lXe6ATIUdtwf97oM8PvMOaSTtKhQRaCcxlcDXMHpBm3fkBSBM3huchdbNPPY5d5Zu/JBpUA3fd9TpGQBi/rGHuARbJw512TLhEBufSsCV7HNqkynpcooM6ZMAFYL/ZxT4vsCVd5dtEC8Bco5nJ352mJ9YQPdWXAGcQVZjXuVWpWTrpcUWbW/bxiym3UKD9OHuoOCT9wDGNbMU+Lb/HnqVTgO1rWRcKSdUsh4K+xFsDNhugv64x0i4+/GytAZj0UDVCvlKnawLTexDMACajV2CPKxYkhWuCj9jU/f6rSaZSWiXDlyOqnnrkK8y8lmYyASZvf/lSGGNsT8jPxq17w66XtDK+XAVsu8MOZyB5H7MkLR3P; _abck=53DFDE61FDD7E23079DDC91801E61940~0~YAAQjSMRAm9HxLOWAQAAf/d2tQ2Fr6bxXdL6g+1/Mhu6sIMlxTWGxLoG3MTBLCadELn52EQwzYpv6sOyEn7WmSu9QoGFqS+MwoQDvdnt2n/UcG1l7MwV0Slg+hK2wY/m37ZB5JFDswYlZW+ormT3v5xW0k5H3wKUI7m+f2jBNNfm3OllRb1ohAeBSnsWv6iuTBHy1BsPAb2Kfrs59k8F0Hyjn048DCVy8AI+BVlWaKikVOUj4iJBByK03weiVN8Pl69fa6PXSCHkWd12ri0dF4Nn7T9amBjMQE8vFCLKnsGFOSUuztWrp1EwuierFxF4Qb/kU8tQh8hkiOVUniQDh/Y6KQRbiUGunWIWWD8WCbrPqg1eV14cF23Lew2bE+SRnd4GojooIYIVefmrQsVy+0cqybSRGyjmQF4GARAVobGEb/zZugdKaJFyAdb4MUZJHiwfQr02xwxMppoXEzN/LvFg73Tj6wxUXQ8eMUdX4VzAqolJkFVceTtzvIhIzjke9GCDhuxB0hE/4RCwM2bFKwwRTj4VowjulcKwe6ZcH6HMXCL+ZzMJqY92yjSer1Nbt4CicPr9XIvLAI7a9A==~-1~-1~1746804794; 6a2c62c84668fba60ecf623861a4eb0d=f2bc23eb28f5b517d2c36bb0804e8fb1; _ga_NOTFORGA4TRACKING=GS2.1.s1746801196$o7$g0$t1746801196$j0$l0$h1920607396; ttcsid=1746801197546::5e-JuF-Ck30IETSr5R_G.4.1746801197547; _derived_epik=dj0yJnU9LWNMSXpBR3RzSm1tMTROMkJjd25rN01RMEVrTllNQXgmbj1EazA1OFhNUFZUYW1zclZwV1pqc213Jm09MSZ0PUFBQUFBR2dlRWkwJnJtPTEmcnQ9QUFBQUFHZ2VFaTAmc3A9NQ; ttcsid_C25SMVNMU8Q03RAI5IQG=1746801197546::qbprxMD5ljZcdrGa68da.4.1746801197882; TS01e201b5=01bad81f5b19c22affe8d2c36665d506c321d398bd26738cfcfb66ce0ccb74fd6bd80ab6089ad53af5eb3bc8d82dc4d07b285d7656; bm_sv=1032B5AEE696660E8D5E5CAC041B08CE~YAAQfyMRAhmXNrKWAQAAmxx3tRuUi1bbvs0ckH1tSsnaLTL9rZFEvYkh+7JeKZXdGVT7dqtTveinHB74d9za3Eb3Nbyc81lgiA4uP8O4kk73TM3XrcMzolaKozDA/Ysfj5vCMRIlEHQ8APxHQebZq3OFL7Ga/2kVonVeagq8ZcH0s2J39p8JpXa72j+DhIQSdr8xZC81UXOPN3pA0vfMoVDJ4sQR5S0NcThkhncB7dHDxXvgjvxUMv8mtGRwAW68Y7WtkCwKKw==~1; _ga_LQGSX5V976=GS2.1.s1746801197$o7$g1$t1746801204$j53$l0$h0",
	"Referer": "https://www.stradivarius.com/",
	"Referrer-Policy": "origin"
}



export type StradivariusGender = "WOMEN" | "MAN";


export class StradivariusUseCase {
	constructor() { }

	static async getCategories() {
		const url = new URL(BASE_URL_CATREGORIES);

		const { categories } = await fetch(url, {
			headers,
		})
			.then(async (res) => await res.json()) as StradivariusCategoryResponse;

		return categories.map((category) => {

			return {

				subcategories:
					category.subcategories.flatMap((subcategory) => [
						{
							id: subcategory.id,
							name: subcategory.name,
							subcategory: subcategory.subcategories?.map((subsubcategory) => ({
								id: subsubcategory.id,
								name: subsubcategory.name,
							})) ?? []
						},

					])
				,
				name: category.name,

			}
		})
	}

	static async getIdsFromCategory(categoryId: number) {
		const url = new URL(BASE_URL_PRODUCT_ID_FROM_CATEGORY.replace(":categoryid", categoryId.toString()));

		const { productIds } = await fetch(url, {
			method: "GET",
			headers
		})
			.then(async (res) => await res.json())
			.then((data) => {
				return data as StradivariusIdSResponse;
			});

		return productIds;
	}

	static async getProducts(productsArray: string[] | number[]) {



		const url = new URL(BASE_URL_PRODUCTS);
		const productsIds = productsArray.join(",")

		url.searchParams.append("productIds", productsIds);
		// console.log("url", url.toString());
		try {
			const { products } = await fetch(`${url}`, {
				method: "GET",
				headers
			})
				.then(async (res) => {
					if (!res.ok) {
						return {
							products: [],
						}
					}
					try {
						return await res.json() as StradivariusProductsResponse;
					} catch (err) {
						console.error("Error parsing JSON:", err);
						return {
							products: [],
						};
					}
				})
				.catch((err) => {
					console.error("Error fetching products");
					return {
						products: [],
					};
				});




			return products.map((product) => {
				if (!product.bundleProductSummaries || !product.bundleProductSummaries[0]) {
					console.warn(`Missing bundleProductSummaries for product ID: ${product.id}`);
					return null;
				}

				const details = product.bundleProductSummaries[0].detail;
				if (!details.xmedia || !details.xmedia[0]) {
					console.warn(`Missing xmedia for product ID: ${product.id}`);
					return null;
				}

				const xmedia = details.xmedia[0].xmediaItems;
				const medias = xmedia.reduce(
					(accumulator, item) => {
						const filteredMedias = item.medias.filter(
							(media) => media.extraInfo && media.extraInfo.originalName !== "r",
						);

						accumulator.push(
							...filteredMedias.map((media) => ({
								format: media.format,
								clazz: media.clazz,
								original_name: media.extraInfo.originalName,
								url: media.url ?? "",
							})),
						);
						return accumulator;
					},
					[] as {
						format: number;
						clazz: number;
						original_name: string;
						url: string;
					}[],
				);
				return {
					id: product.id,
					name: product.name,
					price: Number.parseInt(
						details.colors?.[0]?.sizes?.[0]?.price ?? "0"
					),
					gender: product.section === "WOMEN" ? "woman" : "man",
					image: medias.find((media) => media.url.includes("a1"))?.url ?? "",
					images: medias.map((media) => media.url),
					colors: details.colors.map((color) => ({
						color: {
							name: color.name,
							id: color.id,
						},

					})),
					shop: "Stradivarius",
					brand: "Stradivarius",
					product_link: `https://www.stradivarius.com/es/${product.productUrl}`,
				};
			});
		}
		catch (err) {
			console.error("Error fetching products:", err);
			return [];
		}
	}
}

