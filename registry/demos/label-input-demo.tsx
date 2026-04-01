"use client";

import React from "react";
import { LabelInput } from "@/registry/klarden-ui/label-input";

export default function LabelInputDemo() {
  return (
    <div className="space-y-6 p-6 max-w-2xl mx-auto">
      {/* Basic Examples */}
      <section>
        <h3 className="text-sm font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
          Basic Examples
        </h3>
        <div className="space-y-4">
          <LabelInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
          />
          <LabelInput
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <LabelInput
            label="Username"
            placeholder="Choose a username"
          />
        </div>
      </section>

      {/* Color Variants */}
      <section>
        <h3 className="text-sm font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
          Color Variants
        </h3>
        <div className="space-y-4">
          <LabelInput
            label="Primary"
            placeholder="Blue ring"
            ringColor="blue"
          />
          <LabelInput
            label="Purple"
            placeholder="Purple ring"
            ringColor="purple"
          />
          <LabelInput
            label="Pink"
            placeholder="Pink ring"
            ringColor="pink"
          />
          <LabelInput
            label="Green"
            placeholder="Green ring"
            ringColor="green"
          />
          <LabelInput
            label="Orange"
            placeholder="Orange ring"
            ringColor="orange"
          />
          <LabelInput
            label="Rose"
            placeholder="Rose ring"
            ringColor="rose"
          />
        </div>
      </section>

      {/* Password Examples */}
      <section>
        <h3 className="text-sm font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
          Password Input with Visibility Toggle
        </h3>
        <div className="space-y-4">
          <LabelInput
            label="New Password"
            type="password"
            placeholder="Enter new password"
            ringColor="emerald"
          />
          <LabelInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            ringColor="emerald"
          />
        </div>
      </section>

      {/* States */}
      <section>
        <h3 className="text-sm font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
          States
        </h3>
        <div className="space-y-4">
          <LabelInput
            label="Disabled"
            placeholder="This field is disabled"
            disabled
          />
          <LabelInput
            label="With Ring Color"
            placeholder="Focus to see the ring"
            ringColor="violet"
          />
        </div>
      </section>
    </div>
  );
}
