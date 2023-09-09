import { ItemFilter, Filterbox, FilterPosition } from "./Filter.style";
import useAppContext from '../../hook/useAppContext.js';
import { StyleSheetManager } from 'styled-components';

function Filter() {

    const {
        darkMode,
        ativeFilter,
        setFilter
      } = useAppContext();

    const handleFilterCountry = (num : number) => {
        switch (num) {
            case 1:
                setFilter('Africa');
                break;
            case 2:
                setFilter('America');
                break;
            case 3:
                setFilter('Asia');
                break;
            case 4:
                setFilter('Europe');
                break;
            case 5:
                setFilter('Oceania');
                break;
            default:
                break;
        }
    }

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
        <FilterPosition isvisible={ativeFilter ? 'true' : 'false'}>
            <Filterbox background={darkMode ? 'primary' : 'secondary'}>
                <ItemFilter onClick={()=>{handleFilterCountry(1)}}>
                    Africa
                </ItemFilter>
                <ItemFilter onClick={()=>{handleFilterCountry(2)}}>
                    America
                </ItemFilter>
                <ItemFilter onClick={()=>{handleFilterCountry(3)}}>
                    Asia
                </ItemFilter>
                <ItemFilter onClick={()=>{handleFilterCountry(4)}}>
                    Europe
                </ItemFilter>
                <ItemFilter onClick={()=>{handleFilterCountry(5)}}>
                    Oceania
                </ItemFilter>
            </Filterbox>
        </FilterPosition>
    </StyleSheetManager>
  )
}

export default Filter