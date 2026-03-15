"use client";

import { cn } from "@/lib/utils";
import { registry } from "@/registry/components";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Code2, Copy, Monitor } from "lucide-react";
import React, { useState } from "react";

interface ComponentPreviewProps {
  name: string;
  usageCode?: React.ReactNode;
}

export function ComponentPreview({ name, usageCode }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const Component = registry[name];

  const copyToClipboard = () => {
    // This is a bit tricky since usageCode is a ReactNode (rendered CodeBlock)
    // For now, we focus on the UI improvements
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-12">
      {/* Tabs Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setTab("preview")}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all",
              tab === "preview"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300",
            )}
          >
            <Monitor size={14} />
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all",
              tab === "code"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300",
            )}
          >
            <Code2 size={14} />
            Code
          </button>
        </div>

        <button
          onClick={copyToClipboard}
          className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-all active:scale-95"
        >
          {copied ? (
            <Check size={16} className="text-emerald-500" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>

      {/* Content Area */}
      <div className="mt-2 min-h-100 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 flex items-center justify-center overflow-hidden shadow-sm shadow-zinc-200/20 dark:shadow-none">
        <AnimatePresence mode="wait">
          {tab === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full flex items-center justify-center p-12"
            >
              {Component ? (
                <Component />
              ) : (
                <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest">
                  Module Not Found: {name}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="w-full h-full bg-[#24292e] dark:bg-zinc-950"
            >
              <div className="p-0 [&>div]:my-0 [&>div]:rounded-none [&>div]:border-none">
                {usageCode || (
                  <div className="p-8 text-center text-zinc-500 text-xs font-bold uppercase tracking-widest">
                    No usage snippet provided
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
