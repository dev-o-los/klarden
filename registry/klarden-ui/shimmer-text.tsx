"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

type ShimmerDirection = "ltr" | "rtl";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  direction?: ShimmerDirection;
  duration?: number;
  delay?: number;
  shimmerWidth?: number;
}

/**
 * ShimmerText - A premium text component with shimmer effect flowing within the text itself.
 * Uses background-clip: text to ensure the shimmer stays inside the text characters.
 */
export const ShimmerText = ({
  children,
  className,
  shimmerColor = "#60a5fa",
  direction = "rtl",
  duration = 2,
  delay = 0,
  shimmerWidth = 0.5,
}: ShimmerTextProps) => {
  const backgroundSize = shimmerWidth * 300;
  const startPos =
    direction === "ltr" ? `-${backgroundSize}%` : `${backgroundSize}%`;
  const endPos =
    direction === "ltr" ? `${backgroundSize}%` : `-${backgroundSize}%`;

  return (
    <motion.span
      className={cn(
        "inline-block bg-clip-text text-transparent font-bold",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, #52525b 0%, ${shimmerColor} 50%, #52525b 100%)`,
        backgroundSize: `${backgroundSize}% 100%`,
        backgroundPosition: startPos,
      }}
      animate={{
        backgroundPosition: [startPos, endPos],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  );
};
