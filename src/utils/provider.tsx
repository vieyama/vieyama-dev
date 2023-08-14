"use client";

import React from "react";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ReactQueryStreamedHydration} from "@tanstack/react-query-next-experimental";
import {Provider as JotaiProvider} from "jotai";
function Providers({children}: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <JotaiProvider>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default Providers;
