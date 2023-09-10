import { useEffect, useState } from 'react';
import fetchCountry from '../../api/fetchCountry.js';
import { CountryComponets } from './../../types/CountryComponets';
import { CardCountry, CardInfo, WrapperCountry } from './Country.style';
import useAppContext from '../../hook/useAppContext.js';
import { Link } from "react-router-dom";
import { StyleSheetManager } from 'styled-components';


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
        const { flags, name, population, region, capital, ccn3 } = Country;
        return (
          <CardCountry background={darkMode ? 'primary' : 'secondary'} key={ String(ccn3) }>
            <Link to={`/Country-Library/Detail/${ ccn3 }`}>
              <img src={flags.png} alt={ name.common } />
            </Link>
            <CardInfo textcolor={darkMode ? 'primary' : 'secondary'}>
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
    <StyleSheetManager shouldForwardProp={() => true}>
      <WrapperCountry>
        {BuildContries()}
      </WrapperCountry>
    </StyleSheetManager>
  )
}

export default Country;