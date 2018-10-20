import * as React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.StatelessComponent<{}> = () => (
  <main>
    <h1>Not Found</h1>
    <Link to="/">Back</Link>
  </main>
);
