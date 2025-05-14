export interface PullAndBearProductsResponse {
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
	relatedCategories: RelatedCategory[];
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
	subFamilyName: SubFamilyName;
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
	relatedCategories: RelatedCategory[];
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
	name: string;
	value: string;
	type: string;
}

export interface Detail {
	description: string;
	longDescription: string;
	additionalInfo: string;
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
	relatedElements: RelatedElement[];
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
	modelHeigh: string;
	modelName: string;
	modelSize: string;
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
	containsAtLeastTitle: string;
	title: string;
	materials: Material[];
}

export interface Material {
	moreInformationTitle: string;
	certificationLink: string;
	fiberKey: string;
	fiberType: string;
	fiberDescription: string;
	percentage: string;
	certificationId: string;
	certifiedByText: string;
	fiberParts: FiberPart[];
}

export interface FiberPart {
	fiberPartTitle: string;
	fiberAreas: FiberArea[];
}

export interface FiberArea {
	fiberAreaTitle: string;
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
	description: string;
	areas: any[];
	components: Component[];
	microcontents: any[];
	reinforcements: any[];
}

export interface Component {
	id: number;
	material: string;
	percentage: string;
}

export interface Image {
	timestamp: string;
	url: string;
	aux: string[];
	type: string[];
	style: string[];
	availableEstilismo: boolean;
}

export interface Relation {
	ids: number[];
	type: string;
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
	sizeType: string;
	skuDimensions: SkuDimension[];
	visibilityValue: string;
	weight: string;
	sizeSystem: string;
	attributes: Attribute[];
	priceIdentifier: string;
}

export interface SkuDimension {
	dimensionId: string;
	value: number;
	dimensionName: DimensionName;
}

export enum DimensionName {
	LargoDeLaManga = "LARGO DE LA MANGA",
	LongitudFrontal = "LONGITUD FRONTAL",
	The12Pecho = "1/2 PECHO",
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
	country: string[];
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

export interface RelatedElement {
	type: string;
	specific: Specific[];
	default: any[];
}

export interface Specific {
	color: string;
	relatedItems: RelatedItem[];
}

export interface RelatedItem {
	color: string;
	catentryId: number;
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
	url: string;
}

export interface ExtraInfo {
	originalName: string;
	deliveryPath: string;
	deliveryUrl: string;
	assetId: string;
	url: string;
	isLargeAndSmallDifferentResourcesValidForBothViews?: boolean;
}

export interface XmediaLocation {
	locations: Location[];
	set: number;
}

export interface Location {
	mediaLocations: string[];
	location: number;
}

export interface RelatedCategory {
	id: number;
	identifier: string;
	name: string;
	urlCategory: boolean;
}


export interface Attribute {
	id: string;
	name: TypeEnum;
	value: TypeEnum;
	type: TypeEnum;
}

export enum TypeEnum {
	PackHasta10 = "Pack hasta -10%",
	Packaging = "PACKAGING",
	Prioritytags = "PRIORITYTAGS",
	PtCreatupackcro = "PT-CREATUPACKCRO",
	Pull = "PULL",
	Triman = "TRIMAN",
	XmanDate = "XMAN_DATE",
	Xmanufacturer = "XMANUFACTURER",
}

export interface Detail {
	description: string;
	longDescription: string;
	additionalInfo: string;
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
	relatedElements: RelatedElement[];
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
	modelHeigh: string;
	modelName: string;
	modelSize: ModelSize;
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
	materials: MaterialElement[];
	containsAtLeastTitle?: ContainsAtLeastTitle;
	title?: Title;
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
	exceptions: Exception[];
}

export enum Exception {
	ExceptoAdornos = "EXCEPTO ADORNOS",
	ExceptoHilosOrnamentales = "EXCEPTO HILOS ORNAMENTALES",
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
	percentage: Percentage;
}

export enum MaterialEnum {
	Algodón = "algodón",
	Poliéster = "poliéster",
	Viscosa = "viscosa",
}

export enum Percentage {
	The100 = "100%",
	The5 = "5%",
	The95 = "95%",
}

// export interface ColorExtraInfo {
// }

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
	Xxl = "XXL",
}

