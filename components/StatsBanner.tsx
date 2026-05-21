'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 247, suffix: '+', label: 'Five-Star Reviews' },
  { value: 50, suffix: 'mi', label: 'Service Radius' },
  { value: 24, suffix: '/7', label: 'Emergency Service' },
]

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
          start: 'top 75%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              val: target,
              duration: 2.2,
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
    <section ref={sectionRef} className="relative bg-brand-bg overflow-hidden py-20">
      {/* Big amber ambient glow across the whole section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] rounded-full bg-brand-amber/[0.07] blur-[100px]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-center text-[10px] tracking-[0.4em] uppercase text-brand-amber font-body font-semibold mb-12">
          By The Numbers
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{
                boxShadow: '0 0 0 1px rgba(245,158,11,0.3), 0 0 40px rgba(245,158,11,0.12)',
              }}
              className="glass rounded-2xl px-8 py-10 text-center cursor-default relative overflow-hidden"
            >
              {/* Per-card amber glow blob */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-brand-amber/[0.12] blur-[40px]" />
              </div>

              <p className="relative font-display leading-none text-brand-amber" style={{ fontSize: '4.5rem' }}>
                <span
                  ref={(el) => { countersRef.current[i] = el }}
                >
                  0
                </span>
                {suffix}
              </p>
              <p className="relative text-xs tracking-[0.25em] uppercase text-brand-muted mt-3 font-body font-semibold">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
