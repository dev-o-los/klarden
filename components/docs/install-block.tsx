"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface InstallBlockProps {
  command: string; // The component name or full command
}

export function InstallBlock({ command }: InstallBlockProps) {
  const [activeTab, setActiveTab] = useState<"pnpm" | "npm" | "yarn" | "bun">(
    "pnpm",
  );
  const [copied, setCopied] = useState(false);

  // If command is just a component name (e.g. "accordion"), construct the full shadcn command
  // Support both namespace format (@klarden/component) and legacy format (component)
  const fullCommand = command.startsWith("shadcn")
    ? command.replace("https://klarden-ui.com", SITE_CONFIG.url)
    : command.startsWith("@klarden/")
      ? `shadcn add ${command}`
      : `shadcn add ${SITE_CONFIG.url}/r/${command}.json`;

  const managers = {
    pnpm: `pnpm dlx ${fullCommand}`,
    npm: `npx ${fullCommand}`,
    yarn: `yarn dlx ${fullCommand}`,
    bun: `bun x ${fullCommand}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(managers[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-4 py-2.5">
        <div className="flex items-center gap-1">
          {(["pnpm", "npm", "yarn", "bun"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setActiveTab(m)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-all duration-200",
                activeTab === m
                  ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50",
              )}
            >
              {m}
            </button>
          ))}
        </div>
        <button
          onClick={copyToClipboard}
          className={cn(
            "p-2 rounded-lg transition-all duration-200",
            "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50",
            copied && "text-emerald-500",
          )}
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      {/* Command output */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        <div className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
          <span className="text-zinc-400 dark:text-zinc-600 font-bold select-none shrink-0">
            $
          </span>
          <span className="break-all">{managers[activeTab]}</span>
        </div>
      </div>
    </div>
  );
}
