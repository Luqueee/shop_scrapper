export interface BershkaProductsResponse {
	products: Product[];
}

export interface Product {
	id: number;
	type: ProductType;
	state: State;
	name: string;
	nameEn: string;
	image: null;
	backSoon: string;
	unitsLot: number;
	isTop: number;
	subFamily: string;
	productType: ProductTypeEnum;
	bundleColors: BundleColor[];
	tags: unknown[];
	attributes: Attribute[];
	relatedCategories: RelatedCategory[];
	attachments: unknown[];
	bundleProductSummaries: BundleProductSummary[];
	detail: ProductDetail;
	field5: string;
	section: string;
	family: string;
	sectionNameEN: SectionNameEN;
	familyName: FamilyName;
	familyNameEN: FamilyName;
	subFamilyName: SubFamilyName;
	subFamilyNameEN: FamilyName;
	startDate: string;
	keywords: string;
	mainColorid: string;
	familyCode: string;
	subFamilyCode: string;
	productUrl: string;
	productUrlParam: string;
	gridElemType: ProductGridElemType;
	availabilityDate: Date;
	visibilityValue: VisibilityValue;
	alternativeProductId: number;
	isBuyable: boolean;
	onSpecial: boolean;
}

export interface Attribute {
	id: string;
	name: string;
	value: string;
	type: AttributeType;
}

export enum AttributeType {
	Basestyle = "BASESTYLE",
	Packaging = "PACKAGING",
	ProductSetting = "PRODUCT_SETTING",
	ProductTag = "PRODUCT_TAG",
	Xcolfilter = "XCOLFILTER",
	XextraInfo = "XEXTRA_INFO",
	XmanDate = "XMAN_DATE",
	Xmanufacturer = "XMANUFACTURER",
	Xsecondattr = "XSECONDATTR",
	Xtypefilter = "XTYPEFILTER",
}

export interface BundleColor {
	id: number;
	name: string;
}

export interface BundleProductSummary {
	id: number;
	type: BundleProductSummaryType;
	name: string;
	nameEn: string;
	backSoon: string;
	unitsLot: number;
	isTop: number;
	sizeSystem: string;
	subFamily: string;
	productType: ProductTypeEnum;
	bundleColors: unknown[];
	tags: unknown[];
	attributes: Attribute[];
	relatedCategories: RelatedCategory[];
	attachments: unknown[];
	bundleProductSummaries: unknown[];
	detail: BundleProductSummaryDetail;
	field5: string;
	section: string;
	family: string;
	sectionName: string;
	sectionNameEN: SectionNameEN;
	familyName: FamilyName;
	familyNameEN: FamilyName;
	subFamilyName: SubFamilyName;
	subFamilyNameEN: FamilyName;
	startDate: string;
	productUrl: string;
	gridElemType: BundleProductSummaryGridElemType;
	availabilityDate: Date;
	isBuyable: boolean;
	onSpecial: boolean;
}

export interface BundleProductSummaryDetail {
	description: string;
	longDescription: string;
	reference: string;
	displayReference: string;
	defaultImageType: null;
	composition: Composition[];
	compositionByZone: unknown[];
	care: Care[];
	purchaser: Purchaser[];
	colors: Color[];
	relatedProducts: unknown[];
	xmediaDefaultSet: null;
	xmedia: Xmedia[];
	relatedElements: unknown[];
	ingredients: unknown[];
	warnings: unknown[];
	familyInfo: FamilyInfo;
	subfamilyInfo: SubfamilyInfo;
	joinLife: string;
	joinType: string;
	isJoinLife: boolean;
	compositionDetail: CompositionDetail;
	promotions: unknown[];
	country: string;
	relations: unknown[];
}

export interface Care {
	id: string;
	name: string;
	description: string;
	type?: number;
	percentage?: string;
}

export interface Color {
	id: string;
	catentryId: number;
	reference: string;
	name: string;
	modelHeigh: ModelHeigh | null;
	modelName: null | string;
	modelSize: null | string;
	image: Image;
	sizes: Size[];
	isContinuity: boolean;
	composition: Composition[];
	compositionByZone: unknown[];
	compositionDetail: CompositionDetail;
	colFilter: unknown[];
	sustainability: Sustainability;
	traceability: Traceability;
	certifiedMaterials: CertifiedMaterials;
	relations: unknown[];
}

