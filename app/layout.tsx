import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sanjay R - AI/ML Engineer & Data Scientist",
  description:
    "Portfolio of Sanjay R - Freelance Data Scientist specializing in AI, Machine Learning, and LLM development",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="/js/vanta/three.min.js"></script>
        <script src="/js/vanta/vanta.net.min.js"></script>
        <script src="/js/vanta/vanta.dots.min.js"></script>
        <script src="/js/vanta/vanta.waves.min.js"></script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
