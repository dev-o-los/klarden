"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

type Color =
  | "default"
  | "blue"
  | "purple"
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "cyan"
  | "indigo"
  | "violet"
  | "rose"
  | "amber"
  | "lime"
  | "sky"
  | "emerald"
  | "fuchsia";

interface RichButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: "sm" | "default" | "lg";
  asChild?: boolean;
}

const colorConfig: Record<Color, { bg: string; border: string; text: string }> =
  {
    // Inverse Logic: Black on White background, White on Black background
    default: {
      bg: "bg-zinc-900 dark:bg-zinc-100",
      border: "border-zinc-700 dark:border-zinc-400",
      text: "text-zinc-100 dark:text-zinc-900",
    },
    blue: { bg: "bg-blue-600", border: "border-blue-800", text: "text-white" },
    purple: {
      bg: "bg-purple-600",
      border: "border-purple-800",
      text: "text-white",
    },
    emerald: {
      bg: "bg-emerald-600",
      border: "border-emerald-800",
      text: "text-white",
    },
    red: { bg: "bg-red-600", border: "border-red-800", text: "text-white" },
    pink: { bg: "bg-pink-600", border: "border-pink-800", text: "text-white" },
    orange: {
      bg: "bg-orange-500",
      border: "border-orange-700",
      text: "text-white",
    },
    yellow: {
      bg: "bg-yellow-400",
      border: "border-yellow-600",
      text: "text-zinc-950",
    },
    green: {
      bg: "bg-green-600",
      border: "border-green-800",
      text: "text-white",
    },
    teal: { bg: "bg-teal-600", border: "border-teal-800", text: "text-white" },
    cyan: {
      bg: "bg-cyan-500",
      border: "border-cyan-700",
      text: "text-zinc-950",
    },
    indigo: {
      bg: "bg-indigo-600",
      border: "border-indigo-800",
      text: "text-white",
    },
    violet: {
      bg: "bg-violet-600",
      border: "border-violet-800",
      text: "text-white",
    },
    rose: { bg: "bg-rose-600", border: "border-rose-800", text: "text-white" },
    amber: {
      bg: "bg-amber-500",
      border: "border-amber-700",
      text: "text-white",
    },
    lime: {
      bg: "bg-lime-500",
      border: "border-lime-700",
      text: "text-zinc-950",
    },
    sky: { bg: "bg-sky-500", border: "border-sky-700", text: "text-white" },
    fuchsia: {
      bg: "bg-fuchsia-600",
      border: "border-fuchsia-800",
      text: "text-white",
    },
  };

const sizeStyles: Record<"sm" | "default" | "lg", string> = {
  sm: "h-8 px-3 text-[11px] gap-1.5",
  default: "h-10 px-5 text-[13px] gap-2",
  lg: "h-12 px-8 text-[15px] gap-2.5",
};

const RichButton = React.forwardRef<HTMLButtonElement, RichButtonProps>(
  (
    {
      className,
      color = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const colors = colorConfig[color];

    return (
      <Comp
        ref={ref}
        className={cn(
          "group relative cursor-pointer inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200",
          "rounded-xl border-b-2 border-r-2 border-l border-t active:scale-[0.98]",
          "hover:border-b hover:border-r hover:translate-x-px hover:translate-y-px",
          "active:border-b-0 active:border-r-0 active:translate-x-0.5 active:translate-y-0.5 active:shadow-inner",
          "shadow-lg shadow-black/20 dark:shadow-white/10",
          colors.bg,
          colors.border,
          colors.text,
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      </Comp>
    );
  },
);

RichButton.displayName = "RichButton";

const RichButtonDemo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <RichButton color="default">Default</RichButton>
      <RichButton color="blue">Blue</RichButton>
      <RichButton color="purple">Purple</RichButton>
      <RichButton color="emerald">Emerald</RichButton>
      <RichButton color="rose">Rose</RichButton>
      <RichButton color="amber">Amber</RichButton>
    </div>
  );
};

export { RichButton, RichButtonDemo };
export default RichButtonDemo;
