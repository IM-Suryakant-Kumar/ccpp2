import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ebf2fa;
    --secondary: #cae9ff;
    --logo: #3a86ff;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: "Exo 2", sans-serif;
  }
`;
