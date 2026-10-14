import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function Verein() {
  return (
    <>
      <SEO title="Verein" />
      <section className="section">
        <div className="wrap prose">
          <span className="eyebrow">Der Verein</span>
          <h1>Eine Bruderschaft der Panier.</h1>
          <p className="lead">
            Die Fischstäbchen-Enthusiasten sind ein loser, fröhlicher Zusammenschluss erwachsener Menschen, die
            ein einfaches Glück teilen: ein goldbraunes Fischstäbchen, eine Beilage nach Wahl, und
            die Erinnerung, die beim ersten Biss hochkommt.
          </p>

          <h2>Warum gerade Fischstäbchen?</h2>
          <p>
            Weil es selten ums Essen allein geht. Für viele von uns ist das Stäbchen eine kleine
            Zeitmaschine: Freitagabend, Küchentisch, der Streit darum, wer das letzte abbekommt.
            Wir haben festgestellt, dass fast jede:r eine eigene Beilagen-Biografie hat – und dass
            man darüber erstaunlich lange reden kann.
          </p>

          <h2>Ein bisschen Geschichte</h2>
          <p>
            Das Fischstäbchen, wie wir es kennen, gibt es in Deutschland seit 1959 – erdacht, um
            Kindern Fisch ohne Gräten schmackhaft zu machen. Die berühmte Werbefigur kam 1985 dazu
            und wurde über Jahrzehnte von verschiedenen Schauspielern verkörpert. Aus den Kindern
            von damals sind die Nostalgiker:innen von heute geworden – und genau für die gibt es
            uns. (Historische Eckdaten: iglo.de / Wikipedia.)
          </p>

          <h2>Unsere drei Grundsätze</h2>
          <ul>
            <li><strong>Goldbräune ist Haltung.</strong> Zu blass ist ein Notfall, zu dunkel verzeihen wir.</li>
            <li><strong>Jede Beilage ist gültig.</strong> Auch die, über die wir uns lautstark streiten.</li>
            <li><strong>Nostalgie teilt man.</strong> Allein essen darf jede:r – aber gemeinsam schmeckt's nach mehr.</li>
          </ul>

          <h2>Wir nehmen uns nicht ernst (das Essen schon)</h2>
          <p>
            Das hier ist ein Spaßprojekt von Fans, keine offizielle Institution. Wir verkaufen
            nichts, wir vertreten niemanden – wir braten zusammen und lachen viel.
          </p>

          <div className="hero-cta" style={{ marginTop: "1.4rem" }}>
            <Link className="btn" to="/aufnahmetest">Aufnahmetest →</Link>
            <Link className="btn ghost" to="/gruppen">Gruppen ansehen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
