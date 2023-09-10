import styled from "styled-components"
import { theme } from '../Theme';

export const WrapperCountry = styled.div`
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap;

  margin-left: 10%;
  margin-right: 11%;

  gap: 5.7%;

  @media (max-width: 595px) {
        justify-content: center;
  }
`;

export const CardCountry = styled.div<{ background: string }>`
    display: flex;
    flex-direction: column;

    background-color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};

    border: 1px solid ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};
    border-radius: 5px;

    width: 222px;
    height: 300px;

    margin-bottom: 5.7%;

    & img{
        width: 222px;
        height: 150px;
        cursor: pointer;
    }

    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
`;

export const CardInfo = styled.div<{ textcolor: string}>`
    display: flex;
    flex-direction: column;
    
    margin: 10%;

    color: ${(props) => 
        props.textcolor === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};

    & p:first-child{
        font-weight: bold;
        margin-bottom: 5%;
    }

    & p:not(:first-child) {
        font-size: 10pt;
    }

    .region-label{
        font-weight: 600;
    }
`