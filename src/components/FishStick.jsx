export default function FishStick({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="26" width="44" height="14" rx="7" fill="#e8a23a" stroke="#cf8420" strokeWidth="3" transform="rotate(-12 32 33)" />
      <circle cx="22" cy="32" r="1.6" fill="#cf8420" />
      <circle cx="33" cy="30" r="1.6" fill="#cf8420" />
      <circle cx="44" cy="34" r="1.6" fill="#cf8420" />
    </svg>
  );
}
