import styled from "styled-components";
import { theme } from '../components/Theme';

export const Wrapper = styled.div<{ background: string }>`
    background-color: ${(props) => 
        props.background === 'primary' ? ({ theme }) => theme.colors.primary : theme.colors.secondary};
`