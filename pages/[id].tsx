/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import { H2, Subtitle, Overline } from "@leafygreen-ui/typography";
import { spacing } from "@leafygreen-ui/tokens";
import { uiColors } from "@leafygreen-ui/palette";
import Header from "components/Header";
import VersionTable from "components/VersionTable";
import NotFoundTable from "components/NotFoundTable";
import Footer from "components/Footer";
import { getNotFoundPackages } from "database/updateDb";
import { Product, NotFoundPackage } from "utils/types";
import { useDataContext } from "utils/DataProvider";
import { productLogoMap } from "utils/productLogoMap";

const container = css`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`;

const headerContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing[3]}px;
`;

const h2Styles = css`
  text-transform: capitalize;
  color: ${uiColors.gray.light3};
  font-weight: normal;
`;

const overlineStyle = css`
  text-transform: uppercase;
  color: ${uiColors.gray.light3};
`;

export default function ProductPage({
  product,
  notFoundPackages,
}: {
  product: Product;
  notFoundPackages?: Array<NotFoundPackage>;
}) {
  const {
    state: { data },
  } = useDataContext();

  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.push("/");
    }
  }, [data]);

  const productData = data?.[product];

  if (!productData) {
    return null;
  }

  const ProductLogo = productLogoMap[product];
  const lastUpdatedDate = new Date(
    Math.max.apply(
      null,
      // @ts-expect-error coercing an array of numbers to an array of dates
      [...productData].map(function (data) {
        if (data.lastUpdated) {
          return new Date(data.lastUpdated);
        }
      })
    )
  ).toLocaleDateString();

  return (
    <div css={container}>
      <div />
      <div>
        <Header />

        <div
          css={css`
            margin-bottom: ${spacing[4]}px;
          `}
        >
          <div css={headerContainer}>
            {ProductLogo && (
              <ProductLogo
                size={34}
                css={css`
                  margin-right: ${spacing[3]}px;
                `}
              />
            )}
            <H2 css={h2Styles}>
              {product === Product.Devhub ? "DevHub" : product}
            </H2>
          </div>
          <Overline css={overlineStyle}>
            Last updated {lastUpdatedDate}
          </Overline>
        </div>

        <VersionTable data={productData} />

        {notFoundPackages && (
          <div
            css={css`
              margin-top: 88px;
            `}
          >
            <Subtitle
              as="h3"
              css={css`
                color: ${uiColors.gray.light3};
                margin-bottom: ${spacing[3]}px;
              `}
            >
              Unused Packages
            </Subtitle>
            <NotFoundTable data={notFoundPackages} />
          </div>
        )}

        <Footer />
      </div>
      <div />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
    const product = params.id as Product;

    return {
      props: {
        product,
        notFoundPackages: await getNotFoundPackages(product),
      },
    };
  }

  return { props: { product: null, notFoundPackages: null } };
};

export async function getStaticPaths() {
  return {
    paths: Object.values(Product).map((product) => `/${product}`) || [],
    fallback: true,
  };
}
