import { ModeToggle } from "@/components/mode-toggle";
import { Github, Layers, Search } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "@/components/docs/mobile-nav";
import { getAllDocs } from "@/lib/docs";
import { SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const docs = getAllDocs();

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-border bg-background/80 backdrop-blur-xl transition-colors">
      <div className="max-w-[1400px] mx-auto flex h-16 items-center justify-between px-6 md:px-10 lg:px-12">
        <div className="flex items-center gap-4 md:gap-8">
          <MobileNav items={docs} />
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:rotate-12 transition-transform">
              <Layers size={18} />
            </div>
            <span className="text-sm md:text-lg font-black tracking-tighter uppercase text-foreground">
              {SITE_CONFIG.name.split(" ")[0]}{" "}
              <span className="text-muted-foreground font-bold">
                {SITE_CONFIG.name.split(" ")[1]}
              </span>
            </span>
          </Link>
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <Link
              href="/docs/introduction"
              className="hover:text-primary transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/docs/components/accordion"
              className="hover:text-primary transition-colors"
            >
              Components
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary border border-border text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
            <Search size={12} />
            <span>Search</span>
            <span className="ml-4 opacity-30">⌘K</span>
          </div>
          <Link
            href={SITE_CONFIG.github}
            target="_blank"
            className="p-2 rounded-xl bg-secondary border border-border hover:border-primary/20 transition-colors text-muted-foreground hover:text-primary"
          >
            <Github size={18} />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

