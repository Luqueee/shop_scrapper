export interface PullAndBearSearchResponse {
	status: string;
	facets: Facet[];
	filtersV2: FiltersV2[];
	sortings: Sorting[];
	results: Result[];
	tagging: PullAndBearProductsResponseTagging;
	totalResults: number;
	additionalEntities: AdditionalEntity[];
	alternativeResults: unknown[];
	provider: string;
	searchpass: string;
	cursor: string;
	isLastPage: boolean;
	universe: string;
}

export interface AdditionalEntity {
	id: string;
	type: string;
	title: string;
	position: number;
	url: string;
	imageUrl: string;
}

export interface Facet {
	key: string;
	values: Value[];
}

export interface Value {
	id: string;
	count?: number;
	value: string;
	filter: string;
}

export interface FiltersV2 {
	kind: string;
	key: string;
	minValue?: number;
	maxValue?: number;
	filter?: string;
	values?: Value[];
}

export interface Result {
	content: Content;
	id: string;
	position: number;
	tagging: ResultTagging;
}

export interface Content {
	brandImpl: BrandImpl;
	productId: string;
	internalId: string;
	color: Color;
}

export enum BrandImpl {
	Brands = "brands",
}

export interface Color {
	id: string;
}

export interface ResultTagging {
	click: string;
	add2cart: string;
	wishlist: string;
	checkout: string;
	conversion: string;
}

export interface Sorting {
	property: string;
	availableOrders: string[];
}

export interface PullAndBearProductsResponseTagging {
	query: string;
}
