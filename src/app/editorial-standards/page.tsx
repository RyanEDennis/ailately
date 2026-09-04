import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import PageView from "@/components/PageView";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("editorial-standards");
  return { title: page.title, description: page.description, alternates: { canonical: "/editorial-standards" } };
}

export default async function Page() {
  const page = await getPage("editorial-standards");
  return <PageView page={page} kicker="Publication" />;
}
