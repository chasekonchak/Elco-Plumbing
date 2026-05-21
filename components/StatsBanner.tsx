'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 15, suffix: '+', label: 'YEARS EXPERIENCE' },
  { value: 247, suffix: '+', label: 'FIVE-STAR REVIEWS' },
  { value: 50, suffix: ' mi', label: 'SERVICE RADIUS' },
  { value: 24, suffix: '/7', label: 'EMERGENCY SERVICE' },
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
    <section ref={sectionRef} className="bg-brand-red py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, suffix, label }, i) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <p className="text-6xl font-black text-white tracking-tight leading-none">
                <span
                  ref={(el) => {
                    countersRef.current[i] = el
                  }}
                >
                  0
                </span>
                {suffix}
              </p>
              <p className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
