import styled from "src/presentation/theme/styled-components";
import { Paragraph } from "src/presentation/utility/Paragraph";
import { TextBlockStyle } from "./text/TextBlockStyle";

export const H1 = styled.h1`
  font-size: 5rem;
  ${TextBlockStyle};
`;
export const H2 = styled.h2`
  font-size: 3rem;
  ${TextBlockStyle};
`;
export const H3 = styled.h3`
  font-size: 2rem;
  ${TextBlockStyle};
`;
export const H4 = styled(Paragraph)`
  font-size: 1.75rem;
  ${TextBlockStyle};
`;
export const H5 = styled(Paragraph)`
  font-size: 1.5rem;
  ${TextBlockStyle};
`;
