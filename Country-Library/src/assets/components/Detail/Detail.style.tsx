import styled from "styled-components"
import { theme } from '../Theme';

export const DetailWrapper = styled.div<{ background: String }>`
    background: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    height: 57px;
    width: 140px;

    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    cursor: pointer;

    text-decoration: none;

    & button{
        display: flex;
        align-items: center;
        background: transparent;
        border: none;
        cursor: pointer;

        color: ${(props) => 
            props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};

        font-size: 14pt;
    }

    & p{
        color: ${(props) => 
            props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};
    }

    .Btn{
        background: transparent;
        font-size: 16pt;
        color: ${(props) => 
            props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};
    }

`