import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maharashtra Sports Climbing Association | India's Premier Climbing Facility",
  description: "Official website of Maharashtra Sports Climbing Association. Home to India's Olympic-level climbing wall facility, training future champions and promoting climbing excellence.",
  keywords: "climbing, sports, Maharashtra, India, Olympic, climbing wall, training, association",
  authors: [{ name: "Maharashtra Sports Climbing Association" }],
  openGraph: {
    title: "Maharashtra Sports Climbing Association",
    description: "India's Premier Olympic-Level Climbing Facility",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
