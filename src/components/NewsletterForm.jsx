import { Link } from "react-router-dom";

// Newsletter – zentraler Baustein newsletter-hub (seit 19.10.2026).
// Formular + Anmeldung kommen von newsletter.cleebration.com (Script in index.html);
// Liste, Tag und Texte: cleebration-web/newsletter-hub/worker/sites.config.mjs (Schlüssel "fischstaebchen").
// Die frühere eigene Anmeldung (api/newsletter.js) bleibt als Rückfall liegen, wird aber nicht mehr aufgerufen.
export default function NewsletterForm() {
  return (
    <div className="nl-hub">
      <newsletter-signup site="fischstaebchen" heading="" text=""></newsletter-signup>
      <p className="note" style={{ marginTop: ".7rem" }}>
        Du bekommst zuerst eine Bestätigungsmail (Double-Opt-in). Abmeldung jederzeit über den
        Link in jeder Ausgabe. Kein Spam, nur Knusper. Mehr dazu im{" "}
        <Link to="/rechtliches#datenschutz">Datenschutz</Link>.
      </p>
    </div>
  );
}
