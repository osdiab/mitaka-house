import * as React from "react";

import { theme } from "src/presentation/theme";
import { ThemeProvider } from "src/presentation/theme/styled-components";
import { Router } from "src/Router";

export class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    );
  }
}
