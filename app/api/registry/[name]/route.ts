import { NextRequest, NextResponse } from "next/server";
import registry from "@/registry.json";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  if (!name) {
    return NextResponse.json({ error: "Component name is required" }, { status: 400 });
  }

  const component = registry.items.find((item) => item.name === name);

  if (!component) {
    return NextResponse.json(
      { error: `Component "${name}" not found in @klarden registry` },
      { status: 404 }
    );
  }

  // Build the full URL for the component files
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://klarden.vercel.app";
  
  const responseItem = {
    ...component,
    files: component.files.map((file) => ({
      ...file,
      // Convert relative path to absolute URL for registry consumption
      path: file.path.startsWith("registry/")
        ? `${baseUrl}/${file.path}`
        : file.path,
    })),
  };

  return NextResponse.json(responseItem);
}
