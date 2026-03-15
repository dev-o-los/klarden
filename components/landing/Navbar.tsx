import { ModeToggle } from "@/components/mode-toggle";
import { Github, Layers, Search } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl transition-colors">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 group-hover:rotate-12 transition-transform">
              <Layers size={18} />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase text-zinc-900 dark:text-zinc-50">
              Klarden <span className="text-zinc-500 font-bold">UI</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <Link
              href="/docs/introduction"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/docs/components/accordion"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Components
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
            <Search size={12} />
            <span>Search</span>
            <span className="ml-4 opacity-30">⌘K</span>
          </div>
          <Link
            href="https://github.com/dev-o-los/klarden-ui"
            target="_blank"
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <Github size={18} />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
