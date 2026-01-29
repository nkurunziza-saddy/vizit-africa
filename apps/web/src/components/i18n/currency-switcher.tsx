import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Banknote } from "lucide-react";
import { currencies, type CurrencyCode } from "@/lib/i18n";
import { useCurrency } from "@/context/currency-context";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  const currencyInfo = currencies[currency];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="sm" className="gap-2">
          <Banknote className="h-4 w-4" />
          <span className="text-xs">{currencyInfo.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setCurrency(code)}
            className="gap-2 cursor-pointer"
          >
            <span className="font-medium">{currencies[code].symbol}</span>
            <span>{currencies[code].code}</span>
            {currency === code && (
              <span className="ml-auto text-xs text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
