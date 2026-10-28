export function Sun({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#F5B932" strokeWidth="7" strokeLinecap="round">
        <path d="M80 10v16M80 134v16M10 80h16M134 80h16M30 30l12 12M118 118l12 12M130 30l-12 12M42 118l-12 12" />
      </g>
      <circle cx="80" cy="80" r="43" fill="#FFD15A" />
      <path
        d="M61 74v5M98 74v5M67 94q13 12 26 0"
        stroke="#243C45"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="51" cy="88" rx="8" ry="4" fill="#F5A078" />
      <ellipse cx="109" cy="88" rx="8" ry="4" fill="#F5A078" />
    </svg>
  );
}

export function Rainbow({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 140"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 118V87a66 66 0 0 1 132 0v31"
        stroke="#ED7867"
        strokeWidth="18"
      />
      <path
        d="M43 118V87a47 47 0 0 1 94 0v31"
        stroke="#F6C653"
        strokeWidth="16"
      />
      <path
        d="M61 118V87a29 29 0 0 1 58 0v31"
        stroke="#77B6A2"
        strokeWidth="16"
      />
      <path
        d="M7 126q-5-17 11-21 2-23 22-17 13-1 15 17 18 2 12 21M117 126q-5-17 11-21 2-23 22-17 13-1 15 17 18 2 12 21"
        fill="#fff"
      />
    </svg>
  );
}

export function Sprout({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M80 106V63"
        stroke="#345E4E"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M80 84C37 87 26 58 34 33c31 0 50 14 46 51Z" fill="#72B79C" />
      <path d="M82 68c-3-34 15-48 45-47 9 30-14 50-45 47Z" fill="#418F77" />
      <path
        d="m51 54 28 28m24-37L83 66"
        stroke="#D5EDBA"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M42 101h76l-10 40H52Z" fill="#EC9877" />
      <rect x="36" y="96" width="88" height="14" rx="6" fill="#DA7658" />
      <path
        d="M68 119v3m24-3v3m-20 9q8 6 16 0"
        stroke="#4C423F"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Rocket({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      <g transform="rotate(22 80 80)">
        <path d="m65 118 15 33 15-33" fill="#F3BC41" />
        <path d="M56 89 36 119l24-6m44-24 20 30-24-6" fill="#EF816F" />
        <path
          d="M80 10c-33 29-32 69-21 112h42C112 79 113 39 80 10Z"
          fill="#F5F1DF"
          stroke="#587D94"
          strokeWidth="2"
        />
        <path
          d="M80 10c-12 11-19 23-23 37h46C99 33 92 21 80 10Z"
          fill="#EF816F"
        />
        <circle
          cx="80"
          cy="72"
          r="15"
          fill="#8EC8D4"
          stroke="#587D94"
          strokeWidth="5"
        />
        <path d="M62 110h36" stroke="#587D94" strokeWidth="5" />
      </g>
      <path
        d="m30 36 3 9 9 3-9 3-3 9-3-9-9-3 9-3Zm98 68 2 7 7 2-7 2-2 7-2-7-7-2 7-2Z"
        fill="#F3BC41"
      />
    </svg>
  );
}

export function Flower({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g fill="#E899B4">
        <ellipse cx="60" cy="31" rx="17" ry="28" />
        <ellipse cx="60" cy="89" rx="17" ry="28" />
        <ellipse cx="31" cy="60" rx="28" ry="17" />
        <ellipse cx="89" cy="60" rx="28" ry="17" />
        <ellipse
          cx="39"
          cy="39"
          rx="17"
          ry="25"
          transform="rotate(-45 39 39)"
        />
        <ellipse
          cx="81"
          cy="81"
          rx="17"
          ry="25"
          transform="rotate(-45 81 81)"
        />
        <ellipse cx="81" cy="39" rx="17" ry="25" transform="rotate(45 81 39)" />
        <ellipse cx="39" cy="81" rx="17" ry="25" transform="rotate(45 39 81)" />
      </g>
      <circle cx="60" cy="60" r="23" fill="#FFD15A" />
      <path
        d="M51 55v3m18-3v3m-17 9q8 8 16 0"
        fill="none"
        stroke="#283E47"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Scribble({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 70"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 21c29 67 91 45 79 10C73 0 43 13 57 35s47 20 74-23m-27 2 28-7-1 28"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 6"
      />
    </svg>
  );
}

export function ProgramArt({ type, ...props }) {
  const Component =
    { sun: Sun, sprout: Sprout, rainbow: Rainbow, rocket: Rocket }[type] || Sun;
  return <Component {...props} />;
}

// The original, irregular wave contour is retained from assets/images/wave-up.svg.
export function Wave({
  color = "var(--yellow)",
  background = "transparent",
  flip = false,
  className = "",
}) {
  return (
    <div
      className={`wave ${flip ? "wave-flip" : ""} ${className}`}
      style={{ color, background }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,39L10,39C20,39,40,39,60,39C80,39,100,39,120,45.5C140,52,160,65,180,62.8C200,61,220,43,240,47.7C260,52,280,78,300,86.7C320,95,340,87,360,78C380,69,400,61,420,67.2C440,74,460,95,480,101.8C500,108,520,100,540,97.5C560,95,580,100,600,93.2C620,87,640,69,660,60.7C680,52,700,52,720,45.5C740,39,760,26,780,19.5C800,13,820,13,840,23.8C860,35,880,56,900,62.8C920,69,940,61,960,56.3C980,52,1000,52,1020,52C1040,52,1060,52,1080,60.7C1100,69,1120,87,1140,82.3C1160,78,1180,52,1200,47.7C1220,43,1240,61,1260,65C1280,69,1300,61,1320,56.3C1340,52,1360,52,1380,47.7C1400,43,1420,35,1430,30.3L1440,26L1440,130L0,130Z"
        />
      </svg>
    </div>
  );
}
