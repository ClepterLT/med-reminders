import './globals.css';
import type { Metadata } from 'next';
import { Stardos_Stencil, Roboto } from 'next/font/google';
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
      template: '%s | MedReminders',
      default: 'MedReminders',
  },
  description: 'Convenient information for your patients in time!',
}

const stardosStencil = Stardos_Stencil({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-stardos',
});

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.className} ${roboto.variable} ${stardosStencil.variable}`}>
      <body className="bg-gray-900">
        <Header />
        {children}
      </body>
    </html>
  )
}
