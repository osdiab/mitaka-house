import * as React from "react";
import styled from "src/presentation/theme/styled-components";
import { H3 } from "src/presentation/utility/Heading";
import { PageSection } from "src/presentation/utility/mixins/PageSection";

const HeaderElem = styled.header`
  ${PageSection} display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  border: 0;
`;

const Logo = styled.span`
  max-width: 140px;
  min-width: 100px;
  flex: 1;
  align-self: stretch;

  background-image: url(/assets/images/logo/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  margin-right: 10px;
  @media (min-width: ${props => props.theme.mediaQueries.sizes.small}) {
    margin-right: 20px;
  }
`;

const TextSection = styled.section`
  display: flex;
  flex-direction: column;
`;
const TextLogo = styled.img`
  flex-basis: 5rem;
  flex: 1;
  max-width: 100%;
`;
const Subheader = styled(H3)`
  color: ${props => props.theme.palette.interactive};
  display: block;
`;

export const Header: React.StatelessComponent<{}> = () => (
  <HeaderElem>
    <Logo />
    <TextSection>
      <TextLogo src="/assets/images/logo/text-logo.svg" />
      <Subheader>三鷹ハウス</Subheader>
    </TextSection>
  </HeaderElem>
);
