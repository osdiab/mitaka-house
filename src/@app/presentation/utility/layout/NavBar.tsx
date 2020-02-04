import * as React from "react";

import styled from "@app/presentation/theme/styled-components";
import { Button, ButtonTargetKind } from "@app/presentation/utility/Button";
import { Link } from "@app/presentation/utility/Link";
import { PageSection } from "@app/presentation/utility/mixins/PageSection";

export enum NavEntryKind {
  BUTTON = "BUTTON",
  LINK = "LINK"
}

export interface INavBarEntry {
  displayText: string;
  to: string;
  kind: NavEntryKind;
}
export interface INavBarProps {
  entries: INavBarEntry[];
}

const NavElem = styled.nav`
  ${PageSection};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    justify-content: center;
  }

  > li {
    margin-bottom: 1.2rem;
  }

  > li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavBar: React.StatelessComponent<INavBarProps> = ({ entries }) => {
  return (
    <NavElem>
      <NavList>
        {entries.map(({ displayText, to, kind }, index) => (
          <li key={index}>
            {kind === NavEntryKind.LINK ? (
              <Link to={to}>{displayText}</Link>
            ) : (
              <Button onClick={{ kind: ButtonTargetKind.LINK, action: to }}>
                {displayText}
              </Button>
            )}
          </li>
        ))}
      </NavList>
    </NavElem>
  );
};
