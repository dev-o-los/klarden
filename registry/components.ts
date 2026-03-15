import dynamic from "next/dynamic";
import React from "react";

export const registry: Record<
  string,
  React.ComponentType<Record<string, unknown>>
> = {
  "rich-button": dynamic(() => import("@/registry/klarden-ui/rich-button")),
  "command-orbit": dynamic(() => import("@/registry/klarden-ui/command-orbit")),
  "orbit-context-menu": dynamic(
    () => import("@/registry/klarden-ui/orbit-context-menu"),
  ),
  accordion: dynamic(() => import("@/registry/klarden-ui/accordion")),
  "magnetic-dock": dynamic(() => import("@/registry/klarden-ui/magnetic-dock")),
  "portal-uploader": dynamic(
    () => import("@/registry/klarden-ui/portal-uploader"),
  ),
};
