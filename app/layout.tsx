import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IntroName } from "@/components/intro-name";
import { MotionBackground } from "@/components/motion-background";
import { SiteCursor } from "@/components/site-cursor";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Sky Lake Solutions",
    template: "%s | Sky Lake Solutions",
  },
  description: site.description,
  icons: { icon: "/mark.jpg" },
  openGraph: {
    title: "Sky Lake Solutions",
    description: site.description,
    url: site.domain,
    siteName: "Sky Lake Solutions",
    images: [{ url: "/logo.jpg", width: 580, height: 490, alt: "Sky Lake Solutions" }],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.domain,
  email: site.email,
  logo: `${site.domain}/logo.jpg`,
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${serif.variable}`}>
      <body className="min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script id="intro-skip" strategy="beforeInteractive">
          {`try{if(sessionStorage.getItem("skylake-intro")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.dataset.intro="skip"}}catch(e){}`}
        </Script>
        <Providers>
          <MotionBackground />
          <SiteCursor />
          <IntroName />
          <div id="top" className="relative z-10 min-h-screen border-line lg:mx-16 lg:border-x xl:mx-20">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
