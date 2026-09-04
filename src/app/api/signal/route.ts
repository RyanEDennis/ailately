import { getWeeks, getRosters } from "@/lib/content";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const weeks = await getWeeks();
  const rosters = await getRosters();
  const body = {
    publisher: SITE.name,
    url: `${SITE.url}/signal`,
    license: "Quote with attribution and a link to the canonical URL. Personal data limited to name, role, employer, public source, and date.",
    confidence: { confirmed: "company announcement, filing, or the person's own public statement", reported: "reputable press citing sources", inferred: "pattern-based read, labeled as such" },
    weeks,
    rosters,
  };
  return Response.json(body, { headers: { "Cache-Control": "public, max-age=3600", "Access-Control-Allow-Origin": "*" } });
}
