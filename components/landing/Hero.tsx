"use client";

import { RichButton } from "@/registry/klarden-ui/rich-button";
import { motion } from "framer-motion";
import { ArrowRight, Layout } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center space-y-10 pt-24 pb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 backdrop-blur-sm"
      >
        <div className="h-1 w-1 rounded-full bg-emerald-500" />
        Curated for Design Engineers
      </motion.div>

      <div className="space-y-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-50"
        >
          Refined UI components for <br />
          <span className="font-serif italic text-zinc-500 dark:text-zinc-400">
            modern interfaces
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-medium leading-relaxed tracking-tight"
        >
          An ecosystem of high-end React components.{" "}
          <br className="hidden md:block" />
          Engineered with precision motion and tactile feedback.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="flex flex-wrap items-center justify-center gap-5 pt-4"
      >
        <Link href="/docs/introduction">
          <RichButton
            size="default"
            color="default"
            className="rounded-full h-11 px-8 text-sm font-semibold tracking-tight border-zinc-200 dark:border-zinc-700"
          >
            Get Started <ArrowRight size={16} className="ml-2" />
          </RichButton>
        </Link>
        <Link href="/docs/components/accordion">
          <RichButton
            size="default"
            color="blue"
            className="rounded-full h-11 px-8 text-sm font-semibold tracking-tight gap-2"
          >
            <Layout size={16} className="mr-2" /> Components
          </RichButton>
        </Link>
      </motion.div>
    </div>
  );
}
