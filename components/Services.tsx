'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  AlertTriangle,
  Waves,
  Flame,
  Wrench,
  Droplets,
  Search,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    icon: AlertTriangle,
    title: 'EMERGENCY PLUMBING',
    desc: 'Burst pipes, major leaks, sewer backups. We answer 24/7 and respond within hours.',
  },
  {
    num: '02',
    icon: Waves,
    title: 'DRAIN CLEANING',
    desc: 'Complete drain clearing for kitchens, bathrooms, and main lines. No clog too stubborn.',
  },
  {
    num: '03',
    icon: Flame,
    title: 'WATER HEATER',
    desc: 'Installation, repair, and replacement. Tank and tankless systems. Same-day in most cases.',
  },
  {
    num: '04',
    icon: Wrench,
    title: 'SEWER LINE REPAIR',
    desc: 'Trenchless inspection, repair, and replacement. Minimal disruption to your property.',
  },
  {
    num: '05',
    icon: Droplets,
    title: 'WATER RESTORATION',
    desc: 'Emergency water damage mitigation. We stop the damage and restore your home fast.',
  },
  {
    num: '06',
    icon: Search,
    title: 'LEAK DETECTION',
    desc: "Electronic leak detection finds hidden leaks before they destroy your walls, floors, and foundation.",
  },
]

const cardVariants = {
  rest: { x: 0 },
  hovered: { x: -4 },
}

const borderVariants = {
  rest: { opacity: 0 },
  hovered: { opacity: 1 },
}

export default function Services() {
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
    <section id="services" ref={sectionRef} className="bg-brand-bg py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[11px] tracking-[0.4em] uppercase text-brand-amber font-semibold font-body mb-4">
          Services
        </p>
        <h2
          ref={headingRef}
          className="font-display text-brand-white"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          WHAT WE FIX
        </h2>
        <p className="text-brand-slate max-w-lg mt-4 text-base font-body leading-relaxed">
          Every plumbing issue handled with expertise. Licensed technicians,
          upfront pricing, guaranteed work.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border">
          {services.map(({ num, icon: Icon, title, desc }) => (
            <motion.div
              key={num}
              initial="rest"
              whileHover="hovered"
              variants={cardVariants}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative bg-brand-bg p-8 flex flex-col gap-4 cursor-default"
            >
              {/* Animated left border */}
              <motion.div
                variants={borderVariants}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-0 h-full w-0.5 bg-brand-amber"
              />

              <span
                className="font-display text-brand-amber leading-none select-none"
                style={{ fontSize: '3rem', opacity: 0.2 }}
              >
                {num}
              </span>

              <Icon size={24} className="text-brand-amber" strokeWidth={1.75} />

              <h3 className="font-display text-2xl text-brand-white tracking-wide">
                {title}
              </h3>

              <p className="text-brand-slate text-sm leading-relaxed font-body">{desc}</p>

              <p className="text-[11px] tracking-[0.25em] uppercase text-brand-amber font-semibold font-body mt-auto">
                REQUEST SERVICE →
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
