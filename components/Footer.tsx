/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { uiColors } from "@leafygreen-ui/palette";
import { spacing } from "@leafygreen-ui/tokens";
import { Body } from "@leafygreen-ui/typography";

const containerStyle = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin-top: 96px;
  padding-bottom: ${spacing[7]}px;
`;

function Footer() {
  return (
    <div css={containerStyle}>
      <Body
        css={css`
          color: ${uiColors.white};
        `}
      >
        Made with <span>💖</span> by Brooke &{" "}
        <a
          href="https://www.audroue.com/"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            color: #41c6ff;
            text-decoration: none;
          `}
        >
          Rob
        </a>{" "}
        during Skunkworks 2021
      </Body>
    </div>
  );
}

Footer.displayName = "Footer";

export default Footer;
