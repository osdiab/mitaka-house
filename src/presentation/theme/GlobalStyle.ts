import { createGlobalStyle } from "src/presentation/theme/styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');
  * {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.text.fontFamily},
      ${props => props.theme.text.fontFallback};
  }

  html, body, #reactRoot {
    min-height: 100vh;
  }
`;
