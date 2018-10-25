import { mediaQueries } from "src/presentation/theme/mediaQueries";
import { palette } from "src/presentation/theme/palette";
import { text } from "src/presentation/theme/text";

export const theme = {
  palette,
  text,
  mediaQueries
};

export type ThemeInterface = typeof theme;
