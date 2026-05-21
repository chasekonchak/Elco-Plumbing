import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ELCO Plumbing | Licensed Plumbers in Marietta, GA',
  description:
    'Licensed, bonded, and insured plumbers serving Marietta, GA and Cobb County. Emergency repairs, drain cleaning, water heater installation. Call (678) 772-1218.',
  keywords:
    'plumber Marietta GA, emergency plumber Cobb County, drain cleaning, water heater repair, sewer line repair',
  openGraph: {
    title: 'ELCO Plumbing | Licensed Plumbers in Marietta, GA',
    description:
      'Licensed, bonded, and insured plumbers. Emergency repairs, drain cleaning, same-day service.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className="font-body antialiased bg-brand-bg">{children}</body>
    </html>
  )
}
