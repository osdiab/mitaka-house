import NukaCarousel from "nuka-carousel";
import * as React from "react";

import styled, { css } from "@app/presentation/theme/styled-components";
import {
  Button,
  ButtonSize,
  ButtonTargetKind
} from "@app/presentation/utility/Button";
import { H2, H3, H4 } from "@app/presentation/utility/Heading";
import {
  INavBarProps,
  NavBar,
  NavEntryKind
} from "@app/presentation/utility/layout/NavBar";
import { PageBody } from "@app/presentation/utility/layout/PageBody";
import { Link } from "@app/presentation/utility/Link";
import {
  PageSection as PageSectionMixin,
  PageSectionContentArea,
  PageSectionPadding
} from "@app/presentation/utility/mixins/PageSection";
import { Emphasis as EmphasisMixin } from "@app/presentation/utility/mixins/text/Emphasis";
import { Paragraph } from "@app/presentation/utility/Paragraph";

import kichijojiHarmonica from "@app/assets/images/neighborhoods/kichijoji/harmonica-yokocho.jpg";
import kichijojiBoats from "@app/assets/images/neighborhoods/kichijoji/inokashira-boats.jpg";
import kichijojiSwan from "@app/assets/images/neighborhoods/kichijoji/inokashira-swan.jpg";
import kichijojiNakamichi from "@app/assets/images/neighborhoods/kichijoji/nakamichi.jpg";
import kichijojiArcade from "@app/assets/images/neighborhoods/kichijoji/shopping-arcade.jpg";

import mitakaFarm from "@app/assets/images/neighborhoods/mitaka/farm.jpg";
import mitakaMaruike from "@app/assets/images/neighborhoods/mitaka/maruike-koen.jpg";
import mitakaPersimmons from "@app/assets/images/neighborhoods/mitaka/persimmons.jpg";
import mitakaVeggieVending from "@app/assets/images/neighborhoods/mitaka/veggie-vending.jpg";
import mitakaYumoriNoSato from "@app/assets/images/neighborhoods/mitaka/yumori-no-sato.jpg";

import shimokitazawaCityCountryCity from "@app/assets/images/neighborhoods/shimokitazawa/citycountrycity.jpg";
import shimokitazawaIntersection from "@app/assets/images/neighborhoods/shimokitazawa/intersection.jpg";
import shimokitazawaMusicBar from "@app/assets/images/neighborhoods/shimokitazawa/music-bar-rpm.jpg";

import shibuyaCrossing from "@app/assets/images/neighborhoods/shibuya/crossing.jpg";

import shinjukuGate from "@app/assets/images/neighborhoods/shinjuku/gate.jpg";

import roomBathroom from "@app/assets/images/room/bathroom.jpg";
import roomBedroom from "@app/assets/images/room/bedroom.jpg";
import roomCabinet from "@app/assets/images/room/cabinet.jpg";
import roomKitchen from "@app/assets/images/room/kitchen.jpg";

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

const BannerSection = styled.section`
  ${PageSectionPadding};

  position: relative;
  margin-bottom: 1.4rem;
  background-image: url(${kichijojiBoats});
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
    background-color: rgba(256, 256, 256, 0.7);
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

const Emphasis = styled.span`
  ${EmphasisMixin};
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

const PlaceInfo = styled(Paragraph)`
  font-style: italic;
  color: #666666;
`;

const PlaceStyles = css`
  display: block;
  width: 550px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 1.2rem;
`;
const Carousel = styled(NukaCarousel)`
  ${PlaceStyles};
`;
const PlaceImg = styled.img`
  ${PlaceStyles};
`;

