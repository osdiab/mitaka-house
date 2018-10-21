import * as React from "react";

import styled from "src/presentation/theme/styled-components";
import { Link, LinkDestinationKind } from "src/presentation/utility/Link";
import { PageSection } from "src/presentation/utility/mixins/PageSection";
import { Paragraph } from "src/presentation/utility/Paragraph";

const FooterElem = styled.header`
  ${PageSection} display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  border: 0;
`;

export const Footer: React.StatelessComponent<{}> = () => (
  <FooterElem>
    <Paragraph>
      Like this site? Feel free to{" "}
      <Link
        to={{
          kind: LinkDestinationKind.EXTERNAL,
          destination: "https://github.com/osdiab/osdiab.github.io/"
        }}
      >
        fork it on Github
      </Link>{" "}
      and make it your own.
    </Paragraph>
    <Paragraph>Omar Diab, {new Date().getFullYear()}</Paragraph>
  </FooterElem>
);
