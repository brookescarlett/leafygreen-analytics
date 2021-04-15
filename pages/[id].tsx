/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import { H2, Overline, Link } from "@leafygreen-ui/typography";
import { Table, HeaderRow, TableHeader, Row, Cell } from "@leafygreen-ui/table";
import Icon from "@leafygreen-ui/icon";
import { spacing } from "@leafygreen-ui/tokens";
import { uiColors } from "@leafygreen-ui/palette";
import Header from "components/Header";
import Footer from "components/Footer";
import { TableBadge } from "components/Badge";
import { Product, Status } from "utils/types";
import { useDataContext } from "utils/DataProvider";
import { productLogoMap } from "utils/productLogoMap";

export default function ProductPage({ product }: { product: Product }) {
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
    <div
      css={css`
        display: grid;
        grid-template-columns: 2fr 8fr 2fr;
      `}
    >
      <div />
      <div>
        <Header />

        <div
          css={css`
            margin-bottom: ${spacing[4]}px;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              margin-bottom: ${spacing[3]}px;
            `}
          >
            {ProductLogo && (
              <ProductLogo
                size={34}
                css={css`
                  margin-right: ${spacing[3]}px;
                `}
              />
            )}
            <H2
              css={css`
                text-transform: capitalize;
                color: ${uiColors.gray.light3};
                font-weight: normal;
              `}
            >
              {product}
            </H2>
          </div>
          <Overline
            css={css`
              text-transform: uppercase;
              color: ${uiColors.gray.light3};
            `}
          >
            Last updated {lastUpdatedDate}
          </Overline>
        </div>

        <Table
          darkMode
          data={productData}
          columns={
            <HeaderRow>
              <TableHeader
                key="package"
                label="Package"
                dataType="string"
                sortBy="package"
              />
              <TableHeader
                key="lastUpdated"
                label="Last Updated"
                dataType="date"
                sortBy="lastUpdated"
              />
              <TableHeader
                key="status"
                label="Status"
                dataType="string"
                sortBy="status"
              />
              <TableHeader
                key="type"
                label="Type"
                dataType="string"
                sortBy="type"
              />
              <TableHeader
                key="version"
                label="Version"
                dataType="string"
                sortBy={(data) => {
                  // @ts-expect-error object is of type unknown error, but we do know the type here.
                  return data.version.replace("^", "");
                }}
              />
            </HeaderRow>
          }
        >
          {({ datum }) => (
            <Row key={datum.package}>
              <Cell>
                <Link
                  css={css`
                    color: #41c6ff;
                  `}
                  href={
                    datum.package &&
                    `https://www.mongodb.design/component/${
                      datum.package.split("/")[1]
                    }/documentation/`
                  }
                >
                  {datum.package}
                </Link>
              </Cell>
              <Cell>{datum.lastUpdated}</Cell>
              <Cell>
                {datum.status === Status.Current ? (
                  <Icon
                    glyph="CheckmarkWithCircle"
                    css={css`
                      color: ${uiColors.green.base};
                    `}
                  />
                ) : (
                  // @ts-expect-error we do know that status will be defined here
                  <TableBadge status={datum.status} location="table" />
                )}
              </Cell>
              <Cell>{datum.type}</Cell>
              <Cell>{datum.version}</Cell>
            </Row>
          )}
        </Table>
        <Footer />
      </div>
      <div />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      product: params?.id ?? null,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: Object.values(Product).map((product) => `/${product}`) || [],
    fallback: true,
  };
}
