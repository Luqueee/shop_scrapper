export interface JackJonesProductResponse {
    _meta: Meta;
    breadcrumb: Breadcrumb[];
    seo: SEO;
    umbracoUrlName: string;
    umbracoUrlAlias: string;
    multiBrandTags: any[];
    pageId: string;
    uniqueSellingPoints: UniqueSellingPoint[];
    rows: Row[];
    deliveryReturnInformation: string;
    deliveryReturnInformationLength: number;
    deliveryReturnInformationWordLength: number;
    notifyMeTermsAndConditions: string;
    pageAlias: string;
    openInCurrentTab: boolean;
    product: Product;
}

export interface Meta {
    url: string;
    canonical: string;
    name: string;
    alias: string;
    id: number;
    updated: Date;
}

export interface Breadcrumb {
    url: string;
    title: string;
    categoryId: string;
    openInCurrentTab: boolean;
}

export interface Product {
    images: string[];
    price: Price;
    description: string;
    careInstructions: CareInstruction[];
    optionId: string;
    sustainabilityReason: SustainabilityReason;
    sustainabilityReasons: SustainabilityReason[];
    sustainabilityText: string;
    discountPercentage: number;
    styleOptionNumber: string;
    badges: string[];
    styleName: string;
    styleNumber: string;
    fabricComposition: string;
    englishFabricComposition: string;
    relations: Relations;
    isNew: boolean;
    subBrand: string;
    brand: string;
    colour: Colour;
    variants: Variant[];
    id: string;
    url: string;
    name: ProductName;
    tags: string[];
    styleOptions: StyleOption[];
    ediCategory: string;
    ediSubCategory: string;
    calloutAttributes: CalloutAttributes;
    callout: string;
    disclaimer: string;
    isDigital: boolean;
    isDiscountable: boolean;
    isNoos: boolean;
    allowInStockNotifications: boolean;
    completeTheLook: string[];
    shopTheLook: string[];
    hasCompleteTheLook: boolean;
    productSetOptions: any[];
    isProductSet: boolean;
    styleOptionsCount: number;
    productSetOptionsCount: number;
    hasEcom: boolean;
    hasRetail: boolean;
    subGroup: SubGroup;
    isPreorder: boolean;
    comingSoonProduct: boolean;
}

export interface CalloutAttributes {
    callout: string;
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

export interface CareInstruction {
    id: string;
    description: string;
}

export interface Colour {
    base: Base;
    nuance: Nuance;
    alternateColours: any[];
    pantoneHexCode?: string;
    id: string;
    name: string;
    hexCode: string;
}

export interface Base {
    id: string;
    name: string;
    hexCode: string;
}

export interface Nuance {
    id: string;
    name: string;
}

export enum ProductName {
    CamisetaLisoCuelloRedondo = "Camiseta Liso Cuello redondo",
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
    currency: DiscountCurrency;
    value: ListPrice;
    promotionId: string;
    reference: string;
    promoCodes: any[];
    badges: string[];
    promotionName: string;
}

export enum DiscountCurrency {
    Eur = "EUR",
}

export interface ListPrice {
    amount: number;
    currency: DiscountCurrency;
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

export interface Relations {
    styleoption: string[];
}

export interface StyleOption {
    subGroup: SubGroup;
    price: Price;
    image: string;
    colour: Colour;
    optionId?: string;
    variants: Variant[];
    inStock: boolean;
    isNew: boolean;
    id: string;
    name: ProductName;
    url: string;
    inDeliveryDateSet: boolean;
}

export enum SubGroup {
    Basic = "basic",
    Colores = "Colores",
    Sale = "Sale",
}

export interface Variant {
    id: string;
    name: ProductName;
    size: Size;
    ean: string;
    inStock: boolean;
    inStockEcom: boolean;
    inStockRetail: boolean;
    inDeliveryDateSet: boolean;
}

export interface Size {
    sizeId: string;
    name: SizeName;
}

export enum SizeName {
    L = "L",
    M = "M",
    S = "S",
    Xl = "XL",
    Xs = "XS",
    Xxl = "XXL",
    Xxxl = "XXXL",
}

export interface SustainabilityReason {
    id: string;
    reason: string;
    supportText: string;
}

export interface Row {
    id: string;
    perRowMobile: string;
    widgets: Widget[];
    hideOnISO: boolean;
    _alias: string;
}

export interface Widget {
    trackingId: string;
    disabledDesktop: boolean;
    disabledTablet: boolean;
    disabledMobile: boolean;
    disabledApp: boolean;
    fromDate: Date;
    toDate: Date;
    ranking: number;
    backgroundColor: null;
    toggleFullWidth: boolean;
    paddingTop: string;
    paddingBottom: string;
    paddingLeft: string;
    paddingRight: string;
    headline: string;
    headlineFontSize: string;
    headlineTextAlignment: string;
    headlineColor: null;
    V3recommendationType: V3RecommendationType[];
    displayedProductsDesktop: number;
    previewRightDesktop: number;
    previewLeftDesktop: number;
    speed: number;
    pagination: boolean;
    arrowsPosition: string;
    autoplayAfter: number;
    autoplay: boolean;
    frontFacingId: string;
    backFacingId: string;
    enableWishlistIcon: boolean;
    showSubbrands: boolean;
    showPrice: boolean;
    showDiscountBadge: boolean;
    disableProductTitle: boolean;
    showProductBadge: boolean;
    displayedProductsTablet: number;
    previewRightTablet: number;
    previewLeftTablet: number;
    displayedProductsMobile: number;
    previewRightMobile: number;
    previewLeftMobile: number;
    _alias: string;
}

export interface V3RecommendationType {
    shared: Shared[];
    _alias: string;
}

export interface Shared {
    showDifferentRecommendationsPerRequest: boolean;
    numberOfRecommendations: number;
    excludeProductsPurchasedWithinDays: number;
    excludeMarkdown: boolean;
    excludeNoMarkdown: boolean;
    requiredTags: any[];
    requiredTagsEvaluationMode: string;
    excludedTags: any[];
    excludedTagsEvaluationMode: string;
    overrideRecommendations: any[];
    colourBaseIds: any[];
    colourNuanceIds: any[];
    daysAvailable: number;
    daysAvailableOperator: string;
    skuCoverage: number;
    skuCoverageOperator: string;
    _alias: string;
}

export interface SEO {
    title: string;
    description: string;
    metaTags: MetaTag[];
    linkTags: LinkTag[];
    structuredData: string[];
}

export interface LinkTag {
    href: string;
    rel: Rel;
    hreflang: string;
}

export enum Rel {
    Alternate = "alternate",
    Canonical = "canonical",
}

export interface MetaTag {
    name: string;
    content: string;
    type: string;
}

export interface UniqueSellingPoint {
    id: string;
    itemIcon: string;
    linkText: string;
    itemText: string;
    itemTextLength: number;
    itemTextWordLength: number;
    popupContent?: string;
    popupContentLength?: number;
    popupContentWordLength?: number;
    _alias: string;
}
