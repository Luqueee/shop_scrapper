export interface StradivariusProductsResponse {
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
	sizeSystem: string;
	subFamily: string;
	productType: ProductTypeEnum;
	bundleColors: unknown[];
	tags: unknown[];
	attributes: Attribute[];
	relatedCategories: unknown[];
	attachments: unknown[];
	bundleProductSummaries: BundleProductSummaries[];
	detail: Detail;
	field5: string;
	section: string;
	family: string;
	sectionName: string;
	sectionNameEN: SectionNameEN;
	familyName: FamilyName;
	familyNameEN: FamilyNameEN;
	subFamilyName: FamilyName;
	subFamilyNameEN: SubFamilyNameEN;
	startDate: string;
	keywords: string;
	mainColorid: string;
	familyCode: string;
	subFamilyCode: string;
	productUrl: string;
	gridElemType: GridElemType;
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

export interface BundleProductSummaries {
	id: number;
	type: string;
	name: string;
	nameEn: string;
	backSoon: string;
	unitsLot: number;
	isTop: number;
	sizeSystem: string;
	subFamily: string;
	productType: string;
	bundleColors: any[];
	tags: any[];
	attributes: Attribute[];
	relatedCategories: any[];
	attachments: any[];
	bundleProductSummaries: BundleProductSummaries[];
	detail: Detail;
	field5: string;
	section: string;
	family: string;
	sectionName: string;
	sectionNameEN: string;
	familyName: string;
	familyNameEN: string;
	subFamilyName: string;
	subFamilyNameEN: string;
	startDate: string;
	productUrl: string;
	gridElemType: string;
	availabilityDate: Date;
	isBuyable: boolean;
	onSpecial: boolean;
}

export interface Attribute {
	id: string;
	name: Name;
	value: Name;
	type: Type;
}

export enum Name {
	Essential = "ESSENTIAL",
	FullLength = "Full-length",
	Gentle = "GENTLE",
	Linen = "LINEN",
	MidRise = "Mid-rise",
	Packaging = "PACKAGING",
	Pants = "PANTS",
	Pocket = "POCKET",
	WideLeg = "Wide-leg",
	XmanDate = "XMAN_DATE",
	Xmanufacturer = "XMANUFACTURER",
}

export enum Type {
	Acabado = "ACABADO",
	Coleccion = "COLECCION",
	CuelloTalle = "CUELLO/TALLE",
	Detalle = "DETALLE",
	Fitting = "FITTING",
	LargoMangasPierna = "LARGO_MANGAS/PIERNA",
	Material = "MATERIAL",
	Packaging = "PACKAGING",
	TipoDeProducto = "TIPO_DE_PRODUCTO",
	XmanDate = "XMAN_DATE",
	Xmanufacturer = "XMANUFACTURER",
}

export interface Detail {
	description: string;
	longDescription: string;
	reference: string;
	displayReference: string;
	defaultImageType: null;
	composition: Composition[];
	compositionByZone: any[];
	care: Care[];
	purchaser: Purchaser[];
	colors: Color[];
	relatedProducts: any[];
	xmediaDefaultSet: null;
	xmedia: Xmedia[];
	relatedElements: any[];
	ingredients: any[];
	warnings: any[];
	familyInfo: FamilyInfo;
	subfamilyInfo: SubfamilyInfo;
	joinLife: string;
	joinType: string;
	isJoinLife: boolean;
	compositionDetail: CompositionDetail;
	promotions: any[];
	country: string;
	relations: Relation[];
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
	modelHeigh: null | string;
	modelName: null | string;
	modelSize: ModelSize | null;
	image: Image;
	sizes: Size[];
	isContinuity: boolean;
	composition: Composition[];
	compositionByZone: any[];
	compositionDetail: CompositionDetail;
	colFilter: any[];
	sustainability: Sustainability;
	traceability: Traceability;
	certifiedMaterials: CertifiedMaterials;
	relations: Relation[];
}

export interface CertifiedMaterials {
	show: boolean;
	materials: any[];
}

export interface Composition {
	part: string;
	composition: Care[];
}

export interface CompositionDetail {
	parts: Part[];
	exceptions: string[];
}

export interface Part {
	id: string;
	description: Description;
	areas: any[];
	components: Component[];
	microcontents: any[];
	reinforcements: any[];
}

export interface Component {
	id: number;
	material: Material;
	percentage: Percentage;
}

export enum Material {
	Linen = "linen",
	Viscose = "viscose",
}

export enum Percentage {
	The16 = "16%",
	The17 = "17%",
	The83 = "83%",
	The84 = "84%",
}

export enum Description {
	OuterShell = "OUTER SHELL",
}

export interface Image {
	timestamp: string;
	url: string;
	aux: string[];
	type: string[];
	style: string[];
	availableEstilismo: boolean;
}

export enum ModelSize {
	L = "L",
	M = "M",
	S = "S",
	Xl = "XL",
	Xs = "XS",
}

export interface Relation {
	ids: number[];
	type: string;
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
	skuDimensions: SkuDimension[];
	visibilityValue: VisibilityValue;
	weight: string;
	sizeSystem: string;
	attributes: Attribute[];
	priceIdentifier?: string;
}

export enum SizeType {
	Long = "long",
	Regular = "regular",
	Short = "short",
}

export interface SkuDimension {
	dimensionId: string;
	value: number;
	dimensionName: string;
}

export enum VisibilityValue {
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
	country: any[];
}

export interface FamilyInfo {
	familyId: number;
	familyCode: number;
	familyName: string;
}

export interface Purchaser {
	level: string;
	value: string;
}

export interface SubfamilyInfo {
	subFamilyId: number;
	subFamilyCode: number;
	subFamilyName: string;
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
	url?: string;
	posterUrl?: string;
	videoFallbackUrl?: string;
}

export interface ExtraInfo {
	assetId?: string;
	deliveryPath?: string;
	deliveryUrl?: string;
	originalName: OriginalName;
	url?: string;
	isLargeAndSmallDifferentResourcesValidForBothViews?: boolean;
}

export enum OriginalName {
	A1 = "a1",
	A10 = "a10",
	A15 = "a15",
	A2 = "a2",
	A3 = "a3",
	A4 = "a4",
	A5 = "a5",
	A6 = "a6",
	C = "c",
	C1 = "c1",
	D1 = "d1",
	M1 = "m1",
	R = "r",
	R1 = "r1",
	S1 = "s1",
	S2 = "s2",
	S3 = "s3",
	S4 = "s4",
	V2 = "v2",
}

export interface XmediaLocation {
	locations: Location[];
	set: number;
}

export interface Location {
	mediaLocations: string[];
	location: number;
}


export enum AttributeType {
	Acabado = "ACABADO",
	Coleccion = "COLECCION",
	CuelloTalle = "CUELLO/TALLE",
	Detalle = "DETALLE",
	Fitting = "FITTING",
	LargoMangasPierna = "LARGO_MANGAS/PIERNA",
	Material = "MATERIAL",
	Packaging = "PACKAGING",
	TipoDeProducto = "TIPO_DE_PRODUCTO",
	XmanDate = "XMAN_DATE",
	Xmanufacturer = "XMANUFACTURER",
}

export interface Detail {
	description: DetailDescription;
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
	modelHeigh: null | string;
	modelName: null | string;
	modelSize: ModelSize | null;
	image: Image;
	sizes: Size[];
	isContinuity: boolean;
	composition: Composition[];
	compositionByZone: unknown[];
	compositionDetail: CompositionDetail;
	colFilter: unknown[];
	sustainability: Sustainability;
	traceability: Traceability;
	extraInfo: ColorExtraInfo;
	certifiedMaterials: CertifiedMaterials;
	relations: Relation[];
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
	percentage: string;
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
}

export interface FiberPart {
	fiberPartTitle: FiberPartTitleEnum;
	fiberAreas: FiberArea[];
}

export interface FiberArea {
	fiberAreaTitle: string;
}

export enum FiberPartTitleEnum {
	Exterior = "EXTERIOR",
	Forro = "FORRO",
}

export enum FiberType {
	AlgodónDeCultivoOrgánicoCertificadoOcs = "ALGODÓN DE CULTIVO ORGÁNICO CERTIFICADO OCS",
	AlgodónRecicladoCertificadoRCS = "ALGODÓN RECICLADO CERTIFICADO RCS",
}

export enum MoreInformationTitle {
	MásInformación = "MÁS INFORMACIÓN",
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
	exceptions: string[];
}

export interface Part {
	id: string;
	description: FiberPartTitleEnum;
	areas: unknown[];
	components: Component[];
	microcontents: unknown[];
	reinforcements: unknown[];
}

export interface Component {
	id: number;
	material: MaterialEnum;
	percentage: string;
}

export enum MaterialEnum {
	Algodón = "algodón",
	Elastano = "elastano",
	Modal = "modal",
	Poliéster = "poliéster",
	Viscosa = "viscosa",
}

export interface Image {
	timestamp: string;
	url: string;
	aux: string[];
	type: string[];
	style: string[];
	availableEstilismo: boolean;
}

export enum ModelSize {
	L = "L",
	M = "M",
	S = "S",
	Xl = "XL",
	Xs = "XS",
}

export interface Relation {
	ids: number[];
	type: RelationType;
}

export enum RelationType {
	PacmanLook = "PACMAN-LOOK",
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
	skuDimensions: SkuDimension[];
	visibilityValue: VisibilityValue;
	weight: string;
	sizeSystem: string;
	attributes: Attribute[];
	priceIdentifier: string;
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
	AnchoDeManga = "Ancho de manga",
	AnchoDelTiro = "Ancho del tiro",
	AnchoDelantero = "Ancho delantero",
	Cadera = "CADERA",
	Cintura = "CINTURA",
	FrontLength = "FRONT LENGTH",
	LargoDeLaManga = "LARGO DE LA MANGA",
	LargoFrontalDesdeCorteAlHombro = "LARGO FRONTAL DESDE CORTE AL HOMBRO",
	LargoParteTraseraCentral = "LARGO PARTE TRASERA CENTRAL",
	Pecho = "PECHO",
}

export enum VisibilityValue {
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

export enum DetailDescription {
	CamisetaSinMangasAlgodón = "Camiseta sin mangas algodón",
	Empty = "",
}

export interface FamilyInfo {
	familyId: number;
	familyCode: number;
	familyName: FamilyName;
}

export enum FamilyName {
	Camisetas = "Camisetas",
	Empty = "",
}

export interface Purchaser {
	level: Level;
	value: string;
}

export enum Level {
	CompLvl1 = "[comp_lvl_1]",
	CompLvl2 = "[comp_lvl_2]",
}

export interface SubfamilyInfo {
	subFamilyId: number;
	subFamilyCode: number;
	subFamilyName: FamilyName;
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
	extraInfo: MediaExtraInfo;
	url?: string;
	posterUrl?: string;
	videoFallbackUrl?: string;
}

export interface MediaExtraInfo {
	originalName: OriginalName;
	assetId?: string;
	deliveryPath?: string;
	deliveryUrl?: string;
	url?: string;
}

export enum OriginalName {
	A1 = "a1",
	A10 = "a10",
	A15 = "a15",
	A2 = "a2",
	A3 = "a3",
	A4 = "a4",
	A5 = "a5",
	A6 = "a6",
	A7 = "a7",
	C = "c",
	C1 = "c1",
	D1 = "d1",
	M1 = "m1",
	R = "r",
	R1 = "r1",
	S1 = "s1",
	S2 = "s2",
	S3 = "s3",
	S4 = "s4",
	T = "t",
	V1 = "v1",
	V2 = "v2",
}

export interface XmediaLocation {
	locations: Location[];
	set: number;
}

export interface Location {
	mediaLocations: string[];
	location: number;
}

export enum FamilyNameEN {
	Empty = "",
	TShirts = "T-shirts",
}

export enum GridElemType {
	Product = "PRODUCT",
}

export enum ProductTypeEnum {
	Clothing = "Clothing",
}

export enum SectionNameEN {
	Women = "WOMEN",
}

export enum State {
	Visible = "visible",
}

export enum SubFamilyNameEN {
	TShirts = "T-Shirts",
}

export enum ProductType {
	ProductBean = "ProductBean",
}
