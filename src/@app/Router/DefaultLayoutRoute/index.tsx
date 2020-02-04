import * as React from "react";
import { Route, RouteProps } from "react-router";

import { DefaultLayout } from "@app/presentation/pages/DefaultLayout";

function createRender(
  Component: RouteProps["component"]
): RouteProps["render"] {
  return matchProps => (
    <DefaultLayout>{Component && <Component {...matchProps} />}</DefaultLayout>
  );
}
export const DefaultLayoutRoute: React.StatelessComponent<RouteProps> = ({
  component,
  ...rest
}) => {
  return <Route {...rest} render={createRender(component)} />;
};
