import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: var(--font-montserrat);

}

`

export default GlobalStyle;