import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
button {
    cursor: pointer;
    font-family: "Inter";
    border: none;
}
li {
    list-style: none;
}

:root {
    --color-primary: black
}
`;
