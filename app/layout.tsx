import Script from "next/script"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NOVAFORTE - 3D Printing Solutions for Healthcare",
  description:
    "Biomedical engineering specialized in 3D printing solutions for prostheses, orthoses, and custom medical parts.",
  viewport: "width=device-width, initial-scale=1, user-scalable=yes",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
