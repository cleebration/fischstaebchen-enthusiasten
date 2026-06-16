import SEO from "../components/SEO.jsx";
import BeilagenBarometer from "../components/BeilagenBarometer.jsx";
import { beilagen } from "../data.js";

export default function Beilagen() {
  return (
    <>
      <SEO title="Beilagen" />
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Die große Frage</span>
          <h1>Beilagen-Barometer</h1>
          <p className="lead">
            Was kommt aufs Stäbchen? Stimm ab und sieh, wo die Knusperflotte gerade steht. Wir
            warnen vor: Diese Seite hat schon Freundschaften auf die Probe gestellt.
          </p>
          <div style={{ marginTop: "1.6rem", maxWidth: 700 }}>
            <BeilagenBarometer />
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <span className="eyebrow">Steckbriefe</span>
          <h2>Die Kandidaten</h2>
          <div className="grid cols-3" style={{ marginTop: "1.4rem" }}>
            {beilagen.map((b) => (
              <article className="card" key={b.id}>
                <div className="icon">{b.emoji}</div>
                <h3>{b.name}</h3>
                <p>{b.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
