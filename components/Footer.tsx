/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { uiColors } from "@leafygreen-ui/palette";
import { Body } from "@leafygreen-ui/typography";

const containerStyle = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin-top: 96px;
  padding-bottom: 24px;
`;

function Footer() {
  return (
    <div css={containerStyle}>
      <Body
        css={css`
          color: ${uiColors.white};
        `}
      >
        Made with <span>💖</span> by Brooke & Rob during Skunkworks 2021
      </Body>
    </div>
  );
}

Footer.displayName = "Footer";

export default Footer;
