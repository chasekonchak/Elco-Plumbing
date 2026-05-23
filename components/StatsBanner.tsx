'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 15, suffix: '+', label: 'Years in Metro Atlanta' },
  { value: 247, suffix: '+', label: 'Five-Star Reviews' },
  { value: 50, suffix: 'mi', label: 'Miles Around Marietta' },
  { value: 24, suffix: '/7', label: 'Always Answering' },
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
    <section ref={sectionRef} className="bg-[#111D2B] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E2F40]">
          {stats.map(({ suffix, label }, i) => (
            <div
              key={label}
              className="bg-[#111D2B] px-8 py-10 text-center"
            >
              <p className="font-display font-black text-[#B5311A] leading-none" style={{ fontSize: '3.5rem' }}>
                <span ref={(el) => { countersRef.current[i] = el }}>0</span>
                {suffix}
              </p>
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-[#7A8A9A] mt-3 font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
