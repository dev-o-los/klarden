import React from "react";
import { PortalUploader } from "@/registry/klarden-ui/portal-uploader";

export default function PortalUploaderDemo() {
  return (
    <div className="flex items-center justify-center p-10">
      <PortalUploader onUpload={(file) => console.log("Uploaded:", file.name)} />
    </div>
  );
}
