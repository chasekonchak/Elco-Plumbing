'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Phone, ArrowRight, Star } from 'lucide-react'

const cities = [
  'Marietta', 'Kennesaw', 'Smyrna', 'Acworth',
  'Woodstock', 'Roswell', 'Sandy Springs',
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (headlineRef.current && taglineRef.current) {
        gsap.fromTo(
          [headlineRef.current, taglineRef.current],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
        )
      }
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="bg-[#F5F1EC] pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-body text-[11px] font-medium tracking-[0.35em] uppercase text-[#B5311A] mb-5"
        >
          Marietta, GA &middot; Est. 2009
        </motion.p>

        {/* Google badge */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-8 shadow-sm"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={11} className="text-[#FBBC04] fill-[#FBBC04]" />
            ))}
          </div>
          <span className="font-body text-xs text-[#7A7165] font-medium">
            4.9 &nbsp;&middot;&nbsp; 247 reviews on Google
          </span>
        </motion.div>

        {/* Headline */}
        <div ref={headlineRef} style={{ opacity: 0 }}>
          <h1 className="font-display font-black text-[#1B2A3B] leading-[1.0]" style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)' }}>
            We Fix It.
          </h1>
          <h2
            className="font-display font-black italic text-[#B5311A] leading-[1.0] -mt-2 lg:-mt-3"
            style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)' }}
          >
            Same Day.
          </h2>
        </div>

        {/* Subhead */}
        <div ref={taglineRef} style={{ opacity: 0 }}>
          <p className="font-body text-[#7A7165] text-base lg:text-lg mt-7 max-w-xl mx-auto leading-relaxed">
            Metro Atlanta&apos;s most trusted family-owned plumbers. We&apos;ve been answering calls — and showing up — since 2009.
          </p>

          {/* City list */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 items-center">
            {cities.map((city) => (
              <span key={city} className="font-body text-xs text-[#7A7165]">
                {city}
              </span>
            ))}
            <a href="#service-areas" className="font-body text-xs text-[#B5311A] font-medium hover:underline">
              + more cities
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:6787721218"
              className="inline-flex items-center gap-2.5 bg-[#B5311A] text-white font-body font-medium px-8 py-4 rounded-full text-base select-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={16} strokeWidth={2.5} />
              Call Now: (678) 772-1218
            </motion.a>

            <motion.a
              href="#quote"
              className="inline-flex items-center gap-2.5 border border-[#1B2A3B] text-[#1B2A3B] font-body font-medium px-8 py-4 rounded-full text-base select-none hover:bg-[#1B2A3B] hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
