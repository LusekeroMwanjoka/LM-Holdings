export function Mark({ size = 32, color = "currentColor", accent = "#dda15e" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M11 8V52H30V12L42 34 54 12V52"
        fill="none"
        stroke={color}
        strokeWidth="5.5"
        strokeLinejoin="miter"
      />
      <circle cx="42" cy="46" r="3.2" fill={accent} />
    </svg>
  );
}

export default function Logo({ size = 32, color = "currentColor" }) {
  return (
    <span className="logo">
      <Mark size={size} color={color} />
      <b>LM HOLDINGS</b>
    </span>
  );
}
