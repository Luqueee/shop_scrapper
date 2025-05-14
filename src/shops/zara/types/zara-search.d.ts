export interface ZaraSearchResult {
	status: string;
	facets: Facet[];
	filtersV2: FiltersV2[];
	sortings: Sorting[];
	results: Result[];
	tagging: ZaraSearchResultTagging;
	totalResults: number;
	additionalEntities: unknown[];
	alternativeResults: unknown[];
	provider: string;
	searchpass: string;
	cursor: string;
	isLastPage: boolean;
	universe: Universe;
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
	extraInfo?: ValueExtraInfo;
}

export interface ValueExtraInfo {
	color: ExtraInfoColor;
}

export interface ExtraInfoColor {
	hexCode: string;
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
	brandImpl: BrandImplEnum;
	id: number;
	reference: string;
	type: ContentType;
	kind: ContentKind;
	brand: Brand;
	name: string;
	price: number;
	bundleProducts: unknown[];
	section: number;
	sectionName: Universe;
	familyName: FamilyName;
	subfamilyName: string;
	detail: Detail;
	seo: SEO;
	availability: Availability;
	extraInfo: ContentExtraInfo;
	colorInfo: ColorInfo;
	xmedia: Xmedia[];
}

export enum Availability {
	InStock = "in_stock",
}

export interface Brand {
	brandId: number;
	brandGroupId: number;
	brandGroupCode: BrandImplEnum;
}

export enum BrandImplEnum {
	Zara = "zara",
}

export interface ColorInfo {
	mainColorHexCode: string;
	numAdditionalColors: number;
}

export interface Detail {
	reference: string;
	displayReference: string;
	colors: ColorElement[];
}

export interface ColorElement {
	id: string;
	productId: number;
	name: string;
	stylingId: string;
	xmedia: Xmedia[];
	price: number;
	availability: Availability;
	reference: string;
	extraInfo: ColorExtraInfo;
	tagTypes: TagType[];
}

export interface ColorExtraInfo {
	highlightPrice: boolean;
}

export interface TagType {
	displayName: string;
	type: string;
}

export interface Xmedia {
	allowedScreens: AllowedScreen[];
	datatype: Datatype;
	height: number;
	kind: XmediaKind;
	name: string;
	path: string;
	set: number;
	timestamp: string;
	type: XmediaType;
	width: number;
	extraInfo: XmediaExtraInfo;
	url: string;
}

export enum AllowedScreen {
	Large = "large",
	Small = "small",
}

export enum Datatype {
	Xmedia = "xmedia",
}

export interface XmediaExtraInfo {
	assetId: string;
}

export enum XmediaKind {
	Plain = "plain",
}

export enum XmediaType {
	Image = "image",
}

export interface ContentExtraInfo {
	highlightPrice: boolean;
	isAddToCartInGridDisabled: boolean;
}

export enum FamilyName {
	Camiseta = "CAMISETA",
	Jersey = "JERSEY",
}

export enum ContentKind {
	Wear = "Wear",
}

export enum Universe {
	Man = "MAN",
}

export interface SEO {
	keyword: string;
	seoProductId: string;
	discernProductId: number;
}

export enum ContentType {
	Product = "Product",
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

export interface ZaraSearchResultTagging {
	query: string;
}
