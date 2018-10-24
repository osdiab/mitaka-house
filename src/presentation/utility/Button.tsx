import * as R from "ramda";
import * as React from "react";

import styled, {
  ThemedStyledProps
} from "src/presentation/theme/styled-components";
import { Link, LinkAppearance } from "src/presentation/utility/Link";
import { logger } from "src/utility/logger";
import { OptionalMembers } from "src/utility/types";
import { highlightColor } from "../theme/palette";

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
}

type ButtonColorParameters = Pick<
  Required<IButtonProps>,
  "disabled" | "role"
> & {
  palette: { primary: string; disabled: string };
};
function backgroundColor({
  disabled,
  role,
  palette
}: ButtonColorParameters): string {
  if (role !== ButtonRole.PRIMARY) {
    return "transparent";
  }
  return disabled ? palette.disabled : palette.primary;
}

function fontColor({ disabled, role, palette }: ButtonColorParameters): string {
  if (role !== ButtonRole.PRIMARY) {
    if (disabled) {
      return palette.disabled;
    }
    return palette.primary;
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
      return highlightColor(params.palette.primary).toString();
    }
  }
}

function hoverBackgroundColor({
  disabled,
  role,
  palette
}: ButtonColorParameters): string {
  if (role === ButtonRole.TEXT_ONLY) {
    return "transparent";
  }

  return disabled ? palette.disabled : highlightColor(palette.primary);
}

function borderColor({
  disabled,
  role,
  palette
}: ButtonColorParameters): string {
  if (role === ButtonRole.TEXT_ONLY) {
    return "transparent";
  }
  return disabled ? palette.disabled : palette.primary;
}

function hoverBorderColor({
  disabled,
  role,
  palette
}: ButtonColorParameters): string {
  if (role === ButtonRole.TEXT_ONLY) {
    return "transparent";
  }

  return disabled ? palette.disabled : highlightColor(palette.primary);
}

function getColorParams(
  props: ThemedStyledProps<StyledButtonProps>
): ButtonColorParameters {
  return {
    ...R.pick(["role", "disabled"], props),
    palette: { ...R.pick(["primary", "disabled"], props.theme.palette) }
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

const defaultProps: OptionalMembers<IButtonProps> = {
  size: ButtonSize.MEDIUM,
  disabled: false,
  role: ButtonRole.PRIMARY
};

export const Button: React.StatelessComponent<IButtonProps> = props => {
  const { onClick, size, disabled, role, children } = {
    ...defaultProps,
    ...(R.reject(R.isNil, props) as typeof props)
  } as Required<IButtonProps> & Pick<typeof props, "children">;

  switch (onClick.kind) {
    case ButtonTargetKind.LINK: {
      const linkContent = (
        <StyledDivButton disabled={disabled} size={size} role={role}>
          {children}
        </StyledDivButton>
      );
      if (disabled) {
        return linkContent;
      }

      return (
        <Link appearance={LinkAppearance.UNSTYLED} to={onClick.action}>
          {linkContent}
        </Link>
      );
    }
    case ButtonTargetKind.SUBMIT:
      return (
        <StyledButton disabled={disabled} size={size} role={role} type="submit">
          {children}
        </StyledButton>
      );
    case ButtonTargetKind.FUNCTION:
      return (
        <StyledButton
          disabled={disabled}
          size={size}
          role={role}
          onClick={onClick.action}
        >
          {children}
        </StyledButton>
      );
    default:
      logInvalidTargetKind(onClick);
      return <React.Fragment />;
  }
};
