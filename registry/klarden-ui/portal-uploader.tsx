"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Check, File as FileIcon, Upload } from "lucide-react";
import React, { useCallback, useState } from "react";

interface FileState {
  file: File;
  progress: number;
  status: "uploading" | "completed" | "error";
}

interface PortalUploaderProps {
  onUpload?: (file: File) => void;
  className?: string;
  accept?: string;
}

export const PortalUploader: React.FC<PortalUploaderProps> = ({
  onUpload,
  className,
  accept,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentFile, setCurrentFile] = useState<FileState | null>(null);
  const ringControls = useAnimation();

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isDragging) {
        setIsDragging(true);
        ringControls.start({
          rotate: 360,
          transition: { duration: 2, repeat: Infinity, ease: "linear" },
        });
      }
    },
    [isDragging, ringControls],
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      ringControls.stop();
    },
    [ringControls],
  );

  const simulateUpload = useCallback(
    (file: File) => {
      setCurrentFile({ file, progress: 0, status: "uploading" });

      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setCurrentFile((prev) =>
            prev ? { ...prev, progress: 100, status: "completed" } : null,
          );
          onUpload?.(file);

          // Reset after success
          setTimeout(() => setCurrentFile(null), 2000);
        } else {
          setCurrentFile((prev) => (prev ? { ...prev, progress } : null));
        }
      }, 400);
    },
    [onUpload],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      ringControls.stop();

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        simulateUpload(files[0]);
      }
    },
    [ringControls, simulateUpload],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      simulateUpload(e.target.files[0]);
    }
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center p-20",
        className,
      )}
    >
      <input
        type="file"
        id="portal-upload"
        className="hidden"
        accept={accept}
        onChange={handleFileChange}
      />

      <label
        htmlFor="portal-upload"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="relative flex items-center justify-center cursor-pointer group"
      >
        {/* Rapidly Rotating Ring (Active on Drag) */}
        <motion.div
          animate={ringControls}
          initial={{ rotate: 0 }}
          className={cn(
            "absolute w-48 h-48 border-2 border-dotted rounded-full transition-colors duration-300",
            isDragging
              ? "border-zinc-400 dark:border-zinc-500 scale-110"
              : "border-zinc-200 dark:border-zinc-800 scale-100",
          )}
        />

        {/* Outer Halo */}
        <div className="absolute w-56 h-56 border border-zinc-100 dark:border-zinc-900 rounded-full opacity-20 pointer-events-none" />

        {/* Central Orb */}
        <motion.div
          animate={isDragging ? { scale: [1, 1.05, 1] } : { scale: 1 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={cn(
            "relative z-10 w-32 h-32 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300",
            isDragging && "shadow-2xl border-zinc-300 dark:border-zinc-700",
          )}
        >
          <AnimatePresence mode="wait">
            {!currentFile ? (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center"
              >
                <Upload
                  className={cn(
                    "w-8 h-8 mb-2 transition-colors duration-300",
                    isDragging
                      ? "text-zinc-900 dark:text-zinc-100"
                      : "text-zinc-400 dark:text-zinc-500",
                  )}
                />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Drop File
                </span>
              </motion.div>
            ) : currentFile.status === "uploading" ? (
              <motion.div
                key="uploading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative flex items-center justify-center"
              >
                {/* Circular Progress Ring */}
                <svg className="w-24 h-24 -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-zinc-100 dark:text-zinc-800"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{
                      strokeDashoffset:
                        251.2 - (251.2 * currentFile.progress) / 100,
                    }}
                    className="text-zinc-900 dark:text-zinc-100"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <FileIcon className="w-6 h-6 text-zinc-400 mb-1" />
                  <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100">
                    {Math.round(currentFile.progress)}%
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="completed"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex flex-col items-center text-emerald-500"
              >
                <Check className="w-10 h-10" />
                <span className="text-[10px] font-black uppercase tracking-widest mt-1">
                  Ready
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* File Name Label (Floating) */}
        <AnimatePresence>
          {currentFile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 40 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-0 px-3 py-1 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 text-[9px] font-black uppercase tracking-widest rounded-md shadow-2xl z-20"
            >
              {currentFile.file.name.length > 20
                ? currentFile.file.name.substring(0, 20) + "..."
                : currentFile.file.name}
            </motion.div>
          )}
        </AnimatePresence>
      </label>
    </div>
  );
};
