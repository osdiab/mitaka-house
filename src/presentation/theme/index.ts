import { mediaQueries } from "./mediaQueries";
import { palette } from "./palette";
import { text } from "./text";

export const theme = {
  palette,
  text,
  mediaQueries
};

export type ThemeInterface = typeof theme;
