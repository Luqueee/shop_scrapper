export interface ZaraCategoriesResponse {
    categories: Category[];
}

export interface Category {
    id: number;
    name: string;
    sectionName: SectionName;
    subcategories: CategorySubcategory[];
    layout: CategoryGridLayout;
    contentType: ContentType;
    gridLayout: CategoryGridLayout;
    seo: SEO;
    attributes: CategoryAttributes;
    key: string;
    isRedirected: boolean;
    isSelected: boolean;
    hasSubcategories: boolean;
    irrelevant: boolean;
    menuLevel: number;
}

export interface CategoryAttributes {
    mustDisplayContent: boolean;
    showSubcategories: boolean;
    isDivider: boolean;
    isLineBreak: boolean;
    isTitle: boolean;
}

export enum ContentType {
    ContactPage = "contactPage",
    Content = "content",
    CorporatePage = "corporatePage",
    Divider = "divider",
    GiftTicketView = "giftTicketView",
    GiftcardActivation = "giftcardActivation",
    GiftcardBalance = "giftcardBalance",
    Grid = "grid",
    HelpPage = "helpPage",
    Newsletter = "newsletter",
    StoreLocator = "storeLocator",
}

export enum CategoryGridLayout {
    DividerCategoryView = "divider-category-view",
    LineBreakCategoryView = "line-break-category-view",
    MarketingContentView = "marketing-content-view",
    MoreinfoCategoryView = "moreinfo-category-view",
    ProductsCategoryView = "products-category-view",
    StoreLocatorView = "store-locator-view",
    TitleCategoryView = "title-category-view",
}

export enum SectionName {
    Beauty = "BEAUTY",
    Kid = "KID",
    Man = "MAN",
    Preowned = "PREOWNED",
    Woman = "WOMAN",
}

export interface SEO {
    seoCategoryId: number;
    keyword: string;
    irrelevant: boolean;
    isHiddenInMenu: boolean;
}

export interface CategorySubcategory {
    id: number;
    name: string;
    sectionName: SectionName;
    subcategories: PurpleSubcategory[];
    layout: CategoryGridLayout;
    contentType: ContentType;
    gridLayout: CategoryGridLayout;
    seo?: SEO;
    attributes: SubcategoryAttributes;
    key: string;
    isRedirected: boolean;
    isSelected: boolean;
    hasSubcategories: boolean;
    irrelevant: boolean;
    menuLevel: number;
    styles?: PurpleStyles;
    redirectCategoryId?: number;
}

export interface SubcategoryAttributes {
    mustDisplayContent: boolean;
    showSubcategories: boolean;
    isDivider: boolean;
    isLineBreak: boolean;
    isTitle: boolean;
    hasAllSubcategoriesHidden?: boolean;
    customLayout?: CustomLayout;
    displayOpen?: boolean;
}

export enum CustomLayout {
    Athleticz = "athleticz",
    Origins = "origins",
    Sra = "sra",
}

export interface PurpleStyles {
    color: Color;
    tag?: Tag;
    isBold?: boolean;
    font?: string;
}

export enum Color {
    Cb2B69 = "#cb2b69",
    Cb2B6B = "#cb2b6b",
    Empty = "",
}

export interface Tag {
    position: Position;
    text: Text;
}

export enum Position {
    Sup = "sup",
}

export enum Text {
    New = "NEW",
    Sports = "SPORTS",
    TextNew = "New",
}

export interface PurpleSubcategory {
    id: number;
    name: string;
    sectionName: SectionName;
    subcategories: FluffySubcategory[];
    layout: PurpleLayout;
    contentType: ContentType;
    gridLayout: PurpleLayout;
    seo?: SEO;
    attributes: SubcategoryAttributes;
    key: string;
    isRedirected: boolean;
    isSelected: boolean;
    hasSubcategories: boolean;
    irrelevant: boolean;
    menuLevel: number;
    styles?: FluffyStyles;
    redirectCategoryId?: number;
}

export enum PurpleLayout {
    ContactView = "contact-view",
    DividerCategoryView = "divider-category-view",
    GiftTicketView = "gift-ticket-view",
    GiftcardActivationView = "giftcard-activation-view",
    GiftcardBalanceView = "giftcard-balance-view",
    HelpView = "help-view",
    MarketingContentView = "marketing-content-view",
    MarketingCorporateView = "marketing-corporate-view",
    NewsletterView = "newsletter-view",
    OriginsLooksCategoryView = "origins-looks-category-view",
    OriginsProductsCategoryView = "origins-products-category-view",
    ProductsCategoryView = "products-category-view",
    SrplsProductsCategoryView = "srpls-products-category-view",
    StoreLocatorView = "store-locator-view",
}

export interface FluffyStyles {
    color: string;
    tag?: Tag;
}

export interface FluffySubcategory {
    id: number;
    name: string;
    sectionName: SectionName;
    subcategories: TentacledSubcategory[];
    layout: PurpleLayout;
    contentType: ContentType;
    gridLayout: PurpleLayout;
    seo: SEO;
    attributes: SubcategoryAttributes;
    key: string;
    isRedirected: boolean;
    isSelected: boolean;
    hasSubcategories: boolean;
    irrelevant: boolean;
    menuLevel: number;
    redirectCategoryId?: number;
    styles?: FluffyStyles;
}

export interface TentacledSubcategory {
    id: number;
    name: string;
    sectionName: SectionName;
    subcategories: any[];
    layout: PurpleLayout;
    contentType: ContentType;
    gridLayout: PurpleLayout;
    seo: SEO;
    attributes: SubcategoryAttributes;
    key: string;
    isRedirected: boolean;
    isSelected: boolean;
    hasSubcategories: boolean;
    irrelevant: boolean;
    menuLevel: number;
}
