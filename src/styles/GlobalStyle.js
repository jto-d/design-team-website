import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";
import variables from "./variables"

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: var(--font-proximanova);
    background-color: var(--background-color);

    h1 {
        font-family: var(--font-montserrat);
    }
}

`

export default GlobalStyle;