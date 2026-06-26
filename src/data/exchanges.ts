export const exchanges = [
  { name: "Binance", slug: "binance", accent: "#F0B90B", logo: "/exchanges/binance.png" },
  { name: "Bitget", slug: "bitget", accent: "#00F0FF", logo: "/exchanges/bitget.png" },
  { name: "Bybit", slug: "bybit", accent: "#F7A600", logo: "/exchanges/bybit.png" },
  { name: "Bitunix", slug: "bitunix", accent: "#B8FF3C", logo: "/exchanges/bitunix.png" },
  { name: "BloFin", slug: "blofin", accent: "#FF6B2C", logo: "/exchanges/blofin.png" },
  { name: "BingX", slug: "bingx", accent: "#2B6AFF", logo: "/exchanges/bingx.png" },
] as const;

export type ExchangeId = (typeof exchanges)[number]["slug"];
