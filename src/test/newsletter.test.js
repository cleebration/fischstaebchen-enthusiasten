import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import handler from "../../api/newsletter.js";

function mockRes() {
  const res = { statusCode: 0, body: null, headers: {} };
  res.status = (c) => { res.statusCode = c; return res; };
  res.json = (b) => { res.body = b; return res; };
  res.setHeader = (k, v) => { res.headers[k] = v; };
  return res;
}

describe("api/newsletter", () => {
  beforeEach(() => {
    process.env.EMAILOCTOPUS_API_KEY = "test-key";
    process.env.EMAILOCTOPUS_LIST_ID = "list-123";
  });
  afterEach(() => vi.restoreAllMocks());

  it("lehnt GET ab", async () => {
    const res = mockRes();
    await handler({ method: "GET" }, res);
    expect(res.statusCode).toBe(405);
  });

  it("lehnt ungültige Adresse ab", async () => {
    const res = mockRes();
    await handler({ method: "POST", body: { email: "kein-mail" } }, res);
    expect(res.statusCode).toBe(400);
  });

  it("ignoriert Bots (Honeypot) ohne API-Aufruf", async () => {
    const f = vi.spyOn(globalThis, "fetch");
    const res = mockRes();
    await handler({ method: "POST", body: { email: "a@b.at", website: "spam" } }, res);
    expect(res.body.ok).toBe(true);
    expect(f).not.toHaveBeenCalled();
  });

  it("ruft EmailOctopus v2 korrekt auf", async () => {
    const f = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("{}", { status: 201 }));
    const res = mockRes();
    await handler({ method: "POST", body: JSON.stringify({ email: " Test@Beispiel.AT " }) }, res);
    expect(res.statusCode).toBe(200);
    const [url, opts] = f.mock.calls[0];
    expect(url).toBe("https://api.emailoctopus.com/lists/list-123/contacts");
    expect(opts.headers.Authorization).toBe("Bearer test-key");
    expect(JSON.parse(opts.body)).toEqual({ email_address: "test@beispiel.at", tags: ["fischstäbchen"], status: "pending" });
  });

  it("behandelt bestehenden Kontakt (409) als Erfolg", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("{}", { status: 409 }));
    const res = mockRes();
    await handler({ method: "POST", body: { email: "a@b.at" } }, res);
    expect(res.body.ok).toBe(true);
  });

  it("meldet Fehler bei 401 ohne Details", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("unauthorized", { status: 401 }));
    const res = mockRes();
    await handler({ method: "POST", body: { email: "a@b.at" } }, res);
    expect(res.statusCode).toBe(502);
    expect(res.body.error).not.toMatch(/unauthorized/);
  });

  it("meldet fehlende Konfiguration", async () => {
    delete process.env.EMAILOCTOPUS_API_KEY;
    const res = mockRes();
    await handler({ method: "POST", body: { email: "a@b.at" } }, res);
    expect(res.statusCode).toBe(503);
  });
});
