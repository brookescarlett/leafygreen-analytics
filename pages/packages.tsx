/** @jsxRuntime classic */
/** @jsx jsx */
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import Button from "@leafygreen-ui/button";
import { uiColors } from "@leafygreen-ui/palette";
import { spacing } from "@leafygreen-ui/tokens";
import Header from "components/Header";

const bodyContainer = css`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`;

const productButtonStyle = css`
  color: ${uiColors.gray.light3};
  border: 1px solid ${uiColors.gray.dark3};
  box-shadow: unset;
  background-color: ${uiColors.gray.dark3};
  margin-right: ${spacing[5]}px;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: rgba(33, 49, 60, 0.08);
    box-shadow: 0px 0px 0px 3px ${uiColors.gray.dark2};
  }
`;

export default function Packages() {
  const { push } = useRouter();

  return (
    <div css={bodyContainer}>
      <div />
      <div>
        <Header />
        <div
          css={css`
            margin-bottom: ${spacing[4]}px;
          `}
        >
          <Button darkMode css={productButtonStyle} onClick={() => push("/")}>
            Products
          </Button>
          <Button darkMode>Packages</Button>
        </div>

        <div>
          <iframe
            css={css`
              background: #21313c;
              border: none;
              border-radius: 2px;
            `}
            width="100%"
            height="500"
            src="https://charts.mongodb.com/charts-leafygreen-analytics-ycopl/embed/charts?id=4ae6ddeb-cde1-4ab9-b0fa-b094efa7c1c4&autoRefresh=86400&theme=dark"
          ></iframe>
        </div>
      </div>

      <div />
    </div>
  );
}
