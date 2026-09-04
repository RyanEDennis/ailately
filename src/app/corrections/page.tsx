import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import PageView from "@/components/PageView";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("corrections");
  return { title: page.title, description: page.description, alternates: { canonical: "/corrections" } };
}

export default async function Page() {
  const page = await getPage("corrections");
  return <PageView page={page} kicker="Publication" />;
}
