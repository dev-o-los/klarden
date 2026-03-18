import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Showcase } from "@/components/landing/Showcase";
import { OrbitContextMenu } from "@/registry/klarden-ui/orbit-context-menu";
import { Layers } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: `${SITE_CONFIG.name} | Refined Components for Design Engineers`,
  description: SITE_CONFIG.description,
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500">
      <Navbar />

      <OrbitContextMenu>
        <main className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 pb-24">
          <Hero />
          <Showcase />

          {/* Footer Redesign */}
          <footer className="mt-32 border-t border-border pt-16 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:rotate-12">
                    <Layers size={18} />
                  </div>
                  <span className="text-lg font-black tracking-tighter uppercase">
                    {SITE_CONFIG.name.split(" ")[0]}{" "}
                    <span className="text-muted-foreground font-bold">{SITE_CONFIG.name.split(" ")[1]}</span>
                  </span>
                </div>
                <p className="text-muted-foreground text-sm max-w-xs font-medium leading-relaxed">
                  {SITE_CONFIG.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm font-medium">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    Library
                  </h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li>
                      <Link
                        href="/docs/introduction"
                        className="hover:text-primary transition-colors"
                      >
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/components/accordion"
                        className="hover:text-primary transition-colors"
                      >
                        Components
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/registry.json"
                        className="hover:text-primary transition-colors"
                      >
                        Registry
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    Social
                  </h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li>
                      <Link
                        href={SITE_CONFIG.github}
                        className="hover:text-primary transition-colors"
                      >
                        GitHub
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={SITE_CONFIG.twitter}
                        className="hover:text-primary transition-colors"
                      >
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                      >
                        Discord
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. Engineered for precision.
              </p>
              <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </OrbitContextMenu>
    </div>
  );
}
