import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Über Bord" />
      <section className="section">
        <div className="wrap prose" style={{ textAlign: "center" }}>
          <span className="eyebrow">404</span>
          <h1>Diese Seite ist über Bord gegangen.</h1>
          <p className="lead" style={{ margin: "0 auto 1.4rem" }}>
            Kein Stäbchen weit und breit. Zurück in sichere Gewässer?
          </p>
          <Link className="btn" to="/">Zur Startseite →</Link>
        </div>
      </section>
    </>
  );
}
