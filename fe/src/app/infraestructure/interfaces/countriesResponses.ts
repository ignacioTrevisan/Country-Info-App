export interface AllCountriesResponse {
    countryCode: string;
    name: string;
}
export interface CountrieInfo {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Border[];
    population: Population[];
    flag: string;
}

export interface Border {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
}

export interface Population {
    year: number;
    value: number;
}

