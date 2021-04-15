/** @jsxRuntime classic */
/** @jsx jsx */
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import { Subtitle } from "@leafygreen-ui/typography";
import { uiColors } from "@leafygreen-ui/palette";
import { spacing } from "@leafygreen-ui/tokens";

const headerContainer = css`
  margin-top: ${spacing[6]}px;
  margin-bottom: ${spacing[7]}px;
  border-bottom: 1px solid ${uiColors.gray.light3};
`;

const titleStyle = css`
  color: ${uiColors.gray.light3};
  margin-bottom: ${spacing[4]}px;
  cursor: pointer;
`;

const analyticsStyle = css`
  font-weight: normal;
`;

function Header() {
  const { push } = useRouter();

  return (
    <div css={headerContainer}>
      <Subtitle as={"h1"} css={titleStyle} onClick={() => push("/")}>
        LeafyGreen
        <span css={analyticsStyle}>Analytics</span>
      </Subtitle>
    </div>
  );
}

Header.displayName = "Header";

export default Header;
