import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "./providers";
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Focus",
  description: "Focus official website.",
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
      className={`${inter.variable} ${ibmPlexMono.variable} scroll-smooth font-mono antialiased`}
    >
      <body className="divide-y divide-dashed divide-slate-300 bg-slate-100 text-balance text-slate-800 dark:divide-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
        <AnalyticsProvider>
          <Header />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
