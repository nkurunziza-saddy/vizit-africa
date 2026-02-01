import { PatternHorizontalDiamonds } from "./ImigongoPatterns";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ImigongoSectionTitleProps {
  title: React.ReactNode;
  className?: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  tooltip?: React.ReactNode;
}

export function ImigongoSectionTitle({
  title,
  className,
  subtitle,
  align = "center",
  theme = "light",
  tooltip,
}: ImigongoSectionTitleProps) {
  const isCentered = align === "center";
  const isDark = theme === "dark";

  const PatternIcon = (
    <PatternHorizontalDiamonds
      className={cn(
        "w-12 h-6 shrink-0 hidden md:block transition-transform hover:scale-110",
        isDark ? "text-imigongo-ochre" : "text-imigongo-ochre",
        tooltip ? "cursor-help" : "",
      )}
    />
  );

  return (
    <div
      className={cn(
        "mb-16",
        isCentered ? "text-center" : "text-left",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4 mb-4",
          isCentered ? "justify-center" : "justify-start",
        )}
      >
        <TooltipProvider>
          {tooltip ? (
            <Tooltip>
              <TooltipTrigger render={PatternIcon} />
              <TooltipContent
                className={cn(
                  "border border-imigongo-ochre p-4 max-w-xs shadow-xl rounded-none",
                  isDark
                    ? "bg-white text-imigongo-black"
                    : "bg-imigongo-black text-white",
                )}
              >
                {tooltip}
              </TooltipContent>
            </Tooltip>
          ) : (
            PatternIcon
          )}
        </TooltipProvider>

        <h2
          className={cn(
            "text-4xl md:text-5xl font-black uppercase tracking-tighter px-4",
            isDark ? "text-white" : "text-imigongo-black",
          )}
        >
          {title}
        </h2>

        {isCentered && (
          <TooltipProvider>
            {tooltip ? (
              <Tooltip>
                <TooltipTrigger render={PatternIcon} />
                <TooltipContent
                  className={cn(
                    "border border-imigongo-ochre p-4 max-w-xs shadow-xl rounded-none",
                    isDark
                      ? "bg-white text-imigongo-black"
                      : "bg-imigongo-black text-white",
                  )}
                >
                  {tooltip}
                </TooltipContent>
              </Tooltip>
            ) : (
              PatternIcon
            )}
          </TooltipProvider>
        )}
      </div>
      {subtitle && (
        <p
          className={cn(
            "text-xl font-serif max-w-2xl",
            isCentered ? "mx-auto" : "",
            isDark ? "text-white/70" : "text-imigongo-black/60",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
