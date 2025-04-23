import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "My GDS Website",
  description: "A website built with Next.js and GOV.UK Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="govuk-template">
      <head>
        {/* Include GDS CSS from a CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/govuk-frontend@5.9.0/dist/govuk/govuk-frontend.min.css" 
        />
      </head>
      <body className="govuk-template__body">
        <Script id="gds-script" strategy="beforeInteractive">
          {`document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');`}
        </Script>
        {children}
        {/* Include GDS JavaScript from a CDN */}
        <Script
          id="govuk-frontend-script"
          src="https://cdn.jsdelivr.net/npm/govuk-frontend@5.0.0/dist/govuk/govuk-frontend.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}