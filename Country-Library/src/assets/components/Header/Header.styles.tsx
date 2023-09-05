import styled from "styled-components"
import { theme } from '../Theme';

export const HeaderStyled = styled.header<{ background: string }>`
    background-color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};
    height: 80px;
    width: 100%;

    position: fixed;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    color: black;
    font-weight: 400;

    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);

    @media (max-width: 595px) {
        gap: 2px;
        padding-right: 2px;
        padding-left: 2px;
        justify-content: space-evenly;
    }
`;

export const ButtonStyled = styled.button<{ background: string }>`
    background-color: transparent;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};

    svg {
        margin-right: 10px;
    }
    @media (max-width: 595px) {
        padding: 0;
        svg {
            margin-right: 5px;
        }
    }   
`;

export const PStyled = styled.p<{ background: string }>`
    color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};
    font-size: 24px;
    font-weight: bold;
`