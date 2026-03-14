// @ts-nocheck
import { default as __fd_glob_2 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_1 from "../content/docs/orbit-button.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "content/docs", {"index.mdx": __fd_glob_0, "orbit-button.mdx": __fd_glob_1, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_2, });