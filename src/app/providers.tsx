import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";

// Cache saving time 5mins. retry means - if query not calling to got any apis data they can retry to got another 1time call to fetch data!
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});
export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
