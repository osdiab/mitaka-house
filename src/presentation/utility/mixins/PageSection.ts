import { css } from "src/presentation/theme/styled-components";

export const PageSectionPadding = css`
  padding: 20px 60px;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const PageSection = css`
  ${PageSectionPadding};
  max-width: 1000px;
  margin: 0 auto;
`;
