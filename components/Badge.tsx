/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import LGBadge, { Variant } from "@leafygreen-ui/badge";
import { spacing } from "@leafygreen-ui/tokens";
import { Status } from "utils/types";

const getVariant = (status: Status): Variant => {
  switch (status) {
    case Status.Major:
      return "red";

    case Status.Minor:
      return "yellow";

    case Status.Patch:
      return "green";

    case Status.Missing:
    default:
      return "lightgray";
  }
};

function HomeBadge({ status, number }: { status: Status; number: number }) {
  if (number <= 0) {
    return null;
  }

  if (status === "current") {
    return null;
  }

  const variant = getVariant(status);

  const pluralize =
    status === Status.Missing ? "" : status === Status.Patch ? "es" : "s";

  return (
    <LGBadge
      css={css`
        margin: ${spacing[1]}px ${spacing[2]}px ${spacing[1]}px 0;
      `}
      variant={variant}
    >
      {`${number} ${status}${pluralize}`}
    </LGBadge>
  );
}

HomeBadge.displayName = "HomeBadge";

function TableBadge({ status }: { status: Status }) {
  const variant = getVariant(status);

  return (
    <LGBadge
      css={css`
        margin: ${spacing[1]}px ${spacing[2]}px ${spacing[1]}px 0;
      `}
      variant={variant}
    >
      {status}
    </LGBadge>
  );
}

TableBadge.displayName = "TableBadge";

export { HomeBadge, TableBadge };
