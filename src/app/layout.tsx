import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Kimbo Learning - Personalized AI-Powered Learning Adventures for Kids",
  description: "Kimbo Learning creates personalized choose-your-own-adventure learning stories that adapt to your child's interests and skill level. AI-powered education platform for reading, math, and more.",
  keywords: "kimbo learning, personalized learning, AI education, adaptive learning, educational technology, learning stories, children education, interactive learning",
  authors: [{ name: "Kimbo Learning" }],
  creator: "Kimbo Learning",
  publisher: "Kimbo Learning",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kimbolearning.com",
    siteName: "Kimbo Learning",
    title: "Kimbo Learning - Personalized AI-Powered Learning Adventures for Kids",
    description: "AI-powered educational stories that adapt to your child's interests and skill level. Personalized learning adventures for reading, math, and more.",
    images: [
      {
        url: "/images/kimbo-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kimbo Learning - Personalized Learning Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimbo Learning - Personalized AI-Powered Learning Adventures for Kids",
    description: "AI-powered educational stories that adapt to your child's interests and skill level.",
    images: ["/images/kimbo-og-image.jpg"],
  },
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
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VFYG0HTKBC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VFYG0HTKBC');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kimbo Learning",
              "url": "https://kimbolearning.com",
              "logo": "https://kimbolearning.com/images/kimbo-logo.png",
              "description": "AI-powered personalized learning platform that creates adaptive educational stories for children",
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Noah Muhirwa",
                  "jobTitle": "Co-Founder"
                },
                {
                  "@type": "Person", 
                  "name": "Titus Grimsley",
                  "jobTitle": "Co-Founder"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@kimbolearning.com",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.instagram.com/kimbolearning/",
                "https://x.com/KimboLearning",
                "https://www.linkedin.com/company/kimbo-learning/"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Personalized Learning Platform",
                "description": "AI-powered educational stories that adapt to your child's interests and skill level"
              }
            }),
          }}
        />
      </head>
      <body className={lato.className}>
        <main className="min-h-screen bg-white">
        {children}
        </main>
      </body>
    </html>
  );
}
