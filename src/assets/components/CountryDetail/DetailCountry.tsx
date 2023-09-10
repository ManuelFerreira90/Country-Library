import { useEffect, useState } from "react";
import useAppContext from "../../hook/useAppContext.js";
import fetchCountry from "../../api/fetchCountry.js";
import { CountryComponets, NativeName, Money } from "../../types/CountryComponets.js";
import { Link, useParams } from "react-router-dom";
import { DetailCountryInfo, DetailCountryWrapper, InfoDescription, InfoWrapper, BorderInfo } from "./DetailCountry.style.js";
import { StyleSheetManager } from "styled-components";


function DetailCountry() {

  const {
    darkMode
  } = useAppContext();

  const { code } = useParams();
  const [country, setCountry] = useState<CountryComponets[]>([]);
  const [borderElements, setBorderElements] = useState<JSX.Element[] | null>(null);
  const [bordersCountry, setBordersCoutry] = useState<String[]>([])

  useEffect(() => {
    const fetchBorders = async () => {
      const borderCountries = await returnBorders(bordersCountry);
      setBorderElements(borderCountries);
    };

    fetchBorders();
  }, [bordersCountry]);

  useEffect(() => {
    fetchCountry(`alpha/${code}`).then((response: CountryComponets[]) => {
      setCountry(response);
      setBordersCoutry(response[0].borders);
    });
  }, [code]);

  const returnCurrencies = (currencies: { [key: string]: Money; }) => {
    for (const chave in currencies) {
        return currencies[chave].name;
      }
  }

  const formatLanguages = (languages: String[]) => {
    const languageList = Object.values(languages).join(", ");
    return `${languageList}`;
  }

  const returnName = (name: NativeName) => {
    for (const chave in name) {
        return name[chave].common;
      }
  }

  const returnBorders = async (borders: String[]) => {
    const auxBorder: CountryComponets[] = [];
  
    await Promise.all(
      borders.map(async (border) => {
        const response: CountryComponets[] = await fetchCountry(`alpha/${border}`);
        if (response.length > 0) {
          auxBorder.push(response[0]);
        }
      })
    );
  
    const borderElements = auxBorder.map((borde) => {
      const { name, ccn3 } = borde;
      return (
            <Link to={`/Country-Library/Detail/${ccn3}`} key={String(ccn3)}>
              <span className="border-btn">{name.common}</span>
            </Link>
      );
    });

    return borderElements;
  };


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
      tld,
    } = country[0];

    const coin = returnCurrencies(currencies);
    const formattedLanguages = formatLanguages(languages);
    const nameformatted = returnName(name.nativeName);
  
    return (
      
        <DetailCountryWrapper key={String(ccn3)}>
          <img src={flags.png} alt={name.common} />
          <InfoWrapper textcolor={darkMode ? 'primary' : 'secondary'}>
          <p className="TitleInfo">{name.common}</p>
            <InfoDescription>
              <DetailCountryInfo textcolor={darkMode ? 'primary' : 'secondary'}>
                <p className="info"><span className="label">Native Name:</span> {nameformatted}</p>
                <p className="info">
                  <span className="label">Population:</span>{" "}
                  {population.toLocaleString()}
                </p>
                <p className="info">
                  <span className="label">Region:</span> {region}
                </p>
                <p className="info">
                  <span className="label">Sub Region:</span> {subregion}
                </p>
                <p className="info">
                  <span className="label">Capital:</span> {capital}
                </p>
              </DetailCountryInfo>
              <DetailCountryInfo textcolor={darkMode ? 'primary' : 'secondary'}>
                <p></p>
                <p className="info">
                  <span className="label">Top Level Domain:</span> {tld}
                </p>
                <p className="info">
                  <span className="label">Currencies:</span> {coin}
                </p>
                <p className="info">
                  <span className="label">Languages:</span> {formattedLanguages}
                </p>
              </DetailCountryInfo>
            </InfoDescription>
            <BorderInfo textcolor={darkMode ? 'primary' : 'secondary'}>
              {borderElements && borderElements.length > 1 && (
                <p className="boder-Contry">Border Countries: </p>
              )}
              <div className="wrapper">
                {borderElements}
              </div>
            </BorderInfo>
          </InfoWrapper>
        </DetailCountryWrapper>
      
    );
  };
  

  return( 
    <StyleSheetManager shouldForwardProp={() => true}>
      {country.length > 0 ? DetailCou() : ''}
    </StyleSheetManager>
  );
}
export default DetailCountry;
