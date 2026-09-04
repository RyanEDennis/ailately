# Signal feed data schema

Weekly files: `content/signal/weeks/2026-W36.json` (ISO week). Roster files: `content/signal/rosters/2025.json`, `content/signal/rosters/2026.json`.

```json
{
  "week": "2026-W36",
  "range": { "start": "2026-08-31", "end": "2026-09-06" },
  "headline": "Sharpest single read of the week, stated as a claim (12 words max, alliteration welcome)",
  "read": "250 words max. One hire or pattern explained: what capability the company bought, what it implies, what to watch. Positive constructions only, varied sentence length, zero via negativa, zero anaphora.",
  "moves": [
    {
      "person": "Full Name",
      "to": "Company",
      "title": "Title at destination",
      "from": "Previous company",
      "fromTitle": "Previous title",
      "date": "2026-09-02",
      "type": "hire",
      "confidence": "confirmed",
      "sector": "ai",
      "sourceUrl": "https://...",
      "sourceTitle": "Exact headline",
      "publication": "Reuters",
      "read": "One sentence of interpretation."
    }
  ]
}
```

Field rules:

- `type`: `hire` | `departure` | `promotion` | `founding` | `board` | `acquihire`
- `confidence`: `confirmed` (company announcement, filing, or the person's own public statement) | `reported` (reputable press citing sources) | `inferred` (pattern-based; use sparingly and say so in `read`). Required. A move with a missing confidence gets rejected.
- `sector`: `ai` | `crypto` | `enterprise` | `public`
- Personal data allowlist: name, title, employer, public source URL, date. Nothing else.
- Sources: company newsrooms, SEC filings, Reuters, Bloomberg, WSJ, FT, The Information, TechCrunch, CNBC, Axios, the person's own public posts on X quoted under 15 words. LinkedIn is off limits as a source.

Roster files share the `moves` array shape and add `"year": 2025` plus `"summary"` (one paragraph). Rank each roster move with `"rank": 1..N` by strategic weight, and include `"why"` (one sentence on why it mattered).
