import styled from "styled-components"
import { theme } from '../Theme';

export const WrapperCountry = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, 265px);  
  gap: 67px;
  margin-left: 40px;
  margin-right: 55px;
  border: 1px solid black;
`;

export const CardCountry = styled.div<{ background: string }>`
    background-color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.primary : theme.colors.secondary};

    height: 332px;
    border: 1px solid ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.primary : theme.colors.secondary};
    border-radius: 5px;

    & img{
        width: 100%;
        height: 165px;
    }

    box-shadow: 0px 2px 4px ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.primary : theme.colors.secondary};
`;