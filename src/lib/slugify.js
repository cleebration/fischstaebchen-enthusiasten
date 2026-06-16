// Slug aus deutschem Titel: ae/oe/ue/ss, dann a-z0-9 mit Bindestrichen.
export function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
