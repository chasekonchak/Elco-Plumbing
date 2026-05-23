'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TrustStatement() {
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
    <section ref={sectionRef} className="bg-[#F5F1EC] py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — image block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div
              className="w-full aspect-[4/3] bg-[#1B2A3B] rounded-2xl flex items-center justify-center overflow-hidden"
            >
              <div className="text-center px-10">
                <p
                  className="font-display font-black text-white leading-none"
                  style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}
                >
                  Since
                </p>
                <p
                  className="font-display font-black text-[#B5311A] leading-none -mt-2"
                  style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}
                >
                  2009
                </p>
                <p className="font-body text-[#7A8A9A] text-sm mt-4 tracking-widest uppercase">
                  Family-Owned &amp; Operated
                </p>
              </div>
            </div>
            {/* Small badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#B5311A] text-white rounded-2xl px-5 py-4 shadow-lg">
              <p className="font-display font-bold text-2xl leading-none">15+</p>
              <p className="font-body text-xs mt-1 opacity-90">years local</p>
            </div>
          </motion.div>

          {/* Right — bio */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-body text-[11px] tracking-[0.4em] uppercase text-[#B5311A] font-medium mb-4"
            >
              Who We Are
            </motion.p>

            <h2
              ref={headingRef}
              className="font-display font-black text-[#1B2A3B] leading-[1.1]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Most plumbing companies have a contact form. We have a person.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <p className="font-body text-[#7A7165] text-base mt-6 leading-relaxed">
                My name is Mike Elco. I spent ten years working for one of the big Atlanta plumbing franchises — learning the trade, doing good work, watching the company treat customers like ticket numbers.
              </p>
              <p className="font-body text-[#7A7165] text-base mt-4 leading-relaxed">
                In 2009, I started ELCO with a simple idea: answer the phone, show up when you say you will, and fix it right the first time. We&apos;re still doing exactly that. The same crew, the same values, the same phone number.
              </p>
              <p className="font-body text-[#7A7165] text-base mt-4 leading-relaxed">
                When you call us, you get a plumber — not a call center, not a scheduler, not a chatbot. A plumber who knows your neighborhood.
              </p>

              <div className="mt-8 pt-8 border-t border-[#E0D9D0]">
                <p className="font-display font-bold text-[#1B2A3B] text-lg">Mike Elco</p>
                <p className="font-body text-[#7A7165] text-sm">Founder &amp; Master Plumber, ELCO Plumbing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
