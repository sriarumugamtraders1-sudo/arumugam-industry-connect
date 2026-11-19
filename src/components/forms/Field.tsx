import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";

export function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean | undefined;
  error?: string | undefined;
  hint?: string | undefined;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="text-[0.82rem] font-semibold text-foreground/90">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

export const inputClass = "h-11 bg-card";
