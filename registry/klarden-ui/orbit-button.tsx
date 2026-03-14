"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import React from "react";

interface OrbitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: number;
}

export const OrbitButton: React.FC<OrbitButtonProps> = ({
  className,
  size = 64,
  children,
  ...props
}) => {
  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Rotating Dotted Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ width: size * 1.4, height: size * 1.4 }}
        className="absolute border border-dotted border-zinc-300 dark:border-zinc-700 rounded-full pointer-events-none"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative flex items-center justify-center rounded-full transition-shadow duration-500",
          "bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl",
          "hover:shadow-zinc-500/10 active:shadow-inner",
          className
        )}
        style={{ width: size, height: size }}
        {...props}
      >
        <div className="relative z-10">
          {children || <Plus className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />}
        </div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-black/5 to-transparent dark:from-white/5 pointer-events-none" />
      </motion.button>
    </div>
  );
};

export default OrbitButton;
