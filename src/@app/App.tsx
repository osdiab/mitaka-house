import * as React from "react";

import { theme } from "@app/presentation/theme";
import { ThemeProvider } from "@app/presentation/theme/styled-components";
import { Router } from "@app/Router";

export class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    );
  }
}
