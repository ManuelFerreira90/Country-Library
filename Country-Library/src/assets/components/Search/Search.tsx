import { FilterWrapper, InputWrapper, SearchInput, SearchWrapper } from "./Search.style"
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import useAppContext from '../../hook/useAppContext.js';
import Filter from "./Filter.js";

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
          <button onClick={()=>{handleFilter()}}>
            {ativeFilter ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          <Filter />
        </FilterWrapper>
    </SearchWrapper>
  )
}

export default Search