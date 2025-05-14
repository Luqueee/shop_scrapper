export interface PullAndBearCategory {
    gridElements: GridElement[];
    filters: Filters;
    productIds: number[];
    sortedProductIds: number[];
    sortedProductIdsByPricesAsc: number[];
    gridContext: GridContext;
}

export interface Filters {
    colFilter: CatFilter[];
    catFilter: CatFilter[];
    maxPriceFilter: any[];
    minPriceFilter: any[];
    priceFilter: PriceFilter[];
    sizeFilter: Filter[];
    sizeTypeFilter: any[];
    catRelFilter: any[];
    typeFilter: CatFilter[];
    calFilter: any[];
    discountFilter: Filter[];
    originalPriceDiscountFilter: Filter[];
    backsoonFilter: any[];
    promoFilter: Filter[];
    noveltyFilter: number[];
    joinLifeFilter: any[];
    attributeFilter: AttributeFilter[];
    lastSizesFilter: any[];
    sizeFilterByProductType: SizeFilterByProductType[];
}

export interface AttributeFilter {
    name: string;
    values: CatFilter[];
}

export interface CatFilter {
    name: string;
    value: string;
    productIds: number[];
}

export interface Filter {
    name: string;
    productIds: number[];
}

export interface PriceFilter {
    price: string;
    productIds: number[];
}

export interface SizeFilterByProductType {
    name: string;
    type: string;
    productIds: number[];
}

export interface GridContext {
    gridId: string;
    defaultImageViewType: string;
    promotionalBanners: any[];
    sectionNames: any[];
}

export interface GridElement {
    id?: string;
    template?: string;
    ccIds: number[];
    type: GridElementType;
    minimumElements?: string;
    commercialComponentIds: CommercialComponentID[];
}

export interface CommercialComponentID {
    ccId: number;
    defaultImageType: string;
    hiddenFields: any[];
    isAddToCartDisabled: boolean;
    mediaCompete: any[];
    type: CommercialComponentIDType;
    kind: Kind;
    xmedia: any[];
}

export enum Kind {
    Wear = "Wear",
}

export enum CommercialComponentIDType {
    Product = "Product",
}

export enum GridElementType {
    Block = "block",
    Cc = "CC",
}
