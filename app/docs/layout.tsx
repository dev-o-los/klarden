import { Sidebar } from "@/components/docs/sidebar";
import { getAllDocs } from "@/lib/docs";
import { Github, Layers } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = getAllDocs();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Layers className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              <span className="inline-block font-black tracking-tighter text-xl">
                KLARDEN <span className="text-zinc-400 font-bold">UI</span>
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/docs/introduction"
                className="text-sm font-bold text-zinc-900 dark:text-zinc-50"
              >
                Components
              </Link>
              <Link
                href="/test"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
              >
                Labs
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/dev-o-los/klarden-ui"
              target="_blank"
            >
              <Github className="h-5 w-5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] md:gap-10 lg:gap-16">
          <Sidebar items={docs} />
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
            <div className="mx-auto w-full min-w-0 max-w-3xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
