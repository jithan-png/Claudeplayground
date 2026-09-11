const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Check({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="m2.5 8.4 3.4 3.3 7.6-7.4" />
    </svg>
  );
}

export function Phone({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="M5.8 2.3 7 4.9 5.6 6.3a8.4 8.4 0 0 0 4.1 4.1L11.1 9l2.6 1.2v2.4c0 .7-.6 1.2-1.3 1.1C6.6 13.2 2.8 9.4 2.2 3.6c-.1-.7.4-1.3 1.1-1.3h2.5Z" />
    </svg>
  );
}

export function Mail({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <rect x="1.8" y="3.3" width="12.4" height="9.4" rx="1.4" />
      <path d="m2.4 4.4 5.6 4 5.6-4" />
    </svg>
  );
}

export function Pin({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="M8 14.2s4.7-4 4.7-7.5a4.7 4.7 0 1 0-9.4 0C3.3 10.2 8 14.2 8 14.2Z" />
      <circle cx="8" cy="6.6" r="1.8" />
    </svg>
  );
}

export function Clock({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <circle cx="8" cy="8" r="6.2" />
      <path d="M8 4.5V8l2.4 1.6" />
    </svg>
  );
}

export function Instagram({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="3.4" />
      <circle cx="8" cy="8" r="2.8" />
      <circle cx="11.4" cy="4.6" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* --- Value-prop icons --- */

export function IconTrowel({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base}>
      <path d="M16 4 27 15 16 26 5 15z" />
      <path d="M16 9.5 21.5 15 16 20.5 10.5 15z" opacity=".55" />
    </svg>
  );
}

export function IconCalendar({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base}>
      <rect x="4.5" y="7" width="23" height="20.5" rx="2.5" />
      <path d="M4.5 13h23M10.5 4.5V9M21.5 4.5V9" />
      <path d="m11.5 19.5 3 3 6-6" opacity=".6" />
    </svg>
  );
}

export function IconHeadset({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base}>
      <path d="M6 20v-4a10 10 0 0 1 20 0v4" />
      <rect x="3.5" y="18.5" width="5.5" height="8" rx="2.2" />
      <rect x="23" y="18.5" width="5.5" height="8" rx="2.2" />
      <path d="M26 26.5v.5a3 3 0 0 1-3 3h-4" opacity=".6" />
    </svg>
  );
}

export function IconShield({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base}>
      <path d="M16 3.5 27 7.5v8.7c0 6.4-4.6 10.8-11 12.3-6.4-1.5-11-5.9-11-12.3V7.5z" />
      <path d="m11.5 16 3.2 3.2 6.3-6.4" opacity=".6" />
    </svg>
  );
}

export function IconBroom({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base}>
      <path d="M20.5 4.5 13 12" />
      <path d="m10 9 5.5 5.5-6 6-5.5-5.5z" transform="rotate(0 0 0)" />
      <path d="M18 13.5 27.5 23a2.5 2.5 0 0 1-3.5 3.5L14.5 17" opacity=".6" />
    </svg>
  );
}

export function IconDoc({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base}>
      <path d="M7 4.5h11L25 11v16.5H7z" />
      <path d="M18 4.5V11h7" opacity=".6" />
      <path d="M11.5 17h9M11.5 21.5h6" opacity=".6" />
    </svg>
  );
}

export function Shield({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" {...base}>
      <path d="M8 1.6 13.4 3.7v4.3c0 3.2-2.3 5.4-5.4 6.2-3.1-.8-5.4-3-5.4-6.2V3.7z" />
      <path d="m5.8 8 1.5 1.5L10.4 6" />
    </svg>
  );
}

export function Star({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="m8 1.6 1.9 4 4.4.6-3.2 3.1.8 4.4L8 11.6l-3.9 2.1.8-4.4L1.7 6.2l4.4-.6z" />
    </svg>
  );
}

export const whyIcons = [
  IconTrowel,
  IconCalendar,
  IconHeadset,
  IconShield,
  IconBroom,
  IconDoc,
];
