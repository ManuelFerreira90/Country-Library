import { CountryComponets } from '../types/CountryComponets'
import { URL } from './api';

const fetchCountry = async (query: string): Promise<CountryComponets[]> => {
    const response = await fetch(`${URL}${query}`);
    const data = await response.json();

    return data;
}

export default fetchCountry;