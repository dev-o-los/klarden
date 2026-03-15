"use client";

import { DocMetadata } from "@/lib/docs";
import { cn } from "@/lib/utils";
import { Compass, Layout, LucideIcon, Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarProps {
  items: DocMetadata[];
}

const categoryIcons: Record<string, LucideIcon> = {
  "Getting Started": Rocket,
  Components: Layout,
  General: Compass,
};

export function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname();

  // Group items by category
  const categories = items.reduce(
    (acc, item) => {
      const category = item.category || "General";
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, DocMetadata[]>,
  );

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto">
      <div className="h-full py-6 pr-6 lg:py-8">
        {Object.entries(categories).map(([category, docs]) => {
          const Icon = categoryIcons[category] || Compass;
          return (
            <div key={category} className="pb-8">
              <div className="flex items-center gap-2 mb-2 px-2">
                <Icon size={14} className="text-zinc-400" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {category}
                </h4>
              </div>
              <div className="grid grid-flow-row auto-rows-max text-sm gap-1">
                {docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 transition-all",
                      pathname === `/docs/${doc.slug}`
                        ? "bg-zinc-100 dark:bg-zinc-900 font-bold text-zinc-900 dark:text-zinc-50 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300",
                    )}
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
