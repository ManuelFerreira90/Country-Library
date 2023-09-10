import { Button, FilterWrapper, InputWrapper, SearchInput, SearchWrapper } from "./Search.style"
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import useAppContext from '../../hook/useAppContext.js';
import Filter from "./Filter.js";
import { StyleSheetManager } from "styled-components";

function Search() {

    const {
        darkMode,
        search,
        setSearch,
        ativeFilter,
        setAtiveFilter,
        setFilter
      } = useAppContext();

    const handleText = (e: string) => {
        setSearch(e);
        setFilter('');
    }

    const handleFilter = () => {
      setAtiveFilter(!ativeFilter);
    }

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <SearchWrapper>
          <InputWrapper background={darkMode ? 'primary' : 'secondary'}>
              <BiSearch className='SearchBtn'/> 
              <SearchInput 
                  background={darkMode ? 'primary' : 'secondary'} 
                  type="text" 
                  value={search} 
                  placeholder="Search for a country..."
                  onChange={(e)=>handleText(e.target.value)}
                  required
                  />
          </InputWrapper>
          <FilterWrapper background={darkMode ? 'primary' : 'secondary'}>
            <p>Filter by region</p>
            <Button onClick={()=>{handleFilter()}} background={darkMode ? 'primary' : 'secondary'}>
              {ativeFilter ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Button>
            <Filter />
          </FilterWrapper>
      </SearchWrapper>
    </StyleSheetManager>
  )
}

export default Search