import styled, { createGlobalStyle } from "styled-components";

export const GlobalContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
`;

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
    --color-primary: red;
}
`;
