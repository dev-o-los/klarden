"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/klarden-ui/accordion";
import { CommandOrbit } from "@/registry/klarden-ui/command-orbit";
import { MagneticDock } from "@/registry/klarden-ui/magnetic-dock";
import { OrbitContextMenu } from "@/registry/klarden-ui/orbit-context-menu";
import { PortalUploader } from "@/registry/klarden-ui/portal-uploader";
import { RichButton } from "@/registry/klarden-ui/rich-button";
import {
  Bell,
  Check,
  ChevronRight,
  Code,
  Heart,
  Layers,
  Layout,
  MousePointer2,
  Settings,
  Upload,
  Zap,
} from "lucide-react";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 pb-32">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <header className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex items-center gap-3 text-zinc-400">
            <Layers size={20} />
            <span className="text-sm font-black uppercase tracking-[0.3em]">
              Component Registry
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50">
            KLARDEN <span className="text-zinc-400">LABS</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg">
            An interactive testing environment for the Klarden UI ecosystem.
          </p>
        </header>

        {/* Rich Button Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 font-bold text-xl tracking-tight">
            <Zap className="text-amber-500" size={24} />
            <h2>Rich Button</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                Sizes & Defaults
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <RichButton size="sm">Small Action</RichButton>
                <RichButton>Default Button</RichButton>
                <RichButton size="lg">Large Module</RichButton>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                Color Palette
              </h3>
              <div className="flex flex-wrap gap-4">
                <RichButton color="blue">
                  <Layout size={16} className="mr-2" /> Blueprint
                </RichButton>
                <RichButton color="emerald">
                  <Check size={16} className="mr-2" /> Success
                </RichButton>
                <RichButton color="rose">
                  <Heart size={16} className="mr-2" /> Favorite
                </RichButton>
                <RichButton color="purple">
                  <Bell size={16} className="mr-2" /> Notify
                </RichButton>
                <RichButton color="orange">
                  <Settings size={16} className="mr-2" /> Settings
                </RichButton>
                <RichButton color="teal">Teal Core</RichButton>
              </div>
            </div>
          </div>
        </section>

        {/* Command Orbit Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 font-bold text-xl tracking-tight">
            <Code className="text-blue-500" size={24} />
            <h2>Command Orbit</h2>
          </div>

          <div className="relative overflow-hidden bg-white dark:bg-zinc-900/50 p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center min-h-[400px]">
            <div className="absolute top-6 left-6 text-xs font-medium text-zinc-400 flex items-center gap-2">
              <MousePointer2 size={12} /> Click the central + to expand
            </div>
            <CommandOrbit radius={100} />
          </div>
        </section>

        {/* Accordion Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 font-bold text-xl tracking-tight">
            <Layers className="text-purple-500" size={24} />
            <h2>Premium Accordion</h2>
          </div>

          <div className="max-w-2xl bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold">
                      01
                    </span>
                    Architecture Strategy
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-zinc-500 dark:text-zinc-400 space-y-4">
                    <p>
                      Our component architecture prioritizes low-level
                      primitives combined with high-level motion orchestration.
                      This allows for both rapid development and extreme
                      customization.
                    </p>
                    <RichButton size="sm" color="blue" className="h-7">
                      View Docs
                    </RichButton>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold">
                      02
                    </span>
                    Motion Guidelines
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  We utilize a Physics-First approach to motion, preferring
                  spring dynamics over fixed-duration easings. This creates a
                  tactile, responsive feel that mimics physical objects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold">
                      03
                    </span>
                    Developer Experience
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Every component is built with TypeScript for maximum safety
                  and self-documentation. We ensure that props are intuitive and
                  follow standard React patterns.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Orbit Context Menu Info */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 font-bold text-xl tracking-tight">
            <ChevronRight className="text-emerald-500" size={24} />
            <h2>Orbit Context Menu</h2>
          </div>

          <OrbitContextMenu className="rounded-3xl overflow-hidden">
            <div className="p-12 border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 flex flex-col items-center justify-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shadow-inner">
                <MousePointer2 className="text-zinc-400" size={32} />
              </div>
              <div className="space-y-2">
                <p className="text-zinc-900 dark:text-zinc-50 font-bold text-lg">
                  Right-click ONLY in this zone
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
                  The Orbit Context Menu is now scoped. It will not trigger if
                  you right-click outside this dashed area.
                </p>
              </div>
            </div>
          </OrbitContextMenu>
        </section>

        {/* Magnetic Dock Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 font-bold text-xl tracking-tight">
            <MousePointer2 className="text-rose-500" size={24} />
            <h2>Magnetic Dock</h2>
          </div>

          <div className="relative h-48 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
            <div className="absolute top-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Interactive Dock System
            </div>
            <MagneticDock className="mb-4" />
          </div>
        </section>

        {/* Portal Uploader Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50 font-bold text-xl tracking-tight">
            <Upload className="text-blue-500" size={24} />
            <h2>Portal Uploader</h2>
          </div>

          <div className="relative h-[400px] bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
            <div className="absolute top-6 left-6 text-xs font-medium text-zinc-400">
              Drag and drop a file into the orb
            </div>
            <PortalUploader />
          </div>
        </section>
      </div>
    </div>
  );
}
