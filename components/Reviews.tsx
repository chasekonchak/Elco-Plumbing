'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    initials: 'JH',
    name: 'Jennifer Hollis',
    city: 'Marietta, GA',
    quote:
      "ELCO had a plumber at my house within two hours. Professional, clear, fixed our burst pipe same afternoon. I wouldn't call anyone else.",
  },
  {
    initials: 'MW',
    name: 'Marcus Webb',
    city: 'Kennesaw, GA',
    quote:
      'Full water heater replacement. Fair quote, spotless work, cleaned up better than they found it. Five stars without hesitation.',
  },
  {
    initials: 'DT',
    name: 'Denise Trammell',
    city: 'Smyrna, GA',
    quote:
      'Main drain backed up Sunday evening. ELCO picked up immediately, someone out within the hour. Transparent pricing, done right the first time.',
  },
]

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    },
    { scope: sectionRef }
  )

  return (
    <section id="reviews" ref={sectionRef} className="bg-brand-bg py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-brand-amber font-semibold font-body mb-4">
            Testimonials
          </p>
          <h2
            ref={headingRef}
            className="font-display text-brand-white inline-block"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            WHAT PEOPLE SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border">
          {reviews.map(({ initials, name, city, quote }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="bg-brand-bg p-8 flex flex-col gap-6 cursor-default"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-brand-amber text-lg">
                    &#9733;
                  </span>
                ))}
              </div>

              <p className="text-brand-slate text-sm leading-relaxed italic font-body">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="border-t border-brand-border pt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-brand-card border border-brand-border flex items-center justify-center font-display text-sm text-brand-amber flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="text-brand-white text-sm font-semibold font-body">{name}</p>
                  <p className="text-brand-muted text-xs font-body">{city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
