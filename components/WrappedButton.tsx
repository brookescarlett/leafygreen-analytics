/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useRef, useEffect } from "react";
import { jsx, css } from "@emotion/react";
import { registerRipple } from "@leafygreen-ui/ripple";
import Button from "@leafygreen-ui/button";
import { uiColors } from "@leafygreen-ui/palette";
import { spacing } from "@leafygreen-ui/tokens";

const buttonStyles = css`
  // unset browser default
  appearance: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0px solid transparent;

  display: inline-flex;
  align-items: stretch;
  border-radius: 4px;
  transition: all 150ms ease-in-out;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;

  &:focus {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
  }

  color: ${uiColors.gray.light3};
  border: 1px solid ${uiColors.gray.dark3};
  box-shadow: unset;
  // background-color: ${uiColors.gray.dark3};
  margin-right: ${spacing[5]}px;
  cursor: pointer;
  // position: absolute;
  z-index: 0;
  overflow: hidden;

  &:hover,
  &:active,
  &:focus {
    // background-color: rgba(33, 49, 60, 0.08);
    box-shadow: 0px 0px 0px 3px ${uiColors.gray.dark2};
  }
`;

function WrappedButton({
  children,
  ...rest
}: React.ComponentProps<typeof Button>) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let unregisterRipple: (() => void) | undefined;

    if (ref.current != null) {
      unregisterRipple = registerRipple(ref.current, {
        backgroundColor: "purple",
      });
    }

    return unregisterRipple;
  }, [ref]);

  return (
    <button {...rest} ref={ref} css={buttonStyles}>
      {children}
    </button>
  );
}

WrappedButton.displayName = "WrappedButton";

export default WrappedButton;
