import React from 'react';
import Detail from '../assets/components/Detail/Detail';
import { Wrapper } from '../assets/components/App.style';
import useAppContext from '../assets/hook/useAppContext';
import DetailCountry from '../assets/components/CountryDetail/DetailCountry';

function CountryDetail() {

    const {
        darkMode
    } = useAppContext();

    return (
        <Wrapper background={darkMode ? 'primary' : 'secondary'}>
            <Detail />
            <DetailCountry />
        </Wrapper>
    );
}

export default CountryDetail;