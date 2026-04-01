"use client";

import { LabelInput } from "@/registry/klarden-ui/label-input";

export default function LabelInputDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <LabelInput
        label="Username"
        type="text"
        placeholder="Enter your username"
        ringColor="blue"
        className="w-full max-w-sm"
      />
    </div>
  );
}
