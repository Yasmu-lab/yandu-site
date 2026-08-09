import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionConfigProvider } from "@/components/motion/motion-config-provider";
import { SITE } from "@/content/site";

import "./globals.css";

const interdisplay = Inter({
  variable: "--font-interdisplay",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const roobert = Manrope({
  variable: "--font-roobert",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const fragmentmono = JetBrains_Mono({
  variable: "--font-fragmentmono",
  subsets: ["latin"],
  weight: ["400"],
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
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='18' fill='%230F111A'/%3E%3Ctext x='50' y='68' font-family='Arial,sans-serif' font-size='50' fill='%23ffffff' text-anchor='middle'%3Ey%3C/text%3E%3Crect x='68' y='30' width='10' height='10' rx='2' fill='url(%23g)'/%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop offset='0' stop-color='%231C53BD'/%3E%3Cstop offset='1' stop-color='%2353ADFE'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E",
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
    description: SITE.description,
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
      className={`${interdisplay.variable} ${roobert.variable} ${fragmentmono.variable} h-full antialiased`}
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
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionConfigProvider>
        <Analytics />
      </body>
    </html>
  );
}
