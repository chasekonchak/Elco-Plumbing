'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    initials: 'JH',
    name: 'Jennifer Hollis',
    city: 'Marietta, GA',
    quote:
      "Sunday morning, pipe burst under the kitchen sink. Called ELCO at 8am and they were at my door by 10. Fixed it before noon, price was fair, and they cleaned up after themselves. They've got a customer for life.",
  },
  {
    initials: 'MW',
    name: 'Marcus Webb',
    city: 'Kennesaw, GA',
    quote:
      "I'd had three different plumbers look at my water heater over two years. ELCO diagnosed the actual problem in twenty minutes and fixed it right. Should've called them first and saved myself the headache.",
  },
  {
    initials: 'DT',
    name: 'Denise Trammell',
    city: 'Smyrna, GA',
    quote:
      "Main drain backed up Thanksgiving evening — worst possible timing. ELCO picked up on the first ring, had someone out within the hour, and cleared it before dinner hit the table. I still can't believe it.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

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
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
          }
        )
      }
    },
    { scope: sectionRef }
  )

  return (
    <section id="reviews" ref={sectionRef} className="relative bg-brand-surface py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-3 absolute top-1/2 right-[5%] -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-brand-amber/[0.05] blur-[110px]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[11px] tracking-[0.4em] uppercase text-brand-amber font-semibold font-body mb-4"
          >
            From Our Neighbors
          </motion.p>
          <h2
            ref={headingRef}
            className="inline-block font-display text-brand-white"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            WHAT PEOPLE SAY
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-brand-slate mt-4 text-base font-body max-w-md mx-auto leading-relaxed"
          >
            We don&apos;t advertise much. Most of our business comes from neighbors
            recommending us to neighbors — and we think that says everything.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {reviews.map(({ initials, name, city, quote }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 0 0 1px rgba(245,158,11,0.2), 0 0 40px rgba(245,158,11,0.07)',
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="glass rounded-2xl p-8 flex flex-col gap-5 cursor-default relative overflow-hidden"
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.3), transparent)' }}
              />

              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-brand-amber" style={{ textShadow: '0 0 8px rgba(245,158,11,0.6)' }}>
                      &#9733;
                    </span>
                  ))}
                </div>
                <Quote size={18} className="text-brand-amber/30" />
              </div>

              <p className="text-brand-slate text-sm leading-relaxed font-body italic flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-display text-sm text-brand-amber flex-shrink-0"
                  style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-brand-white text-sm font-semibold font-body">{name}</p>
                  <p className="text-brand-muted text-xs font-body">{city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
