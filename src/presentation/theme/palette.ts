import * as color from "color";

export const palette = {
  primary: "lightcoral",
  secondary: "goldenrod",
  background: "midnightblue",
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
