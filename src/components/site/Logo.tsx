import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/sri-arumugam-traders-logo.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Official Sri Arumugam Traders logo. The artwork has a white background,
 * so on dark surfaces ("light" variant) it sits on a white plate.
 */
export function Logo({ variant = "dark", className }: { variant?: "dark" | "light"; className?: string }) {
  const light = variant === "light";
  return (
    <Link
      to="/"
      className={cn("inline-flex shrink-0 items-center", light && "rounded-sm bg-card px-3 py-2", className)}
      aria-label="Sri Arumugam Traders — Home"
    >
      <img
        src={logoAsset.url}
        alt="Sri Arumugam Traders — Trust | Supply | Growth"
        width={380}
        height={78}
        className={cn("w-auto", light ? "h-11" : "h-10 sm:h-12")}
      />
    </Link>
  );
}
