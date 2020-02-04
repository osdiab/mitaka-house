import * as React from "react";
import { hydrate, render } from "react-dom";

import { App } from "@app/App";
// import registerServiceWorker from "./registerServiceWorker";

async function startApp() {
  const rootElement = document.getElementById("reactRoot") as HTMLElement;

  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
  // registerServiceWorker();
}

startApp();
