import * as color from "color";
import * as React from "react";

import styled from "src/presentation/theme/styled-components";
import { H2, H3 } from "src/presentation/utility/Heading";
import { Link } from "src/presentation/utility/Link";
import { PageSection } from "src/presentation/utility/mixins/PageSection";
import { Emphasis as EmphasisMixin } from "src/presentation/utility/mixins/text/Emphasis";
import { Paragraph } from "src/presentation/utility/Paragraph";

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: white;
  background-color: ${props =>
    color(props.theme.palette.primary)
      .darken(0.4)
      .desaturate(0.4)
      .string()};
`;
const ContactSection = styled.section`
  ${PageSection};
  padding-bottom: 2rem;
  align-self: flex-start;
`;
const ContactSectionTitle = styled(H2)`
  ${EmphasisMixin};
`;

const Emphasis = styled.span`
  ${EmphasisMixin};
`;
export const Footer: React.StatelessComponent<{}> = () => (
  <footer>
    <ContactSection id="contact">
      <ContactSectionTitle id="contact">Get in touch</ContactSectionTitle>
      <H3>
        Inquire about your new home in Tokyo <Emphasis>today</Emphasis>
      </H3>
      <Paragraph>
        Shoot us an email at{" "}
        <Link to="mailto:hi@mitakahome.com">hi@mitakahome.com</Link>, and we'll
        get everything squared off. Welcome to your new home in Tokyo!
      </Paragraph>
    </ContactSection>
    <InfoSection>
      <Paragraph>
        Like this site? Feel free to{" "}
        <Link to="https://github.com/osdiab/mitaka-house/">
          fork it on Github
        </Link>{" "}
        and make it your own.
      </Paragraph>
      <Paragraph>
        <Link forceExternal={true} to="/assets/images/CREDITS.txt">
          Image credits
        </Link>
      </Paragraph>
      <Paragraph>Mitaka House, {new Date().getFullYear()}</Paragraph>
    </InfoSection>
  </footer>
);
