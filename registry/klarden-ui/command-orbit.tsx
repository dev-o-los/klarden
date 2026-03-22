"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  LucideIcon,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  Share2,
} from "lucide-react";
import * as React from "react";

interface OrbitAction {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  color?: string;
}

interface CommandOrbitProps {
  actions?: OrbitAction[];
  className?: string;
  radius?: number;
  showLabels?: boolean;
}

const defaultActions: OrbitAction[] = [
  { icon: MessageSquare, label: "Chat", color: "text-blue-500" },
  { icon: Share2, label: "Share", color: "text-purple-500" },
  { icon: Mail, label: "Email", color: "text-rose-500" },
  { icon: Settings, label: "Config", color: "text-zinc-500" },
];

interface OrbitItemProps {
  action: OrbitAction;
  index: number;
  total: number;
  radius: number;
  wobbleX: MotionValue<number>;
  wobbleY: MotionValue<number>;
  selectedIdx: number | null;
  setSelectedIdx: (idx: number | null) => void;
  showLabels: boolean;
}

function OrbitItem({
  action,
  index,
  total,
  radius,
  wobbleX,
  wobbleY,
  selectedIdx,
  setSelectedIdx,
  showLabels,
}: OrbitItemProps) {
  const angle = (index * 360) / total - 90;
  const targetX = Math.cos((angle * Math.PI) / 180) * radius;
  const targetY = Math.sin((angle * Math.PI) / 180) * radius;

  const tx = useTransform(wobbleX, (v) => v * 0.4);
  const ty = useTransform(wobbleY, (v) => v * 0.4);

  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      animate={{
        x: targetX,
        y: targetY,
        scale: 1,
        opacity: 1,
      }}
      exit={{
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 800,
          damping: 40,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        delay: index * 0.04,
      }}
      style={{
        translateX: tx,
        translateY: ty,
        position: "absolute",
        zIndex: 70, // Increased to be above the central button (60)
        willChange: "transform",
      }}
    >
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 600, damping: 20 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSelectedIdx(index);
          if (action.onClick) action.onClick();
        }}
        className={cn(
          "group relative flex h-11 w-11 items-center justify-center rounded-xl",
          "bg-white dark:bg-zinc-900 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]",
          "border border-zinc-200 dark:border-zinc-800 transition-colors duration-200",
          selectedIdx === index
            ? "ring-2 ring-zinc-900 dark:ring-zinc-100 border-transparent"
            : "hover:border-zinc-300 dark:hover:border-zinc-700",
        )}
      >
        <action.icon
          className={cn(
            "w-5 h-5 transition-transform group-hover:scale-110",
            selectedIdx === index
              ? "text-zinc-950 dark:text-zinc-50"
              : action.color || "text-zinc-500",
          )}
        />

        {showLabels && (
          <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest shadow-2xl translate-y-1 group-hover:translate-y-0">
            {action.label}
          </span>
        )}
      </motion.button>
    </motion.div>
  );
}

export function CommandOrbit({
  actions = defaultActions,
  className,
  radius = 80,
  showLabels = true,
}: CommandOrbitProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const rectRef = React.useRef<DOMRect | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 500 };
  const wobbleX = useSpring(
    useTransform(mouseX, [-150, 150], [-15, 15]),
    springConfig,
  );
  const wobbleY = useSpring(
    useTransform(mouseY, [-150, 150], [-15, 15]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-150, 150], [10, -10]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-150, 150], [-10, 10]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current) return;
    const x = e.clientX - rectRef.current.left - rectRef.current.width / 2;
    const y = e.clientY - rectRef.current.top - rectRef.current.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rectRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex items-center justify-center p-24 select-none perspective-1000",
        className,
      )}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute rounded-full border border-zinc-200/50 dark:border-zinc-800/30 pointer-events-none"
            style={{
              width: radius * 2.1,
              height: radius * 2.1,
              x: wobbleX,
              y: wobbleY,
              willChange: "transform",
            }}
          >
            <div className="absolute inset-0 rounded-full border border-dashed border-zinc-300/10 dark:border-zinc-700/10" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen &&
          actions.map((action, index) => (
            <OrbitItem
              key={action.label}
              action={action}
              index={index}
              total={actions.length}
              radius={radius}
              wobbleX={wobbleX}
              wobbleY={wobbleY}
              selectedIdx={selectedIdx}
              setSelectedIdx={setSelectedIdx}
              showLabels={showLabels}
            />
          ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          x: wobbleX,
          y: wobbleY,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
          zIndex: 60, // Above everything
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative flex h-16 w-16 items-center justify-center rounded-full transition-shadow duration-500",
          "bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl",
          isOpen
            ? "ring-8 ring-zinc-500/5 dark:ring-zinc-100/5"
            : "hover:shadow-zinc-500/10",
        )}
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 35 }}
          className="relative z-10"
        >
          <Plus
            className="w-9 h-9 text-zinc-900 dark:text-zinc-100"
            strokeWidth={2}
          />
        </motion.div>
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-black/5 to-transparent dark:from-white/5 pointer-events-none" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false);
            setSelectedIdx(null);
          }}
          className="fixed inset-0 z-40 bg-transparent pointer-events-auto"
        />
      )}
    </div>
  );
}

const CommandOrbitDemo = () => {
  return <CommandOrbit radius={100} />;
};

export default CommandOrbitDemo;
