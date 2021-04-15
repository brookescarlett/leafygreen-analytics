import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/core";
import { leafyParser } from "utils/leafyParser";
import { Product } from "utils/types";
import { findOrAddPackage } from "database/updateDb";

const { MONGODB_OWNER, ATLAS, CHARTS, REALM, UNIVERSITY } = process.env;

const repositoryMap: Record<
  Product,
  { owner: string; repo: string; path: string }
> = {
  charts: {
    owner: MONGODB_OWNER as string,
    repo: CHARTS as string,
    path: "package.json",
  },
  atlas: {
    owner: MONGODB_OWNER as string,
    repo: ATLAS as string,
    path: "/client/package.json",
  },
  realm: {
    owner: MONGODB_OWNER as string,
    repo: REALM as string,
    path: "package.json",
  },
  docs: {
    owner: "mongodb",
    repo: "snooty",
    path: "package.json",
  },
  evergreen: {
    owner: "evergreen-ci",
    repo: "spruce",
    path: "package.json",
  },
  devhub: {
    owner: "mongodb",
    repo: "devhub",
    path: "package.json",
  },
  university: {
    owner: MONGODB_OWNER as string,
    repo: UNIVERSITY as string,
    path: "package.json",
  },
};

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH,
});

interface ResponseData {
  name: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  Object.keys(repositoryMap).forEach(async (product) => {
    const { owner, repo, path } = repositoryMap[product as Product];

    let octokitResponse;

    try {
      octokitResponse = await octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}",
        {
          owner,
          repo,
          path,
        }
      );
    } catch (err) {
      return res.status(405).end();
    }

    if (!octokitResponse) {
      return res.status(405).end();
    }

    const { data } = octokitResponse;

    // @ts-expect-error content and encoding can exist on data
    if (!data.content || !data.encoding) {
      res.status(405).end();
    }

    const response = JSON.stringify(
      // @ts-expect-error content and encoding can exist on data
      Buffer.from(data.content, data.encoding).toString()
    );

    const packages = leafyParser(response);

    Object.keys(packages).forEach(async (pkg) => {
      await findOrAddPackage(product, pkg, packages[pkg] as string);
    });
  });

  res.status(200).json({ name: "success" });
};
