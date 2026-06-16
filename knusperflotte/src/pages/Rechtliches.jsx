import SEO from "../components/SEO.jsx";
import { site } from "../data.js";

export default function Rechtliches() {
  return (
    <>
      <SEO title="Impressum & Disclaimer" />
      <section className="section">
        <div className="wrap prose">
          <span className="eyebrow">Recht & Klarheit</span>
          <h1>Impressum & Disclaimer</h1>

          <h2>Disclaimer / Haftungsausschluss</h2>
          <p>
            <strong>{site.name}</strong> ist eine private, nicht-kommerzielle Fan- und Parodieseite
            von und für Fischstäbchen-Enthusiast:innen. Sie dient ausschließlich der Unterhaltung.
          </p>
          <ul>
            <li>
              Es besteht <strong>keine Verbindung</strong> zu, keine Unterstützung durch und keine
              Genehmigung von iglo, Nomad Foods oder verbundenen Unternehmen.
            </li>
            <li>
              „iglo“, „Käpt’n iglo“, „Fischstäbchen“ und weitere genannte Marken- und Produktnamen
              sind Eigentum ihrer jeweiligen Inhaber. Ihre Nennung erfolgt rein beschreibend
              (nominativ), um den Gegenstand unserer Begeisterung zu benennen.
            </li>
            <li>
              Die Figur <strong>„Käpt’n Knusperbart“</strong> und der Name{" "}
              <strong>„{site.short}“</strong> sind eigene Erfindungen dieser Seite und stellen keine
              reale Werbefigur dar.
            </li>
            <li>
              Verlinkte Videos liegen bei Drittanbietern (z. B. YouTube). Für deren Inhalte sind die
              jeweiligen Anbieter verantwortlich.
            </li>
          </ul>
          <p>
            Sollte ein:e Rechteinhaber:in dennoch ein Anliegen haben, genügt eine kurze Nachricht an{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> – wir reagieren umgehend.
          </p>

          <h2>Impressum</h2>
          <div className="placeholder-note">
            Platzhalter – bitte vor Veröffentlichung ausfüllen. In Österreich brauchen auch private
            Websites in der Regel Angaben nach ECG / Mediengesetz (Name, Anschrift, Kontakt). Diese
            Angaben dürfen wir nicht erfinden.
          </div>
          <p>
            Verantwortlich für den Inhalt:<br />
            [Vor- und Nachname]<br />
            [Anschrift]<br />
            [PLZ Ort, Österreich]<br />
            E-Mail: {site.email}
          </p>

          <h2>Datenschutz (Kurzfassung)</h2>
          <p>
            Newsletter-Anmeldungen werden über EmailOctopus verarbeitet (Double-Opt-in). Es werden
            nur die von dir angegebene E-Mail-Adresse und der Tag „fischstäbchen“ gespeichert; eine
            Abmeldung ist jederzeit möglich. Eine vollständige Datenschutzerklärung gehört vor dem
            Live-Gang ergänzt.
          </p>
        </div>
      </section>
    </>
  );
}
