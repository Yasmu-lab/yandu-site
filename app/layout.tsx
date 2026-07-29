import type { Metadata } from "next";
import { Inter, Quicksand, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { CustomCursor } from "@/components/motion/custom-cursor";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionConfigProvider } from "@/components/motion/motion-config-provider";
import { SITE } from "@/content/site";

import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%231F3D2B'/%3E%3Ccircle cx='50' cy='78' r='9' fill='%23F6F3E9'/%3E%3Cpath d='M50 70 C 50 50, 38 42, 30 28' stroke='%23F6F3E9' stroke-width='5' fill='none' stroke-linecap='round'/%3E%3Cpath d='M50 70 C 50 50, 62 42, 70 28' stroke='%23F6F3E9' stroke-width='5' fill='none' stroke-linecap='round'/%3E%3Cellipse cx='27' cy='22' rx='11' ry='7' fill='%23F6F3E9' transform='rotate(-30 27 22)'/%3E%3Cellipse cx='73' cy='22' rx='11' ry='7' fill='%23F6F3E9' transform='rotate(30 73 22)'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description:
      "Estúdio digital que transforma ideia e processo em produto digital pra pequenos negócios e profissionais.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: SITE.themeColor,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  areaServed: { "@type": "Place", name: SITE.areaServed },
  sameAs: [SITE.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${quicksand.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Without JS, scroll-reveal animations never run, so their
            inline "hidden" starting styles would otherwise hide real
            content permanently. Force everything visible in that case. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1 !important;transform:none !important;clip-path:none !important;filter:none !important;}`}</style>
        </noscript>
      </head>
      <body className="min-h-full">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        <MotionConfigProvider>
          <CustomCursor />
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionConfigProvider>
        <Analytics />
      </body>
    </html>
  );
}
