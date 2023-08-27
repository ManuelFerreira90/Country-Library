import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }
`

export const GlobalFonts = () => (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,600;6..12,800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
);