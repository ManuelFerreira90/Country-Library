import { BsMoon } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { HeaderStyled, ButtonStyled, PStyled } from './Header.styles';
import useAppContext from '../../hook/useAppContext';
import { StyleSheetManager } from 'styled-components';

function Header() {
    const {
        darkMode,
        setDarkMode
    } = useAppContext();
    
    return (
        <StyleSheetManager shouldForwardProp={() => true}>
            <HeaderStyled background={darkMode ? 'primary' : 'secondary'}>
                <PStyled background={darkMode ? 'primary' : 'secondary'}>
                    Where in the World?
                </PStyled>
                <div>
                    <ButtonStyled background={darkMode ? 'primary' : 'secondary'} onClick={()=>setDarkMode(!darkMode)}>
                        {darkMode ? <BsMoon /> : <BsFillMoonFill />}
                        <span>Dark Mode</span>
                    </ButtonStyled>
                </div>
            </HeaderStyled>
        </StyleSheetManager>
    );
}

export default Header;