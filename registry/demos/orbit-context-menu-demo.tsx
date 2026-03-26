import React from "react";
import { OrbitContextMenu } from "@/registry/klarden-ui/orbit-context-menu";
import { MousePointer2 } from "lucide-react";

export default function OrbitContextMenuDemo() {
  return (
    <div className="w-full max-w-sm">
      <OrbitContextMenu>
        <div className="p-12 border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 flex flex-col items-center justify-center text-center space-y-4 rounded-[2rem]">
          <div className="h-16 w-16 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shadow-inner">
            <MousePointer2 className="text-zinc-400" size={32} />
          </div>
          <div className="space-y-2">
            <p className="text-zinc-900 dark:text-zinc-50 font-bold text-lg">
              Right-click zone
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs px-4">
              The Orbit Context Menu is scoped to this area.
            </p>
          </div>
        </div>
      </OrbitContextMenu>
    </div>
  );
}
