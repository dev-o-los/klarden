"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface SliderProps {
  /** Current progress value in seconds */
  value: number;
  /** Maximum value in seconds (total duration) */
  max: number;
  /** Callback when value changes */
  onValueChange?: (value: number) => void;
  /** Callback when dragging ends */
  onValueCommit?: (value: number) => void;
  /** Show remaining time as negative (true) or total duration as positive (false) */
  showRemaining?: boolean;
  /** Vertical gap between track and time display (Tailwind spacing token, e.g. "2", "4") */
  gap?: string;
  /** Color variant for the track fill and thumb */
  color?:
    | "default"
    | "blue"
    | "purple"
    | "pink"
    | "red"
    | "orange"
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
  /** Thumb shape variant */
  thumb?: "circle" | "square" | "diamond" | "rounded" | "line";
  /** Whether the slider is disabled */
  disabled?: boolean;
  className?: string;
}

function formatTime(seconds: number): string {
  const absSeconds = Math.abs(seconds);
  const hours = Math.floor(absSeconds / 3600);
  const minutes = Math.floor((absSeconds % 3600) / 60);
  const secs = Math.floor(absSeconds % 60);

  const timeStr = [minutes, secs]
    .map((v) => v.toString().padStart(2, "0"))
    .join(":");

  return hours > 0 ? `${hours}:${timeStr}` : timeStr;
}

const colorStyles: Record<string, { fill: string; thumb: string; glow: string; preview: string }> = {
  default: {
    fill: "bg-foreground",
    thumb: "bg-foreground",
    glow: "currentColor",
    preview: "bg-foreground/20",
  },
  blue: {
    fill: "bg-blue-500",
    thumb: "bg-blue-500",
    glow: "#3b82f6",
    preview: "bg-blue-500/20",
  },
  purple: {
    fill: "bg-purple-500",
    thumb: "bg-purple-500",
    glow: "#a855f7",
    preview: "bg-purple-500/20",
  },
  pink: {
    fill: "bg-pink-500",
    thumb: "bg-pink-500",
    glow: "#ec4899",
    preview: "bg-pink-500/20",
  },
  red: {
    fill: "bg-red-500",
    thumb: "bg-red-500",
    glow: "#ef4444",
    preview: "bg-red-500/20",
  },
  orange: {
    fill: "bg-orange-500",
    thumb: "bg-orange-500",
    glow: "#f97316",
    preview: "bg-orange-500/20",
  },
  green: {
    fill: "bg-green-500",
    thumb: "bg-green-500",
    glow: "#22c55e",
    preview: "bg-green-500/20",
  },
  teal: {
    fill: "bg-teal-500",
    thumb: "bg-teal-500",
    glow: "#14b8a6",
    preview: "bg-teal-500/20",
  },
  cyan: {
    fill: "bg-cyan-500",
    thumb: "bg-cyan-500",
    glow: "#06b6d4",
    preview: "bg-cyan-500/20",
  },
  indigo: {
    fill: "bg-indigo-500",
    thumb: "bg-indigo-500",
    glow: "#6366f1",
    preview: "bg-indigo-500/20",
  },
  violet: {
    fill: "bg-violet-500",
    thumb: "bg-violet-500",
    glow: "#8b5cf6",
    preview: "bg-violet-500/20",
  },
  rose: {
    fill: "bg-rose-500",
    thumb: "bg-rose-500",
    glow: "#f43f5e",
    preview: "bg-rose-500/20",
  },
  amber: {
    fill: "bg-amber-500",
    thumb: "bg-amber-500",
    glow: "#f59e0b",
    preview: "bg-amber-500/20",
  },
  lime: {
    fill: "bg-lime-500",
    thumb: "bg-lime-500",
    glow: "#84cc16",
    preview: "bg-lime-500/20",
  },
  sky: {
    fill: "bg-sky-500",
    thumb: "bg-sky-500",
    glow: "#0ea5e9",
    preview: "bg-sky-500/20",
  },
  emerald: {
    fill: "bg-emerald-500",
    thumb: "bg-emerald-500",
    glow: "#10b981",
    preview: "bg-emerald-500/20",
  },
  fuchsia: {
    fill: "bg-fuchsia-500",
    thumb: "bg-fuchsia-500",
    glow: "#d946ef",
    preview: "bg-fuchsia-500/20",
  },
};

