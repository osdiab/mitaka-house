import * as React from "react";

import styled from "src/presentation/theme/styled-components";
import { Link, LinkDestination } from "src/presentation/utility/Link";
import { PageSection } from "../mixins/PageSection";

export interface INavBarEntry {
  displayText: string;
  link: LinkDestination;
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
  flex-wrap: wrap;
  line-height: 2;

  @media (max-width: 576px) {
    justify-content: center;
  }

  > li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavBar: React.StatelessComponent<INavBarProps> = ({ entries }) => {
  return (
    <NavElem>
      <NavList>
        {entries.map(({ displayText, link }, index) => (
          <li>
            <Link key={index} to={link}>
              {displayText}
            </Link>
          </li>
        ))}
      </NavList>
    </NavElem>
  );
};
