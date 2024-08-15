import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HOME | Skill Shoot",
  description: "Skill shoot home page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
