import { useEffect, useState } from 'react';
import useAppContext from '../../hook/useAppContext.js';
import fetchCountry from '../../api/fetchCountry.js';
import { CountryComponets } from './../../types/CountryComponets';
import { BiArrowBack } from 'react-icons/bi';
import { SearchWrapper } from '../Search/Search.style.js';
import { DetailWrapper } from './Detail.style';
import { Link } from 'react-router-dom';

function Detail() {
    
    const {
        darkMode,
      } = useAppContext();

  return (
    <SearchWrapper>
        <Link to='/Country-Library/'>
            <DetailWrapper background={darkMode ? 'primary' : 'secondary'}>
                <BiArrowBack className='Btn'/>
                <p>Back</p>
            </DetailWrapper>
        </Link>
    </SearchWrapper>
  )
}

export default Detail