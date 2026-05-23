'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    initials: 'JR',
    name: 'James R.',
    city: 'Marietta, GA',
    quote: "Sunday morning, pipe burst under the kitchen sink. Called ELCO at 8am and they were at my door by 10. Fixed it before noon, price was fair, and they cleaned up after themselves. They've got a customer for life.",
  },
  {
    initials: 'ST',
    name: 'Sandra T.',
    city: 'Kennesaw, GA',
    quote: "I'd had three different plumbers look at my water heater over two years. ELCO diagnosed the actual problem in twenty minutes and fixed it right. Should've called them first and saved myself the headache.",
  },
  {
    initials: 'DM',
    name: 'Derek M.',
    city: 'Woodstock, GA',
    quote: "Main drain backed up Thanksgiving evening — worst possible timing. ELCO picked up on the first ring, had someone out within the hour, and cleared it before dinner hit the table. I still can't believe it.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
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
    <section id="reviews" ref={sectionRef} className="bg-[#111D2B] py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-body text-[11px] tracking-[0.4em] uppercase text-[#B5311A] font-medium mb-4"
          >
            From Our Neighbors
          </motion.p>
          <h2
            ref={headingRef}
            className="inline-block font-display font-black text-white"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
          >
            What People Say
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-body text-[#7A8A9A] mt-4 text-base max-w-md mx-auto leading-relaxed"
          >
            We don&apos;t advertise much. Most of our business comes from neighbors recommending us to neighbors — and we think that says everything.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {reviews.map(({ initials, name, city, quote }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 flex flex-col gap-5 cursor-default"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#FBBC04] fill-[#FBBC04]" />
                ))}
              </div>

              <p className="font-body text-[#7A7165] text-sm leading-relaxed italic flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E4DE]">
                <div className="w-10 h-10 rounded-xl bg-[#1B2A3B] flex items-center justify-center font-body font-medium text-sm text-white flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-body font-medium text-[#1B2A3B] text-sm">{name}</p>
                  <p className="font-body text-[#7A7165] text-xs">{city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/search?q=ELCO+Plumbing+Marietta+GA+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-[#7A8A9A] hover:text-white transition-colors duration-200"
          >
            View all 247 reviews on Google &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  )
}
