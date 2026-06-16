import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { posts } from "../data.js";
import { postSlug } from "../lib/rss.js";

const fmt = (d) =>
  new Date(d).toLocaleDateString("de-AT", { day: "2-digit", month: "long", year: "numeric" });

export default function Blog() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <SEO title="Logbuch" />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Käpt’ns Logbuch</span>
          <h1>Das Logbuch.</h1>
          <p className="lead">
            Berichte aus den Häfen, Aktions-Nachlesen und gepflegte Beilagen-Polemik.{" "}
            <a href="/feed.xml">RSS-Feed</a>.
          </p>

          <div className="post-list" style={{ marginTop: "1.6rem" }}>
            {sorted.map((p) => (
              <Link key={postSlug(p)} className="post-item" to={`/blog/${postSlug(p)}`}>
                <div className="post-meta">
                  {fmt(p.date)} · {p.author}
                </div>
                <h3 style={{ margin: ".4rem 0" }}>{p.title}</h3>
                <p style={{ color: "var(--muted)", margin: "0 0 .6rem" }}>{p.excerpt}</p>
                <div>
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>#{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
