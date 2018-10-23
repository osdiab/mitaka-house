import * as React from "react";

import styled from "src/presentation/theme/styled-components";
import {
  Button,
  ButtonSize,
  ButtonTargetKind
} from "src/presentation/utility/Button";
import { H2, H3, H4 } from "src/presentation/utility/Heading";
import {
  INavBarProps,
  NavBar,
  NavEntryKind
} from "src/presentation/utility/layout/NavBar";
import { PageBody } from "src/presentation/utility/layout/PageBody";
import { Link } from "src/presentation/utility/Link";
import {
  PageSection as PageSectionMixin,
  PageSectionContentArea,
  PageSectionPadding
} from "src/presentation/utility/mixins/PageSection";
import { Emphasis as EmphasisMixin } from "src/presentation/utility/mixins/text/Emphasis";
import { Paragraph } from "src/presentation/utility/Paragraph";

const pageEntries: INavBarProps["entries"] = [
  {
    displayText: "The Neighborhood",
    to: "#neighborhood-description",
    kind: NavEntryKind.LINK
  },
  {
    displayText: "The Rooms",
    to: "#room-description",
    kind: NavEntryKind.LINK
  },
  {
    displayText: "The Amenities",
    to: "#amenities-description",
    kind: NavEntryKind.LINK
  },
  {
    displayText: "Rent Today",
    to: "#contact",
    kind: NavEntryKind.BUTTON
  }
];

const PageSectionTitle = styled(H2)`
  color: ${props => props.theme.palette.secondary};
`;
const SectionSubtitle = styled(H3)`
  color: ${props => props.theme.palette.primary};
`;
const Emphasis = styled.span`
  ${EmphasisMixin};
`;

const BannerSection = styled.section`
  ${PageSectionPadding};

  position: relative;
  margin-bottom: 1.4rem;
  background-image: url("/assets/images/neighborhoods/inokashira.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 60px;
  padding-bottom: 60px;

  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(256, 256, 256, 0.6);
    z-index: 0;
  }

  > * {
    ${PageSectionContentArea};
    position: relative;
    z-index: 1;
  }
`;

const RentCallToAction = styled.section`
  ${PageSectionMixin};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${props => props.theme.mediaQueries.sizes.small}) {
    align-items: flex-start;
    text-align: left;
  }
`;

const BannerHeader = styled(H2)`
  ${EmphasisMixin};
`;

const BannerSubheader = styled(H3)`
  font-weight: 400;
`;

const PriceHighlight = styled(H3)`
  color: ${props => props.theme.palette.secondary};
  font-weight: 700;
`;

export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <NavBar entries={pageEntries} />
        <BannerSection>
          <BannerHeader>Welcome to your new home in Tokyo.</BannerHeader>
          <BannerSubheader>
            Peace. Authenticity. Minutes from hot neighborhoods.{" "}
          </BannerSubheader>
          <PriceHighlight>45,000円/mo</PriceHighlight>
        </BannerSection>

        <RentCallToAction>
          <H4>
            To get the process started, <Link to="#contact">contact us</Link>{" "}
            about availability today.
          </H4>
          <Button
            size={ButtonSize.LARGE}
            onClick={{ kind: ButtonTargetKind.LINK, action: "#contact" }}
          >
            Get In Touch
          </Button>
        </RentCallToAction>

        <PageBody>
          <PageSectionTitle id="neighborhood-description">
            The Neighborhood
          </PageSectionTitle>

          <SectionSubtitle>
            Mitaka House is just minutes from Tokyo's hottest neighborhoods.
          </SectionSubtitle>
          <H3>吉祥寺 Kichijōji</H3>

          <H3>下北沢 Shimokitazawa</H3>

          <H3>渋谷 Shibuya</H3>

          <H3>新宿 Shinjuku</H3>

          <H3>中野 Mitaka</H3>

          <PageSectionTitle id="room-description">The Rooms</PageSectionTitle>
          <SectionSubtitle>Simple Living</SectionSubtitle>

          <SectionSubtitle>
            Affordable rent, starting at 45,000円
          </SectionSubtitle>

          <PageSectionTitle id="amenities-description">
            We're at your service.
          </PageSectionTitle>
          <SectionSubtitle>
            Moving to Japan can be intimidating.
          </SectionSubtitle>

          <PageSectionTitle id="contact">Get in touch</PageSectionTitle>
          <H3>
            Inquire about your new home in Tokyo <Emphasis>today</Emphasis>
          </H3>
          <Paragraph>
            Shoot us an email at{" "}
            <Link to="mailto:hi@mitakahome.com">hi@mitakahome.com</Link>, and
            we'll get everything squared off. Welcome to your new home in Tokyo!
          </Paragraph>
        </PageBody>
      </>
    );
  }
}
