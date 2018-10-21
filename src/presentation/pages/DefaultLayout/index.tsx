import * as React from "react";

import { GlobalStyle } from "src/presentation/theme/GlobalStyle";
import styled from "src/presentation/theme/styled-components";
import { Header } from "./Header";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to top, midnightblue, darkslateblue);

  font-size: ${props => props.theme.text.size.paragraph};
`;

export const DefaultLayout: React.StatelessComponent<{}> = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <Header />
      {children}
    </PageContainer>
  );
};
