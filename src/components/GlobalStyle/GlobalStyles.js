import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {

        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

  
`;
export const AppStyles = createGlobalStyle`
html, body, #root{height:100%};
body{overflow:hidden};
`;
