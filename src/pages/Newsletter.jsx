import SEO from "../components/SEO.jsx";
import NewsletterForm from "../components/NewsletterForm.jsx";

export default function Newsletter() {
  return (
    <>
      <SEO title="Newsletter" />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <span className="eyebrow">Käpt’ns Logbuch</span>
          <h1>Newsletter.</h1>
          <p className="lead">Termine, Aktionen, Beilagen-Eskalationen – knusprig vereint, per E-Mail.</p>
          <div className="card" style={{ marginTop: "1.6rem" }}>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
