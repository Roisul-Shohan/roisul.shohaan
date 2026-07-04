import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Plus_Jakarta_Sans } from "next/font/google";

import SmoothScroll from "@/components/smooth-scroll";
import LoadingScreen from "@/components/loading-screen";
import CursorGlow from "@/components/animated/cursor-glow";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roisul-shohan.vercel.app"),
  title: {
    default: "Roisul Islam — Full Stack Developer (MERN, Next.js, Java)",
    template: "%s · Roisul Islam",
  },
  description:
    "Roisul Islam — full-stack developer building scalable, end-to-end web apps with React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and Java.",
  keywords: [
    "Roisul Islam",
    "Roisul-Shohan",
    "Full Stack Developer",
    "MERN",
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Java",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Roisul Islam", url: "https://github.com/Roisul-Shohan" }],
  creator: "Roisul Islam",
  openGraph: {
    type: "website",
    title: "Roisul Islam — Full Stack Developer",
    description:
      "Full-stack developer building scalable web applications with the MERN stack, Next.js, Prisma, PostgreSQL, and Java.",
    siteName: "Roisul Islam",
    locale: "en_US",
    url: "https://github.com/Roisul-Shohan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roisul Islam — Full Stack Developer",
    description:
      "Full-stack developer building scalable web applications with the MERN stack, Next.js, Prisma, PostgreSQL, and Java.",
    creator: "@Roisul-Shohan",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f0a19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${hanken.variable}`}>
      <body className="font-body bg-surface text-on-surface antialiased">
        <LoadingScreen />
        <CursorGlow />
        <SmoothScroll>
          <div className="noise-overlay" aria-hidden />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
