import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { BlogPost } from "src/presentation/pages/BlogPost";
import { HomePage } from "src/presentation/pages/HomePage";
import { NotFound } from "src/presentation/pages/NotFound";
import { DefaultLayoutRoute } from "src/Router/DefaultLayoutRoute";

export const Router: React.StatelessComponent<{}> = () => (
  <BrowserRouter>
    <Switch>
      <DefaultLayoutRoute exact={true} path="/" component={HomePage} />
      <DefaultLayoutRoute path="/lesson/:lessonId" component={BlogPost} />
      <DefaultLayoutRoute component={NotFound} />
    </Switch>
  </BrowserRouter>
);
