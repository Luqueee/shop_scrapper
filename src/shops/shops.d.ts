export interface SearchProductsResponse {
	status: boolean;
	results: ProductResponse[];
	message?: string;
}

export interface ProductResponse {
	id: number | string;
	name: string;
	price: number;
	product_link: string;
	brand?: string;
	image: string;


}
