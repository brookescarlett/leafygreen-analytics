/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Table, HeaderRow, TableHeader, Row, Cell } from "@leafygreen-ui/table";
import PackageLink from "components/PackageLink";
import { TableBadge } from "components/Badge";
import { NotFoundPackage } from "utils/types";

function NotFoundTable({ data }: { data: Array<NotFoundPackage> }) {
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
            <PackageLink>{datum.package ?? ""}</PackageLink>
          </Cell>
          <Cell>
            <TableBadge status={datum.status} />
          </Cell>
          <Cell>{datum.type}</Cell>
          <Cell>{datum.version}</Cell>
        </Row>
      )}
    </Table>
  );
}

NotFoundTable.displayName = "NotFoundTable";

export default NotFoundTable;
