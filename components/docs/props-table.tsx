"use client";

export interface PropsTableItem {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface PropsTableProps {
  items?: PropsTableItem[];
}

/**
 * PropsTable component for displaying component properties.
 *
 * Note: If using with next-mdx-remote/rsc, it is recommended to
 * define items as an exported constant in MDX to ensure reliable parsing.
 */
export function PropsTable({ items = [] }: PropsTableProps) {
  // Defensive check for items
  const hasItems = Array.isArray(items) && items.length > 0;

  if (!hasItems) {
    return (
      <div className="my-6 rounded-xl border-2 border-dashed border-zinc-200 p-8 text-center dark:border-zinc-800">
        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
          No property data found
        </p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
          Received:{" "}
          <code className="text-zinc-800 dark:text-zinc-200">
            {typeof items}
          </code>
          . Ensure items are passed correctly in MDX.
        </p>
      </div>
    );
  }

  return (
    <div className="my-8 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-[13px] leading-relaxed">
          <thead className="bg-zinc-50/50 dark:bg-zinc-900/50">
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="px-4 py-3.5 font-black uppercase tracking-widest text-[10px] text-zinc-500 dark:text-zinc-400">
                Prop
              </th>
              <th className="px-4 py-3.5 font-black uppercase tracking-widest text-[10px] text-zinc-500 dark:text-zinc-400">
                Type
              </th>
              <th className="px-4 py-3.5 font-black uppercase tracking-widest text-[10px] text-zinc-500 dark:text-zinc-400">
                Default
              </th>
              <th className="px-4 py-3.5 font-black uppercase tracking-widest text-[10px] text-zinc-500 dark:text-zinc-400 w-[40%]">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
            {items.map((item, index) => (
              <tr
                key={`${item.name}-${index}`}
                className="group hover:bg-zinc-50/30 dark:hover:bg-zinc-900/10 transition-colors"
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-[0.4rem] py-[0.15rem] font-mono text-xs font-bold text-zinc-900 dark:text-zinc-200">
                    {item.name}
                  </code>
                </td>
                <td className="px-4 py-4 font-mono text-[11px] text-blue-600 dark:text-blue-400/90 whitespace-nowrap">
                  {item.type}
                </td>
                <td className="px-4 py-4 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  {item.default}
                </td>
                <td className="px-4 py-4 text-zinc-600 dark:text-zinc-400 min-w-[200px]">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
