'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, DollarSign, Shield, ThumbsUp, Phone, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: Clock, title: 'Fast Response', desc: 'A licensed plumber at your door within hours.' },
  { icon: DollarSign, title: 'Upfront Pricing', desc: 'You approve the price before we start.' },
  { icon: Shield, title: 'Licensed & Insured', desc: 'Fully bonded and certified in Georgia.' },
  { icon: ThumbsUp, title: 'Satisfaction Guaranteed', desc: "We don't leave until it's right." },
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
    <section
      ref={sectionRef}
      className="relative bg-brand-bg py-16 lg:py-28 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-2 absolute top-0 left-[20%] w-[500px] h-[500px] rounded-full bg-brand-amber/[0.05] blur-[120px]" />
        <div className="absolute inset-0 dot-grid opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-[11px] tracking-[0.4em] uppercase text-brand-amber font-semibold font-body mb-4"
            >
              Why ELCO
            </motion.p>

            <h2
              ref={headingRef}
              className="font-display text-brand-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              WHY MARIETTA CALLS ELCO FIRST
            </h2>

            <div className="mt-10 flex flex-col">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
                  className="flex gap-5 items-start py-6 border-b border-white/[0.06] last:border-b-0 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(245,158,11,0.1)',
                      border: '1px solid rgba(245,158,11,0.2)',
                    }}
                  >
                    <Icon size={17} className="text-brand-amber" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-brand-white font-semibold text-base font-body">{title}</p>
                    <p className="text-brand-slate text-sm mt-1 font-body leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — premium glass contact card */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass-amber rounded-3xl p-10 relative overflow-hidden"
          >
            {/* Card ambient glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-brand-amber/[0.12] blur-[60px] pointer-events-none" />

            <p className="relative text-xs tracking-[0.3em] uppercase text-brand-amber font-body font-semibold">
              Reach Us
            </p>

            <a
              href="tel:6787721218"
              className="relative block font-display text-brand-amber leading-none mt-3 text-glow-amber hover:text-brand-amber-light transition-colors"
              style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
            >
              678.772.1218
            </a>

            <div className="relative border-t border-brand-amber/20 my-7" />

            <div className="relative flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-amber flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-brand-slate text-sm font-body">
                  2520 Ruger Dr NE, Marietta, GA 30066
                </p>
              </div>
              <p className="text-brand-slate text-sm font-body ml-[27px]">
                24/7 Emergency · Mon–Sat 7am–7pm
              </p>
            </div>

            <motion.a
              href="tel:6787721218"
              className="relative mt-8 w-full bg-brand-amber text-brand-bg font-bold py-4 rounded-full text-sm tracking-wider flex items-center justify-center gap-2 select-none font-body"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(245,158,11,0.2)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={15} strokeWidth={2.5} />
              CALL NOW
            </motion.a>

            <p className="relative text-brand-muted text-xs text-center mt-3 font-body">
              Average response time: 47 minutes
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
