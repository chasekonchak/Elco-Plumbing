'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Phone, ArrowRight } from 'lucide-react'

const headlineLines = [
  { text: 'WHEN YOUR', color: 'text-brand-white' },
  { text: 'PIPES FAIL,', color: 'text-brand-white' },
  { text: "WE DON'T.", color: 'text-brand-amber' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const linesRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      const lines = linesRef.current.filter(Boolean)
      gsap.fromTo(
        lines,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2,
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-brand-bg overflow-hidden"
    >
      {/* Right accent block — desktop only */}
      <div className="hidden lg:flex absolute right-0 top-0 h-full w-[28%] bg-brand-surface border-l border-brand-border flex-col items-center justify-center gap-0 pointer-events-none select-none">
        <span
          className="font-display leading-none text-brand-amber"
          style={{ fontSize: '8rem', opacity: 0.18 }}
        >
          24
        </span>
        <span className="text-2xl text-brand-muted -mt-2">/7</span>
        <span className="text-[10px] tracking-[0.4em] text-brand-muted uppercase mt-3">
          Emergency
        </span>
      </div>

      {/* Top label */}
      <div className="absolute top-32 left-6 max-w-7xl">
        <span className="text-[11px] font-semibold tracking-[0.4em] uppercase text-brand-amber font-body">
          MARIETTA, GA · COBB COUNTY · 50-MILE RADIUS
        </span>
      </div>

      {/* Main content — pushed to bottom */}
      <div className="flex flex-col justify-end min-h-screen pb-20 max-w-7xl mx-auto px-6">
        {/* Headline */}
        <div>
          {headlineLines.map(({ text, color }, i) => (
            <div
              key={i}
              ref={(el) => {
                linesRef.current[i] = el
              }}
              className={`font-display ${color} leading-none`}
              style={{
                fontSize: 'clamp(4rem, 10vw, 9rem)',
                opacity: 0,
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-brand-border mt-8 mb-8" />

        {/* Info row */}
        <div className="flex justify-between flex-wrap gap-6 items-start">
          <p className="max-w-md text-brand-slate text-base leading-relaxed font-body">
            Licensed, bonded, and insured plumbers for emergency repairs, drain
            cleaning, and water restoration across Cobb County. Same-day service
            available.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="tel:6787721218"
              className="flex items-center gap-2 bg-brand-amber text-brand-bg font-bold px-8 py-4 rounded-sm text-base select-none font-body"
              whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={16} strokeWidth={2.5} />
              Call Now: (678) 772-1218
            </motion.a>

            <motion.a
              href="#quote"
              className="flex items-center gap-2 border border-brand-border text-brand-white px-8 py-4 rounded-sm text-base select-none font-body hover:border-brand-amber transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Free Quote
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-8 flex gap-8 flex-wrap">
          {[
            '✓ Licensed & Insured',
            '✓ 4.9★ Rating · 247 Reviews',
            '✓ Same-Day Available',
          ].map((item) => (
            <span
              key={item}
              className="text-xs tracking-widest uppercase text-brand-muted font-body font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
