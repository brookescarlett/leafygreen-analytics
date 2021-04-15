import {
  AtlasLogoMark,
  RealmLogoMark,
  ChartsLogoMark,
} from "@leafygreen-ui/logo";
import { Product } from "utils/types";

export const productLogoMap: Partial<Record<Product, typeof AtlasLogoMark>> = {
  [Product.Atlas]: AtlasLogoMark,
  // @ts-expect-error displayName missing
  [Product.Realm]: RealmLogoMark,
  [Product.Charts]: ChartsLogoMark,
};
