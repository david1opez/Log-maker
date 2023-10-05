import { poppins } from '@/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ITESM1 Log Maker',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
