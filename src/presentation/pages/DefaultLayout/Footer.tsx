import * as color from "color";
import * as React from "react";

import styled from "src/presentation/theme/styled-components";
import { H2 } from "src/presentation/utility/Heading";
import { Link } from "src/presentation/utility/Link";
import { PageSection } from "src/presentation/utility/mixins/PageSection";
import { Emphasis } from "src/presentation/utility/mixins/text/Emphasis";
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
const EmphasisH2 = styled(H2)`
  ${Emphasis};
`;
export const Footer: React.StatelessComponent<{}> = () => (
  <footer>
    <ContactSection id="contact">
      <EmphasisH2>Get in touch</EmphasisH2>
      <Paragraph>
        Feel free to{" "}
        <Link to="mailto://hello@omardiab.com">shoot me an email</Link>
        {" or "}
        <Link to="https://linkedin.com/in/osdiab">check my LinkedIn</Link>.
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
      <Paragraph>Mitaka House, {new Date().getFullYear()}</Paragraph>
    </InfoSection>
  </footer>
);
