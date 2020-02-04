import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { BlogPost } from "@app/presentation/pages/BlogPost";
import { HomePage } from "@app/presentation/pages/HomePage";
import { NotFound } from "@app/presentation/pages/NotFound";
import { DefaultLayoutRoute } from "@app/Router/DefaultLayoutRoute";

export const Router: React.StatelessComponent<{}> = () => (
  <BrowserRouter>
    <Switch>
      <DefaultLayoutRoute exact={true} path="/" component={HomePage} />
      <DefaultLayoutRoute path="/lesson/:lessonId" component={BlogPost} />
      <DefaultLayoutRoute component={NotFound} />
    </Switch>
  </BrowserRouter>
);
