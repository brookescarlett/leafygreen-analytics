/** @jsxRuntime classic */
/** @jsx jsx */
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import facepaint from "facepaint";
import { jsx, css } from "@emotion/react";
import Button from "@leafygreen-ui/button";
import { uiColors } from "@leafygreen-ui/palette";
import { spacing, breakpoints } from "@leafygreen-ui/tokens";
import Header from "components/Header";
import Card from "components/Card";
import Footer from "components/Footer";
import {
  AllProductData,
  BadgeData,
  Product,
  Status,
  TableRowData,
} from "utils/types";
import { getProductPackages } from "database/updateDb";
import { DataActionTypes, useDataContext } from "utils/DataProvider";

export const mq = facepaint(
  Object.values(breakpoints).map((bp) => `@media (min-width: ${bp}px)`),
  { literal: true }
);

const bodyContainer = css`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
`;

const packageButtonStyle = css`
  color: ${uiColors.gray.light3};
  border: none;
  background-color: transparent;
  margin-left: ${spacing[5]}px;
  cursor: pointer;
`;

const cardContainer = css`
  display: grid;
  column-gap: ${spacing[4]}px;
  row-gap: ${spacing[4]}px;

  ${mq({
    gridTemplateColumns: ["12fr", "6fr 6fr", "4fr 4fr 4fr", "4fr 4fr 4fr"],
  })}
`;

function getBadgeData(product: Array<TableRowData>): BadgeData {
  let total = 0;
  const lgComponents = 44;

  const statusObject = {
    [Status.Major]: 0,
    [Status.Minor]: 0,
    [Status.Patch]: 0,
    [Status.NotFound]: lgComponents - product.length,
  };

  product.map(({ status }) => {
    switch (status) {
      case Status.Major:
        total++;
        statusObject[Status.Major]++;
        break;
      case Status.Minor:
        total++;
        statusObject[Status.Minor]++;
        break;
      case Status.Patch:
        total++;
        statusObject[Status.Patch]++;
        break;
      default:
        break;
    }
  });

  if (Object.values(statusObject).every((status) => status === 0)) {
    return null;
  }

  return { total, ...statusObject };
}

export default function Home({
  allProductData,
}: {
  allProductData?: AllProductData;
}) {
  const { dispatch } = useDataContext();

  useEffect(() => {
    if (allProductData) {
      dispatch({ type: DataActionTypes.SetData, payload: allProductData });
    }
  }, [allProductData]);

  return (
    <div>
      <Head>
        <title>Leafygreen Data Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div css={bodyContainer}>
        <div />

        <div>
          <Header />

          <div
            css={css`
              margin-bottom: ${spacing[4]}px;
            `}
          >
            <Button darkMode>Products</Button>
            <button css={packageButtonStyle}>Packages</button>
          </div>

          <div css={cardContainer}>
            {allProductData &&
              Object.values(Product).map((product) => (
                <Card
                  key={product}
                  product={product}
                  badges={getBadgeData(allProductData[product])}
                />
              ))}
          </div>

          <Footer />
        </div>
        <div />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allProductData = {
    [Product.Atlas]: await getProductPackages(Product.Atlas),
    [Product.Charts]: await getProductPackages(Product.Charts),
    [Product.Realm]: await getProductPackages(Product.Realm),
    [Product.Evergreen]: await getProductPackages(Product.Evergreen),
    [Product.Devhub]: await getProductPackages(Product.Devhub),
    [Product.University]: await getProductPackages(Product.University),
    [Product.Docs]: await getProductPackages(Product.Docs),
  };

  return {
    props: {
      allProductData,
    },
  };
};