export interface CertifiedMaterials {
	show: boolean;
	containsAtLeastTitle?: ContainsAtLeastTitle;
	title?: Title;
	materials: MaterialElement[];
}

export enum ContainsAtLeastTitle {
	QueContieneAlMenos = "Que contiene al menos",
}

export interface MaterialElement {
	moreInformationTitle: MoreInformationTitle;
	certificationLink: string;
	fiberKey: FiberKey;
	fiberType: FiberType;
	fiberDescription: string;
	percentage: MaterialPercentage;
	certificationId: string;
	certifiedByText: CertifiedByText;
	fiberParts: FiberPart[];
}

export enum CertifiedByText {
	CertificadoPorIntertek193341 = "Certificado por Intertek 193341.",
}

export enum FiberKey {
	MaterialsEcologicallyGrownCotton = "materials.ecologically_grown_cotton",
	MaterialsRecycledCotton = "materials.recycled_cotton",
	MaterialsRecycledPolyester = "materials.recycled_polyester",
}

export interface FiberPart {
	fiberPartTitle: Description;
	fiberAreas: FiberArea[];
}

export interface FiberArea {
	fiberAreaTitle: string;
}

export enum Description {
	Exterior = "EXTERIOR",
}

export enum FiberType {
	AlgodónDeCultivoOrgánicoCertificadoOcs = "ALGODÓN DE CULTIVO ORGÁNICO CERTIFICADO OCS",
	AlgodónRecicladoCertificadoRCS = "ALGODÓN RECICLADO CERTIFICADO RCS",
	PoliésterRecicladoCertificadoRCS = "POLIÉSTER RECICLADO CERTIFICADO RCS",
}

export enum MoreInformationTitle {
	MásInformación = "MÁS INFORMACIÓN",
}

export enum MaterialPercentage {
	The100 = "100%",
	The20 = "20%",
	The22 = "22%",
	The25 = "25%",
	The29 = "29%",
	The30 = "30%",
	The35 = "35%",
	The40 = "40%",
	The58 = "58%",
	The65 = "65%",
	The70 = "70%",
	The72 = "72%",
	The75 = "75%",
	The80 = "80%",
}

export enum Title {
	MaterialesCertificados = "MATERIALES CERTIFICADOS",
}

export interface Composition {
	part: string;
	composition: Care[];
}

export interface CompositionDetail {
	parts: Part[];
	exceptions: Exception[];
}

export enum Exception {
	ExceptoAdornos = "EXCEPTO ADORNOS",
}

export interface Part {
	id: string;
	description: Description;
	areas: unknown[];
	components: Component[];
	microcontents: unknown[];
	reinforcements: unknown[];
}

export interface Component {
	id: number;
	material: MaterialEnum;
	percentage: ComponentPercentage;
}

export enum MaterialEnum {
	Algodón = "algodón",
	Elastano = "elastano",
	Poliéster = "poliéster",
	Viscosa = "viscosa",
}

export enum ComponentPercentage {
	The1 = "1%",
	The100 = "100%",
	The2 = "2%",
	The20 = "20%",
	The22 = "22%",
	The24 = "24%",
	The27 = "27%",
	The4 = "4%",
	The72 = "72%",
	The73 = "73%",
	The78 = "78%",
	The80 = "80%",
	The99 = "99%",
}

export interface Image {
	timestamp: string;
	url: string;
	aux: string[];
	type: string[];
	style: string[];
	availableEstilismo: boolean;
}

export enum ModelHeigh {
	The185CM = "185 cm",
	The188CM = "188 cm",
	The189CM = "189 cm",
}

export interface Size {
	sku: number;
	name: string;
	description: null;
	partnumber: string;
	isBuyable: boolean;
	backSoon: string;
	mastersSizeId: string;
	position: number;
	price: string;
	oldPrice: null;
	sizeType: SizeType;
	country: Country;
	skuDimensions: SkuDimension[];
	visibilityValue: VisibilityValue;
	weight: string;
	sizeSystem: string;
	attributes: Attribute[];
	priceIdentifier: PriceIdentifier;
}

export enum Country {
	Bangladesh = "BANGLADESH",
	Camboya = "CAMBOYA",
	MainlandChina = "MAINLAND CHINA",
	Pakistan = "PAKISTAN",
	Turquia = "TURQUIA",
}

