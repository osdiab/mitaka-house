import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

import { Id } from "@app/models/shared/Id";

export interface IBlogPostRouteParams {
  lessonId: Id;
}
export type BlogPostProps = RouteComponentProps<IBlogPostRouteParams>;
export class BlogPost extends React.Component<BlogPostProps> {
  public render() {
    return (
      <div>
        <h1>BlogPost {this.props.match.params.lessonId}</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
