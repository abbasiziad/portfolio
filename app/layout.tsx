import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Ziad Abbasi — Full-Stack Developer",
  description:
    "Portfolio of Ziad Abbasi — Full-Stack Developer specializing in React, Next.js, Node.js, and WordPress. Building fast, scalable, beautiful web experiences.",
  keywords: [
    "full-stack developer",
    "react developer",
    "next.js developer",
    "wordpress developer",
    "web developer portfolio",
    "frontend developer",
    "typescript",
  ],
  authors: [{ name: "Ziad Abbasi", url: "https://alexcarter.dev" }],
  creator: "Ziad Abbasi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexcarter.dev",
    title: "Ziad Abbasi — Full-Stack Developer",
    description:
      "Portfolio of Ziad Abbasi — Full-Stack Developer specializing in React, Next.js, Node.js, and WordPress.",
    siteName: "Ziad Abbasi Portfolio",
    images: [
      {
        url: "https://alexcarter.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ziad Abbasi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziad Abbasi — Full-Stack Developer",
    description:
      "Portfolio of Ziad Abbasi — Full-Stack Developer specializing in React, Next.js, Node.js, and WordPress.",
    creator: "@alexcarterdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="antialiased">{children}</body>
    </html>
  );
}
