export interface ZaraProductsResponse {
    productGroups: ProductGroup[];
}

export interface ProductGroup {
    id: string;
    type: string;
    elements: Element[];
    attributeList: AttributeList[];
    hasStickyBanner: boolean;
}

export interface AttributeList {
    key: string;
    value: string;
}

export interface Element {
    id: string;
    type: ElementType;
    layout: ElementLayout;
    commercialComponents: CommercialComponent[];
    style?: Style;
    linkedBlocks?: string[];
    tags: string[];
    hasStickyBanner: boolean;
    margin?: Margin;
}

export interface CommercialComponent {
    id: number;
    reference: string;
    type: CommercialComponentType;
    kind: CommercialComponentKind;
    brand?: Brand;
    xmedia: any[];
    name: string;
    description: string;
    price?: number;
    section: number;
    sectionName?: SectionName;
    familyName?: FamilyName;
    subfamilyName?: SubfamilyName;
    detail: Detail;
    seo: SEO;
    availability?: Availability;
    tagTypes: TagType[];
    extraInfo: CommercialComponentExtraInfo;
    gridPosition: number;
    zoomedGridPosition: number;
    preservedBlockPosition: number;
    athleticzPosition: number;
    productTag: ProductTag[];
    colorList: string;
    isDivider: boolean;
    hasXmediaDouble: boolean;
    showExtraImageOnHover: boolean;
    showAvailability: boolean;
    priceUnavailable: boolean;
    colorInfo?: ColorInfo;
    marketingMetaInfo?: MarketingMetaInfo;
    isBannerWithoutLink?: boolean;
    basicInfoMissing?: boolean;
    omitProductInfo?: boolean;
    isOnSale?: boolean;
    layout?: CommercialComponentLayout;
    oldPrice?: number;
    displayDiscountPercentage?: number;
    discountPercentage?: DiscountPercentage;
    discountLabel?: DiscountLabel;
}

export enum Availability {
    ComingSoon = "coming_soon",
    InStock = "in_stock",
}

export interface Brand {
    brandId: number;
    brandGroupId: number;
    brandGroupCode: BrandGroupCode;
}

export enum BrandGroupCode {
    Zara = "zara",
}

export interface ColorInfo {
    mainColorHexCode: string;
    numAdditionalColors: number;
    shouldUseColorcutInColorLabel: boolean;
}

export interface Detail {
    reference: string;
    displayReference: string;
    colors: Color[];
}

export interface Color {
    id: string;
    productId: number;
    name: string;
    stylingId: string;
    outfitId?: OutfitID;
    xmedia: Xmedia[];
    pdpMedia?: PDPMedia;
    price?: number;
    availability?: Availability;
    reference?: string;
    extraInfo: ColorExtraInfo;
    canonicalReference: string;
    oldPrice?: number;
    displayDiscountPercentage?: number;
    discountPercentage?: DiscountPercentage;
    discountLabel?: DiscountLabel;
}

export enum DiscountLabel {
    The39 = "-39%",
    The46 = "-46%",
    The54 = "-54%",
}

export enum DiscountPercentage {
    The39 = "39%",
    The46 = "46%",
    The54 = "54%",
}

export interface ColorExtraInfo {
    highlightPrice?: boolean;
}

export enum OutfitID {
    Basestyle = "BASESTYLE",
    MnCamiseríaSastrería = "MN - CAMISERÍA SASTRERÍA",
    Origins = "ORIGINS",
}

export interface PDPMedia {
    datatype: Datatype;
    set: number;
    type: PDPMediaType;
    kind: PDPMediaKind;
    path: string;
    name: string;
    width: number;
    height: number;
    timestamp: string;
    allowedScreens: AllowedScreen[];
    extraInfo: PDPMediaExtraInfo;
    url: string;
}

export enum AllowedScreen {
    Large = "large",
    Small = "small",
}

export enum Datatype {
    Xmedia = "xmedia",
}

export interface PDPMediaExtraInfo {
    originalName: OriginalName;
    assetId: string;
    deliveryUrl: string;
    deliveryPath: string;
}

export enum OriginalName {
    A1 = "a1",
    A2 = "a2",
    A3 = "a3",
    A4 = "a4",
    A5 = "a5",
    A6 = "a6",
    A7 = "a7",
    E1 = "e1",
    E2 = "e2",
    P = "p",
    Ult20 = "ult20",
    Ult21 = "ult21",
    Ult22 = "ult22",
}

export enum PDPMediaKind {
    Animation = "animation",
    Double = "double",
    Full = "full",
    Other = "other",
    Plain = "plain",
}

