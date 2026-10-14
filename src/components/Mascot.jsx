// Käpt'n Knusperbart – unsere EIGENE, originale Vereinsfigur.
// Bewusst generisch-cartoonhaft. Keine Nachbildung realer Werbefiguren.
export default function Mascot({ className = "", bob = false }) {
  return (
    <svg
      className={`mascot ${bob ? "bob" : ""} ${className}`}
      viewBox="0 0 240 300"
      role="img"
      aria-label="Käpt'n Knusperbart, die Vereinsfigur der Fischstäbchen-Enthusiasten"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Körper / Mantel */}
      <path d="M55 300 C55 230 70 205 120 205 C170 205 185 230 185 300 Z" fill="#11384c" />
      <path d="M120 205 L120 300" stroke="#0c2a3a" strokeWidth="3" />
      <circle cx="120" cy="240" r="5" fill="#e8a23a" />
      <circle cx="120" cy="262" r="5" fill="#e8a23a" />
      {/* Rollkragen */}
      <path d="M92 210 C100 226 140 226 148 210 L150 200 L90 200 Z" fill="#f6edd8" />
      {/* Kopf */}
      <circle cx="120" cy="150" r="52" fill="#f4cda3" />
      {/* Wangen */}
      <circle cx="96" cy="158" r="9" fill="#e9a98a" opacity=".7" />
      <circle cx="144" cy="158" r="9" fill="#e9a98a" opacity=".7" />
      {/* Augen */}
      <circle cx="104" cy="142" r="4.5" fill="#1c1a17" />
      <circle cx="136" cy="142" r="4.5" fill="#1c1a17" />
      <circle cx="105.5" cy="140.5" r="1.5" fill="#fff" />
      <circle cx="137.5" cy="140.5" r="1.5" fill="#fff" />
      {/* Nase */}
      <path d="M120 148 q6 6 0 12 q-6 -6 0 -12" fill="#e9a98a" />
      {/* Bart (grau, groß) */}
      <path
        d="M78 150 C72 188 96 214 120 214 C144 214 168 188 162 150 C156 168 144 176 120 176 C96 176 84 168 78 150 Z"
        fill="#dfe3e6"
      />
      <path d="M92 168 q28 16 56 0" stroke="#c4cace" strokeWidth="2.5" fill="none" />
      {/* Schnauzer */}
      <path d="M104 160 q16 10 32 0 q-16 4 -32 0" fill="#cfd4d8" />
      {/* Mütze */}
      <path d="M70 122 C70 96 96 86 120 86 C144 86 170 96 170 122 Z" fill="#0c2a3a" />
      <rect x="66" y="118" width="108" height="14" rx="7" fill="#11384c" />
      {/* Mützen-Emblem: goldenes Stäbchen */}
      <rect x="108" y="98" width="24" height="9" rx="4.5" fill="#e8a23a" />
      <circle cx="114" cy="102.5" r="1.2" fill="#cf8420" />
      <circle cx="126" cy="102.5" r="1.2" fill="#cf8420" />
      {/* Hand mit Fischstäbchen */}
      <circle cx="182" cy="208" r="14" fill="#f4cda3" />
      <rect x="176" y="150" width="20" height="66" rx="9" fill="#e8a23a" stroke="#cf8420" strokeWidth="3" transform="rotate(12 186 183)" />
    </svg>
  );
}
