import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { posts } from "../data.js";
import { postSlug } from "../lib/rss.js";

const fmt = (d) =>
  new Date(d).toLocaleDateString("de-AT", { day: "2-digit", month: "long", year: "numeric" });

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "list":
      return (
        <ul>
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => postSlug(p) === slug);

  if (!post) {
    return (
      <section className="section">
        <div className="wrap prose">
          <h1>Beitrag über Bord gegangen.</h1>
          <p>Diesen Logbuch-Eintrag gibt es nicht (mehr).</p>
          <Link className="btn" to="/blog">Zurück zum Logbuch</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO title={post.title} />
      <section className="section">
        <div className="wrap prose">
          <Link to="/blog" className="post-meta" style={{ textDecoration: "none" }}>
            ← Logbuch
          </Link>
          <span className="eyebrow" style={{ display: "block", marginTop: ".6rem" }}>
            {fmt(post.date)} · {post.author}
          </span>
          <h1>{post.title}</h1>
          <div style={{ marginBottom: "1rem" }}>
            {post.tags.map((t) => (
              <span className="tag" key={t}>#{t}</span>
            ))}
          </div>
          {post.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
          <div className="hero-cta" style={{ marginTop: "2rem" }}>
            <Link className="btn" to="/mitmachen">An Bord kommen →</Link>
            <Link className="btn ghost" to="/blog">Weitere Einträge</Link>
          </div>
        </div>
      </section>
    </>
  );
}
