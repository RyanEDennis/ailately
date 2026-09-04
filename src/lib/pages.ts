import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

export type Page = { slug: string; title: string; description: string; html: string };

export async function getPage(slug: string): Promise<Page> {
  const file = path.join(process.cwd(), "content", "pages", `${slug}.md`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const html = String(await unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeSlug).use(rehypeStringify).process(content));
  return { slug, title: String(data.title ?? slug), description: String(data.description ?? ""), html };
}
