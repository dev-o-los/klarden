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
import { motion, type Variants } from "framer-motion";
import { Layout, MousePointer2, Zap } from "lucide-react";

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

      {/* Rich Button showcase */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-12 group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 md:p-10 shadow-sm backdrop-blur-sm transition-colors duration-500"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-background border border-border text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-2 w-fit mx-auto md:mx-0 shadow-xs">
              <Zap size={10} /> Varieties
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-2">
              3D Rich Buttons
            </h3>
            <p className="text-muted-foreground text-sm font-medium italic">
              Tactile depth with modern aesthetics.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <RichButton color="blue" size="sm" className="rounded-xl px-5">
              Primary
            </RichButton>
            <RichButton color="emerald" size="sm" className="rounded-xl px-5">
              Success
            </RichButton>
            <RichButton color="purple" size="sm" className="rounded-xl px-5">
              Purple
            </RichButton>
            <RichButton color="rose" size="sm" className="rounded-xl px-5">
              Warning
            </RichButton>
            <RichButton color="amber" size="sm" className="rounded-xl px-5">
              Caution
            </RichButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
