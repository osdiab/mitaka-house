import * as R from "ramda";
import * as React from "react";

import { highlightColor } from "@app/presentation/theme/palette";
import styled, {
  ThemedStyledProps
} from "@app/presentation/theme/styled-components";
import { Link, LinkAppearance } from "@app/presentation/utility/Link";
import { logger } from "@app/utility/logger";
import { Omit, OptionalMembers } from "@app/utility/types";

export enum ButtonTargetKind {
  LINK = "LINK",
  FUNCTION = "FUNCTION",
  SUBMIT = "SUBMIT"
}

export enum ButtonRole {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TEXT_ONLY = "TEXT_ONLY"
}

export enum ButtonSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export interface IOnClick<Kind extends ButtonTargetKind, action> {
  kind: Kind;
  action: action;
}

export type OnClick =
  | IOnClick<ButtonTargetKind.LINK, string>
  | IOnClick<ButtonTargetKind.FUNCTION, () => void>
  | IOnClick<ButtonTargetKind.SUBMIT, undefined>;

export interface IButtonProps {
  onClick: OnClick;
  size?: ButtonSize;
  disabled?: boolean;
  role?: ButtonRole;
  color?: string;
}

type ButtonColorParameters = Pick<Required<IButtonProps>, "disabled" | "role"> &
  Pick<IButtonProps, "color"> & {
    palette: { interactive: string; disabled: string };
  };
function backgroundColor({
  disabled,
  role,
  palette,
  color
}: ButtonColorParameters): string {
  if (role !== ButtonRole.PRIMARY) {
    return "transparent";
  }
  return disabled ? palette.disabled : color ? color : palette.interactive;
}

function fontColor({
  disabled,
  role,
  palette,
  color
}: ButtonColorParameters): string {
  if (role !== ButtonRole.PRIMARY) {
    if (disabled) {
      return palette.disabled;
    }
    return color ? color : palette.interactive;
  }
  return disabled ? "black" : "white";
}

function hoverFontColor(params: ButtonColorParameters): string {
  switch (params.role) {
    case ButtonRole.PRIMARY:
      return fontColor(params);
    case ButtonRole.SECONDARY:
      return fontColor({ ...params, role: ButtonRole.PRIMARY });
    case ButtonRole.TEXT_ONLY: {
      return highlightColor(
        params.color ? params.color : params.palette.interactive
      ).toString();
    }
  }
}

function hoverBackgroundColor({
  disabled,
  role,
  palette,
  color
}: ButtonColorParameters): string {
  if (role === ButtonRole.TEXT_ONLY) {
    return "transparent";
  }

  return disabled
    ? palette.disabled
    : highlightColor(color ? color : palette.interactive);
}

function borderColor({
  disabled,
  role,
  palette,
  color
}: ButtonColorParameters): string {
  if (role === ButtonRole.TEXT_ONLY) {
    return "transparent";
  }
  return disabled ? palette.disabled : color ? color : palette.interactive;
}

function hoverBorderColor({
  disabled,
  role,
  palette,
  color
}: ButtonColorParameters): string {
  if (role === ButtonRole.TEXT_ONLY) {
    return "transparent";
  }

  return disabled
    ? palette.disabled
    : highlightColor(color ? color : palette.interactive);
}

function getColorParams(
  props: ThemedStyledProps<StyledButtonProps>
): ButtonColorParameters {
  return {
    ...R.pick(["role", "disabled", "color"], props),
    palette: { ...R.pick(["interactive", "disabled"], props.theme.palette) }
  };
}

function paddingSize(props: ThemedStyledProps<StyledButtonProps>): string {
  switch (props.size) {
    default:
      logInvalidSize(props.size);
    case ButtonSize.SMALL:
      return "8px 15px";
    case ButtonSize.MEDIUM:
      return "10px 20px";
    case ButtonSize.LARGE:
      return "15px 25px";
  }
}

type StyledButtonProps = Pick<
  Required<IButtonProps>,
  "size" | "disabled" | "role"
>;
const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  border: 2px solid;
  border-color: ${props => borderColor(getColorParams(props))};
  border-radius: 2px;
  padding: ${props => paddingSize(props)};
  background-color: ${props => backgroundColor(getColorParams(props))};
  font-size: ${props => buttonFontSize(props.size)};
  font-weight: 700;
  appearance: none;
  color: ${props => fontColor(getColorParams(props))};
  transition: background-color 0.1s ease-in, border-color 0.1s ease-in,
    color 0.1s ease-in;

  :hover {
    border-color: ${props => hoverBorderColor(getColorParams(props))};
    background-color: ${props => hoverBackgroundColor(getColorParams(props))};
    color: ${props => hoverFontColor(getColorParams(props))};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
const StyledDivButton = StyledButton.withComponent(styled.div``);

function logInvalidTargetKind(onClick: never) {
  logger.error(
    `Invalid button target kind ${(onClick as OnClick).kind}. Not rendering.`
  );
}

function logInvalidSize(size: never) {
  logger.error(`Invalid button size '${size}'. Rendering as medium size.`);
}

function buttonFontSize(size: IButtonProps["size"]) {
  switch (size) {
    default:
      logInvalidSize(size);
    // fallthrough
    case undefined:
    case ButtonSize.MEDIUM:
      return "1.2rem";
    case ButtonSize.SMALL:
      return "1rem";
    case ButtonSize.LARGE:
      return "1.4rem";
  }
}

const defaultProps: OptionalMembers<Omit<IButtonProps, "color">> = {
  size: ButtonSize.MEDIUM,
  disabled: false,
  role: ButtonRole.PRIMARY
};

export const Button: React.StatelessComponent<IButtonProps> = origProps => {
  const props = {
    ...defaultProps,
    ...(R.reject(R.isNil, origProps) as typeof origProps)
  } as Required<IButtonProps> & Pick<typeof origProps, "children">;

  switch (props.onClick.kind) {
    case ButtonTargetKind.LINK: {
      const linkContent = <StyledDivButton {...R.omit(["onClick"], props)} />;
      if (props.disabled) {
        return linkContent;
      }

      return (
        <Link appearance={LinkAppearance.UNSTYLED} to={props.onClick.action}>
          {linkContent}
        </Link>
      );
    }
    case ButtonTargetKind.SUBMIT:
      return <StyledButton type="submit" {...R.omit(["onClick"], props)} />;
    case ButtonTargetKind.FUNCTION:
      return (
        <StyledButton
          onClick={props.onClick.action}
          {...R.omit(["onClick"], props)}
        />
      );
    default:
      logInvalidTargetKind(props.onClick);
      return <React.Fragment />;
  }
};
