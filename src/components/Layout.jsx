import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { site } from "../data.js";
import FishStick from "./FishStick.jsx";

const links = [
  { to: "/verein", label: "Verein" },
  { to: "/gruppen", label: "Gruppen" },
  { to: "/aktionen", label: "Aktionen" },
  { to: "/aufnahmetest", label: "Aufnahmetest" },
  { to: "/beilagen", label: "Beilagen" },
  { to: "/videos", label: "Werbefilme" },
  { to: "/blog", label: "Logbuch" },
  { to: "/mitmachen", label: "Mitmachen" },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <FishStick /> {site.short}
          </Link>
          <button
            className="nav-toggle"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
          <nav className={`nav-links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <div className="disclaimer-strip">
        Inoffizielle Fan- &amp; Spaßseite · keine Verbindung zu iglo / Nomad Foods · alle Marken gehören ihren Inhabern
      </div>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <h4>{site.name}</h4>
            <p>{site.tagline}<br />Wir paniert das Leben – seit gestern.</p>
          </div>
          <div>
            <h4>An Bord</h4>
            <ul>
              <li><Link to="/verein">Über uns</Link></li>
              <li><Link to="/gruppen">Gruppen finden</Link></li>
              <li><Link to="/aufnahmetest">Aufnahmetest</Link></li>
              <li><Link to="/mitmachen">Mitmachen</Link></li>
            </ul>
          </div>
          <div>
            <h4>Logbuch &amp; Recht</h4>
            <ul>
              <li><Link to="/blog">Logbuch</Link></li>
              <li><a href="/feed.xml">RSS-Feed</a></li>
              <li><Link to="/rechtliches">Impressum &amp; Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="wrap">
          <p className="legal">
            Dies ist eine private, nicht-kommerzielle Fan- und Parodieseite. Es besteht keine
            Verbindung zu, keine Unterstützung durch und keine Genehmigung von iglo, Nomad Foods
            oder verbundenen Unternehmen. „iglo“, „Käpt’n iglo“ und weitere genannte Marken sind
            Eigentum ihrer jeweiligen Inhaber; die Nennung erfolgt rein beschreibend.
            „Käpt’n Knusperbart“ und „{site.short}“ sind eigene Erfindungen dieser Seite.
          </p>
        </div>
      </footer>
    </>
  );
}
