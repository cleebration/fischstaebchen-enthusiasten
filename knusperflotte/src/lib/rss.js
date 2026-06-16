import { slugify } from "./slugify.js";

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function postSlug(post) {
  return post.slug || slugify(post.title);
}

// Baut einen gueltigen RSS-2.0-Feed. Sortiert: neueste zuerst.
export function buildFeed({ site, posts }) {
  const items = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((p) => {
      const url = `${site.url}/blog/${postSlug(p)}`;
      const pub = new Date(p.date).toUTCString();
      const cats = (p.tags || []).map((t) => `    <category>${esc(t)}</category>`).join("\n");
      return [
        "  <item>",
        `    <title>${esc(p.title)}</title>`,
        `    <link>${url}</link>`,
        `    <guid isPermaLink="true">${url}</guid>`,
        `    <pubDate>${pub}</pubDate>`,
        cats,
        `    <description>${esc(p.excerpt)}</description>`,
        "  </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `  <title>${esc(site.name)} – Logbuch</title>`,
    `  <link>${site.url}</link>`,
    `  <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />`,
    `  <description>${esc(site.description)}</description>`,
    "  <language>de</language>",
    items,
    "</channel>",
    "</rss>",
    "",
  ].join("\n");
}
