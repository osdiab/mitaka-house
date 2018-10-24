import { css } from "src/presentation/theme/styled-components";

export const PageSectionPadding = css`
  padding: 20px 60px;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

export const PageSectionContentArea = css`
  max-width: 700px;
  margin: 0 auto;
`;

export const PageSection = css`
  ${PageSectionPadding};
  ${PageSectionContentArea};
`;
