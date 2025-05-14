export interface ZaraAvailabilityResponse {
	skusAvailability: SkusAvailability[];
}

export interface SkusAvailability {
	sku: number;
	availability: string;
}
