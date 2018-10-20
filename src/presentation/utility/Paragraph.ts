import styled from "src/presentation/theme/styled-components";
import { TextBlockStyle } from "./text/TextBlockStyle";
import { TextStyle } from "./text/TextStyle";

export const Paragraph = styled.p`
  ${TextStyle} ${TextBlockStyle};
`;
