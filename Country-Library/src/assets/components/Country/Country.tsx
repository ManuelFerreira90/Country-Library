import { useEffect, useState } from 'react';
import fetchCountry from '../../api/fetchCountry.js';
import { CountryComponets } from './../../types/CountryComponets';

function Country() {

    const [countries, setCountries] = useState<CountryComponets[]>([]);

    useEffect(() => {
      fetchCountry('all').then((response: CountryComponets[]) => {
        setCountries(response);
      });
    }, []);

    console.log(countries);
    console.log('teste');

  return (
    <div>
      <p>teste</p>
    </div>
  )
}

export default Country;