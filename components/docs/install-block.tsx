"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface InstallBlockProps {
  command: string; // The base command without the manager (e.g., 'shadcn add registry/...')
}

export function InstallBlock({ command }: InstallBlockProps) {
  const [activeTab, setActiveTab] = useState<"pnpm" | "npm" | "yarn" | "bun">("pnpm");
  const [copied, setCopied] = useState(false);

  const managers = {
    pnpm: `pnpm dlx ${command}`,
    npm: `npx ${command}`,
    yarn: `yarn dlx ${command}`,
    bun: `bun x ${command}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(managers[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-4 py-2">
        <div className="flex gap-4">
          {(["pnpm", "npm", "yarn", "bun"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setActiveTab(m)}
              className={cn(
                "text-[10px] font-black uppercase tracking-widest transition-colors",
                activeTab === m 
                  ? "text-zinc-900 dark:text-zinc-50" 
                  : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              )}
            >
              {m}
            </button>
          ))}
        </div>
        <button
          onClick={copyToClipboard}
          className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-4 font-mono text-sm text-zinc-700 dark:text-zinc-300 overflow-x-auto whitespace-nowrap">
        <span className="text-zinc-400 select-none">$ </span>
        {managers[activeTab]}
      </div>
    </div>
  );
}
