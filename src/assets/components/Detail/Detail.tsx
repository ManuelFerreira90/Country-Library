import useAppContext from '../../hook/useAppContext.js';
import { BiArrowBack } from 'react-icons/bi';
import { SearchWrapper } from '../Search/Search.style.js';
import { DetailWrapper } from './Detail.style';
import { Link } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

function Detail() {
    
    const {
        darkMode,
      } = useAppContext();

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
        <SearchWrapper>
            <Link to='/Country-Library/'>
                <DetailWrapper background={darkMode ? 'primary' : 'secondary'}>
                    <BiArrowBack className='Btn'/>
                    <p>Back</p>
                </DetailWrapper>
            </Link>
        </SearchWrapper>
    </StyleSheetManager>
  )
}

export default Detail