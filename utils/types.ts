const Product = {
  Atlas: "atlas",
  Charts: "charts",
  Devhub: "devhub",
  Docs: "docs",
  Evergreen: "evergreen",
  Realm: "realm",
  University: "university",
} as const;

type Product = typeof Product[keyof typeof Product];

export { Product };

const Status = {
  NotFound: "notFound",
  Major: "major",
  Minor: "minor",
  Patch: "patch",
  Current: "current",
} as const;

type Status = typeof Status[keyof typeof Status];

export { Status };

const Type = {
  Component: "component",
  Utility: "utility",
};

type Type = typeof Type[keyof typeof Type];

export { Type };

export interface TableRowData {
  package?: string;
  lastUpdated?: string;
  status?: Status;
  type?: Type;
  version?: string;
}

export type AllProductData = Record<Product, Array<TableRowData>>;

export type BadgeData = Record<
  "major" | "minor" | "patch" | "notFound" | "total",
  number
> | null;

export interface NotFoundPackage {
  package: string;
  status: "notFound";
  type: Type;
  version: string;
}
