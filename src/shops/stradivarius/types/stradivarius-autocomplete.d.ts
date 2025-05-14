export interface StradivariusAutocompleteResponse {
	status: string;
	results: Result[];
	provider: string;
}

export interface Result {
	query: string;
}
