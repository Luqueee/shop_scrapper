export interface Product {
    brand: string;
    url: string;
    sku: string;
    name: string;
    description: string;
    price: string;
    currency: string;
    category: string;
    images: string;
    scraped_at: string;
    terms: string;
    section: string;
    image_downloads: string;
}

export interface MangoProductResponse {
    name: string;
    nameEn: string;
    model: string;
    genderId: string;
    brandId: string;
    collection: string;
    seller: string;
    reference: string;
    assetsDomain: string;
    families: Family[];
    colors: Color[];
    url: string;
}

export interface Color {
    id: string;
    label: string;
    bulletImg: string;
    sizes: Size[];
    looks: Record<string, { images: Images; }>;
    customizable: boolean;
}


export interface Images {
    O1: B;
    R: B;
    B: B;
    D8: B;
    F: B;
    D1: B;
    D2?: B;
    D6?: B;
}

export interface B {
    img: string;
    alt: string;
}

export interface Size {
    id: string;
    label: string;
    shortDescription: string;
    plusSize: boolean;
}

export interface Family {
    id: string;
    label: string;
    labelEn: string;
    isMainFamily: boolean;
    hasSizeGuide: boolean;
    erpId: string;
}
