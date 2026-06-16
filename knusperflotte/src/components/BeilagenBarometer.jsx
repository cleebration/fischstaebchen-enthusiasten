import { useEffect, useMemo, useState } from "react";
import { beilagen as seed } from "../data.js";

const KEY = "knusperflotte_beilagen_votes";

export default function BeilagenBarometer({ interactive = true }) {
  const [votes, setVotes] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setVotes(JSON.parse(raw));
    } catch { /* localStorage evtl. nicht verfügbar */ }
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  function vote(id) {
    setVotes((prev) => {
      const next = { ...prev, [id]: (prev[id] || 0) + 1 };
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }

  const rows = useMemo(() => {
    const merged = seed.map((b) => ({ ...b, total: b.votes + (votes[b.id] || 0) }));
    merged.sort((a, b) => b.total - a.total);
    const max = merged[0]?.total || 1;
    return merged.map((b) => ({ ...b, pct: Math.round((b.total / max) * 100) }));
  }, [votes]);

  return (
    <div>
      {rows.map((b) => (
        <div className="bar-row" key={b.id}>
          <span className="bar-name">
            <span aria-hidden="true">{b.emoji}</span> {b.name}
          </span>
          <span className="bar-track">
            <span className="bar-fill" style={{ width: mounted ? `${b.pct}%` : 0 }} />
          </span>
          {interactive ? (
            <button className="vote-btn" onClick={() => vote(b.id)} aria-label={`Für ${b.name} stimmen`}>
              ▲
            </button>
          ) : (
            <span className="bar-val">{b.total}</span>
          )}
        </div>
      ))}
      <p className="note" style={{ marginTop: ".8rem" }}>
        Nicht repräsentativ, hochgradig emotional. Deine Stimmen bleiben in diesem Browser.
      </p>
    </div>
  );
}
