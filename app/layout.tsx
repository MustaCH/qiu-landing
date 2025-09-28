import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundPrismatic from "../components/BackgroundPrismatic";
import SiteNav from "../components/SiteNav";
import { LanguageProvider } from "../lib/LanguageProvider";

const roboto = Roboto({
  variable: "--font-geist-sans", // reutilizamos la var CSS esperada por globals.css
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Qiu Automations | Automatización inteligente para tu empresa";
const description =
  "Consultora de automatización de procesos con IA: diseñamos chatbots, agentes y flujos integrados para escalar operaciones, captar leads y mejorar la experiencia del cliente.";
const shareImage = "/og-qiu.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://qiuautomations.com"),
  title,
  description,
  keywords: [
    "automatización de procesos",
    "automatizaciones con IA",
    "agentes inteligentes",
    "chatbots para empresas",
    "consultoría de automatización",
    "Qiu Automations",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "https://qiuautomations.com/",
    siteName: "Qiu Automations",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: "Qiu Automations automatiza procesos con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <BackgroundPrismatic />
          <SiteNav />
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
