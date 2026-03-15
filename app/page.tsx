import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/klarden-ui/accordion";
import { OrbitContextMenu } from "@/registry/klarden-ui/orbit-context-menu";
import { RichButton } from "@/registry/klarden-ui/rich-button";
import { Cpu, Github, Shield, Terminal, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <OrbitContextMenu>
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-950">
        {/* Background Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-200/50 blur-[120px] dark:bg-zinc-800/20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-200/50 blur-[120px] dark:bg-zinc-800/20" />
      </div>

      <div className="relative z-10 w-full max-w-2xl space-y-12">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            KLARDEN <span className="text-zinc-400">UI</span>
          </h1>
          <p className="mx-auto max-w-[500px] text-zinc-500 dark:text-zinc-400">
            A premium collection of animated components for high-end interfaces.
            Fluid motion, tactile feedback, and seamless theme support.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/docs/introduction">
              <RichButton size="sm" color="blue">Get Started</RichButton>
            </Link>
            <Link href="https://github.com/dev-o-los/klarden-ui" target="_blank">
              <RichButton color="teal" size="sm" className="gap-2">
                <Github size={14} /> GitHub
              </RichButton>
            </Link>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center gap-2 px-2 text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Zap size={14} /> System Modules
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="system-core">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Terminal size={18} className="text-emerald-500" />
                  <span>Core System Initialization</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Booting sequence initiated. Loading kernel modules and
                    mapping hardware registers to the virtual environment.
                    Ensure all uplinks are stable before proceeding.
                  </p>
                  <div className="flex gap-2">
                    <RichButton size="sm" color="emerald" className="h-7 px-3">
                      Reboot
                    </RichButton>
                    <RichButton
                      size="sm"
                      className="h-7 px-3 bg-zinc-200/50 dark:bg-zinc-800/50 border-none text-zinc-900 dark:text-zinc-100 shadow-none hover:shadow-none active:shadow-none hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0 active:scale-95"
                    >
                      Logs
                    </RichButton>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security-mesh">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Shield size={18} className="text-blue-500" />
                  <span>Encrypted Data Mesh</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Your connection is routed through a 256-bit industrial-grade
                tunnelling protocol. All visual components are rendered
                server-side to prevent client-side injection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hardware-specs">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Cpu size={18} className="text-zinc-500" />
                  <span>Module Specifications</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: "Build", val: "v4.0.2" },
                    { label: "Status", val: "Stable" },
                    { label: "Latency", val: "12ms" },
                    { label: "Load", val: "Optimal" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 rounded-xl border border-zinc-200 p-3 dark:border-zinc-800"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        {item.label}
                      </span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
    </OrbitContextMenu>
  );
}
