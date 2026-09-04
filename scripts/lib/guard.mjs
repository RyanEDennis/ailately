// Legal guardrails for the AI Lately newsdesk pipeline, encoded as enforced code.
// These come from the hiQ Labs v. LinkedIn analysis in the due-diligence file, not from style preference.

export const FORBIDDEN_HOSTS = [
  "linkedin.com",
  "www.linkedin.com",
  "licdn.com",
  "static.licdn.com",
  "media.licdn.com",
];

export class ForbiddenHostError extends Error {}

export function assertAllowedUrl(url) {
  let host;
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    throw new ForbiddenHostError(`Malformed URL rejected: ${url}`);
  }
  for (const bad of FORBIDDEN_HOSTS) {
    if (host === bad || host.endsWith(`.${bad}`)) {
      throw new ForbiddenHostError(`Forbidden host blocked by policy: ${host} (${url})`);
    }
  }
  return url;
}

// Every outbound fetch in the pipeline routes through this one client, which raises on forbidden hosts.
export async function guardedFetch(url, init = {}) {
  assertAllowedUrl(url);
  const headers = {
    "User-Agent": "AILatelyNewsdesk/1.0 (+https://ailately.com/about; contact editor@ailately.com)",
    ...(init.headers || {}),
  };
  const res = await fetch(url, { ...init, headers, redirect: "follow" });
  // A redirect could carry us to a forbidden host; re-check the final URL.
  assertAllowedUrl(res.url || url);
  return res;
}

// Personal-data allowlist enforced at the model layer: a recorded field stays within these keys.
export const PERSON_FIELD_ALLOWLIST = ["person", "name", "title", "role", "employer", "company", "from", "to", "sourceUrl", "date"];

export function assertPersonAllowlist(record) {
  const banned = ["homeAddress", "address", "personalEmail", "phone", "age", "nationality", "health", "family", "religion", "ethnicity", "gender", "sexualOrientation"];
  for (const key of Object.keys(record)) {
    if (banned.includes(key)) throw new Error(`Personal-data allowlist violated: '${key}' has no journalistic necessity for a hiring story.`);
  }
  return record;
}

export const CONFIDENCE = ["confirmed", "reported", "inferred"];
export function assertConfidence(value) {
  if (!CONFIDENCE.includes(value)) throw new Error(`Confidence must be one of ${CONFIDENCE.join(", ")}; received '${value}'.`);
  return value;
}
