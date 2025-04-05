import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import Frame from "@/components/frame";
import "./globals.css";
import Logo from "@/components/logo";

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
        url: "/images/favicon-light.svg",
        href: "/images/favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.svg",
        href: "/images/favicon-dark.svg",
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
      className={`${inter.variable} ${ibmPlexMono.variable} font-mono antialiased`}
    >
      <body className="divide-y divide-dashed divide-slate-300 bg-slate-100 text-balance text-slate-800 dark:divide-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
        <nav className="sticky top-0 z-20 bg-inherit">
          <Frame>
            <div className="flex items-center gap-2">
              <Logo className="shrink-0 text-slate-900 dark:text-neutral-200" />
              <p>
                <span className="font-semibold">Focus</span> — productivity app
                for product managers and designers for $10 per month.
              </p>
            </div>
          </Frame>
        </nav>
        {children}
        <footer>
          <Frame showCorners={false}>
            <div>Focus Company 2025</div>
          </Frame>
        </footer>
      </body>
    </html>
  );
}
