'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AlertTriangle, Waves, Flame, Wrench, Droplets, Search } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: AlertTriangle,
    title: 'Emergency Plumbing Repair',
    description:
      '24/7 emergency service. Burst pipes, major leaks, sewer backups — we respond fast.',
  },
  {
    icon: Waves,
    title: 'Drain Cleaning',
    description:
      'Professional drain cleaning and clog removal for kitchens, bathrooms, and main sewer lines.',
  },
  {
    icon: Flame,
    title: 'Water Heater Installation & Repair',
    description:
      'Expert installation, repair, and replacement. Tank and tankless options available.',
  },
  {
    icon: Wrench,
    title: 'Sewer Line Repair',
    description:
      'Advanced sewer line inspection, repair, and replacement using trenchless technology.',
  },
  {
    icon: Droplets,
    title: 'Water Restoration',
    description:
      'Emergency water damage mitigation and restoration for homes and businesses.',
  },
  {
    icon: Search,
    title: 'Leak Detection',
    description:
      'Non-invasive electronic leak detection to find hidden leaks before they become disasters.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = cardsRef.current?.querySelectorAll('.service-card')
      if (!cards) return

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section id="services" ref={sectionRef} className="bg-brand-gray py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-brand-navy text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Professional Plumbing Services in Marietta, GA
          </motion.h2>
          <motion.p
            className="text-brand-text-muted mt-3 text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            From emergency repairs to routine maintenance, our licensed plumbers handle
            every job with expertise and care.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              className="service-card bg-white rounded-2xl p-8 border border-transparent cursor-pointer select-none"
              style={{ opacity: 0 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                borderTopColor: '#C8102E',
                borderTopWidth: '3px',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <div className="bg-brand-red/10 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-red" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-brand-navy text-lg mt-4">{title}</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{description}</p>
              <motion.p
                className="text-brand-red font-semibold mt-4 text-sm flex items-center gap-1"
                whileHover={{ gap: '8px' }}
              >
                Request Service <span>→</span>
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
