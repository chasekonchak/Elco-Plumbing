'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'

const headlineLines = [
  { text: 'WHEN YOUR', color: 'text-brand-white' },
  { text: 'PIPES FAIL,', color: 'text-brand-white' },
  { text: "WE DON'T.", gradient: true },
]

const trustItems = [
  { icon: CheckCircle, label: 'Licensed & Insured' },
  { icon: CheckCircle, label: '4.9★ · 247 Reviews' },
  { icon: CheckCircle, label: 'Same-Day Available' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const linesRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      const lines = linesRef.current.filter(Boolean)
      gsap.fromTo(
        lines,
        { y: 90, opacity: 0, skewY: 2 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
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
      {/* Ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute -top-32 right-[8%] w-[700px] h-[700px] rounded-full bg-brand-amber/[0.08] blur-[130px]" />
        <div className="blob-2 absolute top-[40%] -left-20 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.05] blur-[110px]" />
        <div className="blob-3 absolute bottom-0 right-[25%] w-[300px] h-[300px] rounded-full bg-brand-amber/[0.05] blur-[90px]" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      {/* Right accent panel — desktop only */}
      <div
        className="hidden lg:flex absolute right-0 top-0 h-full w-[26%] flex-col items-center justify-center gap-0 pointer-events-none select-none"
        style={{
          background: 'linear-gradient(to left, rgba(7,8,16,0.9) 0%, rgba(7,8,16,0.3) 100%)',
          backdropFilter: 'blur(2px)',
          borderLeft: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex flex-col items-center">
          <span
            className="font-display leading-none text-brand-amber"
            style={{ fontSize: '9rem', opacity: 0.12 }}
          >
            24
          </span>
          <span className="text-xl text-brand-muted font-body -mt-3">/7</span>
          <span className="text-[9px] tracking-[0.5em] text-brand-muted uppercase mt-4 font-body font-semibold">
            Emergency
          </span>
        </div>
      </div>

      {/* Top label */}
      <div className="absolute top-28 left-6 right-0 max-w-7xl mx-auto px-0 lg:px-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.35em] uppercase text-brand-amber font-body"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse" />
          Marietta, GA · Cobb County · 50-Mile Radius
        </motion.span>
      </div>

      {/* Main content */}
      <div className="flex flex-col justify-end min-h-screen pb-16 lg:pb-20 max-w-7xl mx-auto px-6">
        {/* Headline */}
        <div className="overflow-hidden">
          {headlineLines.map(({ text, color, gradient }, i) => (
            <div
              key={i}
              ref={(el) => { linesRef.current[i] = el }}
              className={`font-display leading-[0.92] ${color ?? ''} ${gradient ? 'text-gradient-amber text-glow-amber' : ''}`}
              style={{ fontSize: 'clamp(3.5rem, 9.5vw, 8.5rem)', opacity: 0 }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-10 mb-8 h-px bg-gradient-to-r from-brand-amber/30 via-white/10 to-transparent" />

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex justify-between flex-wrap gap-8 items-start"
        >
          <p className="max-w-md text-brand-slate text-base leading-relaxed font-body">
            Licensed, bonded, and insured plumbers for emergency repairs, drain
            cleaning, and water restoration across Cobb County. Same-day service
            available.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="tel:6787721218"
              className="inline-flex items-center gap-2.5 bg-brand-amber text-brand-bg font-bold px-8 py-4 rounded-full text-base select-none font-body"
              whileHover={{
                scale: 1.04,
                boxShadow: '0 0 30px rgba(245,158,11,0.55), 0 0 60px rgba(245,158,11,0.2)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={16} strokeWidth={2.5} />
              Call Now: (678) 772-1218
            </motion.a>

            <motion.a
              href="#quote"
              className="inline-flex items-center gap-2.5 glass text-brand-white px-8 py-4 rounded-full text-base select-none font-body hover:border-brand-amber/30 transition-all duration-300"
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 0 1px rgba(245,158,11,0.35)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              Free Quote
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>

        {/* Trust chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 flex gap-3 flex-wrap"
        >
          {trustItems.map(({ label }) => (
            <div
              key={label}
              className="glass px-4 py-2 rounded-full flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
              <span className="text-xs font-body font-medium text-brand-slate tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
