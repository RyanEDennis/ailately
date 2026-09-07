#!/usr/bin/env node
// Resolves the current ISO week for The Signal and reports its file state.
// Read-only: prints JSON { week, range, path, exists, moveCount, headline }.
// The daily Signal job runs this to learn which week file to append today's moves to.
//
// Override the date for testing:  SIGNAL_DATE=2026-09-07 node scripts/signal-week.mjs

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

function isoParts(d) {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = date.getUTCDay() || 7; // Monday=1 .. Sunday=7
  date.setUTCDate(date.getUTCDate() + 4 - day); // shift to the week's Thursday
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date - yearStart) / 864e5 + 1) / 7);
  return { year: date.getUTCFullYear(), week };
}

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

function weekRange(year, week) {
  // ISO week 1 holds January 4; its Monday anchors the year's weeks.
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const jan4Day = jan4.getUTCDay() || 7;
  const week1Mon = new Date(jan4);
  week1Mon.setUTCDate(jan4.getUTCDate() - (jan4Day - 1));
  const mon = new Date(week1Mon);
  mon.setUTCDate(week1Mon.getUTCDate() + (week - 1) * 7);
  const sun = new Date(mon);
  sun.setUTCDate(mon.getUTCDate() + 6);
  return { start: isoDate(mon), end: isoDate(sun) };
}

const now = process.env.SIGNAL_DATE ? new Date(`${process.env.SIGNAL_DATE}T12:00:00Z`) : new Date();
const { year, week } = isoParts(now);
const weekStr = `${year}-W${String(week).padStart(2, "0")}`;
const range = weekRange(year, week);
const rel = path.join("content", "signal", "weeks", `${weekStr}.json`);
const file = path.join(ROOT, rel);

let exists = false;
let moveCount = 0;
let headline = "";
if (fs.existsSync(file)) {
  exists = true;
  try {
    const j = JSON.parse(fs.readFileSync(file, "utf8"));
    moveCount = Array.isArray(j.moves) ? j.moves.length : 0;
    headline = String(j.headline ?? "");
  } catch {
    moveCount = -1; // signals malformed JSON to the caller
  }
}

console.log(JSON.stringify({ week: weekStr, range, path: rel, exists, moveCount, headline }, null, 2));
