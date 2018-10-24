import * as color from "color";

export const palette = {
  primary: "#6198D2", // dark enough for 3 contrast ratio with white
  secondary: "#27A721",
  background: "#F9F7F3",
  disabled: "#888888"
};

export function highlightColor(origColor: string): string {
  const colorObj = color(origColor);
  return colorObj
    .lighten(0.2)
    .saturate(0.1)
    .string();
  // return (colorObj.isLight()
  //   ? colorObj.darken(0.2)
  //   : colorObj.lighten(0.2)
  // ).string();
}
