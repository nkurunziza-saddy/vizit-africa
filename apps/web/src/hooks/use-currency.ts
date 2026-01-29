import { useState, useEffect, useCallback } from "react";
import type { CurrencyCode } from "@/lib/i18n";

const CURRENCY_STORAGE_KEY = "vizit-preferred-currency";

export function useCurrency() {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");
  const [isLoading, setIsLoading] = useState(true);

  // Load currency preference from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(
      CURRENCY_STORAGE_KEY,
    ) as CurrencyCode | null;
    if (stored && ["USD", "EUR", "RWF", "GBP"].includes(stored)) {
      setCurrencyState(stored);
    }
    setIsLoading(false);
  }, []);

  // Save currency preference when it changes
  const setCurrency = useCallback((newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency);
    localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
  }, []);

  return {
    currency,
    setCurrency,
    isLoading,
  };
}
