import styled from "styled-components"
import { theme } from '../Theme';

export const DetailCountryWrapper = styled.div`

    display: flex;
    flex-direction: row;
    gap: 90px;

    padding-top: 5%;
    margin-left: 10%;
    margin-right: 11%;
    padding-bottom: 15%;


    & img {
        height: 300px;
        width: 400px;
    }

`
export const InfoWrapper = styled.div<{ textcolor: String}>`
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding-top: 10px;

    .TitleInfo{
        font-size: 20pt;
        font-weight: bold;
        color: ${(props) => 
            props.textcolor === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};
    }

`

export const InfoDescription = styled.div`
    display: flex;
    flex-direction: row;
    gap: 110px;
`

export const DetailCountryInfo = styled.div<{ textcolor: String}>`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .label{
        font-weight: bold;
        font-size: 10pt;
        color: ${(props) => 
            props.textcolor === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};
        
    }

    .info{
        font-size: 10pt;
        color: ${(props) => 
            props.textcolor === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.colors.input};
    }
`

export const BorderInfo = styled.div<{ textcolor: String}>`
    display: flex;
    flex-direction: row;
    gap: 20px;

    .wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;

        & a{
            text-decoration: none;
        }

    }

    .wrapper .border-btn {
        display: block;
    }

    .boder-Contry{
        font-weight: bold;
        font-size: 10pt;
        color: ${(props) => 
            props.textcolor === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};
    }

    .border-btn{
        font-size: 10pt;
        background-color: ${(props) => 
        props.textcolor === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};
        border-radius: 5px;
        color: ${(props) => 
            props.textcolor === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.fontColor.secondary};
        padding: 5px 20px;
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
        cursor: pointer;
    }
`
