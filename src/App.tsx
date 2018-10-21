import * as React from "react";

import { theme } from "src/presentation/theme";
import { Router } from "src/Router";
import { ThemeProvider } from "./presentation/theme/styled-components";

export class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    );
  }
}
