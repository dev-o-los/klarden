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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Command Orbit */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 shadow-2xl backdrop-blur-sm transition-colors duration-500"
      >
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-2 w-fit">
            <MousePointer2 size={10} /> Interactive
          </div>
          <h3 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">Command Orbit</h3>
        </div>
        <div className="flex items-center justify-center min-h-100">
          <CommandOrbit radius={100} />
        </div>
      </motion.div>

      {/* Portal Uploader */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 shadow-2xl backdrop-blur-sm transition-colors duration-500"
      >
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-2 w-fit">
            <Zap size={10} /> Portal
          </div>
          <h3 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">Uploader</h3>
        </div>
        <div className="flex items-center justify-center min-h-100">
          <PortalUploader className="p-0 scale-75 sm:scale-100" />
        </div>
      </motion.div>

      {/* Accordion */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-5 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 p-8 shadow-2xl backdrop-blur-sm transition-colors duration-500"
      >
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-4 w-fit">
          <Layout size={10} /> Structure
        </div>
        <h3 className="text-xl font-black tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">
          Tactile Accordion
        </h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="i1" className="border-zinc-200 dark:border-zinc-800">
            <AccordionTrigger className="text-sm">
              Design Philosophy
            </AccordionTrigger>
            <AccordionContent className="text-xs">
              Focus on low-level primitives for maximum control and performance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="i2" className="border-zinc-200 dark:border-zinc-800">
            <AccordionTrigger className="text-sm">
              Motion Engineering
            </AccordionTrigger>
            <AccordionContent className="text-xs">
              Optimized spring physics for a high-end interaction feel.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Magnetic Dock */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-7 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 flex flex-col items-center justify-center p-12 shadow-2xl backdrop-blur-sm transition-colors duration-500"
      >
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-2 w-fit">
            <MousePointer2 size={10} /> Proximity
          </div>
          <h3 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">Magnetic Dock</h3>
        </div>
        <div className="mt-8 scale-90 sm:scale-100">
          <MagneticDock magnification={80} distance={140} />
        </div>
      </motion.div>

      {/* Rich Button showcase */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-12 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20 p-10 shadow-2xl backdrop-blur-sm transition-colors duration-500"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-2 w-fit mx-auto md:mx-0">
              <Zap size={10} /> Varieties
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-2 text-zinc-900 dark:text-zinc-50">
              3D Rich Buttons
            </h3>
            <p className="text-zinc-500 text-sm font-medium italic">
              Tactile depth with modern aesthetics.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <RichButton color="blue" size="sm">
              Primary
            </RichButton>
            <RichButton color="emerald" size="sm">
              Success
            </RichButton>
            <RichButton color="purple" size="sm">
              Purple
            </RichButton>
            <RichButton color="rose" size="sm">
              Warning
            </RichButton>
            <RichButton color="amber" size="sm">
              Caution
            </RichButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
