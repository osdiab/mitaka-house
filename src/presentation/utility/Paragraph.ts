import styled from "src/presentation/theme/styled-components";
import { TextBlockStyle } from "src/presentation/utility/mixins/text/TextBlockStyle";
import { TextStyle } from "src/presentation/utility/mixins/text/TextStyle";

export const Paragraph = styled.p`
  ${TextStyle} ${TextBlockStyle};
`;
