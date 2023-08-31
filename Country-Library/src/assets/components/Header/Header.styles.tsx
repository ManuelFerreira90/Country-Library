import styled from "styled-components"
import { theme } from '../Theme';

export const HeaderStyled = styled.header<{ background: string }>`
    background-color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroundLight : theme.colors.backgroundDark};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    color: black;
    font-weight: 400;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
`;

export const PStyled = styled.p<{ background: string }>`
    color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};
    font-size: 24px;
    font-weight: bold;
`