import * as color from "color";
import * as React from "react";

import styled from "src/presentation/theme/styled-components";
import { Button, ButtonTargetKind } from "src/presentation/utility/Button";
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
  color: ${props => props.theme.palette.interactive};
`;

const Emphasis = styled.span`
  ${EmphasisMixin};
`;
const mailBody = `Hello,
          
 I'm interested in renting an apartment at Mitaka House! Here is some information about myself:
 
 - Full Name:
 - Best way to contact you (if not email, then please tell us how, i.e. phone number):
 - Languages spoken:
 - Annual income, approximately:
 - Anything else you'd like to tell us?

Talk to you soon!

 `;
const mailtoLink = `mailto:hi@mitakahome.com?subject=${encodeURI(
  "I'm interested in renting at Mitaka House!"
)}&body=${encodeURI(mailBody)}`;
export const Footer: React.StatelessComponent<{}> = () => (
  <footer>
    <ContactSection id="contact">
      <ContactSectionTitle id="contact">Get in touch</ContactSectionTitle>
      <H3>
        Inquire about your new home in Tokyo <Emphasis>today</Emphasis>
      </H3>
      <Paragraph>
        Shoot us an email at <Link to={mailtoLink}>hi@mitakahome.com</Link>, and
        we'll get everything squared off. Welcome to your new home in Tokyo!
      </Paragraph>
      <Button
        onClick={{
          kind: ButtonTargetKind.LINK,
          action: mailtoLink
        }}
      >
        Send us an email today
      </Button>
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
