import {
  getState as getLoadableState,
  loadComponents
} from "loadable-components";
import * as React from "react";
import { hydrate, render } from "react-dom";

import { App } from "src/App";
// import registerServiceWorker from "./registerServiceWorker";

async function startApp() {
  const rootElement = document.getElementById("reactRoot") as HTMLElement;

  (window as any).snapSaveState = () => getLoadableState();
  if (rootElement.hasChildNodes()) {
    await loadComponents();
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
  // registerServiceWorker();
}

startApp();