export enum PriceIdentifier {
	The000002Gbk5 = "000002gbk5",
	The000002HkOS = "000002hkOS",
	The000002IlvJ = "000002ilvJ",
	The000002Im2D = "000002im2d",
	The000002J5LE = "000002j5LE",
	The000002JtlN = "000002jtlN",
	The000002PPhG = "000002pPhG",
	The000002Pu6M = "000002pu6m",
	The000002RRtr = "000002rRtr",
	The000002RSWI = "000002rSWI",
	The000002RY0L = "000002rY0l",
	The000003ALCi = "000003ALCi",
	The000003Eh8L = "000003Eh8l",
	The0000045Lnx = "0000045Lnx",
	The000004Pthk = "000004Pthk",
}

export enum SizeType {
	Regular = "regular",
}

export interface SkuDimension {
	dimensionId: string;
	value: number;
	dimensionName: DimensionName;
}

export enum DimensionName {
	AnchoCadera = "Ancho cadera",
	AnchoCintura = "Ancho cintura",
	LargoPrenda = "Largo prenda",
}

export enum VisibilityValue {
	BackSoon = "BACK_SOON",
	Show = "SHOW",
	SoldOut = "SOLD_OUT",
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
	paragraph: string;
	weaving: Assembly;
	dyeingPrinting: Assembly;
	confection: Assembly;
	assembly: Assembly;
	pricking: Assembly;
	finish: Assembly;
}

export interface Assembly {
	name: string;
	country: unknown[];
}

export interface FamilyInfo {
	familyId: number;
	familyCode: number;
	familyName: FamilyName;
}

export enum FamilyName {
	Shorts = "Shorts",
}

export interface Purchaser {
	level: Level;
	value: Value;
}

export enum Level {
	CompLvl1 = "[comp_lvl_1]",
	CompLvl2 = "[comp_lvl_2]",
}

export enum Value {
	BottomsCamiseriaChico = "BOTTOMS&CAMISERIA_CHICO",
	BottomsCircular = "BOTTOMS_CIRCULAR",
	BottomsPlana = "BOTTOMS_PLANA",
	CircularChico = "CIRCULAR_CHICO",
	TejanoChico = "TEJANO_CHICO",
}

export interface SubfamilyInfo {
	subFamilyId: number;
	subFamilyCode: number;
	subFamilyName: SubFamilyName;
}

export enum SubFamilyName {
	Bermudas = "Bermudas",
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
	timestamp: number;
	extraInfo: ExtraInfo;
	isModel: boolean;
	url: string;
	posterUrl?: string;
	videoFallbackUrl?: string;
}

export interface ExtraInfo {
	originalName: OriginalName;
	assetId: string;
	deliveryPath: string;
	deliveryUrl: string;
	url: string;
	hash?: Hash[];
}

export interface Hash {
	md5Hash: string;
	size: string;
}

export enum OriginalName {
	A1T = "a1t",
	A2D = "a2d",
	A3O = "a3o",
	A4O = "a4o",
	A5O = "a5o",
	A6O = "a6o",
	A7O = "a7o",
	A9O = "a9o",
	B = "b",
	B1 = "b1",
	E = "e",
	E1 = "e1",
	H1 = "h1",
	H11 = "h11",
	H31 = "h31",
	P1 = "p1",
	R = "r",
	R1 = "r1",
	S1 = "s1",
	W = "w",
	W1 = "w1",
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
	Clothing = "Clothing",
}

export interface RelatedCategory {
	id: number;
	identifier: string;
	name: string;
	urlCategory: boolean;
}

export enum SectionNameEN {
	Men = "MEN",
}

export enum BundleProductSummaryType {
	ProductBean = "ProductBean",
}

export interface ProductDetail {
	description: string;
	longDescription: string;
	additionalInfo: string;
	reference: string;
	displayReference: string;
	defaultImageType: null;
	composition: unknown[];
	compositionByZone: unknown[];
	care: unknown[];
	purchaser: unknown[];
	colors: Color[];
	relatedProducts: unknown[];
	xmediaDefaultSet: number;
	relatedElements: unknown[];
	warnings: unknown[];
	familyInfo: FamilyInfo;
	subfamilyInfo: SubfamilyInfo;
	promotions: unknown[];
	relations: unknown[];
}

export enum ProductGridElemType {
	Mocaco = "MOCACO",
}

export enum State {
	Visible = "visible",
}

export enum ProductType {
	BundleBean = "BundleBean",
}
