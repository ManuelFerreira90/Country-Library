import { CountryComponets } from '../types/CountryComponets'

const fetchCountry = async (query: string): Promise<CountryComponets[]> => {
    const response = await fetch(`https://restcountries.com/v3.1/${query}`);
    const data = await response.json();

    return data;
}

export default fetchCountry;