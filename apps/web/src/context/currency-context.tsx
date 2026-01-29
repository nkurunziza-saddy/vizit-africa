import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { CurrencyCode } from "@/lib/i18n";

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

const CURRENCY_STORAGE_KEY = "vizit-preferred-currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  // Load currency preference from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(
      CURRENCY_STORAGE_KEY,
    ) as CurrencyCode | null;
    if (stored && ["USD", "EUR", "RWF", "GBP"].includes(stored)) {
      setCurrencyState(stored);
    }
  }, []);

  // Save currency preference when it changes
  const setCurrency = useCallback((newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency);
    localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
