/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Icon from "@leafygreen-ui/icon";
import { Table, HeaderRow, TableHeader, Row, Cell } from "@leafygreen-ui/table";
import { uiColors } from "@leafygreen-ui/palette";
import { Link } from "@leafygreen-ui/typography";
import { TableBadge } from "components/Badge";
import { Status, TableRowData } from "utils/types";

function VersionTable({ data }: { data: Array<TableRowData> }) {
  return (
    <Table
      darkMode
      data={data}
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
                  color: #0ad05b;
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
  );
}

VersionTable.displayName = "VersionTable";

export default VersionTable;