export interface Relation {
	ids: number[];
	type: RelationType;
}

export enum RelationType {
	PacmanLook = "PACMAN-LOOK",
	XSell = "X-SELL",
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
	AnchoDeLaEspaldaALaAlturaDelHombroRecto = "ANCHO DE LA ESPALDA A LA ALTURA DEL HOMBRO (RECTO)",
	FrontLength = "FRONT LENGTH",
	LargoDeEspalda = "Largo de espalda",
	LargoDeLaManga = "LARGO DE LA MANGA",
	The12Chest = "1/2 CHEST",
	The12HemWidth = "1/2 HEM WIDTH",
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
	name: AssemblyName;
	country: Country[];
}

export enum Country {
	Bangladesh = "BANGLADESH",
	Egipto = "EGIPTO",
	Portugal = "PORTUGAL",
	Turquia = "TURQUIA",
}

export enum AssemblyName {
	Confección = "Confección",
	Empty = "",
	Tejeduría = "Tejeduría",
	TeñidoYEstampación = "Teñido y Estampación",
}

export interface FamilyInfo {
	familyId: number;
	familyCode: number;
	familyName: FamilyName;
}

export enum FamilyName {
	Camiseta = "CAMISETA",
}

export interface Purchaser {
	level: Level;
	value: Value;
}

export enum Level {
	CompLvl1 = "[comp_lvl_1]",
}

export enum Value {
	Circular = "CIRCULAR",
}

export interface RelatedElement {
	type: RelationType;
	specific: Specific[];
	default: unknown[];
}

export interface Specific {
	color: string;
	relatedItems: RelatedItem[];
}

export interface RelatedItem {
	color: string;
	catentryId: number;
}

export interface SubfamilyInfo {
	subFamilyId: number;
	subFamilyCode: number;
	subFamilyName: SubFamilyName;
}

export enum SubFamilyName {
	BasicaMangaCorta = "BASICA MANGA CORTA",
	CamisetaMangaCorta = "CAMISETA MANGA CORTA",
	Empty = "",
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
	originalName?: OriginalName;
	assetId?: string;
	deliveryPath?: string;
	deliveryUrl?: string;
	url?: string;
}

export enum OriginalName {
	A10M = "a10m",
	A11M = "a11m",
	A15M = "a15m",
	A19M = "a19m",
	A1M = "a1m",
	A20M = "a20m",
	A2M = "a2m",
	A3M = "a3m",
	A4M = "a4m",
	A5M = "a5m",
	A6M = "a6m",
	A7M = "a7m",
	A8M = "a8m",
	A9M = "a9m",
	C = "c",
	C1 = "c1",
	D1 = "d1",
	D2 = "d2",
	E = "e",
	E1 = "e1",
	M = "m",
	M1 = "m1",
	R = "r",
	R1 = "r1",
	V = "v",
	V1 = "v1",
	Y1 = "y1",
	Z1 = "z1",
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
	TShirt = "T SHIRT",
}

export enum GridElemType {
	Product = "PRODUCT",
}

export enum ProductTypeEnum {
	Clothing = "Clothing",
}

export interface RelatedCategory {
	id: number;
	identifier: Identifier;
	name: RelatedCategoryName;
	urlCategory: boolean;
}

export enum Identifier {
	PullEurosurHombreColeccion = "PULL_EUROSUR_HOMBRE_COLECCION",
}

export enum RelatedCategoryName {
	Colección = "Colección",
}

export enum SectionNameEN {
	Men = "MAN",
}

export enum State {
	Visible = "visible",
}

export enum SubFamilyNameEN {
	Empty = "",
	ShortSleeveBasic = "SHORT SLEEVE BASIC",
	ShortSleeveTShirt = "SHORT SLEEVE T-SHIRT",
}

export enum ProductType {
	ProductBean = "ProductBean",
}
