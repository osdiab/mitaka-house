import color from "color";
import * as React from "react";

import { GlobalStyle } from "src/presentation/theme/GlobalStyle";
import styled from "src/presentation/theme/styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

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
