import Detail from '../assets/components/Detail/Detail';
import { Wrapper } from '../assets/components/App.style';
import useAppContext from '../assets/hook/useAppContext';
import DetailCountry from '../assets/components/CountryDetail/DetailCountry';
import { StyleSheetManager } from 'styled-components';


function CountryDetail() {

    const {
        darkMode
    } = useAppContext();

    return (
        <StyleSheetManager shouldForwardProp={() => true}>
            <Wrapper background={darkMode ? 'primary' : 'secondary'}>
                <Detail />
                <DetailCountry />
            </Wrapper>
        </StyleSheetManager>
    );
}

export default CountryDetail;