import {Inter} from "next/font/google";

import Providers from "~/utils/provider";

import "./globals.css";
import type {Metadata} from "next";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "FishFin Dashboard",
  description: "FishLog Financial Dashboard",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
