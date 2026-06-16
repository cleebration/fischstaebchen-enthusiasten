import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { quiz } from "../data.js";
import { scoreToRank, maxQuizPoints } from "../lib/quiz.js";

const MAX = maxQuizPoints(quiz.questions);

export default function Aufnahmetest() {
  const [step, setStep] = useState(0); // 0..n-1, dann n = Ergebnis
  const [points, setPoints] = useState(0);

  const total = quiz.questions.length;
  const done = step >= total;

  function choose(p) {
    setPoints((x) => x + p);
    setStep((s) => s + 1);
  }
  function reset() {
    setStep(0);
    setPoints(0);
  }

  const rank = done ? scoreToRank(points, quiz.ranks) : null;
  const pct = Math.round((points / MAX) * 100);

  return (
    <>
      <SEO title="Aufnahmetest" />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Aufnahmeprüfung</span>
          <h1>Bist du Stäbchen-würdig?</h1>
          <p className="lead">{quiz.intro}</p>

          <div className="quiz-card" style={{ marginTop: "1.4rem" }}>
            {!done ? (
              <div>
                <div className="quiz-progress">
                  Frage {step + 1} / {total}
                </div>
                <h3 style={{ fontSize: "1.35rem" }}>{quiz.questions[step].q}</h3>
                <div className="quiz-options">
                  {quiz.questions[step].options.map((o, i) => (
                    <button key={i} className="quiz-opt" onClick={() => choose(o.points)}>
                      {o.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="quiz-progress">Auswertung</div>
                <div className="rank-badge">{rank.title}</div>
                <div className="meter" aria-hidden="true">
                  <div style={{ width: `${pct}%` }} />
                </div>
                <p style={{ fontSize: "1.05rem" }}>{rank.text}</p>
                <p className="note">
                  {points} von {MAX} Hingabe-Punkten.
                </p>
                <div className="hero-cta" style={{ marginTop: "1rem" }}>
                  <Link className="btn" to="/mitmachen">
                    Jetzt beitreten →
                  </Link>
                  <button className="btn ghost" onClick={reset}>
                    Nochmal testen
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="note" style={{ marginTop: "1rem" }}>
            Rein zum Spaß. Es gibt kein „Durchfallen“ – nur unterschiedliche Tiefen der Knusper-Hingabe.
          </p>
        </div>
      </section>
    </>
  );
}
