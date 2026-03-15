import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Showcase } from "@/components/landing/Showcase";
import { OrbitContextMenu } from "@/registry/klarden-ui/orbit-context-menu";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Klarden UI | Refined Components for Design Engineers",
  description:
    "A curated collection of high-quality React components designed with fluid motion and tactile precision. Built for modern design engineers.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-950 transition-colors duration-500">
      <Navbar />

      <OrbitContextMenu>
        <main className="container mx-auto px-4 md:px-8 pb-32">
          <Hero />
          <Showcase />

          {/* Footer Decor */}
          <footer className="mt-40 text-center space-y-6 pb-12">
            <div className="flex items-center justify-center gap-2 text-zinc-600 text-[9px] font-bold uppercase tracking-[0.5em]">
              <Layers size={14} /> Refined Ecosystem
            </div>
            <div className="h-px w-12 bg-zinc-800 mx-auto" />
            <p className="text-zinc-500 text-xs font-medium">
              © 2026 Klarden UI. Engineered for tactile precision.
            </p>
          </footer>
        </main>
      </OrbitContextMenu>
    </div>
  );
}
