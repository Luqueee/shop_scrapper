export interface BershkaSearchResponse {
	hits: {
		pElement: number;
		objectID: string;
		type: string;
		query: string;
		_rankingInfo: {
			nbTypos: number;
			firstMatchedWord: number;
			proximityDistance: number;
			userScore: number;
			geoDistance: number;
			geoPrecision: number;
			nbExactWords: number;
			words: number;
			filters: number;
		};
	}[];
	serverUsed: string;
	indexUsed: string;
	parsedQuery: string;
	timeoutCounts: boolean;
	timeoutHits: boolean;
	appliedRules: {
		objectID: string;
	}[];
}
