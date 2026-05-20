import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import SOSButton from "@/components/SOSButton";
import { trip } from "@/data/trip";

export const metadata: Metadata = {
  title: trip.name,
  description: trip.tagline,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: trip.name,
    statusBarStyle: "black-translucent",
  },
  icons: {
    apple: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-1 pb-36 max-w-2xl mx-auto w-full px-4 pt-6">{children}</main>
        <SOSButton />
        <BottomNav />
      </body>
    </html>
  );
}
