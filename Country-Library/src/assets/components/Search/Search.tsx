import { InputWrapper, SearchInput, SearchWrapper } from "./Search.style"
import { BiSearch } from 'react-icons/bi';
import useAppContext from '../../hook/useAppContext.js';
import { useState } from "react";

function Search() {

    const {
        darkMode,
        search,
        setSearch
      } = useAppContext();

      const[text, setText] = useState('');

    const handleText = (e) => {
        setText(e);
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if(text != ''){
            setSearch(true);
        }
    }

  return (
    <SearchWrapper onSubmit={handleSearch}>
        <InputWrapper background={darkMode ? 'primary' : 'secondary'}>
            <button className='SearchBtn' type='submit'> 
                <BiSearch/> 
            </button>
            <SearchInput background={darkMode ? 'primary' : 'secondary'} value={search} onChange={(e)=>handleText(e.target.value)}/>
        </InputWrapper>
    </SearchWrapper>
  )
}

export default Search