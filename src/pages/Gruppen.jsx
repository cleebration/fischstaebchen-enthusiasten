import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { chapters } from "../data.js";

const chipClass = (status) =>
  status === "aktiv" ? "chip aktiv" : status === "in Gründung" ? "chip gruendung" : "chip wunsch";

export default function Gruppen() {
  return (
    <>
      <SEO title="Gruppen" />
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Häfen der Enthusiasten</span>
          <h1>Finde deine Gruppe.</h1>
          <p className="lead">
            Jede Gruppe ist ein „Hafen“ mit eigenem Charakter. Du findest keinen in deiner Nähe?
            Gründe einen – wir helfen beim Stapellauf.
          </p>

          <div className="placeholder-note">
            Platzhalter-Standorte. Sobald die echten Gruppen & Termine feststehen, tragen wir sie
            hier ein (in <code>src/data.js</code>).
          </div>

          <div className="grid cols-2" style={{ marginTop: "1.4rem" }}>
            {chapters.map((c) => (
              <article className="card" key={c.stadt}>
                <span className={chipClass(c.status)}>{c.status}</span>
                <h3 style={{ marginTop: ".6rem" }}>{c.name}</h3>
                <p style={{ fontFamily: "var(--mono)", fontSize: ".82rem", color: "var(--gold-deep)" }}>
                  {c.stadt} · Treff: {c.treff}
                </p>
                <p style={{ marginTop: ".5rem" }}>{c.note}</p>
              </article>
            ))}
          </div>

          <div className="hero-cta" style={{ marginTop: "1.8rem" }}>
            <Link className="btn" to="/mitmachen">Beitreten / Hafen gründen →</Link>
            <Link className="btn ghost" to="/aufnahmetest">Erst den Test machen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
