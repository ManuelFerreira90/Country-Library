import styled from "styled-components"
import { theme } from '../Theme';

export const SearchWrapper = styled.div`
    
    margin-left: 10%;
    margin-right: 11%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 57px;
`
export const SearchInput = styled.input<{ background: String }>`
    background: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};
    color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.colors.input};

    font-weight: 400;

    border: none;

    outline: none;

`

export const InputWrapper = styled.div<{ background: String }>`
    background: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};

    padding-left: 30px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    gap: 20px;

    .SearchBtn{
        background: transparent;
        font-size: 16pt;
        text-align: center;
        color: ${theme.colors.input};
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    width: 480px;
    height: 57px;

    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
`

export const FilterWrapper = styled.div<{ background: String }>`
    background: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};

    color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.colors.input};

    padding: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & p{
        font-size: 10pt;
    }

    & button{
        display: flex;
        align-items: center;
        color: ${(props) => 
            props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.colors.input};
        background: transparent;
        border: none;
        cursor: pointer;

        font-size: 10pt;
    }

    width: 200px;
    height: 57px;
    border-radius: 5px;

    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);

    position: relative;
`