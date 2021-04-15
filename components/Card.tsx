/** @jsxRuntime classic */
/** @jsx jsx */
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import { Subtitle, Body } from "@leafygreen-ui/typography";
import LGCard from "@leafygreen-ui/card";
import { spacing } from "@leafygreen-ui/tokens";
import { uiColors } from "@leafygreen-ui/palette";
import { HomeBadge } from "components/Badge";
import { BadgeData, Product, Status } from "utils/types";
import { productLogoMap } from "utils/productLogoMap";

const headerContainer = css`
  display: flex;
  align-items: center;
  padding-top: ${spacing[4]}px;
  padding-left: ${spacing[4]}px;
  margin-bottom: 80px;
`;

const titleStyle = css`
  text-transform: capitalize;
  color: ${uiColors.gray.light3};
  font-weight: normal;
`;

const footerContainer = css`
  margin-top: ${spacing[3]}px;
  margin-left: ${spacing[4]}px;
`;

interface CardProps {
  product: Product;
  badges: BadgeData;
}

function CardFooter({ badges }: { badges: CardProps["badges"] }) {
  if (badges === null) {
    return (
      <Body
        weight="medium"
        css={css`
          color: ${uiColors.white};
        `}
      >
        All is up to date <span aria-hidden>🎉</span>
      </Body>
    );
  }

  return (
    <div>
      <Body
        weight="medium"
        css={css`
          margin-bottom: ${spacing[2]}px;
          color: ${uiColors.white};
        `}
      >
        {badges.total} update{badges.total > 1 ? "s" : ""} available
      </Body>
      <div
        css={css`
          margin-bottom: ${spacing[2]}px;
        `}
      >
        <HomeBadge status={Status.Major} number={badges.major} />
        <HomeBadge status={Status.Minor} number={badges.minor} />
        <HomeBadge status={Status.Patch} number={badges.patch} />
        <HomeBadge status={Status.Missing} number={badges.missing} />
      </div>
    </div>
  );
}

function Card({ product, badges }: CardProps) {
  const router = useRouter();
  const ProductLogo = productLogoMap[product];

  return (
    <LGCard darkMode onClick={() => router.push(`/${product}`)}>
      <div css={headerContainer}>
        {ProductLogo && (
          <ProductLogo
            size={34}
            css={css`
              margin-right: ${spacing[3]}px;
            `}
          />
        )}
        <Subtitle as={"h2"} css={titleStyle}>
          {product}
        </Subtitle>
      </div>
      <div
        css={css`
          border: 1px solid ${uiColors.gray.dark1};
        `}
      />
      <div css={footerContainer}>
        <CardFooter badges={badges} />
      </div>
    </LGCard>
  );
}

Card.displayName = "Card";

export default Card;
