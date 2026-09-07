#!/usr/bin/env node
// Validates Signal week files against the schema in docs/SIGNAL_SCHEMA.md.
// Runs as a hard CI gate after the daily Signal agent edits a week file.
//
// Usage: node scripts/validate-signal.mjs [file ...]   (defaults to every week file)
// Exit 1 on any error.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const WEEKS_DIR = path.join(ROOT, "content", "signal", "weeks");

const TYPES = new Set(["hire", "departure", "promotion", "founding", "board", "acquihire"]);
const CONFIDENCE = new Set(["confirmed", "reported", "inferred"]);
const SECTORS = new Set(["ai", "crypto", "enterprise", "public"]);
// Personal-data allowlist: name, title, employer, public source, date — plus the
// interpretive and provenance fields the schema defines. Any other key is rejected.
const ALLOWED_KEYS = new Set([
  "person", "to", "title", "from", "fromTitle", "date", "type", "confidence",
  "sector", "sourceUrl", "sourceTitle", "publication", "read", "rank", "why",
]);
const REQUIRED_KEYS = ["person", "to", "title", "date", "type", "confidence", "sourceUrl"];

const FORBIDDEN_HOST = /(^|\.)(linkedin\.com|licdn\.com)(\/|$)/i;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
// The house rule: zero via negativa in anything that renders.
const NEGATION = [
  /\bnot\b/i, /\bno\b/i, /\bnever\b/i, /\bnothing\b/i, /\bnone\b/i, /\bnobody\b/i,
  /\bnowhere\b/i, /\bneither\b/i, /\bnor\b/i, /\bwithout\b/i, /\bcannot\b/i,
  /\b\w+n't\b/i, /\bnon-\w+/i,
];

function negationHit(text) {
  for (const re of NEGATION) {
    const m = String(text || "").match(re);
    if (m) return m[0];
  }
  return null;
}

function validateFile(file) {
  const rel = path.relative(ROOT, file);
  const errors = [];
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    return { rel, errors: [`invalid JSON: ${e.message}`] };
  }

  const base = path.basename(file, ".json");
  if (data.week !== base) errors.push(`week "${data.week}" mismatches filename "${base}"`);
  if (!/^\d{4}-W\d{2}$/.test(String(data.week))) errors.push(`week "${data.week}" is malformed (want YYYY-Www)`);
  if (!data.range || !ISO_DATE.test(data.range.start || "") || !ISO_DATE.test(data.range.end || ""))
    errors.push("range needs ISO start and end dates");
  if (typeof data.headline !== "string") errors.push("headline missing");
  if (typeof data.read !== "string") errors.push("read missing");

  for (const [label, text] of [["headline", data.headline], ["read", data.read]]) {
    const hit = negationHit(text);
    if (hit) errors.push(`via negativa "${hit}" in ${label}`);
  }

  const moves = Array.isArray(data.moves) ? data.moves : [];
  const seen = new Set();
  moves.forEach((m, i) => {
    const at = `move ${i + 1}${m && m.person ? ` (${m.person})` : ""}`;
    if (!m || typeof m !== "object") {
      errors.push(`${at}: expected an object`);
      return;
    }
    for (const key of Object.keys(m)) {
      if (!ALLOWED_KEYS.has(key)) errors.push(`${at}: field "${key}" sits outside the personal-data allowlist`);
    }
    for (const key of REQUIRED_KEYS) {
      if (m[key] === undefined || m[key] === "") errors.push(`${at}: missing "${key}"`);
    }
    if (m.type !== undefined && !TYPES.has(m.type)) errors.push(`${at}: type "${m.type}" is invalid`);
    if (m.confidence !== undefined && !CONFIDENCE.has(m.confidence)) errors.push(`${at}: confidence "${m.confidence}" is invalid`);
    if (m.sector !== undefined && !SECTORS.has(m.sector)) errors.push(`${at}: sector "${m.sector}" is invalid`);
    if (m.date !== undefined && !ISO_DATE.test(m.date)) errors.push(`${at}: date "${m.date}" is malformed`);
    if (m.sourceUrl !== undefined) {
      if (!/^https:\/\//i.test(m.sourceUrl)) errors.push(`${at}: sourceUrl needs an https URL`);
      if (FORBIDDEN_HOST.test(m.sourceUrl)) errors.push(`${at}: sourceUrl points at a forbidden host`);
    }
    const readHit = negationHit(m.read);
    if (readHit) errors.push(`${at}: via negativa "${readHit}" in read`);

    const key = `${m.person}|${m.date}|${m.to}|${m.title}`.toLowerCase();
    if (seen.has(key)) errors.push(`${at}: duplicate of an earlier move`);
    seen.add(key);
  });

  return { rel, errors, moves: moves.length };
}

const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : (fs.existsSync(WEEKS_DIR) ? fs.readdirSync(WEEKS_DIR).filter((f) => f.endsWith(".json")).map((f) => path.join(WEEKS_DIR, f)) : []);

let failed = 0;
for (const t of targets) {
  const r = validateFile(t);
  const status = r.errors.length ? "FAIL" : "ok  ";
  if (r.errors.length) failed++;
  console.log(`${status} ${r.rel}${r.moves !== undefined ? ` (${r.moves} moves)` : ""}`);
  for (const e of r.errors) console.log(`   ✗ ${e}`);
}
console.log(`\n${targets.length} week files checked, ${failed} failing.`);
process.exit(failed ? 1 : 0);
