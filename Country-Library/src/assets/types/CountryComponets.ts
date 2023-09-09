interface Name {
    common: string;
    official: string;
}

export interface Money{
    name: string,
    symbol: string
}
  
export interface NativeName {
    [key: string]: Name;
}


export interface CountryComponets {
    name: {
        common: string;
        official: string;
        nativeName: NativeName;
    };
    region: string; 
    population: number;
    capital: string; 
    subregion: string; 
    flags: {
        png: string; 
    };
    ccn3: string; 
    languages: string[]; 
    currencies: {
        [key: string]: Money; 
    };
    tld: string[]; 
    borders: string[]; 
}
