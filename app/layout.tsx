import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klarden UI | Refined Components for Design Engineers",
  description:
    "A curated collection of high-quality React components designed with fluid motion and tactile precision. Built for modern design engineers.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} font-sans antialiased dark bg-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}
