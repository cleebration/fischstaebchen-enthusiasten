import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { mount } from "../lib/turm-spiel.js";

// Spiel „Fischstäbchen-Turm“ (Claude, 08.11.2026): Stäbchen im richtigen Moment ablegen.
export default function Turm() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return undefined;
    return mount(ref.current);
  }, []);
  return (
    <>
      <SEO title="Fischstäbchen-Turm – das Stapelspiel" />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Vereinsspiel</span>
          <h1>Der Fischstäbchen-Turm</h1>
          <p className="lead">
            Wie hoch stapelst du? Leg jedes Stäbchen im richtigen Moment ab. Was übersteht, fällt in die
            Pfanne – und dein Turm wird schmäler.
          </p>
          <div
            ref={ref}
            data-testid="turm-spiel"
            style={{
              marginTop: "1.4rem",
              "--sp-bg": "#0c2a3a",
              "--sp-ink": "#f6edd8",
              "--sp-akzent": "#cf4a37",
              "--sp-akzent2": "#e8a23a",
              "--sp-font-display": "Fredoka, system-ui, sans-serif",
              "--sp-font-body": "'Work Sans', system-ui, sans-serif",
            }}
          />
          <p style={{ marginTop: "1.4rem" }}>
            Noch nicht im Verein? <Link to="/aufnahmetest">Zum Aufnahmetest</Link>
          </p>
        </div>
      </section>
    </>
  );
}
