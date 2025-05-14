export interface JackJonesCategoryResponse {
    _meta: Meta;
    breadcrumb: Breadcrumb[];
    childCategories: Breadcrumb[];
    seo: SEO;
    umbracoUrlName: string;
    umbracoUrlAlias: string;
    multiBrandTags: any[];
    pageTitle: string;
    breadcrumbTitle: string;
    pageBackgroundColor: null;
    rows: Row[];
    omitFromSitemap: boolean;
    soMeTitle: string;
    soMeDescription: string;
    soMeImage: SoMeImage;
    redirectType: null;
    bottomRows: any[];
    fixedWidgets: FixedWidget[];
    promotionalSpots: PromotionalSpots;
    _contentExpirationDate: Date;
    filters: Array<string[]>;
    categoryId: string;
    isLandingPage: boolean;
    totalProductsPerPage: number;
    limitProductsByMaximumAvailabilityInDays: number;
    limitTotalProductsInCategory: number;
    daysForNewIn: number;
    mainCategoryId: string;
    frontFacingId: string;
    backFacingId: string;
    fallbackFrontFacingId: string;
    fallbackBackFacingId: string;
    facets: string[];
}

export interface Meta {
    url: string;
    canonical: string;
    name: string;
    alias: Alias;
    id: number;
    updated: Date;
}

export enum Alias {
    CategoryPage = "categoryPage",
}

export interface Breadcrumb {
    url: string;
    title: string;
    categoryId: string;
    openInCurrentTab: boolean;
}

export interface FixedWidget {
    trackingId?: string;
    disabledDesktop: boolean;
    disabledTablet: boolean;
    disabledMobile: boolean;
    disabledApp?: boolean;
    fromDate?: Date;
    toDate?: Date;
    ranking?: number;
    text?: string;
    textLength?: number;
    textWordLength?: number;
    textIncrement?: number;
    textAlignment?: string;
    mobileWordLimit?: number;
    mobileBuffer?: number;
    desktopWordLimit?: number;
    desktopBuffer?: number;
    isBelowSidebarOnDesktop?: boolean;
    _alias: string;
    mobileImage?: null;
    tabletImage?: null;
    desktopImage?: null;
    headline?: string;
    headlineLocation?: string;
    backgroundColor?: null;
    links?: Link[];
}

export interface Link {
    title: string;
    link: string;
    pageAlias: Alias;
    pageId: string;
    linkColor: null;
    _alias: AliasEnum;
}

export enum AliasEnum {
    PopularCategoryLink = "popularCategoryLink",
}

export interface PromotionalSpots {
    trackingId: string;
    disabledDesktop: boolean;
    disabledTablet: boolean;
    disabledMobile: boolean;
    disabledApp: boolean;
    fromDate: Date;
    toDate: Date;
    ranking: number;
    showOnAllPages: boolean;
    _contentExpirationDate: Date;
    spots: Spot[];
    _alias: string;
}

export interface Spot {
    trackingId: string;
    disabledDesktop: boolean;
    disabledTablet: boolean;
    disabledMobile: boolean;
    disabledApp: boolean;
    fromDate: Date;
    toDate: Date;
    ranking: number;
    countdownDateTime: Date;
    countdownBackgroundColour: null;
    countdownTextColor: null;
    countdownBorderColor: null;
    enableClipboardIcon: boolean;
    clipboardCode: string;
    clipboardTitle: string;
    clipboardTextColor: null;
    clipboardBackgroundColor: null;
    enableDivisionMode: boolean;
    divisionModeType: null;
    pattern: null;
    links: null;
    link: string;
    pageAlias: Alias;
    pageId: string;
    mode: string;
    position: number;
    type: string;
    isRandomPosition: boolean;
    promoProductPickerId: null;
    promoDesktop: any[];
    promoTablet: any[];
    promoMobile: any[];
    videoId: string;
    background: boolean;
    displayTitle: boolean;
    displayPortrait: boolean;
    aspectX: number;
    aspectY: number;
    bottom: number;
    autoplay: boolean;
    playInline: boolean;
    loop: boolean;
    controls: boolean;
    accentColor: null;
    displayInline: boolean;
    muted: boolean;
    image: SoMeImage;
    imageAltText: string;
    _alias: string;
}

export interface SoMeImage {
    aspectRatio: string;
    imageUrl: string;
    focalPoint: FocalPoint;
    maxWidth: string;
    alt: string;
}

export interface FocalPoint {
    x: number;
    y: number;
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
    enableClipboardIcon: boolean;
    clipboardCode: string;
    clipboardTitle: string;
    clipboardTextColor: null;
    clipboardBackgroundColor: null;
    countdownDateTime: Date;
    countdownBackgroundColour: null;
    countdownTextColor: null;
    countdownBorderColor: null;
    productPickerMode: null;
    productPicker: null;
    enableDivisionMode: boolean;
    divisionModeType: null;
    pattern: null;
    links: null;
    imageAltText: string;
    ctaEnabled: boolean;
    ctaText: string;
    ctaTextColor: null;
    ctaBackgroundColor: null;
    desktop: SoMeImage;
    tablet: null;
    mobile: SoMeImage;
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