export enum PDPMediaType {
    HLS = "hls",
    Image = "image",
}

export interface Xmedia {
    datatype: Datatype;
    set: number;
    type: PDPMediaType;
    kind: PDPMediaKind;
    path: string;
    name: string;
    width: number;
    height: number;
    timestamp: string;
    allowedScreens: AllowedScreen[];
    extraInfo?: XmediaExtraInfo;
    url?: string;
    posterUrl?: string;
    videoFallbackUrl?: string;
    layers?: Layer[];
    regions?: any[];
}

export interface XmediaExtraInfo {
    originalName?: OriginalName;
    availableZooms?: AvailableZoom[];
    assetId?: string;
    deliveryUrl?: string;
    deliveryPath?: string;
    hasAudio?: boolean;
    muteButtonWhite?: boolean;
    hasAutoplay?: boolean;
    videoConfiguration?: VideoConfiguration;
    isDarkModeCompatible?: boolean;
}

export enum AvailableZoom {
    Zoom2 = "ZOOM2",
    Zoom3 = "ZOOM3",
}

export interface VideoConfiguration {
    controls: any[];
    appearance: Appearance;
    behaviour: Behaviour;
}

export interface Appearance {
}

export interface Behaviour {
    avoidAutoPlay: boolean;
}

export interface Layer {
    datatype: Datatype;
    set: number;
    type: LayerType;
    kind: PDPMediaKind;
    path: string;
    name: string;
    width: number;
    height: number;
    timestamp: string;
    allowedScreens: AllowedScreen[];
    extraInfo?: LayerExtraInfo;
    url: string;
}

export interface LayerExtraInfo {
    isDarkModeCompatible: boolean;
}

export enum LayerType {
    Image = "image",
    Vector = "vector",
}

export interface CommercialComponentExtraInfo {
    highlightPrice: boolean;
    hideProductInfo: boolean;
    duplicateReference: boolean;
    isAddToCartInGridDisabled?: boolean;
    isDivider?: boolean;
}

export enum FamilyName {
    Camisa = "CAMISA",
    Polo = "POLO",
    Sobrecamisa = "SOBRECAMISA",
}

export enum CommercialComponentKind {
    Marketing = "Marketing",
    Wear = "Wear",
}

export enum CommercialComponentLayout {
    Origins = "origins",
}

export interface MarketingMetaInfo {
    type: string;
    isDivider: boolean;
    isSticky: boolean;
    mappingInfo: MappingInfo[];
    showLinksIcon: boolean;
}

export interface MappingInfo {
    xmediaName: string;
    regions: any[];
}

export enum ProductTag {
    Del0704Al0507 = "DEL 07.04 AL 05.07",
    Del2404Al0507 = "DEL 24.04 AL 05.07",
    Del2603Al0507 = "DEL 26.03 AL 05.07",
}

export enum SectionName {
    Man = "MAN",
}

export interface SEO {
    keyword: string;
    seoProductId: string;
    discernProductId: number;
    irrelevant?: boolean;
}

export enum SubfamilyName {
    BCamisAVMC = "B. Camis AV M/C",
    BCamisería = "B. Camisería",
    CamisAVML = "Camis AV M/L",
    FCamisAVMC = "F. Camis AV M/C",
    FCamisería = "F. Camisería",
    ORIGCamisa = "ORIG Camisa",
    Polo = "Polo",
    Sobrecamisa = "Sobrecamisa",
}

export interface TagType {
    displayName: ProductTag;
    type: string;
}

export enum CommercialComponentType {
    Bundle = "Bundle",
    Product = "Product",
}

export enum ElementLayout {
    CarDesgloseSs25 = "CAR-DESGLOSE-SS25",
    Desdoble2 = "Desdoble2",
    Nowcarrusel3Ss25 = "NOWCARRUSEL3-SS25",
    The1A3Ss25 = "1A3-SS25",
    The1BIzdaSs25 = "1B-IZDA-SS25",
    The1BSs25 = "1B-SS25",
    The1K = "1K",
    The4BDesdoble = "4B_desdoble",
}

export interface Margin {
    top: Bottom;
    bottom?: Bottom;
}

export enum Bottom {
    GridTemplateSpacing01 = "grid-template-spacing-01",
    GridTemplateSpacing02 = "grid-template-spacing-02",
    GridTemplateSpacing03 = "grid-template-spacing-03",
}

export interface Style {
    hideGridLines: boolean;
}

export enum ElementType {
    Editorial = "editorial",
}
