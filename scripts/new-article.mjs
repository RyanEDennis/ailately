#!/usr/bin/env node
// Scaffold a new article: node scripts/new-article.mjs "Working Headline" [category]
import fs from "node:fs";
import path from "node:path";
import { slugify } from "./_slug.mjs";
const [, , title, category = "hiring"] = process.argv;
if (!title) { console.error('Usage: npm run new:article -- "Headline" [category]'); process.exit(1); }
const dir = path.join(process.cwd(), "content", "articles");
const nums = fs.readdirSync(dir).map((f) => Number((f.match(/^(\d+)-/) || [])[1] || 0));
const order = Math.max(0, ...nums) + 1;
const slug = slugify(title);
const today = new Date().toISOString().slice(0, 10);
const file = path.join(dir, `${String(order).padStart(2, "0")}-${slug}.md`);
const tmpl = `---
title: "${title}"
dek: "One sentence, 20 to 35 words, stating the thesis and naming its central people."
slug: ${slug}
kind: analysis
category: ${category}
tags: []
people: []
companies: []
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: ${today}
order: ${order}
featured: false
image: ""
seo:
  title: "${title}"
  description: ""
  keywords: []
epigraph:
  text: "A hyperbolic claim carrying one real statistic."
  stat: ""
  attribution: ""
sources:
  - id: 1
    title: ""
    publication: ""
    author: ""
    date: ${today}
    url: ""
---

Lede paragraph.

## First subhead

Body.

## By the numbers

- Statistic with a source marker [1].

## What to watch

Forward indicators, framed positively.

## Sources

1. Author, "Headline," Publication, ${today}, https://...
`;
fs.writeFileSync(file, tmpl);
console.log("Created", path.relative(process.cwd(), file), "\nEdit it, then: npm run lint:style");
