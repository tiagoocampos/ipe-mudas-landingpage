import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const title =
  "Ipê Mudas | Mudas Frutíferas, Nativas, Flores e Plantas em Ipê";
const description =
  "Mudas frutíferas, nativas, flores e plantas diversas em Ipê. Qualidade e variedade para transformar seu jardim ou pomar. Fale com a gente no WhatsApp!";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "mudas Ipê",
    "mudas frutíferas",
    "mudas nativas",
    "viveiro de mudas",
    "plantas Ipê",
    "Ipê Mudas",
  ],
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.nome,
    images: [
      {
        url: "/logo.png",
        width: 640,
        height: 372,
        alt: "Logo Ipê Mudas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: siteConfig.nome,
  description,
  image: `${siteConfig.url}/logo.png`,
  email: siteConfig.email,
  url: siteConfig.url,
  telephone: `+${siteConfig.whatsappNumero}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.cidade,
    addressRegion: siteConfig.estado,
    addressCountry: "BR",
  },
  sameAs: [siteConfig.instagram],
  additionalType: "https://schema.org/GardenStore",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
