import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taxi du Mole | Taxi conventionné et reservations en Haute-Savoie",
  description:
    "Taxi du Mole, reservation de taxi en Haute-Savoie, trajets prives, gares, aéroports et transport médical conventionné.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
