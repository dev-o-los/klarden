import dynamic from "next/dynamic";
import React from "react";

export const registry: Record<
  string,
  React.ComponentType<Record<string, unknown>>
> = {
  "rich-button": dynamic(() =>
    import("@/registry/klarden-ui/rich-button").then((mod) => mod.RichButton),
  ),
  "command-orbit": dynamic(() =>
    import("@/registry/klarden-ui/command-orbit").then(
      (mod) => mod.CommandOrbit,
    ),
  ),
  "orbit-context-menu": dynamic(
    () => import("@/registry/klarden-ui/orbit-context-menu"),
  ),
  accordion: dynamic(() =>
    import("@/registry/klarden-ui/accordion").then((mod) => mod.Accordion),
  ),
  "magnetic-dock": dynamic(() =>
    import("@/registry/klarden-ui/magnetic-dock").then(
      (mod) => mod.MagneticDock,
    ),
  ),
  "portal-uploader": dynamic(
    () => import("@/registry/klarden-ui/portal-uploader"),
  ),
};
