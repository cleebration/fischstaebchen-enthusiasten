// Ermittelt Rang aus erreichten Punkten. answers = Array von points.
export function scoreToRank(points, ranks) {
  const sorted = [...ranks].sort((a, b) => a.min - b.min);
  let result = sorted[0];
  for (const r of sorted) if (points >= r.min) result = r;
  return result;
}

export function maxQuizPoints(questions) {
  return questions.reduce(
    (sum, q) => sum + Math.max(...q.options.map((o) => o.points)),
    0
  );
}
