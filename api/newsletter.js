// Vercel Serverless Function (Node).
// Nimmt eine E-Mail entgegen und legt sie in EmailOctopus (API v2) an –
// mit Tag "fischstäbchen" und Status "pending" (Double-Opt-in: EmailOctopus
// schickt die Bestätigungsmail, erst danach ist der Kontakt abonniert).
//
// Benötigte Environment Variables in Vercel (Settings → Environment Variables):
//   EMAILOCTOPUS_API_KEY   – API-Key (v2, erstellt ab Oktober 2024)
//   EMAILOCTOPUS_LIST_ID   – ID der Liste „Fischstaebchen“ (aus der Listen-URL)

const API = "https://api.emailoctopus.com";
const TAG = "fischstäbchen";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function parseBody(body) {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body || {};
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const body = parseBody(req.body);

  // Honeypot: echte Menschen sehen dieses Feld nicht. Bots füllen es aus.
  if (body.website) {
    res.status(200).json({ ok: true });
    return;
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." });
    return;
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  const listId = process.env.EMAILOCTOPUS_LIST_ID;
  if (!apiKey || !listId) {
    res.status(503).json({ ok: false, error: "Der Newsletter ist gleich startklar – bitte später nochmal probieren." });
    return;
  }

  try {
    const r = await fetch(`${API}/lists/${encodeURIComponent(listId)}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email_address: email, tags: [TAG], status: "pending" }),
      signal: AbortSignal.timeout(8000),
    });

    // 2xx = angelegt; 409 = Adresse ist schon auf der Liste -> für Besucher:innen trotzdem „ok“.
    if (r.ok || r.status === 409) {
      res.status(200).json({ ok: true });
      return;
    }

    const detail = await r.text().catch(() => "");
    console.error("EmailOctopus", r.status, detail.slice(0, 300));
    res.status(502).json({ ok: false, error: "Anmeldung fehlgeschlagen. Bitte später erneut versuchen." });
  } catch (e) {
    console.error("EmailOctopus fetch failed", e && e.name);
    res.status(502).json({ ok: false, error: "Netzwerkfehler. Bitte später erneut versuchen." });
  }
}
