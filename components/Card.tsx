/** @jsxRuntime classic */
/** @jsx jsx */
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import { H3, Body } from "@leafygreen-ui/typography";
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
  margin-bottom: 60px;
`;

const titleStyle = css`
  text-transform: capitalize;
  color: ${uiColors.gray.light3};
  font-weight: normal;
  padding-top: 3px;
`;

const footerContainer = css`
  margin-top: ${spacing[3]}px;
  margin-left: ${spacing[4]}px;
  margin-right: ${spacing[4]}px;
  padding-bottom: 16px;
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
      <div>
        <HomeBadge status={Status.Major} number={badges.major} />
        <HomeBadge status={Status.Minor} number={badges.minor} />
        <HomeBadge status={Status.Patch} number={badges.patch} />
        <HomeBadge status={Status.NotFound} number={badges.notFound} />
      </div>
    </div>
  );
}

function Card({ product, badges }: CardProps) {
  const router = useRouter();
  const ProductLogo = productLogoMap[product];

  return (
    <LGCard
      contentStyle="clickable"
      darkMode
      onClick={() => router.push(`/${product}`)}
      css={css`
        height: 250px;

        &:hover {
          box-shadow: ;
        }
      `}
    >
      <div css={headerContainer}>
        {ProductLogo && (
          <ProductLogo
            size={34}
            css={css`
              margin-right: ${spacing[2]}px;
            `}
          />
        )}
        <H3 as={"h2"} css={titleStyle}>
          {product === Product.Devhub ? "DevHub" : product}
        </H3>
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
