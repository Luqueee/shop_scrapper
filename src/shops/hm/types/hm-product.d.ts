export interface HmProductResponse {
    requestDateTime: Date;
    articles: Articles;
}

export interface Articles {
    productList: ProductList[];
    numberOfHits: number;
}

export interface ProductList {
    id: string;
    trackingId: string;
    productName: string;
    external: boolean;
    brandName: string;
    url: string;
    showPriceMarker: boolean;
    prices: Price[];
    availability: Availability;
    swatches: Swatch[];
    productMarkers: any[];
    images: Image[];
    hasVideo: boolean;
    colorName: string;
    isPreShopping: boolean;
    isOnline: boolean;
    modelImage: string;
    colors: string;
    productImage: string;
    sizes: Size[];
    newArrival: boolean;
    isLiquidPixelUrl: boolean;
    colorWithNames: string;
    mainCatCode: string;
    sellingAttribute: string;
}

export interface Availability {
    stockState: string;
    comingSoon: boolean;
}

export interface Image {
    url: string;
}

export interface Price {
    priceType: string;
    price: number;
    minPrice: number;
    maxPrice: number;
    formattedPrice: string;
}

export interface Size {
    id: string;
    label: string;
}

export interface Swatch {
    articleId: string;
    url: string;
    colorName: string;
    colorCode: string;
    trackingId: string;
    productImage: string;
}
