import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-body antialiased bg-brand-bg">{children}</body>
    </html>
  )
}
