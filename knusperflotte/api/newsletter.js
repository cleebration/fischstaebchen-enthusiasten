// Vercel Serverless Function (Node).
// Nimmt eine E-Mail entgegen und legt sie in EmailOctopus an –
// mit Tag "fischstäbchen" und Status PENDING (Double-Opt-in / DSGVO).
//
// Benötigte Environment Variables in Vercel:
//   EMAILOCTOPUS_API_KEY   – dein API-Key
//   EMAILOCTOPUS_LIST_ID   – die Listen-ID (aus der Listen-URL)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  const email = (body && body.email ? String(body.email) : "").trim();

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    res.status(400).json({ ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." });
    return;
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  const listId = process.env.EMAILOCTOPUS_LIST_ID;
  if (!apiKey || !listId) {
    res.status(500).json({ ok: false, error: "Newsletter ist noch nicht konfiguriert." });
    return;
  }

  try {
    const r = await fetch(`https://emailoctopus.com/api/1.6/lists/${listId}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: email,
        tags: ["fischstäbchen"],
        status: "PENDING", // Double-Opt-in: EmailOctopus schickt Bestätigungsmail
      }),
    });
    const data = await r.json().catch(() => ({}));

    // Bereits vorhandener Kontakt -> trotzdem als Erfolg behandeln.
    if (r.ok || (data && data.error && data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS")) {
      res.status(200).json({ ok: true });
      return;
    }
    res.status(502).json({ ok: false, error: "Anmeldung fehlgeschlagen. Bitte später erneut." });
  } catch (e) {
    res.status(502).json({ ok: false, error: "Netzwerkfehler. Bitte später erneut." });
  }
}
