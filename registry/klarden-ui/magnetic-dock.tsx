"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Compass,
  Folder,
  LayoutGrid,
  LucideIcon,
  MessageCircle,
  Settings,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

interface DockItem {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

interface MagneticDockProps {
  items?: DockItem[];
  className?: string;
  distance?: number;
  magnification?: number;
}

const defaultItems: DockItem[] = [
  { icon: LayoutGrid, label: "Apps" },
  { icon: Compass, label: "Explore" },
  { icon: Sparkles, label: "Assistant" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Folder, label: "Files" },
  { icon: Settings, label: "Settings" },
];

const MagneticDockItem = ({
  mouseX,
  item,
  distance,
  magnification,
}: {
  mouseX: MotionValue<number>;
  item: DockItem;
  distance: number;
  magnification: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

  const distanceTransform = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(
    distanceTransform,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  const iconSizeSync = useTransform(
    distanceTransform,
    [-distance, 0, distance],
    [18, magnification / 2.4, 18],
  );

  const size = useSpring(sizeSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconSize = useSpring(iconSizeSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onClick={item.onClick}
      className="rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30_rgba(0,0,0,0.4)] flex items-center justify-center group/dock relative cursor-pointer transition-colors duration-200 hover:border-zinc-300 dark:hover:border-zinc-700"
    >
      <motion.div style={{ width: iconSize, height: iconSize }}>
        <Icon className="w-full h-full text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 text-[9px] font-black uppercase tracking-widest rounded-md opacity-0 group-hover/dock:opacity-100 transition-all duration-300 translate-y-1 group-hover/dock:translate-y-0 whitespace-nowrap pointer-events-none shadow-2xl">
        {item.label}
      </div>
    </motion.div>
  );
};

export const MagneticDock = ({
  items = defaultItems,
  className,
  distance = 140,
  magnification = 80,
}: MagneticDockProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-fit items-end gap-3 rounded-2xl bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        className,
      )}
    >
      {items.map((item, i) => (
        <MagneticDockItem
          key={i}
          mouseX={mouseX}
          item={item}
          distance={distance}
          magnification={magnification}
        />
      ))}
    </motion.div>
  );
};
