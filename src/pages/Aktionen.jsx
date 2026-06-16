import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { aktionen } from "../data.js";

export default function Aktionen() {
  return (
    <>
      <SEO title="Aktionen" />
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Manöver</span>
          <h1>Gruppenübergreifende Aktionen</h1>
          <p className="lead">
            Allein knuspern ist schön. Gemeinsam über Städte hinweg knuspern ist Vereinsleben.
            Hier sind die Aktionen, mit denen sich unsere Häfen verbünden – und manchmal duellieren.
          </p>

          <div className="grid cols-2" style={{ marginTop: "1.6rem" }}>
            {aktionen.map((a) => (
              <article className="card" key={a.title}>
                <div className="icon">{a.icon}</div>
                <span className="kicker">{a.kicker}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>

          <div className="hero-cta" style={{ marginTop: "1.8rem" }}>
            <Link className="btn" to="/mitmachen">Bei der nächsten Aktion dabei sein →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
