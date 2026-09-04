#!/usr/bin/env node
// Scaffold a new undated opinion post: node scripts/new-post.mjs "Working Headline" [category]
import fs from "node:fs";
import path from "node:path";
import { slugify } from "./_slug.mjs";
const [, , title, category = "agents"] = process.argv;
if (!title) { console.error('Usage: npm run new:post -- "Headline" [category]'); process.exit(1); }
const slug = slugify(title);
const file = path.join(process.cwd(), "content", "blog", `${slug}.md`);
const tmpl = `---
title: "${title}"
dek: "One sentence stating the bold claim and its stakes."
slug: ${slug}
kind: opinion
category: ${category}
tags: []
people: []
companies: []
author: Ryan Elliott Dennis
byline: "Ryan Elliott Dennis"
role: "Founder and Editor, AI Lately"
featured: false
image: ""
seo:
  title: "${title}"
  description: ""
  keywords: []
epigraph:
  text: "A bold, hyperbolic claim carrying one real statistic."
  stat: ""
  attribution: ""
sources:
  - id: 1
    title: ""
    publication: ""
    date: ${new Date().toISOString().slice(0,10)}
    url: ""
---

Open with the claim.

## First subhead

The evidence.

## By the numbers

- Statistic [1].

## What to watch

The bet, stated plainly.

## Sources

1. Author, "Headline," Publication, https://...
`;
fs.writeFileSync(file, tmpl);
console.log("Created", path.relative(process.cwd(), file));
