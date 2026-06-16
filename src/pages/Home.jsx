import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Mascot from "../components/Mascot.jsx";
import BeilagenBarometer from "../components/BeilagenBarometer.jsx";
import { site, trivia, aktionen } from "../data.js";

export default function Home() {
  return (
    <>
      <SEO />
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="hero-tag">Inoffizieller Fan-Club · est. an einem Freitagabend</span>
              <h1>
                Willkommen an Bord der <span className="accent">Knusperflotte</span>.
              </h1>
              <p className="lead" style={{ color: "#cfe0e6" }}>
                Der Club für alle, die bei goldbraunen Fischstäbchen in die Kindheit zurückgebeamt
                werden – und sich dann leidenschaftlich über die richtige Beilage streiten.
              </p>
              <div className="hero-cta">
                <Link className="btn" to="/aufnahmetest">Aufnahmetest machen →</Link>
                <Link className="btn ghost on-navy" to="/gruppen">Gruppe in der Nähe</Link>
              </div>
            </div>
            <div className="hero-art">
              <Mascot bob />
            </div>
          </div>
          <div className="trivia">
            {trivia.map((t) => (
              <div key={t.label}>
                <div className="num">{t.wert}</div>
                <div className="lbl">{t.label}</div>
              </div>
            ))}
          </div>
          <p className="note" style={{ color: "#7e98a0", marginTop: "1rem", paddingBottom: "2rem" }}>
            Zahlen zur Einordnung. Quelle: iglo.de / Wikipedia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Worum es geht</span>
          <h2>Es ist nur ein Fischstäbchen. Und doch eine ganze Kindheit.</h2>
          <p className="lead">
            Viele von uns sind erwachsen geworden, der Geschmack ist geblieben. Wir treffen uns,
            braten gemeinsam, erinnern uns – und nehmen die Beilagenfrage{" "}
            <em>vielleicht eine Spur zu ernst</em>.
          </p>
          <div className="hero-cta" style={{ marginTop: "1rem" }}>
            <Link className="btn ghost" to="/verein">Unsere Geschichte →</Link>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <span className="eyebrow">Gemeinsam unterwegs</span>
          <h2>Gruppenübergreifende Aktionen</h2>
          <p className="lead">Mehrere Häfen, ein Knuspern. Eine kleine Auswahl unserer Manöver.</p>
          <div className="grid cols-3" style={{ marginTop: "1.6rem" }}>
            {aktionen.slice(0, 3).map((a) => (
              <article className="card" key={a.title}>
                <div className="icon">{a.icon}</div>
                <span className="kicker">{a.kicker}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
          <div className="hero-cta" style={{ marginTop: "1.6rem" }}>
            <Link className="btn on-navy" to="/aktionen">Alle Aktionen →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Der ewige Streit</span>
          <h2>Das Beilagen-Barometer</h2>
          <p className="lead">Stimm ab. Heize den Konflikt an. Niemand wird hier objektiv bleiben.</p>
          <div style={{ marginTop: "1.4rem", maxWidth: 680 }}>
            <BeilagenBarometer />
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow">Komm an Bord</span>
          <h2>Bereit für die Knusperflotte?</h2>
          <p className="lead" style={{ margin: "0 auto 1.4rem" }}>
            Mach den Aufnahmetest, finde deinen Hafen oder hol dir das Logbuch per Newsletter.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link className="btn" to="/mitmachen">Mitmachen →</Link>
            <Link className="btn ghost on-navy" to="/aufnahmetest">Erst mal testen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
