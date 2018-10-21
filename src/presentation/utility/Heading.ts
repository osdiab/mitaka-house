import styled, { css } from "src/presentation/theme/styled-components";
import { TextBlockStyle } from "src/presentation/utility/mixins/text/TextBlockStyle";
import { Paragraph } from "src/presentation/utility/Paragraph";

const HeaderMixin = css`
  font-weight: 700;
`;

export const H1 = styled.h1`
  font-size: 5rem;
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H2 = styled.h2`
  font-size: 3rem;
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H3 = styled.h3`
  font-size: 2rem;
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H4 = styled(Paragraph)`
  font-size: 1.75rem;
  ${HeaderMixin};
  ${TextBlockStyle};
`;
export const H5 = styled(Paragraph)`
  font-size: 1.5rem;
  ${HeaderMixin};
  ${TextBlockStyle};
`;
