export interface BershkaCategoryResponse {
    gridElements: GridElement[];
    productIds: number[];
    products: { [key: string]: Product };
    filters: Filters;
    sortedProductIds: number[];
    blocks: any[];
    rueiData: RueiData;
}

export interface Filters {
    colFilter: CatRelFilterElement[];
    catFilter: any[];
    maxPriceFilter: PriceFilter[];
    minPriceFilter: PriceFilter[];
    sizeFilter: DiscountFilterElement[];
    catRelFilter: CatRelFilterElement[];
    typeFilter: CatRelFilterElement[];
    discountFilter: DiscountFilterElement[];
    backsoonFilter: any[];
    joinLifeFilter: any[];
    attributeFilter: any[];
    prewarmingFilter: any[];
    prewarmingByDiscountFilter: any[];
    sizeGroupFilter: any[];
    originalPriceDiscountFilter: DiscountFilterElement[];
}

export interface CatRelFilterElement {
    name: string;
    value: string;
    productIds: number[];
}

export interface DiscountFilterElement {
    name: string;
    productIds: number[];
}

export interface PriceFilter {
    price: string;
    productIds: number[];
}

export interface GridElement {
    id?: string;
    template?: Template;
    ccIds: number[];
    type: GridElementType;
    hiddenFields?: any[];
}

export enum Template {
    Multiproducto = "multiproducto",
    The1A = "1A",
    The2D = "2D",
}

export enum GridElementType {
    Block = "block",
    Cc = "CC",
}

export interface Product {
    id: number;
    type: ProductType;
    name: NameEnEnum;
    nameEn: NameEnEnum;
    image: null;
    isBuyable: boolean;
    onSpecial: boolean;
    backSoon: string;
    unitsLot: number;
    isTop: number | null;
    sizeSystem?: string;
    subFamily: string;
    productType: ProductTypeEnum;
    bundleColors: BundleColor[];
    tags: any[];
    attributes: Attribute[];
    relatedCategories: RelatedCategory[];
    attachments: any[];
    bundleProductSummaries: BundleProductSummary[];
    detail: Detail;
    field5: null | string;
    sequence: number;
    section: string;
    family: string;
    startDate: Date;
    isSales: null;
    keywords: string;
    mainColorid: string;
    familyCode: null | string;
    subFamilyCode: null | string;
    productUrl: string;
    productUrlParam: string;
    gridElemType: ProductGridElemType;
    availabilityDate: Date;
    visibilityValue: VisibilityValue;
}

export interface Attribute {
    id: string;
    name: string;
    value: string;
    type: AttributeType;
    identifier: null;
}

export enum AttributeType {
    ProductSetting = "PRODUCT_SETTING",
    ProductTag = "PRODUCT_TAG",
    StylingInfo = "STYLING_INFO",
    XbrandMastersID = "XBRAND_MASTERS_ID",
    Xcolfilter = "XCOLFILTER",
    Xcommercialattribute = "XCOMMERCIALATTRIBUTE",
    Xcomprador = "XCOMPRADOR",
    Xdistinctivecolor = "XDISTINCTIVECOLOR",
    Xfeature = "XFEATURE",
    Xflag = "XFLAG",
    XmanDate = "XMAN_DATE",
    Xmanufacturer = "XMANUFACTURER",
    Xsecciones = "XSECCIONES",
    Xsecondattr = "XSECONDATTR",
    Xtypefilter = "XTYPEFILTER",
}

export interface BundleColor {
    id: number;
    name: string;
    image: null;
    colorName: null;
    relatedCategories: any[];
    modelName: null | string;
}

export interface BundleProductSummary {
    id: number;
    type: BundleProductSummaryType;
    name: string;
    nameEn: string;
    image: null;
    isBuyable: boolean;
    onSpecial: boolean;
    backSoon: string;
    unitsLot: number;
    isTop: number;
    sizeSystem: string;
    subFamily: string;
    productType: ProductTypeEnum;
    bundleColors: any[];
    tags: any[];
    attributes: Attribute[];
    relatedCategories: RelatedCategory[];
    attachments: any[];
    bundleProductSummaries: any[];
    detail: Detail;
    field5: string;
    sequence: number;
    section: string;
    family: string;
    startDate: string;
    productUrl: string;
    gridElemType: BundleProductSummaryGridElemType;
    availabilityDate: Date;
    productUrlTranslations: any[];
}

export interface Detail {
    description: null | string;
    longDescription: null | string;
    reference: string;
    displayReference: string;
    defaultImageType: null | string;
    composition: any[];
    compositionByZone: any[];
    care: any[];
    colors: Color[];
    relatedProducts: any[];
    xmediaDefaultSet: number | null;
    xmedia: Xmedia[] | null;
    familyInfo: FamilyInfo;
    subfamilyInfo: SubfamilyInfo;
    isJoinLife: boolean;
    compositionDetail: null;
}

