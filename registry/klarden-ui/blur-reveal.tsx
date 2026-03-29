"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import * as React from "react";

interface BlurRevealTextProps {
  children: string;
  delay?: number;
  duration?: number;
  className?: string;
  blurStrength?: number;
}

export function BlurRevealText({
  children,
  delay = 0,
  duration = 0.8,
  className,
  blurStrength = 10,
}: BlurRevealTextProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = children.split(" ");

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block text-3xl sm:text-4xl font-medium", className)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.1 }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          <span className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{
                  filter: `blur(${blurStrength}px)`,
                  opacity: 0,
                }}
                animate={
                  isInView
                    ? {
                        filter: "blur(0px)",
                        opacity: 1,
                      }
                    : {}
                }
                transition={{
                  duration,
                  delay: delay + (wordIndex * 0.05 + charIndex * 0.02),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}
