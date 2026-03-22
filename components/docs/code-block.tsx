import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  filename?: string;
}

export async function CodeBlock({
  code,
  language = "tsx",
  className,
  filename,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
    structure: "classic",
  });

  return (
    <div
      className={cn(
        "relative group my-6 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-background",
        className,
      )}
    >
      {filename && (
        <div className="flex items-center px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-background">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
            {filename}
          </span>
        </div>
      )}
      <div
        className="text-[13px] leading-relaxed overflow-x-auto p-4 selection:bg-zinc-500/30 shiki-dual-theme"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
