import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends HTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Vizit Africa"
      className={cn("h-8 w-auto", className)}
      {...props}
    />
  );
}
