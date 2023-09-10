import styled from "styled-components"
import { theme } from '../Theme';

export const Filterbox = styled.ul<{ background: String }>`
    
    background: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.backgroudLight : theme.colors.secondary};

    color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.fontColor.primary : theme.colors.input};

    display: flex;
    flex-direction: column;
    gap: 5px;

    height: 160px;
    width: 200px;

    border-radius: 5px;
    padding-top: 13px;
    padding-left: 20px;

    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.05);
`

export const ItemFilter = styled.li`
    list-style: none;
    text-decoration: none;
    text-align: left;

    cursor: pointer;
`
export const FilterPosition = styled.div<{ isvisible: string }>`
  display: ${(props) => (props.isvisible === 'true' ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 0px;
`;