export interface Color {
    id: string;
    name: string;
    modelHeigh: null | string;
    modelName: null | string;
    modelSize: ModelSize | null;
    image: Image;
    sizes: Size[];
    isContinuity: boolean;
    joinLifeInfo: JoinLifeInfo;
    compositionDetail: null;
    catentryId: number;
    reference: string;
    sustainability: Sustainability;
    traceability: Traceability;
    extraInfo: ColorExtraInfo;
    joinLifeLabelInfo: JoinLifeLabelInfo;
    colFilter: any[];
}

export interface ColorExtraInfo {
    fitSizeMessage: FitSizeMessage;
}

export interface FitSizeMessage {
    text: null;
    additionalInfo: null;
}

export interface Image {
    timestamp: string;
    url: string;
    aux: string[];
    type: string[];
    style: string[];
    availableEstilismo: boolean;
}

export interface JoinLifeInfo {
    descJoinLife: string;
    isJoinLife: boolean;
}

export interface JoinLifeLabelInfo {
    show: boolean;
    areas: any[];
}

export enum ModelSize {
    L = "L",
    M = "M",
    S = "S",
    Xl = "XL",
}

export interface Size {
    sku: number;
    name: ModelSize;
    description: null;
    partnumber: string;
    isBuyable: boolean;
    backSoon: string;
    mastersSizeId: string;
    position: number;
    price: string;
    oldPrice: null;
    sizeType: SizeType;
    skuDimensions: any[];
    visibilityValue: VisibilityValue;
    weight: string;
    unit: Unit;
    country: Country;
}

export enum Country {
    Bangladesh = "BANGLADESH",
    MainlandChina = "MAINLAND CHINA",
}

export enum SizeType {
    Regular = "regular",
}

export enum Unit {
    Grm = "GRM",
}

export enum VisibilityValue {
    Show = "SHOW",
}

export interface Sustainability {
    show: boolean;
    syntheticFiberPercentage: SyntheticFiberPercentage;
}

export interface SyntheticFiberPercentage {
    name: string;
}

export interface Traceability {
    show: boolean;
    weaving: Assembly;
    dyeingPrinting: Assembly;
    confection: Assembly;
    assembly: Assembly;
    pricking: Assembly;
    finish: Assembly;
}

export interface Assembly {
    name: AssemblyName;
    country: any[];
}

export enum AssemblyName {
    Acabado = "Acabado",
    Confección = "Confección",
    CorteYCosido = "Corte y cosido",
    Montaje = "Montaje",
    Tejeduría = "Tejeduría",
    TeñidoYEstampación = "Teñido y Estampación",
}

export interface FamilyInfo {
    familyId: number;
    familyCode: number | null;
    familyName: FamilyName;
}

export enum FamilyName {
    Accesorios = "Accesorios",
    Baño = "Baño",
    Bolsos = "Bolsos",
}

export interface SubfamilyInfo {
    subFamilyId: number;
    subFamilyCode: number | null;
    subFamilyName: SubFamilyName;
}

export enum SubFamilyName {
    Baño = "Baño",
    Bolsos = "Bolsos",
    Gorros = "Gorros",
}

export interface Xmedia {
    path: string;
    xmediaItems: XmediaItem[];
    colorCode: string;
    xmediaLocations: XmediaLocation[];
}

export interface XmediaItem {
    medias: Media[];
    set: number;
}

export interface Media {
    format: number;
    clazz: number;
    idMedia: string;
    extraInfo: MediaExtraInfo;
    timestamp: number;
}

export interface MediaExtraInfo {
    originalName: string;
    deliveryPath: string;
    deliveryUrl: string;
    assetId: string;
    hash?: Hash[];
    url: string;
    isLargeAndSmallDifferentResourcesValidForBothViews?: boolean;
    posterUrl?: string;
    videoFallbackPath?: string;
    videoFallbackUrl?: string;
    posterPath?: string;
}

export interface Hash {
    md5Hash: string;
    size: string;
}

export interface XmediaLocation {
    locations: Location[];
    set: number;
}

export interface Location {
    mediaLocations: string[];
    location: number;
}

export enum BundleProductSummaryGridElemType {
    Product = "PRODUCT",
}

export enum ProductTypeEnum {
    Accesories = "Accesories",
}

export interface RelatedCategory {
    id: number;
    identifier: string;
    name: string;
    urlCategory: boolean;
}

export enum BundleProductSummaryType {
    ProductBean = "ProductBean",
}

export enum ProductGridElemType {
    Estilismo = "ESTILISMO",
    Mocaco = "MOCACO",
}

export enum NameEnEnum {
    Empty = "",
    LeatherEffectCrossbodyBag = "Leather effect crossbody bag",
    MeshBag = "Mesh bag",
    SwimmingTrunksWithDoubleWaistbandAndPrint = "Swimming trunks with double waistband and print",
}

export enum ProductType {
    BundleBean = "BundleBean",
}

export interface RueiData {
    StoreLangRUEI: string;
    StoreTypeRUEI: string;
    OperationTypeRUEI: string;
    OperationRUEI: string;
    StoreIdRUEI: string;
}
