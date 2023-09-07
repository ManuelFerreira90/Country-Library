import React from "react";
import { useEffect, useState } from "react";
import useAppContext from "../../hook/useAppContext.js";
import fetchCountry from "../../api/fetchCountry.js";
import { CountryComponets } from "../../types/CountryComponets.js";
import { useParams } from "react-router-dom";

function DetailCountry() {
  const { code } = useParams();
  const [country, setCountry] = useState<CountryComponets[]>([]);

  useEffect(() => {
    fetchCountry(`alpha/${code}`).then((response: CountryComponets[]) => {
      setCountry(response);
    });
  }, []);

  const returnCurrencies = (currencies: String[]) => {
    for (const chave in currencies) {
        return currencies[chave].name;
      }
  }

  const formatLanguages = (languages) => {
    const languageList = Object.values(languages).join(", ");
    return `${languageList}`;
  }

  const returnName = (name: String[]) => {
    for (const chave in name) {
        return name[chave].common;
      }
  }

  const DetailCou = () => {
    const {
      flags,
      name,
      population,
      region,
      capital,
      ccn3,
      subregion,
      languages,
      currencies,
      tld
    } = country[0];

    const coin = returnCurrencies(currencies);
    const formattedLanguages = formatLanguages(languages);
    const nameformatted = returnName(name.nativeName);

    console.log(name);
    return (
      <div key={ccn3}>
        <img src={flags.png} alt={name.common} />
        <div>
          <p>Native Name: {nameformatted}</p>
          <p>
            <span className="region-label">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="region-label">Region:</span> {region}
          </p>
          <p>
            <span className="region-label">Sub Region:</span> {subregion}
          </p>
          <p>
            <span className="region-label">Capital:</span> {capital}
          </p>
          <p>
            <span className="region-label">Top Level Domain:</span> {tld}
          </p>
          <p>
            <span className="region-label">Currencies:</span> {coin}
          </p>
          <p>
            <span className="region-label">Languages:</span> {formattedLanguages}
          </p>
        </div>
      </div>
    );
  };

  return <div>{country.length > 0 ? DetailCou() : ''}</div>;
}
export default DetailCountry;
