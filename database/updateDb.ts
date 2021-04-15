import { connectToDatabase } from "./mongodb";
import { Product, Status } from "utils/types";

interface ProductObject {
  _id: number;
  product: Product;
  packages: {
    [pkg in string]: {
      version: string;
      lastUpdated: Date;
      versionHistory: Array<{ version: string; lastUpdated: string }>;
    };
  };
}

export async function findOrAddPackage(
  product: string,
  pkg: string,
  version: string
) {
  const { db } = await connectToDatabase();
  const collection = db.collection("products");

  const foundProduct: ProductObject = await collection.findOne({ product });
  const foundPackage = foundProduct.packages[pkg];

  if (!foundPackage) {
    return (await collection.findOneAndUpdate(
      { _id: foundProduct._id },
      {
        $set: {
          [`packages.${pkg}`]: {
            version,
            lastUpdated: new Date().toLocaleDateString(),
          },
        },
      }
    )) as ProductObject;
  }

  if (
    Object.keys(foundProduct.packages).includes(pkg) &&
    foundPackage.version === version
  ) {
    return null;
  }

  return (await collection.findOneAndUpdate(
    { _id: foundProduct._id },
    {
      $set: {
        [`packages.${pkg}`]: {
          version,
          lastUpdated: new Date().toLocaleDateString(),
          versionHistory: [
            {
              version: foundPackage.version,
              lastUpdated: foundPackage.lastUpdated,
            },
            ...(foundPackage.versionHistory ?? []),
          ],
        },
      },
    }
  )) as ProductObject;
}

function getStatus(lgVersion: string, productVersion: string) {
  if (typeof productVersion !== "string" || typeof lgVersion !== "string") {
    return "patch";
  }

  const lgParts = lgVersion?.split(".").map((part) => parseInt(part));
  const prodParts = productVersion
    ?.replace("^", "")
    .split(".")
    .map((part) => parseInt(part));

  if (lgParts[0] > prodParts[0]) {
    return "major";
  } else if (lgParts[1] > prodParts[1]) {
    return "minor";
  } else if (productVersion.indexOf("^") !== -1) {
    return "current";
  } else {
    return "patch";
  }
}

function getType(pkg: string) {
  const utilities = [
    "@leafygreen-ui/a11y",
    "@leafygreen-ui/emotion",
    "@leafygreen-ui/hooks",
    "@leafygreen-ui/interaction-ring",
    "@leafygreen-ui/leafygreen-provider",
    "@leafygreen-ui/lib",
    "@leafygreen-ui/tokens",
  ];

  if (utilities.indexOf(pkg) !== -1) {
    return "utility";
  }

  return "component";
}

export async function getNotFoundPackages(product: Product) {
  const { db } = await connectToDatabase();
  const collection = db.collection("products");

  const foundProduct = await collection.findOne({ product });
  const leafygreen = await collection.findOne({ product: "design-systems" });
  const productPackages = foundProduct.packages;

  return Object.keys(leafygreen.packages)
    .map((pkg: string) => {
      const lgVersion = leafygreen.packages[pkg];

      if (productPackages[pkg]) {
        return null;
      }

      return {
        package: pkg,
        status: Status.NotFound,
        type: getType(pkg),
        version: lgVersion,
      };
    })
    .filter((el) => el !== null);
}

export async function getProductPackages(product: Product) {
  const { db } = await connectToDatabase();
  const collection = db.collection("products");

  const foundProduct = await collection.findOne({ product });
  const leafygreen = await collection.findOne({ product: "design-systems" });
  const productPackages = foundProduct.packages;

  const packages = Object.keys(productPackages).map((pkg: string) => {
    const lgVersion = leafygreen.packages[pkg];
    const { version, lastUpdated } = productPackages[pkg];

    return {
      package: pkg,
      status: getStatus(lgVersion, version),
      type: getType(pkg),
      version: version,
      lastUpdated: new Date(lastUpdated).toLocaleDateString(),
    };
  });

  return packages.sort((a, b) => a.status.localeCompare(b.status));
}
