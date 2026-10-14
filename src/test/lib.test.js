import { describe, it, expect } from "vitest";
import { slugify } from "../lib/slugify.js";
import { scoreToRank, maxQuizPoints } from "../lib/quiz.js";
import { buildFeed, postSlug } from "../lib/rss.js";
import { quiz, posts, site } from "../data.js";

describe("slugify", () => {
  it("wandelt Umlaute und ß korrekt um", () => {
    expect(slugify("Käpt'n über Straße")).toBe("kaept-n-ueber-strasse");
  });
  it("entfernt führende/abschließende Bindestriche", () => {
    expect(slugify("  Hallo Welt!  ")).toBe("hallo-welt");
  });
});

describe("scoreToRank", () => {
  const ranks = quiz.ranks;
  it("gibt den niedrigsten Rang bei 0 Punkten", () => {
    expect(scoreToRank(0, ranks).title).toBe("Blinder Passagier");
  });
  it("gibt den höchsten Rang bei maximaler Punktzahl", () => {
    const max = maxQuizPoints(quiz.questions);
    expect(scoreToRank(max, ranks).title).toBe("Käpt'n der Enthusiasten");
  });
});

describe("buildFeed", () => {
  it("erzeugt gültiges RSS mit allen Posts", () => {
    const xml = buildFeed({ site, posts });
    expect(xml).toContain("<rss");
    expect(xml).toContain("<channel>");
    for (const p of posts) {
      expect(xml).toContain(postSlug(p));
    }
  });
});
