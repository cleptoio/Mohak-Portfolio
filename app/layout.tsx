import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { personalInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: [
    "Digital Transformation",
    "Business Analyst",
    "ERP",
    "Technology Consultant",
    "SAP Ariba",
    "Salesforce",
    "Dublin",
    "Ireland",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  metadataBase: new URL("https://mohakwadhwa.com"),
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://mohakwadhwa.com",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.bio,
    siteName: personalInfo.name,
    images: [
      {
        url: "/images/mohak-profile.webp",
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.bio,
    images: ["/images/mohak-profile.webp"],
    creator: "@mohakwadhwa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
