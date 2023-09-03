import { InputWrapper, SearchInput, SearchWrapper } from "./Search.style"
import { BiSearch } from 'react-icons/bi';
import useAppContext from '../../hook/useAppContext.js';
import { useState } from "react";
import { FormEvent } from 'react';

function Search() {

    const {
        darkMode,
        search,
        setSearch
      } = useAppContext();

    const handleText = (e: string) => {
        setSearch(e);
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
    </SearchWrapper>
  )
}

export default Search