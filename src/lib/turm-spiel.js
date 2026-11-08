// cleebration Markenspiel (turm) – eine Datei, keine Abhängigkeiten. Claude, Chat MyProj Eggstra, 08.11.2026.
const lies = (k, f) => { try { const v = localStorage.getItem(k); return v == null ? f : JSON.parse(v) } catch { return f } };
const schreib = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} };
const mischen = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] } return a };
let actx = null;
function audio() { try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch { actx = null } return actx }
function ton(f, dauer = .15, typ = 'triangle', laut = .2, wann = 0) {
  const a = audio(); if (!a) return;
  const t = a.currentTime + wann, o = a.createOscillator(), g = a.createGain();
  o.type = typ; o.frequency.value = f; g.gain.setValueAtTime(laut, t); g.gain.exponentialRampToValueAtTime(.0001, t + dauer);
  o.connect(g).connect(a.destination); o.start(t); o.stop(t + dauer + .02);
}
const $ = (s, el = document) => el.querySelector(s);
const CSS = `
.sp{background:var(--sp-bg,#16131F);color:var(--sp-ink,#F5F2FF);border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:12px;font-family:var(--sp-font-body,system-ui,sans-serif);max-width:760px;margin:0 auto;min-height:380px}
.sp-hud{display:flex;flex-wrap:wrap;gap:8px;font-size:.88rem}
.sp-hud span{background:rgba(255,255,255,.1);padding:4px 10px;border-radius:8px;font-variant-numeric:tabular-nums}
.sp-mitte{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center}
.sp-hinweis{font-size:.88rem;opacity:.75;margin:0}
.sp-btn{font:700 1rem var(--sp-font-body,system-ui,sans-serif);border:0;border-radius:12px;padding:11px 20px;cursor:pointer;background:var(--sp-akzent,#E8443A);color:var(--sp-akzent-ink,#fff)}
.sp-btn:focus-visible,.sp button:focus-visible{outline:3px solid var(--sp-akzent2,#F2A30E);outline-offset:2px}
.sp canvas{display:block;width:100%;height:auto;border-radius:12px;touch-action:manipulation;user-select:none;-webkit-user-select:none;max-width:100%}
.sp-gross{font-family:var(--sp-font-display,inherit);font-size:clamp(1.3rem,5vw,2rem);line-height:1.15}
@media(prefers-reduced-motion:reduce){.sp *{transition:none!important;animation:none!important}}
`;
function stil(extra = '') {
  if (!document.getElementById('sp-stil')) { const s = document.createElement('style'); s.id = 'sp-stil'; s.textContent = CSS; document.head.appendChild(s) }
  if (extra) { const s = document.createElement('style'); s.textContent = extra; document.head.appendChild(s) }
}
function leinwand(cv, w, h) { const c = cv.getContext('2d'); if (!c) return null; const d = Math.min(devicePixelRatio || 1, 2); cv.width = w * d; cv.height = h * d; c.scale(d, d); if (!c.roundRect) c.roundRect = function (x, y, ww, hh) { this.rect(x, y, ww, hh) }; return c }
// Fischstäbchen-Enthusiasten – Fischstäbchen-Turm: Stäbchen im richtigen Moment ablegen, Überstand fällt in die Pfanne.
export function mount(root) {
  stil();
  root.classList.add('sp');
  root.innerHTML = `<div class="sp-hud"><span data-p>Höhe 0</span><span data-r>Rekord ${lies('fischstaebchen-turm-rekord', 0)}</span></div>
    <canvas style="aspect-ratio:3/4;max-width:420px;margin:0 auto" role="img" aria-label="Spielfeld – tippen zum Ablegen"></canvas>
    <p class="sp-hinweis" style="text-align:center">Tippen, Klicken oder Leertaste: Fischstäbchen ablegen. Was übersteht, fällt in die Pfanne.</p>`;
  const cv = $('canvas', root), Wd = 300, Hd = 400, c = leinwand(cv, Wd, Hd); if (!c) return () => {};
  const SH = 22; let stapel, akt, tempo, aus, krumen, rek = lies('fischstaebchen-turm-rekord', 0), raf, letzte = performance.now();
  const start = () => { stapel = [{ x: 60, w: 180 }]; tempo = 120; neues(); aus = false; krumen = []; $('[data-p]', root).textContent = 'Höhe 0' };
  const neues = () => { akt = { x: 0, w: stapel[stapel.length - 1].w, dir: 1 } };
  function ablegen() {
    if (aus) { start(); return }
    const l = stapel[stapel.length - 1], li = Math.max(akt.x, l.x), re = Math.min(akt.x + akt.w, l.x + l.w);
    if (re - li <= 2) { aus = true; ton(160, .3, 'square', .08); if (stapel.length - 1 > rek) { rek = stapel.length - 1; schreib('fischstaebchen-turm-rekord', rek); $('[data-r]', root).textContent = 'Rekord ' + rek } return }
    const ueber = akt.w - (re - li);
    if (ueber > 2) krumen.push({ x: akt.x < l.x ? akt.x : re, w: ueber, y: 0, vy: 0, lvl: stapel.length + 1 });
    stapel.push({ x: li, w: re - li }); tempo = Math.min(320, tempo + 9);
    ton(ueber <= 2 ? 990 : 600, .1, 'triangle', .15);
    $('[data-p]', root).textContent = 'Höhe ' + (stapel.length - 1); neues();
  }
  function stab(x, y, w) {
    c.fillStyle = '#E8A23A'; c.beginPath(); c.roundRect(x, y, w, SH - 3, 6); c.fill();
    c.fillStyle = 'rgba(255,240,200,.6)'; for (let k = x + 6; k < x + w - 4; k += 9) c.fillRect(k, y + 5 + ((k * 7) % 8), 2, 2);
  }
  function bild(t) {
    const dt = Math.min(.05, (t - letzte) / 1000); letzte = t;
    c.fillStyle = '#0C2A3A'; c.fillRect(0, 0, Wd, Hd);
    const sicht = Math.max(0, stapel.length - 12) * SH;
    c.fillStyle = '#3A3F55'; c.beginPath(); c.roundRect(20, Hd - 18 + sicht, 260, 18, 8); c.fill();
    stapel.forEach((s, k) => stab(s.x, Hd - 18 - (k + 1) * SH + sicht, s.w));
    krumen.forEach(k => { k.vy += 900 * dt; k.y += k.vy * dt; stab(k.x, Hd - 18 - k.lvl * SH + sicht + k.y, k.w) });
    krumen = krumen.filter(k => k.y < Hd);
    if (!aus) {
      akt.x += akt.dir * tempo * dt; if (akt.x + akt.w > Wd) { akt.x = Wd - akt.w; akt.dir = -1 } if (akt.x < 0) { akt.x = 0; akt.dir = 1 }
      stab(akt.x, Hd - 18 - (stapel.length + 1) * SH + sicht, akt.w);
    } else {
      c.fillStyle = 'rgba(0,0,0,.55)'; c.fillRect(0, 0, Wd, Hd); c.fillStyle = '#fff'; c.textAlign = 'center';
      c.font = '700 22px Fredoka, system-ui, sans-serif'; c.fillText('In die Pfanne!', Wd / 2, Hd / 2 - 10);
      c.font = '600 15px system-ui, sans-serif'; c.fillText(`Höhe ${stapel.length - 1} · tippen für neuen Turm`, Wd / 2, Hd / 2 + 18);
    }
    raf = requestAnimationFrame(bild);
  }
  const druck = e => { e.preventDefault(); ablegen() };
  const key = e => { if (e.code === 'Space' && document.activeElement?.tagName !== 'INPUT') { e.preventDefault(); ablegen() } };
  cv.addEventListener('pointerdown', druck); addEventListener('keydown', key);
  start(); raf = requestAnimationFrame(bild);
  return () => { cancelAnimationFrame(raf); removeEventListener('keydown', key) };
}
