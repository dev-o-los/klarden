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
    theme: "github-dark",
    structure: "classic",
  });

  // Shiki usually wraps the output in a <pre> with its own styles.
  // We'll clean this up by ensuring the background is handled by our container.
  const cleanHtml = html.replace(
    /style="background-color:#[^"]+"/,
    'style="background-color:transparent"',
  );

  return (
    <div
      className={cn(
        "relative group my-6 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#24292e] dark:bg-zinc-950",
        className,
      )}
    >
      {filename && (
        <div className="flex items-center px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
            {filename}
          </span>
        </div>
      )}
      <div
        className="text-[13px] leading-relaxed overflow-x-auto p-4 selection:bg-zinc-500/30"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </div>
  );
}
