import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, MessageSquareText, Package, Send, Wrench, X } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { WhatsAppIcon } from "@/components/site/WhatsAppFloat";
import { whatsappLink } from "@/lib/site";

const OPTIONS = [
  { icon: Package, title: "I need industrial components", text: "Flanges, valves, pipe fittings and more", to: "/products" as const },
  { icon: Wrench, title: "I need job-work done", text: "Fabrication & machining to your drawing", to: "/services" as const },
  { icon: Send, title: "Send a drawing or RFQ", text: "Request a quotation", to: "/request-quote" as const },
];

/** Small floating "How can we help?" button that opens a compact menu of options. */
export function HelpWidget() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={open ? "Close help menu" : "How can we help you today?"}
          className="fixed bottom-24 right-5 z-50 grid size-14 place-items-center rounded-full bg-navy text-navy-foreground shadow-lift transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {open ? <X className="size-6" /> : <MessageSquareText className="size-6" />}
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={12}
        className="w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-md border-border p-0 shadow-lift"
      >
        <div className="bg-navy px-4 py-3 text-navy-foreground">
          <p className="font-display text-base font-bold">How can we help you today?</p>
          <p className="text-xs text-navy-muted">Pick an option and we'll take you there.</p>
        </div>
        <ul className="grid gap-1 p-2">
          {OPTIONS.map((o) => (
            <li key={o.title}>
              <Link
                to={o.to}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 rounded-sm p-2.5 transition-colors hover:bg-accent"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-signal text-signal-foreground">
                  <o.icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground">{o.title}</span>
                  <span className="block text-xs text-muted-foreground">{o.text}</span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-sm p-2.5 transition-colors hover:bg-accent"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-whatsapp text-whatsapp-foreground">
                <WhatsAppIcon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-foreground">Not sure what you need?</span>
                <span className="block text-xs text-muted-foreground">Send a photo or message on WhatsApp</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
