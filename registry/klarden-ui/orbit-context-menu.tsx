"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Copy,
  LucideIcon,
  MousePointer2,
  Pencil,
  Share2,
  Trash2,
  X,
} from "lucide-react";
import React, { useCallback, useRef, useState } from "react";

interface Action {
  id: string;
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  color?: string;
}

interface OrbitContextMenuProps {
  children: React.ReactNode;
  actions?: Action[];
  className?: string;
}

const defaultActions: Action[] = [
  { id: "edit", icon: Pencil, label: "Edit", color: "text-blue-500" },
  { id: "copy", icon: Copy, label: "Copy", color: "text-zinc-500" },
  { id: "share", icon: Share2, label: "Share", color: "text-purple-500" },
  { id: "delete", icon: Trash2, label: "Delete", color: "text-rose-500" },
];

const OrbitContextMenu = ({
  children,
  actions = defaultActions,
  className,
}: OrbitContextMenuProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setVisible(true);
  }, []);

  const closeMenu = useCallback(() => {
    setVisible(false);
    setHoveredAction(null);
  }, []);

  return (
    <div
      ref={containerRef}
      onContextMenu={handleContextMenu}
      className={cn("relative w-full h-full", className)}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <div
            className="absolute z-50 flex items-center justify-center pointer-events-none"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          >
            {/* Overlay to catch clicks and close */}
            <div 
              className="fixed inset-0 pointer-events-auto" 
              onClick={closeMenu}
              onContextMenu={(e) => {
                e.preventDefault();
                closeMenu();
              }}
            />
            <motion.div
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
              className="absolute w-40 h-40 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-full"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 100% 0, 0 0, 0 50%)",
              }}
            />

            {/* Central Orb */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={closeMenu}
              whileHover="hover"
              className="relative z-10 p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl pointer-events-auto group"
            >
              <motion.div variants={{ hover: { rotate: 90 } }}>
                <X size={18} className="text-zinc-500 dark:text-zinc-400" />
              </motion.div>
            </motion.button>

            {/* Orbiting Actions in an Arc */}
            {actions.map((action, index) => {
              // Arrange in a 180-degree arc (top half)
              const total = actions.length;
              const angleRange = 160; // Total arc spread
              const startAngle = -170; // Starting angle
              const angle = startAngle + (index * angleRange) / (total - 1);

              const radius = 70;
              const radian = (angle * Math.PI) / 180;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;

              return (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: 1, x, y, scale: 1 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  transition={{
                    delay: index * 0.03,
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                  className="absolute pointer-events-auto"
                  onMouseEnter={() => setHoveredAction(action.id)}
                  onMouseLeave={() => setHoveredAction(null)}
                >
                  <motion.button
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 group relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      action.onClick?.();
                      closeMenu();
                    }}
                  >
                    <action.icon
                      size={16}
                      className={cn(
                        "transition-colors",
                        hoveredAction === action.id
                          ? "text-zinc-900 dark:text-zinc-100"
                          : action.color || "text-zinc-500",
                      )}
                    />

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredAction === action.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 5, x: "-50%" }}
                          animate={{ opacity: 1, y: -35, x: "-50%" }}
                          exit={{ opacity: 0, y: 5, x: "-50%" }}
                          className="absolute left-1/2 px-2 py-1 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 text-[9px] font-black uppercase tracking-widest rounded-md whitespace-nowrap z-20 pointer-events-none shadow-2xl"
                        >
                          {action.label}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { OrbitContextMenu };
