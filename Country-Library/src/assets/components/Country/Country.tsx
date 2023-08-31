import { useEffect, useState } from 'react';
import fetchCountry from '../../api/fetchCountry.js';
import { CountryComponets } from './../../types/CountryComponets';
import { CardCountry, WrapperCountry } from './Country.style';
import useAppContext from '../../hook/useAppContext.js';

function Country() {

    const {
      darkMode,
      setDarkMode
    } = useAppContext();

    const [countries, setCountries] = useState<CountryComponets[]>([]);

    useEffect(() => {
      fetchCountry('all').then((response: CountryComponets[]) => {
        setCountries(response);
      });
    }, []);

    // console.log(countries);
    // if (countries.length > 0) {
    //   let { name, population, region, capital, flags } = countries[0];
    //   console.log(flags.png);
    // }

    const BuildContries = () => {
      return countries.map((Country) => {
        const { flags } = Country
        return (
          <CardCountry background={darkMode ? 'primary' : 'secondary'}>
            <img src={flags.png} alt="" />
          </CardCountry>
        )
      })
  }
  return (
    <WrapperCountry>
      {BuildContries()}
    </WrapperCountry>
  )
}

export default Country;