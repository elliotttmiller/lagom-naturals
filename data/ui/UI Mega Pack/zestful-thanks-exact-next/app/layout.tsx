import type { ReactNode } from "react"

export const metadata = { title: "zestful-thanks-891567.framer.app" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
