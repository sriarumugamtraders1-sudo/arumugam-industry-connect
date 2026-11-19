import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

/**
 * Text logo placeholder. Replace the mark with the official
 * Sri Arumugam Traders logo image once it is supplied.
 */
export function Logo({ variant = "dark", className }: { variant?: "dark" | "light"; className?: string }) {
  const light = variant === "light";
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)} aria-label="Sri Arumugam Traders — Home">
      <span
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-sm font-display text-[0.95rem] font-extrabold tracking-tight",
          light ? "bg-navy-foreground text-navy" : "bg-navy text-navy-foreground",
        )}
      >
        SAT
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-bold tracking-tight sm:text-lg",
            light ? "text-navy-foreground" : "text-navy",
          )}
        >
          Sri Arumugam Traders
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em]",
            light ? "text-navy-muted" : "text-muted-foreground",
          )}
        >
          Components · Job-Work · Hosur
        </span>
      </span>
    </Link>
  );
}
