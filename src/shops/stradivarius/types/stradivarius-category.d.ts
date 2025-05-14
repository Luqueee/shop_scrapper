export interface StradivariusCategoryResponse {
    categories: Category[];
}

export interface Category {
    id: number;
    name: string;
    nameEn: string;
    shortDescription: string;
    description: null;
    keywords: null;
    key: string;
    numberOfProducts: null;
    type: string;
    viewCategoryId: number;
    subcategories: Subcategory[];
    attachments: Attachment[];
    sequence: number;
    oldIds: any[];
    categoryUrlTranslations: any[];
    seoCategory: SEOCategory;
}

export interface Attachment {
    id: string;
    name: Name;
    path: string;
    type: Type;
}

export enum Name {
    ColorCategoria = "color categoria",
    Empty = "",
    GridThemeBlack = "GRID_THEME_BLACK",
    ModoColores = "MODO_COLORES",
    N1DestacadoNewinSummer2025 = "N1_destacado_newin_summer_2025",
    New = "NEW",
    NoviewSEO = "NOVIEW_SEO",
    Nuevo = "Nuevo",
    ParrillaAccesible = "parrilla_accesible",
    ParrillaShopTheColor = "parrilla_shop_the_color",
    PrefooterSEO = "prefooter_seo",
    PromoPercentage = "PROMO_PERCENTAGE",
    RedirectURL = "REDIRECT_URL",
    StoreMode = "STORE_MODE",
    TagGrid3DIcon = "TAG_GRID_3D_ICON",
    TagGridBasicIcon = "TAG_GRID_BASIC_ICON",
    TagGridLeatherIcon = "TAG_GRID_LEATHER_ICON",
    TagGridLimitedIcon = "TAG_GRID_LIMITED_ICON",
    TagGridPetiteIconVer = "TAG_GRID_PETITE_ICON_VER",
    TagGridSelectedIcon = "TAG_GRID_SELECTED_ICON",
    TagGridSetupIconVer = "TAG_GRID_SETUP_ICON_VER",
    TextcolorCategoryMenu = "textcolor_category_menu",
    Viral = "VIRAL",
}

export enum Type {
    CSS = "CSS",
    Heromedia = "HEROMEDIA",
    Images = "IMAGES",
    Label = "LABEL",
    NoviewSEO = "NOVIEW_SEO",
    Other = "OTHER",
    PromoPercentage = "PROMO_PERCENTAGE",
    StoreMode = "STORE_MODE",
    TagNew = "TAG_NEW",
    Videoheader = "VIDEOHEADER",
}

export interface SEOCategory {
    name: string;
    title: string;
    metaDescription: string;
    mainHeader: string;
    longDescription: null | string;
    keywords: null;
    secondaryTitle: string;
    secondaryDescription: string;
}

export interface Subcategory {
    id: number;
    name: string;
    nameEn: string;
    shortDescription: null | string;
    description: null | string;
    keywords: null;
    key: string;
    numberOfProducts: null;
    type: string;
    viewCategoryId: number;
    subcategories: Subcategory[];
    attachments: Attachment[];
    sequence: number;
    oldIds: number[];
    categoryUrlTranslations: CategoryURLTranslation[];
    seoCategory: SEOCategory;
    categoryUrl?: string;
    categoryUrlParam?: string;
}

export interface CategoryURLTranslation {
    id: number;
    name: string;
}
