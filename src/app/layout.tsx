import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Kimbo - Choose-Your-Own-Adventure Stories That Grow With Your Child",
  description: "Kimbo adapts every story to your learner's interests, skill level, and pace — blending reading and math into interactive adventures that evolve as they grow.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="min-h-screen bg-white">
        {children}
        </main>
      </body>
    </html>
  );
}
