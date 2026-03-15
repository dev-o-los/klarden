import { mdxComponents } from "@/components/docs/mdx-components";
import { getDocBySlug, getDocSlugs } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const slugs = getDocSlugs();
  return slugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8 space-y-2">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400">
          {doc.category}
        </p>
        <h1 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50">
          {doc.title}
        </h1>
        {doc.description && (
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            {doc.description}
          </p>
        )}
      </div>
      <MDXRemote source={doc.content} components={mdxComponents} />
    </article>
  );
}
