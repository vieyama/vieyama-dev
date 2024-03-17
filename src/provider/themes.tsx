"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: ReactNode }) => {
  const defaultTheme = 'system'
  return <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem>{children}</ThemeProvider>;
};

export default Providers;
