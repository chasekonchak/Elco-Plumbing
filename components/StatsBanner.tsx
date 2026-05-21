'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 15, suffix: '+', label: 'YEARS EXPERIENCE' },
  { value: 247, suffix: '+', label: 'FIVE-STAR REVIEWS' },
  { value: 50, suffix: 'mi', label: 'SERVICE RADIUS' },
  { value: 24, suffix: '/7', label: 'EMERGENCY SERVICE' },
]

const numberVariants = {
  rest: { color: '#0F1117' },
  hovered: { color: '#FCD34D' },
}

export default function StatsBanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const countersRef = useRef<(HTMLSpanElement | null)[]>([])

  useGSAP(
    () => {
      countersRef.current.forEach((el, i) => {
        if (!el) return
        const target = stats[i].value
        const counter = { val: 0 }

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate() {
                if (el) el.textContent = String(Math.round(counter.val))
              },
            })
          },
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="bg-brand-amber py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial="rest"
              whileHover="hovered"
              className="border-r border-brand-amber-dark last:border-r-0 px-8 text-center py-4 cursor-default"
            >
              <motion.p
                variants={numberVariants}
                transition={{ duration: 0.15 }}
                className="font-display leading-none"
                style={{ fontSize: '5rem', color: '#0F1117' }}
              >
                <span
                  ref={(el) => {
                    countersRef.current[i] = el
                  }}
                >
                  0
                </span>
                {suffix}
              </motion.p>
              <p className="text-xs tracking-[0.3em] uppercase mt-2 font-semibold font-body"
                 style={{ color: 'rgba(15,17,23,0.7)' }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
