export interface JackJonesProductsResponse {
    results: Result[];
    startingFrom: number;
    totalResults: number;
    facets: Facet[];
    priceFacet: PriceFacet;
    sortings: Sorting[];
    searchTerms: string;
    searchTermPredictions: any[];
    categorySearch: any[];
    contentSearch: any[];
}

export interface Facet {
    id: string;
    values: FacetValue[];
}

export interface FacetValue {
    value: string;
    count: number;
    selected: boolean;
}

export interface PriceFacet {
    id: string;
    values: PriceFacetValue[];
}

export interface PriceFacetValue {
    available: Available;
    selected: Available;
    count: number;
}

export interface Available {
    lowerBoundingValue: ListPrice;
    upperBoundingValue: ListPrice;
}

export interface ListPrice {
    amount: number;
    currency: ListPriceCurrency;
}

export enum ListPriceCurrency {
    Eur = "EUR",
}

export interface Result {
    price: Price;
    frontImage: string;
    backImage: string;
    images: Images;
    subBrand: string;
    inStock: boolean;
    isNew: boolean;
    badges: string[];
    calloutAttributes: CalloutAttributes;
    callout: Callout;
    disclaimer: string;
    brand: Brand;
    ean: string;
    colourFamilyName: string;
    sizeName: string;
    lengthName: LengthName;
    isDigital: boolean;
    rank: number;
    productRelations: any[];
    id: string;
    name: string;
    url: string;
    ediCategory: string;
    ediSubCategory: string;
    styleOptionCount: number;
    styleColours: string[];
    hasCompleteTheLook: boolean;
    isProductSet: boolean;
    productSetOptionsCount: number;
    masterColourNames: string[];
    colourName: string;
    hasEcom: boolean;
    hasRetail: boolean;
    isPreorder: boolean;
    comingSoonProduct: boolean;
    onlineFrom: Date;
    isInDeliverySet: boolean;
}

export enum Brand {
    JackJones = "Jack & Jones",
}

export enum Callout {
    Empty = "",
    PCamisetas3Por35P = "<p>Camisetas: 3 por 35 €</p>\n",
}

export interface CalloutAttributes {
    callout: Callout;
    disclaimer: string;
    calloutBackgroundColor: string;
    calloutColor: string;
    hasAccordion: boolean;
    calloutIcon: string;
    enableClipboardIcon: boolean;
    clipboardCode: string;
    clipboardTitle: string;
    hideDiscountPrice: boolean;
    hideDiscountPercentage: boolean;
    discountPriceColor: string;
    discountPercentageColor: string;
    alternatePromotionName: string;
}

export interface Images {
    urlTemplate: string;
    indexes: Index[];
}

export interface Index {
    index: string;
    format: Format;
}

export enum Format {
    Jpg = "jpg",
    PNG = "png",
}

export enum LengthName {
    Empty = "",
    The32 = "\"32",
}

export interface Price {
    percentage: number;
    id: ID;
    salesPrice: ListPrice;
    vatAmount: ListPrice;
    vatAmount2: VatAmount2;
    vatRate: number;
    vatRate2: number;
    from: Date;
    to: Date;
    schedule: Schedule;
    listPrice?: ListPrice;
    discounts?: Discount[];
}

export interface Discount {
    amount: number;
    currency: ListPriceCurrency;
    value: ListPrice;
    promotionId: string;
    reference: string;
    promoCodes: any[];
    badges: string[];
    promotionName: string;
}

export enum ID {
    EurEs = "eur_es",
}

export interface Schedule {
    from: Date;
    to: Date;
}

export interface VatAmount2 {
    currency: VatAmount2Currency;
}

export enum VatAmount2Currency {
    Xxx = "XXX",
}

export interface Sorting {
    id: string;
    selected: boolean;
}
