import {
  AtlasLogoMark,
  RealmLogoMark,
  ChartsLogoMark,
} from "@leafygreen-ui/logo";
import {
  DevHubLogo,
  DocsLogo,
  EvergreenLogo,
  UniversityLogo,
} from "components/Logos";
import { Product } from "utils/types";

export const productLogoMap: Record<Product, typeof AtlasLogoMark> = {
  [Product.Atlas]: AtlasLogoMark,
  // @ts-expect-error displayName missing
  [Product.Realm]: RealmLogoMark,
  [Product.Charts]: ChartsLogoMark,
  [Product.University]: UniversityLogo,
  [Product.Evergreen]: EvergreenLogo,
  [Product.Devhub]: DevHubLogo,
  [Product.Docs]: DocsLogo,
};
