"use client";

type Props = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * Modern circular monogram — high-resolution (256 viewBox).
 * Inspired by premium brand marks (Linear, Vercel, Arc, Stripe).
 *
 * Composition:
 *  - Soft ambient halo
 *  - Outer thin ring (gradient stroke) for that "pill / chip" feel
 *  - Glass disc with multi-stop conic-style fill (rose -> fuchsia -> amber -> rose)
 *  - Top glass highlight + diagonal sheen
 *  - Geometric "AY" monogram with bevel (italic, tight tracking)
 *  - Tiny amber accent orb in the corner for brand detail
 */
export default function Logo({ size = 40, className, title = "Ayushi Yadav" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      shapeRendering="geometricPrecision"
    >
      <title>{title}</title>

      <defs>
        {/* Conic-style multi-hue disc gradient (simulated via linear with many stops) */}
        <linearGradient id="ayDisc" x1="0.1" y1="0" x2="0.95" y2="1">
          <stop offset="0%" stopColor="#FFB1C0" />
          <stop offset="22%" stopColor="#FB7185" />
          <stop offset="45%" stopColor="#E11D48" />
          <stop offset="68%" stopColor="#C026D3" />
          <stop offset="88%" stopColor="#9F1239" />
          <stop offset="100%" stopColor="#5B0F2A" />
        </linearGradient>

        {/* Outer ring — thin gradient stroke */}
        <linearGradient id="ayRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFC4D0" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#F0ABFC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.85" />
        </linearGradient>

        {/* Top glass wash */}
        <linearGradient id="ayWash" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Diagonal sheen */}
        <linearGradient id="aySheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="46%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="52%" stopColor="#FFFFFF" stopOpacity="0.38" />
          <stop offset="58%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Specular highlight ellipse */}
        <radialGradient id="aySpec" cx="0.32" cy="0.22" r="0.45">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Ambient halo */}
        <radialGradient id="ayHalo" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#D946EF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
        </radialGradient>

        {/* Letter gradient */}
        <linearGradient id="ayLetter" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FFF1F4" />
          <stop offset="100%" stopColor="#FFCED8" />
        </linearGradient>

        {/* Accent orb */}
        <radialGradient id="ayOrb" cx="0.35" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>

        {/* Inner shadow on letters for embossed feel */}
        <filter id="ayLetterShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" />
          <feOffset dx="0" dy="1.6" result="off" />
          <feComposite in="off" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="inner" />
          <feColorMatrix
            in="inner"
            type="matrix"
            values="0 0 0 0 0.42
                    0 0 0 0 0.04
                    0 0 0 0 0.16
                    0 0 0 0.6 0"
            result="innerShadow"
          />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="innerShadow" />
          </feMerge>
        </filter>

        {/* Disc drop shadow */}
        <filter id="ayDiscShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="7" />
          <feOffset dx="0" dy="8" result="off" />
          <feColorMatrix
            in="off"
            type="matrix"
            values="0 0 0 0 0.55
                    0 0 0 0 0.04
                    0 0 0 0 0.18
                    0 0 0 0.5 0"
            result="ds"
          />
          <feMerge>
            <feMergeNode in="ds" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <clipPath id="ayClipDisc">
          <circle cx="128" cy="128" r="108" />
        </clipPath>
      </defs>

      {/* Ambient halo */}
      <circle cx="128" cy="128" r="124" fill="url(#ayHalo)" />

      {/* Outer ring */}
      <circle
        cx="128"
        cy="128"
        r="118"
        fill="none"
        stroke="url(#ayRing)"
        strokeWidth="1.5"
        opacity="0.85"
      />

      {/* Disc with shadow */}
      <g filter="url(#ayDiscShadow)">
        <circle cx="128" cy="128" r="108" fill="url(#ayDisc)" />
      </g>

      {/* Inside disc */}
      <g clipPath="url(#ayClipDisc)">
        {/* Top glass wash */}
        <rect x="20" y="20" width="216" height="216" fill="url(#ayWash)" />

        {/* Diagonal sheen */}
        <g transform="rotate(20 128 128)">
          <rect x="-30" y="60" width="320" height="36" fill="url(#aySheen)" opacity="0.65" />
        </g>

        {/* Specular hotspot */}
        <ellipse cx="92" cy="80" rx="58" ry="34" fill="url(#aySpec)" />

        {/* Inner bevel — bright top edge */}
        <circle
          cx="128"
          cy="128"
          r="106"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.4"
          strokeWidth="1.6"
        />
        {/* Inner bevel — soft bottom shadow edge */}
        <circle
          cx="128"
          cy="130"
          r="104"
          fill="none"
          stroke="#000000"
          strokeOpacity="0.3"
          strokeWidth="1.4"
        />

        {/* Monogram "AY" */}
        <g
          fill="url(#ayLetter)"
          filter="url(#ayLetterShadow)"
          fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Inter, sans-serif"
          fontWeight={800}
          fontStyle="italic"
        >
          <text
            x="128"
            y="172"
            textAnchor="middle"
            fontSize="130"
            letterSpacing="-7"
          >
            AY
          </text>
        </g>
      </g>

      {/* Accent orb (sits on top edge of disc) */}
      <g>
        <circle cx="206" cy="62" r="11" fill="url(#ayOrb)" />
        <circle cx="202" cy="58" r="3" fill="#FFFFFF" opacity="0.9" />
      </g>
    </svg>
  );
}
