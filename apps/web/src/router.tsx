import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import * as TanstackQuery from "./integrations/tanstack-query/root-provider";

// Import i18n configuration (initializes i18next)
import "./lib/i18n";

import { routeTree } from "./routeTree.gen";
import { AuthProvider } from "./context/auth-context";
import { WishlistProvider } from "./context/wishlist-context";
import { CurrencyProvider } from "./context/currency-context";

export const getRouter = () => {
  const rqContext = TanstackQuery.getContext();

  const router = createRouter({
    routeTree,
    context: { ...rqContext },
    defaultPreload: "intent",
    Wrap: (props: { children: React.ReactNode }) => {
      return (
        <AuthProvider>
          <WishlistProvider>
            <CurrencyProvider>
              <TanstackQuery.Provider {...rqContext}>
                {props.children}
              </TanstackQuery.Provider>
            </CurrencyProvider>
          </WishlistProvider>
        </AuthProvider>
      );
    },
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient: rqContext.queryClient,
  });

  return router;
};