export function Slider({
  value,
  max,
  onValueChange,
  onValueCommit,
  showRemaining = true,
  gap = "1",
  color = "default",
  thumb = "circle",
  disabled = false,
  className,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  // Clamp value between 0 and max
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = max > 0 ? (clampedValue / max) * 100 : 0;
  const remainingTime = max - clampedValue;

  const getValueFromPosition = useCallback(
    (clientX: number): number => {
      if (!trackRef.current) return 0;
      const rect = trackRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const ratio = x / rect.width;
      return Math.round(ratio * max);
    },
    [max],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (disabled) return;
      e.preventDefault();
      setIsDragging(true);
      const newValue = getValueFromPosition(e.clientX);
      onValueChange?.(newValue);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [disabled, getValueFromPosition, onValueChange],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (disabled) return;
      const newValue = getValueFromPosition(e.clientX);
      if (isDragging) {
        onValueChange?.(newValue);
      } else {
        setHoverValue(newValue);
      }
    },
    [isDragging, disabled, getValueFromPosition, onValueChange],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) {
        setHoverValue(null);
        return;
      }
      setIsDragging(false);
      const newValue = getValueFromPosition(e.clientX);
      onValueCommit?.(newValue);
    },
    [isDragging, getValueFromPosition, onValueCommit],
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setHoverValue(null);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;

      const step = max > 600 ? 10 : 1;
      let newValue = clampedValue;

      switch (e.key) {
        case "ArrowRight":
          newValue = Math.min(clampedValue + step, max);
          break;
        case "ArrowLeft":
          newValue = Math.max(clampedValue - step, 0);
          break;
        case "Home":
          newValue = 0;
          break;
        case "End":
          newValue = max;
          break;
        default:
          return;
      }

      e.preventDefault();
      onValueChange?.(newValue);
      onValueCommit?.(newValue);
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("keydown", handleKeyDown);
      return () => track.removeEventListener("keydown", handleKeyDown);
    }
  }, [clampedValue, max, disabled, onValueChange, onValueCommit]);

  const displayValue =
    isHovering && hoverValue !== null
      ? Math.max(0, Math.min(hoverValue, max))
      : clampedValue;

  // Map spacing token to px values
  const gapPx: Record<string, number> = {
    "0": 0,
    "1": 4,
    "2": 8,
    "3": 12,
    "4": 16,
    "5": 20,
    "6": 24,
    "8": 32,
  };
  const gapValue = gapPx[gap] ?? 8;
  const colors = colorStyles[color] ?? colorStyles.default;

  return (
    <div className={cn("w-full", className)} style={{ display: "flex", flexDirection: "column", gap: gapValue }}>
      {/* Track */}
      <div
        ref={trackRef}
        className="relative group cursor-pointer select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={clampedValue}
        tabIndex={0}
      >
        {/* Glow effect behind track */}
        <div
          className="absolute inset-y-0 left-0 -inset-x-1 rounded-full blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${colors.glow}, transparent)`,
          }}
        />

        {/* Background track */}
        <div className="relative h-1 rounded-full bg-muted/50 backdrop-blur-sm">
          {/* Filled portion */}
          <div
            className={cn("absolute inset-y-0 left-0 rounded-full transition-[width] duration-75 ease-out", colors.fill)}
            style={{ width: `${percentage}%` }}
          />

          {/* Hover preview fill */}
          {isHovering && hoverValue !== null && !isDragging && (
            <div
              className={cn("absolute inset-y-0 left-0 rounded-full transition-none", colors.preview)}
              style={{
                width: `${(Math.max(0, Math.min(hoverValue, max)) / max) * 100}%`,
              }}
            />
          )}

          {/* Thumb */}
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
              "transition-all duration-150 ease-out",
              colors.thumb,
              isDragging && "scale-125",
              !isDragging && isHovering && "scale-110",
              !isHovering && "scale-0",
              thumb === "circle" && "h-4 w-4 rounded-full",
              thumb === "square" && "h-4 w-4 rounded-none",
              thumb === "diamond" && "h-[18px] w-[18px] rotate-45 rounded-sm",
              thumb === "rounded" && "h-4 w-4 rounded-lg",
              thumb === "line" && "h-5 w-1 rounded-full",
            )}
            style={{ left: `${percentage}%` }}
          >
            {thumb !== "line" && (
              <div className={cn(
                "absolute inset-[3px] bg-background",
                thumb === "circle" && "rounded-full",
                thumb === "square" && "rounded-none",
                thumb === "diamond" && "rounded-sm rotate-[-45deg]",
                thumb === "rounded" && "rounded-[3px]",
              )} />
            )}
          </div>
        </div>
      </div>

      {/* Time display */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono tabular-nums text-muted-foreground/60 transition-colors duration-150">
          {formatTime(displayValue)}
        </span>
        <span className="text-xs font-mono tabular-nums text-muted-foreground/60">
          {showRemaining ? `-${formatTime(remainingTime)}` : formatTime(max)}
        </span>
      </div>
    </div>
  );
}
