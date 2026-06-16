import SEO from "../components/SEO.jsx";
import { videos } from "../data.js";

export default function Videos() {
  return (
    <>
      <SEO title="Werbefilme" />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Nostalgie-Archiv</span>
          <h1>Original-Werbefilme.</h1>
          <p className="lead">
            Vom Piratenschiff der 80er bis zum lässigen Käpt’n von heute. Wir verlinken zu den
            Originalen – die Filme liegen bei YouTube, nicht bei uns.
          </p>

          <div className="placeholder-note">
            Hinweis: externe Links zu YouTube (Drittanbieter). Beim Klick verlässt du diese Seite.
            Wir hosten und besitzen keine dieser Aufnahmen.
          </div>

          <div className="post-list" style={{ marginTop: "1.2rem" }}>
            {videos.map((v) => (
              <a
                key={v.url}
                className="video-item"
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <strong>{v.title}</strong>
                  <br />
                  <span className="note">{v.note} · {v.typ}</span>
                </span>
                <span className="y">{v.jahr} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
