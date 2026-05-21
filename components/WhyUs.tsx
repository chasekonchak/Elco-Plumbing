'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, DollarSign, Shield, ThumbsUp, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Clock,
    title: 'Fast Response',
    desc: 'A licensed plumber at your door within hours.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    desc: 'You approve the price before we start.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    desc: 'Fully bonded and certified in Georgia.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    desc: "We don't leave until it's right.",
  },
]

export default function WhyUs() {
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
    <section
      ref={sectionRef}
      className="bg-brand-surface border-y border-brand-border py-16 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-brand-amber font-semibold font-body mb-4">
              Why ELCO
            </p>
            <h2
              ref={headingRef}
              className="font-display text-brand-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              WHY MARIETTA CALLS ELCO FIRST
            </h2>

            <div className="mt-12 flex flex-col">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                  className="flex gap-6 items-start border-b border-brand-border py-6 last:border-b-0"
                >
                  <Icon
                    size={20}
                    className="text-brand-amber mt-0.5 flex-shrink-0"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-brand-white font-semibold text-base font-body">
                      {title}
                    </p>
                    <p className="text-brand-slate text-sm mt-1 font-body">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — contact card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-brand-card border border-brand-border p-10"
          >
            <p className="text-xs tracking-widest uppercase text-brand-muted font-body font-semibold">
              Reach Us
            </p>
            <a
              href="tel:6787721218"
              className="block font-display text-brand-amber leading-none mt-3 hover:text-brand-amber-light transition-colors"
              style={{ fontSize: '4.5rem' }}
            >
              678.772.1218
            </a>

            <div className="border-t border-brand-border my-6" />

            <p className="text-brand-slate text-sm font-body">
              2520 Ruger Dr NE, Marietta, GA 30066
            </p>
            <p className="text-brand-slate text-sm mt-2 font-body">
              24/7 Emergency · Mon–Sat 7am–7pm
            </p>

            <motion.a
              href="tel:6787721218"
              className="mt-8 w-full bg-brand-amber text-brand-bg font-bold py-4 rounded-sm text-sm tracking-wider flex items-center justify-center gap-2 select-none font-body"
              whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={15} strokeWidth={2.5} />
              CALL NOW
            </motion.a>

            <p className="text-brand-muted text-xs text-center mt-3 font-body">
              Average response time: 47 minutes
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
