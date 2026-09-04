export function slugify(input) {
  return String(input)
    .normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i").replace(/ß/g, "ss")
    .toLowerCase().replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
