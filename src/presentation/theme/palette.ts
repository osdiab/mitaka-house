import * as color from "color";

export const palette = {
  primary: "#5C5FBC",
  secondary: "#D3697D",
  background: "#F9F7F3",
  disabled: "#888888"
};

export function highlightColor(origColor: string): string {
  const colorObj = color(origColor);
  return colorObj
    .lighten(0.3)
    .saturate(0.3)
    .string();
  // return (colorObj.isLight()
  //   ? colorObj.darken(0.2)
  //   : colorObj.lighten(0.2)
  // ).string();
}
