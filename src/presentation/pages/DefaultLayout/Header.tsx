import * as React from "react";
import styled from "src/presentation/theme/styled-components";
import { H1 } from "src/presentation/utility/Heading";
import { PageSection } from "src/presentation/utility/mixins/PageSection";

const HeaderElem = styled.header`
  ${PageSection} display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  border: 0;
`;
const Avatar = styled.span`
  max-width: 140px;
  min-height: 140px;
  flex: 1;
  align-self: stretch;

  background-image: url(/assets/images/avatar.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  margin-right: 20px;
  border-radius: 2px;
`;
const BannerTitle = styled(H1)`
  margin: 0;
  flex: 1;
`;
const HighlightName = styled.span`
  color: ${props => props.theme.palette.primary};
  display: inline-block;
`;

export const Header: React.StatelessComponent<{}> = () => (
  <HeaderElem>
    <Avatar />
    <BannerTitle>
      I am <HighlightName>Omar Diab.</HighlightName>
    </BannerTitle>
  </HeaderElem>
);
