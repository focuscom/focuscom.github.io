import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "./providers";
import Header from "../components/header";
import Footer from "../components/footer";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Focus",
  description: "Focus on what trully matters.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/focus-light.svg",
        href: "/images/focus-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/focus-dark.svg",
        href: "/images/focus-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} scroll-smooth font-mono antialiased`}
    >
      <body className="divide-y divide-dashed divide-slate-300 border-slate-300 bg-slate-100 text-balance text-slate-800 dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
        <AnalyticsProvider>
          <Header />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