const renderBottomCenterControls = () => <></>;
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <NavBar entries={pageEntries} />
        <BannerSection>
          <BannerHeader>Welcome to your new home in Tokyo.</BannerHeader>
          <BannerSubheader>
            Peaceful, authentic life. Just minutes from the hottest
            neighborhoods.
          </BannerSubheader>
          <PriceHighlight>45,000円 month-to-month, no fees</PriceHighlight>
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

          <H3>Mitaka House is near many of Tokyo's hottest neighborhoods.</H3>

          <SectionSubtitle>吉祥寺 Kichijōji</SectionSubtitle>
          <Carousel
            heightMode="max"
            autoplay={true}
            wrapAround={true}
            renderBottomCenterControls={renderBottomCenterControls}
          >
            <img
              src={kichijojiSwan}
              alt="A swan boat in Inokashira park in the cherry blossom season"
            />
            <img
              src={kichijojiHarmonica}
              alt="Harmonica Yokocho, a tiny Kichijoji street full of delicious food at izakaya and yakitori restaurants"
            />
            <img
              src={kichijojiNakamichi}
              alt="Nakamichi, a fashionable Kichijoji street with nice cafes, clothing stores, artisinal crafts and a cat cafe."
            />
            <img
              src={kichijojiArcade}
              alt="The shopping arcade of Kichijoji, a bustling outdoor mall packed with great food and shopping."
            />
          </Carousel>
          <PlaceInfo>
            20 minutes from Mitaka House by bus (every 5-7 minutes), or 45
            minutes by foot.
          </PlaceInfo>
          <Paragraph>
            Rated{" "}
            <Link to="https://resources.realestate.co.jp/living/best-places-to-live-in-tokyo-2017-survey/">
              Eastern Japan's #1 most livable city
            </Link>
            , Kichijōji is home to some of Tokyo's best cafés, restaurants,
            designer clothing and thrift stores, as well as{" "}
            <Emphasis>Inokashira Park</Emphasis>, known for its cherry blossoms
            (sakura), swan boats, and the{" "}
            <Link to="http://www.ghibli-museum.jp/en/">
              Studio Ghibli Museum
            </Link>{" "}
            (we'll help you get the ¥1,000 tickets the way locals do it!).
          </Paragraph>

          <SectionSubtitle>下北沢 Shimokitazawa</SectionSubtitle>

          <Carousel
            heightMode="max"
            autoplay={true}
            wrapAround={true}
            renderBottomCenterControls={renderBottomCenterControls}
          >
            <img
              src={shimokitazawaIntersection}
              alt="Shimokitazawa, a Bohemian neighborhood packed with hipsters, cafes, bars, music, and thrift shops."
            />
            <img
              src={shimokitazawaMusicBar}
              alt="Music Bar RPM, a small bar and music club in Shimokitazawa, with great live music including jazz."
            />
            <img
              src={shimokitazawaCityCountryCity}
              alt="City Country City, a combination cafe and record store packed with vinyl and relaxing vibes."
            />
          </Carousel>
          <PlaceInfo>
            10 minutes from Kichijōji by Keio Inokashira Line (京王井の頭線).
          </PlaceInfo>
          <Paragraph>
            Explore the nook and crannies of Shimokitazawa, a neighborhood
            dedicated to everything artistic and quirky. Shop at cheap or
            high-end vintage clothes shops, venture underground to listen to
            Jazz in a tiny bar with a huge sound at{" "}
            <Link to="http://www.rpmshimokita.com/">Music Bar RPM</Link>, sip on
            chai while flipping through vinyl records at{" "}
            <Link to="http://city-country-city.com/">City Country City</Link>,
            and eat vegan, organic food from a hammock or kotatsu (炬燵) at{" "}
            <Link to="http://cafestayhappy.com/">Café Stay Happy</Link>.
          </Paragraph>

          <SectionSubtitle>渋谷 Shibuya</SectionSubtitle>
          <PlaceImg
            src={shibuyaCrossing}
            alt="Shibuya Crossing, the busiest intersection in the world, in the rain with iconic transparent Japanese umbrellas."
          />
          <PlaceInfo>
            15 minutes from Kichijōji by Keio Inokashira Line (京王井の頭線).
          </PlaceInfo>
          <Paragraph>
            The beating heart of youth culture, shopping, and entertainment in
            Tokyo, Shibuya has it all. From the Starbucks at Tsutaya, see
            Shibuya Crossing, the busiest intersection in the world. Find some
            cheap, delicious eats (we'll tell you where to go!), shop at nearby
            fashion capital of the world, Harajuku, and then get ready for a
            night on the town (maybe until the trains start running again in the
            morning!).
          </Paragraph>

          <SectionSubtitle>新宿 Shinjuku</SectionSubtitle>
          <PlaceImg
            src={shinjukuGate}
            alt="The main gate of Kabukicho in Shinjuku, a bustling neighborhood full of nightlife."
          />
          <PlaceInfo>
            20 minutes from Kichijōji by JR Chūō Line (JR中央線).
          </PlaceInfo>
          <Paragraph>
            Being the busiest train station on the planet, Shinjuku is not just
            an incredibly lively place at all times of day—it's also a great
            gateway to all of Tokyo and Japan. Shop in Shinjuku by day, dine and
            drink by night, and catch your Shinkansen to Kyoto tomorrow!
          </Paragraph>

          <SectionSubtitle>三鷹 Mitaka</SectionSubtitle>
          <Carousel
            heightMode="max"
            autoplay={true}
            wrapAround={true}
            renderBottomCenterControls={renderBottomCenterControls}
          >
            <img
              src={mitakaMaruike}
              alt="Maruike Koen, a small, quiet park with bridges over a pond and a river in Mitaka."
            />
            <img
              src={mitakaFarm}
              alt="A Tokyo urban farm that sells fresh vegetables from a vending machine."
            />
            <img
              src={mitakaVeggieVending}
              alt="A Tokyo vending machines that sells fresh vegetables from the farm next to it."
            />
            <img
              src={mitakaPersimmons}
              alt="A handful of persimmons sold from a vending machine from a Tokyo urban farm."
            />
            <img
              src={mitakaYumoriNoSato}
              alt="The outdoor pool at a natural onsen in Jindaiji Temple near Mitaka House."
            />
          </Carousel>
          <PlaceInfo>Home, sweet home.</PlaceInfo>
          <Paragraph>
            Mitaka House is in Shinkawa (新川), a quiet neighborhood with small,
            local restaurants, some farms you can buy fresh produce from
            directly, and the lovely Maruike (丸池公園) and Shinkawa parks.
          </Paragraph>
          <Paragraph>
            You can also experience{" "}
            <Link to="http://www.yumorinosato.com/">
              a beautiful, natural onsen (hot spring) at historic Jindaiji
              Temple (深大寺)
            </Link>
            , 15 minutes from Mitaka House by bus.
          </Paragraph>
          <Paragraph>
            Conveniently, 7/11, Lawson, and Family Mart all within 2-4 minute
            walks. Two supermarkets, a pharmacy and the Kyōrin University
            Hospital (杏林大学病院) are within 5 minute walks as well (don't
            worry, you'll almost never hear sirens here!).
          </Paragraph>

          <PageSectionTitle id="room-description">The Rooms</PageSectionTitle>
          <SectionSubtitle>Simple Living</SectionSubtitle>
          <Carousel
            heightMode="max"
            autoplay={true}
            wrapAround={true}
            renderBottomCenterControls={renderBottomCenterControls}
          >
            <img
              src={roomCabinet}
              alt="The traditional Japanese bedroom at Mitaka House, with tatami flooring and storage cabinets."
            />
            <img
              src={roomBedroom}
              alt="The traditional Japanese bedroom at Mitaka House, with a futon to sleep on tatami mats."
            />
            <img
              src={roomKitchen}
              alt="The cozy kitchen in this 1K apartment, with a stove, microwave, refrigerator, rice cooker, and more."
            />
            <img
              src={roomBathroom}
              alt="The bathroom in Mitaka House apartments, containing a Japanese-style bath and toilet in the same room."
            />
          </Carousel>

          <Paragraph>
            Experience authentic Japanese life, sleeping on a comfortable futon
            bed (布団) on tatami mats and enjoying the cozy, quiet atmosphere.
          </Paragraph>
          <Paragraph>
            Apartments at Mitaka House are 6畳 (jō, the size of a tatami mat),{" "}
            <Link to="https://resources.realestate.co.jp/living/1r-1k-1dk-1ldk-apartment-whats-the-difference-and-which-should-i-rent/">
              1K apartments
            </Link>
            . That means there's a separated kitchen and bedroom, and the
            combined bedroom/living room area is about 10m² (107 ft²).
          </Paragraph>
          <Paragraph>
            The apartment does not have a washing machine, but you can walk 10
            minutes and bathe in the public bath (銭湯) while your clothes wash
            in the laundromat next door, or do your laundry while working at a
            cafe near Mitaka Station.
          </Paragraph>

          <SectionSubtitle>Foreign-friendly</SectionSubtitle>
          <Paragraph>
            The landlord is able to speak some English, but if you need any
            help, we've got your back.
          </Paragraph>
          <Paragraph>
            We'll <Emphasis>explain to you in English</Emphasis> how to pay your
            bills, where to wash your clothes, how to get unlimited bus and
            train passes, and anything else you need to have a pleasant time in
            Japan.
          </Paragraph>
          <Paragraph>
            We will also <Emphasis>provide large appliances</Emphasis> you'd
            expect in a western apartment, including a refrigerator for your
            leftovers and air conditioning for hot summer days.
          </Paragraph>

          <SectionSubtitle>
            Affordable, short-term rent, starting at 45,000円/mo
          </SectionSubtitle>
          <Paragraph>
            You know how expensive Tokyo can be, so this should speak for
            itself!
          </Paragraph>
          <Paragraph>
            Worried about all the extra fees that Tokyo landlords pile on you?{" "}
            <Emphasis>We don't charge any fees besides rent</Emphasis>.
            45,000円 per month, or 70,000円 if you're only staying for a single
            month, plus utility bills. That's all!
          </Paragraph>
          <Paragraph>
            We are also happy to accept{" "}
            <Emphasis>month-to-month rentals</Emphasis>, since we understand how
            hard it is to find such arrangements in Japan.
          </Paragraph>
        </PageBody>
      </>
    );
  }
}
