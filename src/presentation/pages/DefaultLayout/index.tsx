import * as color from "color";
import * as React from "react";

import { Footer } from "src/presentation/pages/DefaultLayout/Footer";
import { Header } from "src/presentation/pages/DefaultLayout/Header";
import { GlobalStyle } from "src/presentation/theme/GlobalStyle";
import styled from "src/presentation/theme/styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.palette.background};
  background: linear-gradient(
    to bottom,
    ${props =>
      color(props.theme.palette.background)
        .lighten(0.2)
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
