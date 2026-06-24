export type IconName =
  | "signal"
  | "branding"
  | "volume"
  | "design"
  | "deals"
  | "community"
  | "insiders"
  | "commission"
  | "network"
  | "scale"
  | "follower"
  | "registration"
  | "deposit"
  | "trade"
  | "touch"
  | "match"
  | "setup"
  | "x"
  | "email"
  | "telegram"
  | "stat-volume"
  | "stat-scaled"
  | "stat-commission";

/** Icons drawn on 32×32 canvas with 6px inset — stroke 1.5, round caps */
const g = 'stroke="url(#icon-gradient)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"';
const f = 'fill="url(#icon-gradient)"';

export const iconPaths: Record<IconName, string> = {
  signal: `
    <rect x="7" y="9" width="10" height="14" rx="2" ${g}/>
    <path ${g} d="M9 13h6M9 17h4"/>
    <path ${g} d="M20 14c1.5 1.2 2.5 3 2.5 5s-1 3.8-2.5 5"/>
    <path ${g} d="M23 12c2.2 1.8 3.5 4.5 3.5 7.5S25.2 25.2 23 27"/>
    <path ${g} d="M12 21v-5l3-2 3 3"/>
  `,
  branding: `
    <rect x="6" y="7" width="20" height="18" rx="2.5" ${g}/>
    <path ${g} d="M10 12h8M10 16h12M10 20h6"/>
    <circle cx="22" cy="20" r="2.5" ${g}/>
    <path ${g} d="M21 19l2 2"/>
  `,
  volume: `
    <path ${g} d="M7 24V14M12 24V10M17 24v-8M22 24V7"/>
    <path ${g} d="M6 24h20"/>
    <path ${g} d="M18 11l3-2 3 3"/>
  `,
  design: `
    <path ${g} d="M16 7l2.2 6.8L25 16l-6.8 2.2L16 25l-2.2-6.8L7 16l6.8-2.2z"/>
    <path ${g} d="M8 26h16"/>
    <path ${g} d="M11 26v-2.5M21 26v-2.5"/>
  `,
  deals: `
    <path ${g} d="M8 12l3 3 7-7"/>
    <rect x="6" y="8" width="20" height="16" rx="2.5" ${g}/>
    <path ${g} d="M11 8V6M21 8V6"/>
    <path ${g} d="M6 13h20"/>
  `,
  community: `
    <circle cx="13" cy="12" r="3.5" ${g}/>
    <circle cx="21" cy="11" r="2.5" ${g}/>
    <path ${g} d="M6 25c0-3.5 3.2-6 7-6s7 2.5 7 6"/>
    <path ${g} d="M21 17.5c2.2 0 4 1.2 4.5 3"/>
  `,
  insiders: `
    <path ${g} d="M6 26V13l10-7 10 7v13"/>
    <path ${g} d="M12 26v-7h8v7"/>
    <path ${g} d="M6 13h20"/>
    <rect x="14" y="16" width="4" height="4" rx="0.5" ${g}/>
  `,
  commission: `
    <circle cx="16" cy="16" r="10" ${g}/>
    <path ${g} d="M12.5 12.5c0-2 1.8-3.2 3.5-3.2s3.5 1.2 3.5 3.2c0 2.5-3.5 2.2-3.5 5"/>
    <circle cx="16" cy="22" r="1" ${f}/>
  `,
  network: `
    <circle cx="16" cy="16" r="10" ${g}/>
    <ellipse cx="16" cy="16" rx="4" ry="10" ${g}/>
    <path ${g} d="M6 16h20"/>
    <path ${g} d="M8.5 11.5c3-2 6.5-2 9.5 0M8.5 20.5c3 2 6.5 2 9.5 0"/>
  `,
  scale: `
    <path ${g} d="M6 24h20"/>
    <path ${g} d="M9 20l4-6 4 4 5-8 3 4"/>
    <circle cx="24" cy="10" r="2" ${g}/>
  `,
  follower: `
    <circle cx="13" cy="11" r="3.5" ${g}/>
    <path ${g} d="M6 25c0-3.5 2.8-6 7-6"/>
    <circle cx="23" cy="15" r="2" ${g}/>
    <path ${g} d="M23 18v5M20.5 20.5h5"/>
  `,
  registration: `
    <rect x="8" y="6" width="16" height="20" rx="2" ${g}/>
    <path ${g} d="M12 6v3h8V6"/>
    <path ${g} d="M11 16l2.5 2.5L18 14"/>
    <path ${g} d="M11 21h10"/>
  `,
  deposit: `
    <rect x="6" y="9" width="20" height="14" rx="2.5" ${g}/>
    <path ${g} d="M6 14h20"/>
    <path ${g} d="M16 20V13M13 17l3-3 3 3"/>
  `,
  trade: `
    <path ${g} d="M8 24V14h4v10"/>
    <path ${g} d="M15 24V8h4v16"/>
    <path ${g} d="M6 24h20"/>
    <path ${g} d="M8 14V10h4M15 8V5h4"/>
  `,
  touch: `
    <path ${g} d="M8 14a8 8 0 1116 0c0 4-3 7-6 7h-4l-3 2 1-3.5"/>
    <circle cx="12" cy="14" r="0.5" ${f}/>
    <circle cx="16" cy="14" r="0.5" ${f}/>
    <circle cx="20" cy="14" r="0.5" ${f}/>
  `,
  match: `
    <circle cx="16" cy="16" r="10" ${g}/>
    <circle cx="16" cy="16" r="5" ${g}/>
    <circle cx="16" cy="16" r="1.5" ${f}/>
    <path ${g} d="M16 6v3M16 23v3M6 16h3M23 16h3"/>
  `,
  setup: `
    <path ${g} d="M16 6l2.5 7.5H26l-6.5 5 2.5 7.5L16 20l-6.5 6 2.5-7.5L5 13.5h7.5z"/>
  `,
  x: `
    <path ${g} d="M9 9l14 14M23 9L9 23"/>
  `,
  email: `
    <rect x="5" y="8" width="22" height="16" rx="2.5" ${g}/>
    <path ${g} d="M5 11l11 8 11-8"/>
  `,
  telegram: `
    <path ${g} d="M7 15l12-8-3 11-4-3-5 2z"/>
    <path ${g} d="M19 7l-6 10"/>
  `,
  "stat-volume": `
    <path ${g} d="M7 24V15M12 24V11M17 24v-7M22 24V8"/>
    <path ${g} d="M6 24h20"/>
  `,
  "stat-scaled": `
    <path ${g} d="M6 22h20"/>
    <path ${g} d="M8 18l5-7 4 5 6-9 3 5"/>
  `,
  "stat-commission": `
    <circle cx="16" cy="16" r="9" ${g}/>
    <path ${g} d="M16 11v10"/>
    <path ${g} d="M13 14h6"/>
  `,
};
