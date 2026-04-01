"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type RingColor =
  | "muted"
  | "primary"
  | "secondary"
  | "destructive"
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "purple"
  | "pink"
  | "orange"
  | "cyan"
  | "indigo"
  | "violet"
  | "rose"
  | "amber"
  | "lime"
  | "emerald"
  | "sky"
  | "slate"
  | "fuchsia";

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  ringColor?: RingColor;
  containerClassName?: string;
}

const ringColorMap: Record<RingColor, string> = {
  muted: "focus:ring-muted-500/20",
  primary: "focus:ring-primary/20",
  secondary: "focus:ring-secondary/20",
  destructive: "focus:ring-destructive/20",
  red: "focus:ring-red-500/20",
  blue: "focus:ring-blue-500/20",
  green: "focus:ring-green-500/20",
  yellow: "focus:ring-yellow-500/20",
  purple: "focus:ring-purple-500/20",
  pink: "focus:ring-pink-500/20",
  orange: "focus:ring-orange-500/20",
  cyan: "focus:ring-cyan-500/20",
  indigo: "focus:ring-indigo-500/20",
  violet: "focus:ring-violet-500/20",
  rose: "focus:ring-rose-500/20",
  amber: "focus:ring-amber-500/20",
  lime: "focus:ring-lime-500/20",
  emerald: "focus:ring-emerald-500/20",
  sky: "focus:ring-sky-500/20",
  slate: "focus:ring-slate-500/20",
  fuchsia: "focus:ring-fuchsia-500/20",
};

const labelColorMap: Record<RingColor, string> = {
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground",
  destructive: "text-destructive",
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-600",
  purple: "text-purple-500",
  pink: "text-pink-500",
  orange: "text-orange-500",
  cyan: "text-cyan-500",
  indigo: "text-indigo-500",
  violet: "text-violet-500",
  rose: "text-rose-500",
  amber: "text-amber-600",
  lime: "text-lime-600",
  emerald: "text-emerald-500",
  sky: "text-sky-500",
  slate: "text-slate-500",
  fuchsia: "text-fuchsia-500",
};

export function LabelInput({
  label = "",
  ringColor = "muted",
  containerClassName,
  className,
  type = "text",
  placeholder = "",
  ...props
}: LabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isPasswordType = type === "password";
  const inputType = isPasswordType ? (isVisible ? "text" : "password") : type;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
    props.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== "");
    props.onChange?.(e);
  };

  const showFloatingLabel = isFocused || hasValue || !placeholder;

  return (
    <div className={cn("relative w-full", containerClassName)}>
      <div
        className={cn(
          "relative flex items-center",
          "rounded-lg border border-input",
          "bg-transparent",
          "transition-all duration-200 ease-in-out",
          "focus-within:ring-2 focus-within:ring-offset-0",
          ringColorMap[ringColor],
          className,
        )}
      >
        {/* Floating Label */}
        <AnimatePresence>
          {showFloatingLabel && label && (
            <motion.label
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={cn(
                "absolute left-3 top-0 -translate-y-1/2",
                "px-1 text-xs font-medium",
                "bg-background",
                "pointer-events-none",
                labelColorMap[ringColor],
              )}
            >
              {label}
            </motion.label>
          )}
        </AnimatePresence>

        {/* Input Field */}
        <input
          type={inputType}
          placeholder={showFloatingLabel ? undefined : placeholder}
          className={cn(
            "w-full bg-transparent px-3 py-2 text-sm",
            "placeholder:text-muted-foreground/70",
            "outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            isPasswordType && "pr-10",
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />

        {/* Password Toggle */}
        {isPasswordType && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVisible(!isVisible)}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2",
              "p-1.5 rounded-md",
              "text-muted-foreground hover:text-foreground",
              "transition-colors",
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isVisible ? "visible" : "hidden"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isVisible ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default LabelInput;
