import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot gegen Bots
  const [state, setState] = useState("idle"); // idle | loading | ok | err
  const [msg, setMsg] = useState("");

  async function submit() {
    if (state === "loading") return;
    setState("loading");
    setMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setState("ok");
        setMsg("Fast geschafft! Bitte bestätige die Anmeldung in der E-Mail, die wir dir schicken.");
        setEmail("");
      } else {
        setState("err");
        setMsg(data.error || "Das hat nicht geklappt. Bitte versuch es später erneut.");
      }
    } catch {
      setState("err");
      setMsg("Netzwerkfehler. Bitte versuch es später erneut.");
    }
  }

  return (
    <div>
      <div className="field">
        <label htmlFor="nl-email">E-Mail für das Käpt’ns-Logbuch</label>
        <input
          id="nl-email"
          type="email"
          placeholder="servus@beispiel.at"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
        />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="nl-website">Bitte leer lassen</label>
        <input id="nl-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <button className="btn block" onClick={submit} disabled={state === "loading"}>
        {state === "loading" ? "Wird gesendet…" : "Newsletter abonnieren"}
      </button>
      {msg && (
        <div className={`form-msg ${state === "ok" ? "ok" : "err"}`} role="status">
          {msg}
        </div>
      )}
      <p className="note" style={{ marginTop: ".7rem" }}>
        Du bekommst zuerst eine Bestätigungsmail (Double-Opt-in). Abmeldung jederzeit über den
        Link in jeder Ausgabe. Kein Spam, nur Knusper. Mehr dazu im{" "}
        <Link to="/rechtliches#datenschutz">Datenschutz</Link>.
      </p>
    </div>
  );
}
