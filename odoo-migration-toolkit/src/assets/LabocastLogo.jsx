/**
 * Labocast Kenya - Typographic Wordmark Logo
 * A clean, professional SVG logo for the dental lab
 */

export const LabocastLogo = ({ className = "", size = "auto" }) => (
  <svg
    viewBox="0 0 280 60"
    className={className}
    style={{ width: size, height: size === "auto" ? "auto" : "auto" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Dental/medical cross icon */}
    <g transform="translate(0, 5)">
      <rect x="8" y="0" width="12" height="50" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="0" y="18" width="28" height="12" rx="2" fill="currentColor" opacity="0.9" />
      <circle cx="14" cy="24" r="6" fill="var(--bg-surface)" />
      <path 
        d="M14 18 L14 30 M8 24 L20 24" 
        stroke="var(--bg-surface)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </g>
    
    {/* LABOCAST text */}
    <text 
      x="38" 
      y="42" 
      fontFamily="'IBM Plex Sans', system-ui, sans-serif" 
      fontSize="32" 
      fontWeight="700"
      fill="currentColor"
      letterSpacing="1.5"
    >
      LABOCAST
    </text>
    
    {/* KENYA subtitle */}
    <text 
      x="38" 
      y="54" 
      fontFamily="'IBM Plex Mono', monospace" 
      fontSize="11" 
      fontWeight="500"
      fill="currentColor"
      opacity="0.7"
      letterSpacing="3"
    >
      KENYA
    </text>
    
    {/* Decorative line */}
    <line 
      x1="38" 
      y1="20" 
      x2="275" 
      y2="20" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      opacity="0.3"
    />
  </svg>
);

export default LabocastLogo;
