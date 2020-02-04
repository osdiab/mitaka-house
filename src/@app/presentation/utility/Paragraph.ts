import styled from "@app/presentation/theme/styled-components";
import { TextBlockStyle } from "@app/presentation/utility/mixins/text/TextBlockStyle";
import { TextStyle } from "@app/presentation/utility/mixins/text/TextStyle";

export const Paragraph = styled.p`
  ${TextStyle} ${TextBlockStyle};
`;
