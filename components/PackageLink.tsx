/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "@leafygreen-ui/typography";

const missingPackages = [
  "@leafygreen-ui/a11y",
  "@leafygreen-ui/emotion",
  "@leafygreen-ui/hooks",
  "@leafygreen-ui/interaction-ring",
  "@leafygreen-ui/leafygreen-provider",
  "@leafygreen-ui/lib",
  "@leafygreen-ui/mongo-menu",
  "@leafygreen-ui/ripple",
  "@leafygreen-ui/theme",
];

function PackageLink({ children }: { children: string }) {
  if (missingPackages.includes(children)) {
    return <span>{children}</span>;
  }

  return (
    <Link
      css={css`
        color: #41c6ff;
      `}
      href={`https://www.mongodb.design/component/${
        children.split("/")[1]
      }/documentation/`}
    >
      {children}
    </Link>
  );
}

PackageLink.displayName = "PackageLink";

export default PackageLink;
