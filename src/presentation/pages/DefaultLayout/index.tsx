import * as React from "react";
import { RouteComponentProps, RouteProps } from "react-router";

import { GlobalStyle } from "src/presentation/theme/GlobalStyle";
import styled from "src/presentation/theme/styled-components";
import { Header } from "./Header";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to top, midnightblue, darkslateblue);
`;

interface IDefaultLayoutProps {
  Component: RouteProps["component"];
  matchProps: RouteComponentProps;
}
export const DefaultLayout: React.StatelessComponent<IDefaultLayoutProps> = ({
  Component,
  matchProps
}) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <Header />
      {Component && <Component {...matchProps} />}
    </PageContainer>
  );
};
