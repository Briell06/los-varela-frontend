import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { fontMono, fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: siteConfig.icons,
  applicationName: siteConfig.appName,
  authors: { name: "Briell Quintana", url: "" },
  keywords: siteConfig.keyWords,
  abstract: siteConfig.abstract,
  creator: siteConfig.creator,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
        aria-label="Los Varela App Body"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main role="main" id="main-content">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
