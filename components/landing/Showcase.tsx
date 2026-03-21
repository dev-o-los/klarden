"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/klarden-ui/accordion";
import { CommandOrbit } from "@/registry/klarden-ui/command-orbit";
import { MagneticDock } from "@/registry/klarden-ui/magnetic-dock";
import { PortalUploader } from "@/registry/klarden-ui/portal-uploader";
import { RichButton } from "@/registry/klarden-ui/rich-button";
import { TactileHighlight } from "@/registry/klarden-ui/tactile-highlight";
import { motion, type Variants } from "framer-motion";
import { Layout, MousePointer2, Type, Zap } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Showcase() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6"
    >
      {/* Command Orbit */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-8 group relative overflow-hidden rounded-3xl border border-border bg-card/50 shadow-sm backdrop-blur-sm transition-colors duration-500"
      >
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background border border-border text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-2 w-fit shadow-xs">
            <MousePointer2 size={10} /> Interactive
          </div>
          <h3 className="text-xl font-black tracking-tight">Command Orbit</h3>
        </div>
        <div className="flex items-center justify-center min-h-100 p-6">
          <CommandOrbit radius={90} className="scale-75 sm:scale-100" />
        </div>
      </motion.div>

      {/* Portal Uploader */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-border bg-card/50 shadow-sm backdrop-blur-sm transition-colors duration-500"
      >
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background border border-border text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-2 w-fit shadow-xs">
            <Zap size={10} /> Portal
          </div>
          <h3 className="text-xl font-black tracking-tight">Uploader</h3>
        </div>
        <div className="flex items-center justify-center min-h-100 p-6">
          <PortalUploader className="p-0 scale-90 sm:scale-100" />
        </div>
      </motion.div>

      {/* Accordion */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-5 group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-6 md:p-8 shadow-sm backdrop-blur-sm transition-colors duration-500"
      >
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background border border-border text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-4 w-fit shadow-xs">
          <Layout size={10} /> Structure
        </div>
        <h3 className="text-xl font-black tracking-tight mb-6">
          Tactile Accordion
        </h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="i1" className="border-border">
            <AccordionTrigger className="text-sm font-bold">
              Design Philosophy
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground font-medium">
              Focus on low-level primitives for maximum control and performance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="i2" className="border-border">
            <AccordionTrigger className="text-sm font-bold">
              Motion Engineering
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground font-medium">
              Optimized spring physics for a high-end interaction feel.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Magnetic Dock */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-7 group relative overflow-hidden rounded-3xl border border-border bg-card/50 flex flex-col items-center justify-center p-6 md:p-10 shadow-sm backdrop-blur-sm transition-colors duration-500"
      >
        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background border border-border text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-2 w-fit shadow-xs">
            <MousePointer2 size={10} /> Proximity
          </div>
          <h3 className="text-xl font-black tracking-tight">Magnetic Dock</h3>
        </div>
        <div className="mt-20 md:mt-12 scale-75 sm:scale-90 lg:scale-100">
          <MagneticDock magnification={70} distance={120} />
        </div>
      </motion.div>

      {/* Tactile Text showcase */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-6 group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 md:p-10 shadow-sm backdrop-blur-sm transition-colors duration-500 flex flex-col min-h-70"
      >
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background border border-border text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-2 w-fit shadow-xs">
          <Type size={10} /> Typography
        </div>
        <h3 className="text-xl font-black tracking-tight mb-4">Tactile Text</h3>
        <div className="flex-1 flex items-center justify-center py-6 px-4">
          <div className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 text-center leading-tight">
            Build{" "}
            <TactileHighlight direction="left">
              Better Interfaces
            </TactileHighlight>
          </div>
        </div>
      </motion.div>

      {/* Glossy Buttons showcase */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-6 group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 md:p-10 shadow-sm backdrop-blur-sm transition-colors duration-500 flex flex-col min-h-70"
      >
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background border border-border text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-2 w-fit shadow-xs">
          <Zap size={10} /> Varieties
        </div>
        <h3 className="text-xl font-black tracking-tight mb-2">
          Glossy Buttons
        </h3>

        <div className="flex-1 flex flex-wrap items-center justify-center gap-4">
          <RichButton color="blue" size="sm" className="rounded-xl px-4">
            Primary
          </RichButton>
          <RichButton color="emerald" size="sm" className="rounded-xl px-4">
            <Zap size={14} className="mr-2" /> Success
          </RichButton>
          <RichButton color="purple" size="sm" className="rounded-xl px-4">
            Purple
          </RichButton>
          <RichButton color="default" size="sm" className="rounded-xl">
            Dark
          </RichButton>
        </div>
      </motion.div>
    </motion.div>
  );
}
