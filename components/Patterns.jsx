/**
 * Procedural material artwork.
 *
 * The site ships without photography, so each service and project is
 * illustrated with generated art that evokes the actual material —
 * herringbone hardwood, hex tile, a blueprint elevation, a commercial
 * ceiling grid. Drop a real photo into <Art /> via the `src` prop and it
 * takes over; the pattern is the fallback.
 */

/**
 * Pattern ids are derived from (pattern, accent) rather than a counter so the
 * server and client markup match. Repeated instances emit identical <defs>,
 * and url(#id) resolves to the first — which is the same drawing either way.
 */
const pid = (name, accent) => `pat-${name}-${accent}`;

function Herringbone({ id, stroke, fill }) {
  return (
    <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <pattern
          id={id}
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="56" height="56" fill="none" />
          <rect
            x="2"
            y="2"
            width="24"
            height="52"
            rx="1"
            fill={fill}
            stroke={stroke}
            strokeWidth="1"
          />
          <rect
            x="30"
            y="-24"
            width="24"
            height="52"
            rx="1"
            fill={fill}
            stroke={stroke}
            strokeWidth="1"
          />
          <rect
            x="30"
            y="32"
            width="24"
            height="52"
            rx="1"
            fill={fill}
            stroke={stroke}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="300" height="300" fill={`url(#${id})`} />
    </svg>
  );
}

function HexTile({ id, stroke, fill }) {
  return (
    <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <pattern id={id} width="48" height="83.1" patternUnits="userSpaceOnUse">
          <path
            d="M24 1 46 13.8v25.5L24 52 2 39.3V13.8z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.1"
          />
          <path
            d="M0 42.5 22 55.3v25.5L0 93.6l-22-12.8V55.3z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.1"
          />
          <path
            d="M48 42.5 70 55.3v25.5L48 93.6 26 80.8V55.3z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.1"
          />
        </pattern>
      </defs>
      <rect width="300" height="300" fill={`url(#${id})`} />
    </svg>
  );
}

function Blueprint({ id, stroke, fill, elevation = true }) {
  const fine = `${id}-f`;
  return (
    <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <pattern id={fine} width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M15 0H0v15" fill="none" stroke={stroke} strokeWidth="0.5" />
        </pattern>
        <pattern id={id} width="75" height="75" patternUnits="userSpaceOnUse">
          <rect width="75" height="75" fill={`url(#${fine})`} />
          <path d="M75 0H0v75" fill="none" stroke={stroke} strokeWidth="1.1" />
        </pattern>
      </defs>
      <rect width="300" height="300" fill={`url(#${id})`} />
      {elevation ? (
        /* Schematic elevation drawn over the grid */
        <>
          <g fill="none" stroke={stroke} strokeWidth="1.8" opacity="0.95">
            <path d="M45 195V105l60-45 60 45v90z" />
            <path d="M165 195v-58h75v58z" />
            <rect x="72" y="132" width="30" height="30" />
            <rect x="120" y="132" width="30" height="30" />
            <rect x="118" y="170" width="24" height="25" />
            <rect x="186" y="156" width="34" height="24" />
            <path d="M22 210h256" strokeWidth="1.2" />
            <path d="M22 205v10M278 205v10" strokeWidth="1.2" />
          </g>
          <g fill={fill} opacity="0.8">
            <rect x="45" y="228" width="86" height="5" rx="2" />
            <rect x="45" y="242" width="52" height="5" rx="2" />
          </g>
        </>
      ) : (
        /* Floor-plan variant: partition walls and openings, no elevation */
        <g fill="none" stroke={stroke} strokeWidth="2" opacity="0.9">
          <path d="M40 45h220v210H40z" />
          <path d="M150 45v90M150 175v80M40 135h58M128 135h132" />
          <path d="M98 135a37 37 0 0 1 37-37" strokeWidth="1" opacity=".6" />
          <path d="M195 195h65v60h-65z" strokeWidth="1.2" />
          <path d="M150 175v-40" strokeWidth="2" />
        </g>
      )}
    </svg>
  );
}

function CeilingGrid({ id, stroke, fill }) {
  return (
    <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <rect
            x="1.5"
            y="1.5"
            width="57"
            height="57"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.2"
          />
          <circle cx="30" cy="30" r="4.5" fill="none" stroke={stroke} strokeWidth="1" />
          <path
            d="M12 12h10M38 48h10"
            stroke={stroke}
            strokeWidth="1"
            opacity=".7"
          />
        </pattern>
      </defs>
      <rect width="300" height="300" fill={`url(#${id})`} />
    </svg>
  );
}

const MAP = {
  herringbone: Herringbone,
  hex: HexTile,
  blueprint: Blueprint,
  grid: CeilingGrid,
};

/**
 * @param {"herringbone"|"hex"|"blueprint"|"grid"} pattern
 * @param {"brass"|"teal"} accent
 * @param {string} [src] optional real photograph — overrides the pattern
 * @param {boolean} [variant] use the alternate drawing (floor plan vs elevation)
 */
export function Art({
  pattern = "grid",
  accent = "brass",
  src,
  alt = "",
  variant = false,
}) {
  if (src) return <img src={src} alt={alt} loading="lazy" />;
  const key = MAP[pattern] ? pattern : "grid";
  const Cmp = MAP[key];
  const stroke = accent === "teal" ? "#3e8c85" : "#c8a05a";
  const fill = accent === "teal" ? "rgba(62,140,133,.07)" : "rgba(200,160,90,.07)";
  return (
    <Cmp
      id={pid(variant ? `${key}-alt` : key, accent)}
      stroke={stroke}
      fill={fill}
      elevation={!variant}
    />
  );
}

/** Full-bleed architectural grid used behind page heroes. */
export function HeroGrid({ accent = "brass" }) {
  const id = pid("hero", accent);
  const stroke = accent === "teal" ? "#3e8c85" : "#c8a05a";
  return (
    <svg
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      aria-hidden
    >
      <defs>
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0v60" fill="none" stroke={stroke} strokeWidth="1" />
        </pattern>
        <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id={`${id}-m`}>
          <rect width="1200" height="500" fill={`url(#${id}-fade)`} />
        </mask>
      </defs>
      <rect
        width="1200"
        height="500"
        fill={`url(#${id})`}
        mask={`url(#${id}-m)`}
      />
    </svg>
  );
}
