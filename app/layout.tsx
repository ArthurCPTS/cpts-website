import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "zapier-interfaces-chatbot-embed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "is-popup"?: string;
          "chatbot-id"?: string;
        },
        HTMLElement
      >;
    }
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CPTS Porte de France Moselle",
  description: "Communauté Professionnelle Territoriale de Santé — Porte de France Moselle. 207 professionnels de santé engagés pour améliorer l'accès aux soins sur 32 communes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <zapier-interfaces-chatbot-embed is-popup="true" chatbot-id="cmfnm9gpc000e1im1tkn67qwr" />
        <Script
          src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
