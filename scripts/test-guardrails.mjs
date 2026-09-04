#!/usr/bin/env node
// Guardrail tests. These encode the legal analysis as executable assertions, not comments.
// Run: npm run test:guardrails

import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { assertAllowedUrl, ForbiddenHostError, assertPersonAllowlist, assertConfidence, FORBIDDEN_HOSTS } from "./lib/guard.mjs";

const ROOT = process.cwd();
let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  ok   ${name}`);
  } catch (e) {
    console.log(`  FAIL ${name}\n       ${e.message}`);
    process.exitCode = 1;
  }
}

console.log("Guardrail tests");

test("LinkedIn hosts are blocked by the HTTP client", () => {
  for (const url of ["https://www.linkedin.com/in/someone", "https://linkedin.com/jobs", "https://media.licdn.com/x.jpg", "http://static.licdn.com/a"]) {
    assert.throws(() => assertAllowedUrl(url), ForbiddenHostError, `should block ${url}`);
  }
});

test("A look-alike host that merely contains 'linkedin' is judged on its real domain", () => {
  // notlinkedin.com is a different registrable domain; the guard blocks by host suffix, not substring.
  assert.doesNotThrow(() => assertAllowedUrl("https://notlinkedin.example.com/x"));
});

test("Allowed public sources pass", () => {
  for (const url of ["https://data.sec.gov/submissions/CIK0001045810.json", "https://openai.com/news/rss.xml", "http://export.arxiv.org/api/query", "https://www.reuters.com/x"]) {
    assert.doesNotThrow(() => assertAllowedUrl(url));
  }
});

test("FORBIDDEN_HOSTS names LinkedIn and its CDN", () => {
  assert.ok(FORBIDDEN_HOSTS.includes("linkedin.com"));
  assert.ok(FORBIDDEN_HOSTS.includes("licdn.com"));
});

test("Person records reject fields outside the allowlist", () => {
  assert.doesNotThrow(() => assertPersonAllowlist({ person: "A", title: "CTO", employer: "X", sourceUrl: "https://x", date: "2026-09-04" }));
  assert.throws(() => assertPersonAllowlist({ person: "A", homeAddress: "1 Main St" }));
  assert.throws(() => assertPersonAllowlist({ person: "A", personalEmail: "a@b.c" }));
  assert.throws(() => assertPersonAllowlist({ person: "A", health: "x" }));
});

test("Confidence is a required enum", () => {
  for (const c of ["confirmed", "reported", "inferred"]) assert.strictEqual(assertConfidence(c), c);
  assert.throws(() => assertConfidence("probably"));
  assert.throws(() => assertConfidence(""));
});

test("No content file references a forbidden host", () => {
  const dirs = ["content/articles", "content/blog", "content/signal/weeks", "content/signal/rosters"].map((d) => path.join(ROOT, d));
  const offenders = [];
  const walk = (d) => {
    if (!fs.existsSync(d)) return;
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (/\.(md|json)$/.test(f)) {
        const text = fs.readFileSync(p, "utf8");
        for (const bad of FORBIDDEN_HOSTS) if (text.includes(`//${bad}`) || text.includes(`.${bad}/`) || text.includes(`@${bad}`)) offenders.push(`${path.relative(ROOT, p)} → ${bad}`);
      }
    }
  };
  dirs.forEach(walk);
  assert.strictEqual(offenders.length, 0, `forbidden host in content:\n       ${offenders.join("\n       ")}`);
});

test("Every Signal move carries a confidence label and a source URL", () => {
  const dirs = ["content/signal/weeks", "content/signal/rosters"].map((d) => path.join(ROOT, d));
  let checked = 0;
  for (const d of dirs) {
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d).filter((x) => x.endsWith(".json"))) {
      const data = JSON.parse(fs.readFileSync(path.join(d, f), "utf8"));
      for (const m of data.moves || []) {
        assertConfidence(m.confidence);
        assert.ok(m.sourceUrl && /^https?:\/\//.test(m.sourceUrl), `${f}: ${m.person} lacks a source URL`);
        assertAllowedUrl(m.sourceUrl);
        checked++;
      }
    }
  }
  assert.ok(checked > 0, "expected at least one move to check");
});

test("No subscriber, customer, or contact database ships in the repo", () => {
  const banned = /(subscribers|customers|contacts|mailing[-_]?list|email[-_]?list)\.(json|csv|db|sqlite)$/i;
  const offenders = [];
  const walk = (d) => {
    for (const f of fs.readdirSync(d)) {
      if (["node_modules", ".next", ".git"].includes(f)) continue;
      const p = path.join(d, f);
      const st = fs.statSync(p);
      if (st.isDirectory()) walk(p);
      else if (banned.test(f)) offenders.push(path.relative(ROOT, p));
    }
  };
  walk(ROOT);
  assert.strictEqual(offenders.length, 0, `subscriber-shaped data present: ${offenders.join(", ")}`);
});

console.log(`\n${passed} assertions passed${process.exitCode ? "; FAILURES above" : "."}`);
