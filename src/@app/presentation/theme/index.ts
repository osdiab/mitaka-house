import { mediaQueries } from "@app/presentation/theme/mediaQueries";
import { palette } from "@app/presentation/theme/palette";
import { text } from "@app/presentation/theme/text";

export const theme = {
  palette,
  text,
  mediaQueries
};

export type ThemeInterface = typeof theme;
