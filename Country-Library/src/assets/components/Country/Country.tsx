import { useEffect, useState } from 'react';
import fetchCountry from '../../api/fetchCountry.js';
import { CountryComponets } from './../../types/CountryComponets';
import { CardCountry, CardInfo, WrapperCountry } from './Country.style';
import useAppContext from '../../hook/useAppContext.js';

function Country() {

    const {
      darkMode,
      search,
      filter
    } = useAppContext();

    const [countries, setCountries] = useState<CountryComponets[]>([]);

    useEffect(() => {
      fetchCountry('all').then((response: CountryComponets[]) => {
        setCountries(response);
      });
    }, []);

    const BuildContries = () => {
      let filteredCountries = countries;
    
      if (search.trim() !== '') {
        filteredCountries = filteredCountries.filter((Country) => {
          const { name } = Country;
          return name.common.toLowerCase().includes(search.toLowerCase());
        });
      }
    
      if (filter.trim() !== '') {
        filteredCountries = filteredCountries.filter((Country) => {
          const { region } = Country;
          return region.toLowerCase().includes(filter.toLowerCase());
        });
      }
    
      return filteredCountries.map((Country) => {
        const { flags, name, population, region, capital } = Country;
        return (
          <CardCountry background={darkMode ? 'primary' : 'secondary'} key={name.common}>
            <img src={flags.png} alt="" />
            <CardInfo textColor={darkMode ? 'primary' : 'secondary'}>
              <p>{name.common}</p>
              <p><span className="region-label">Population:</span> {population.toLocaleString()}</p>
              <p><span className="region-label">Region:</span> {region}</p>
              <p><span className="region-label">Capital:</span> {capital}</p>
            </CardInfo>
          </CardCountry>
        );
      });
    };
    
    
  return (
    <WrapperCountry>
      {BuildContries()}
    </WrapperCountry>
  )
}

export default Country;