type ReturnObject = {
  [k in string]?: string;
};

export function leafyParser(string: string) {
  const foundPackages = string.match(/"@leafygreen-ui\/(.+?),/gs);
  const normalizedPackages = foundPackages?.map((str) =>
    str.replace(/[\\,"]/g, "")
  );

  const packageObject: ReturnObject = {};

  normalizedPackages?.forEach((leafygreenPkg) => {
    const [pkg, version] = leafygreenPkg.split(":");

    packageObject[pkg] = version.trim();
  });

  return packageObject;
}
