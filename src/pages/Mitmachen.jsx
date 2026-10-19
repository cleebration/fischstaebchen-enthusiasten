import SEO from "../components/SEO.jsx";
import NewsletterForm from "../components/NewsletterForm.jsx";
import { site } from "../data.js";

export default function Mitmachen() {
  const formReady = !site.googleFormUrl.includes("DEIN_FORMULAR_ID");

  return (
    <>
      <SEO title="Mitmachen" />
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Komm an Bord</span>
          <h1>Mitmachen.</h1>
          <p className="lead">
            Zwei Wege an Bord: dem Verein beitreten (per Formular) oder erst mal das Logbuch per
            Newsletter abonnieren. Beides unverbindlich, beides knusprig.
          </p>

          <div className="grid cols-2" style={{ marginTop: "1.8rem", alignItems: "start" }}>
            {/* Beitritt */}
            <div className="card">
              <span className="kicker">Schritt 1 (optional)</span>
              <h3>Dem Verein beitreten</h3>
              <p style={{ marginBottom: "1rem" }}>
                Über unser Formular sagst du uns, in welchen Hafen du willst und wie deine
                Beilagen-Gesinnung lautet.
              </p>
              {formReady ? (
                <a className="btn block" href={site.googleFormUrl} target="_blank" rel="noopener noreferrer">
                  Zum Beitrittsformular →
                </a>
              ) : (
                <div className="placeholder-note" style={{ margin: 0 }}>
                  Das Google-Formular ist noch nicht verlinkt. Sobald die Felder feststehen, tragen
                  wir die URL in <code>src/data.js</code> ein – dann erscheint hier der Button.
                </div>
              )}
            </div>

            {/* Newsletter */}
            <div className="card">
              <span className="kicker">Käpt’ns Logbuch</span>
              <h3>Newsletter abonnieren</h3>
              <p style={{ marginBottom: "1rem" }}>
                Termine, Aktionen, Beilagen-Eskalationen.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
