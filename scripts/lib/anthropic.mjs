// Thin Anthropic Messages API client for the daily draft generator.
// Reads ANTHROPIC_API_KEY from the environment. Zero external dependencies.

import { assertAllowedUrl } from "./guard.mjs";

const API = "https://api.anthropic.com/v1/messages";
const MODEL = process.env.AILATELY_MODEL || "claude-opus-4-1";

export async function draft({ system, prompt, maxTokens = 4096 }) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY missing. The pipeline drafts with the Anthropic Messages API.");
  assertAllowedUrl(API);
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Anthropic API ${res.status}: ${body.slice(0, 400)}`);
  }
  const data = await res.json();
  return (data.content || []).map((b) => b.text || "").join("").trim();
}
