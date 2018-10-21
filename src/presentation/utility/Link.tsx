import * as React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";

import styled from "src/presentation/theme/styled-components";
import { logger } from "src/utility/logger";
import { highlightColor } from "../theme/palette";

export enum LinkDestinationKind {
  INTERNAL = "INTERNAL",
  EXTERNAL = "EXTERNAL"
}

export enum LinkAppearance {
  HYPERLINK = "HYPERLINK",
  UNSTYLED = "UNSTYLED"
}

export interface ILinkDestination<
  Kind extends LinkDestinationKind,
  Destination extends string = string
> {
  kind: Kind;
  destination: Destination;
}

export type LinkDestination =
  | ILinkDestination<LinkDestinationKind.INTERNAL>
  | ILinkDestination<LinkDestinationKind.EXTERNAL>;

export interface ILinkProps {
  to: LinkDestination;
  appearance?: LinkAppearance;
}

const HyperlinkA = styled.a`
  color: ${props => props.theme.palette.secondary};
  font-weight: 700;
  transition: color 0.1s ease-in;

  :hover {
    color: ${props => highlightColor(props.theme.palette.secondary)}
`;
const UnstyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;
const HyperlinkRouterLink = HyperlinkA.withComponent(RouterLink);
const UnstyledRouterLink = UnstyledA.withComponent(RouterLink);

function logInvalidAppearance(appearance: never) {
  logger.error(
    `Invalid link appearance: '${appearance}'. ` + "Rendering as hyperlink."
  );
}

/**
 * A link to external content.
 */
export const Link: React.StatelessComponent<ILinkProps> = ({
  to,
  appearance,
  children
}) => {
  switch (to.kind) {
    case LinkDestinationKind.INTERNAL: {
      const props: RouterLinkProps = {
        children,
        to: to.destination
      };
      switch (appearance) {
        default:
          logInvalidAppearance(appearance);
        // fallthrough
        case undefined: // fallthrough
        case LinkAppearance.HYPERLINK:
          return <HyperlinkRouterLink {...props} />;
        case LinkAppearance.UNSTYLED:
          return <UnstyledRouterLink {...props} />;
      }
    }
    case LinkDestinationKind.EXTERNAL: {
      const props = { href: to.destination, children };
      switch (appearance) {
        default:
          logInvalidAppearance(appearance);
        // fallthrough
        case undefined: // fallthrough
        case LinkAppearance.HYPERLINK:
          return <HyperlinkA {...props} />;
        case LinkAppearance.UNSTYLED:
          return <UnstyledA {...props} />;
      }
    }
    default: {
      const errorMessage = `Invalid link destination kind: '${
        (to as ILinkProps["to"]).kind
      }'. Not rendering.`;
      logger.error(errorMessage);
      return <React.Fragment />;
    }
  }
};
