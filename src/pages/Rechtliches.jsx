import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { site } from "../data.js";

export default function Rechtliches() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el && el.scrollIntoView) el.scrollIntoView();
  }, [hash]);

  return (
    <>
      <SEO title="Impressum, Datenschutz & Disclaimer" />
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
          <p>
            Medieninhaber und für den Inhalt verantwortlich:<br />
            Chris H. Leeb<br />
            Willingerstraße 17<br />
            4030 Linz, Österreich<br />
            E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            Offenlegung gemäß § 25 Mediengesetz: private, nicht-kommerzielle Fan- und Spaßseite rund
            ums Fischstäbchen.
          </p>

          <h2 id="datenschutz">Datenschutz</h2>
          <p>
            Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Seite ist
            Chris H. Leeb (Kontakt siehe Impressum). Wir verarbeiten so wenig Daten wie möglich.
          </p>

          <h3>Hosting</h3>
          <p>
            Die Seite wird bei Vercel Inc. (USA) gehostet. Beim Aufruf verarbeitet Vercel technisch
            notwendige Verbindungsdaten (z.&nbsp;B. IP-Adresse, Zeitpunkt, aufgerufene Seite), um die
            Seite auszuliefern und vor Missbrauch zu schützen. Rechtsgrundlage ist unser berechtigtes
            Interesse am sicheren Betrieb (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO). Schriften werden
            von unserem eigenen Server geladen, es gibt keine Verbindung zu Google Fonts. Wir setzen
            keine Tracking- oder Werbe-Cookies ein.
          </p>

          <h3>Newsletter</h3>
          <p>
            Wenn du das Käpt’ns-Logbuch abonnierst, speichern wir deine E-Mail-Adresse, die Sprache,
            die Website der Anmeldung und den Tag „fischstäbchen“ beim Versanddienst EmailOctopus
            (Three Hearts Digital Ltd, London, UK) als Auftragsverarbeiter. Das Anmeldeformular wird
            von newsletter.cleebration.com geladen (Cloudflare, Inc.) und übermittelt deine Angaben
            direkt dorthin. Die Daten liegen laut Anbieter überwiegend in der EU (Irland). Erst
            wenn du den Link in der Bestätigungsmail anklickst, bist du angemeldet (Double-Opt-in).
            Rechtsgrundlage ist deine Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO). Du kannst
            sie jederzeit über den Abmeldelink in jeder Ausgabe oder per Mail an{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> widerrufen; danach löschen wir deine
            Adresse. Details:{" "}
            <a href="https://emailoctopus.com/legal/privacy" target="_blank" rel="noopener noreferrer">
              Datenschutz von EmailOctopus
            </a>.
          </p>

          <h3>Beilagen-Barometer</h3>
          <p>
            Deine Stimme im Beilagen-Barometer wird nur im Speicher deines eigenen Browsers abgelegt
            (localStorage) und nicht an uns übertragen. Der Aufnahmetest läuft komplett in deinem
            Browser, es wird nichts gespeichert.
          </p>

          <h3>Deine Rechte</h3>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit
            und Widerspruch. Schreib uns einfach an{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Außerdem kannst du dich bei der
            österreichischen Datenschutzbehörde beschweren (
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">dsb.gv.at</a>).
          </p>
          <p className="note">Stand: Oktober 2026</p>
        </div>
      </section>
    </>
  );
}
