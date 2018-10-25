// need to ignore import error due to commonjs export format
// @ts-ignore
import isRelativeUrl from "is-relative-url";
import * as React from "react";
import {
  HashLink as RouterLink,
  HashLinkProps as RouterLinkProps
} from "react-router-hash-link";
import * as smoothscroll from "smoothscroll-polyfill";

import { highlightColor } from "src/presentation/theme/palette";
import styled from "src/presentation/theme/styled-components";
import { logger } from "src/utility/logger";

smoothscroll.polyfill();

export enum LinkAppearance {
  HYPERLINK = "HYPERLINK",
  UNSTYLED = "UNSTYLED"
}

export interface ILinkProps {
  to: string;
  appearance?: LinkAppearance;
  forceExternal?: boolean;
}

const HyperlinkA = styled.a`
  color: ${props => props.theme.palette.interactive};
  font-weight: 700;
  transition: color 0.1s ease-in;

  :hover {
    color: ${props => highlightColor(props.theme.palette.interactive)}
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

const AbsoluteLink: React.StatelessComponent<ILinkProps> = ({
  to,
  appearance,
  children
}) => {
  const props = { href: to, children };
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
};

const RelativeLink: React.StatelessComponent<ILinkProps> = ({
  to,
  appearance,
  children
}) => {
  const linkProps: RouterLinkProps = {
    children,
    smooth: true,
    to
  };
  switch (appearance) {
    default:
      logInvalidAppearance(appearance);
    // fallthrough
    case undefined: // fallthrough
    case LinkAppearance.HYPERLINK:
      return <HyperlinkRouterLink {...linkProps} />;
    case LinkAppearance.UNSTYLED:
      return <UnstyledRouterLink {...linkProps} />;
  }
};

/**
 * A link to external content.
 */
export const Link: React.StatelessComponent<ILinkProps> = props => {
  return !props.forceExternal && isRelativeUrl(props.to) ? (
    <RelativeLink {...props} />
  ) : (
    <AbsoluteLink {...props} />
  );
};
