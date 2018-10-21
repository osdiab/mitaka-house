import * as color from "color";
import * as React from "react";

import { GlobalStyle } from "src/presentation/theme/GlobalStyle";
import styled from "src/presentation/theme/styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    ${props =>
      color(props.theme.palette.background)
        .desaturate(0.4)
        .lighten(0.6)
        .string()},
    ${props => props.theme.palette.background}
  );

  font-size: ${props => props.theme.text.size.paragraph};
`;

export const DefaultLayout: React.StatelessComponent<{}> = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </PageContainer>
  );
};
