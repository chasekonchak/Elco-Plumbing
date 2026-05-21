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
    num: '01',
    icon: AlertTriangle,
    title: 'Emergency Plumbing',
    desc: 'Burst pipes, major leaks, sewer backups. We answer 24/7 and respond within hours.',
  },
  {
    num: '02',
    icon: Waves,
    title: 'Drain Cleaning',
    desc: 'Complete drain clearing for kitchens, bathrooms, and main lines. No clog too stubborn.',
  },
  {
    num: '03',
    icon: Flame,
    title: 'Water Heater',
    desc: 'Installation, repair, and replacement. Tank and tankless systems. Same-day in most cases.',
  },
  {
    num: '04',
    icon: Wrench,
    title: 'Sewer Line Repair',
    desc: 'Trenchless inspection, repair, and replacement. Minimal disruption to your property.',
  },
  {
    num: '05',
    icon: Droplets,
    title: 'Water Restoration',
    desc: 'Emergency water damage mitigation. We stop the damage and restore your home fast.',
  },
  {
    num: '06',
    icon: Search,
    title: 'Leak Detection',
    desc: 'Electronic leak detection finds hidden leaks before they destroy walls, floors, and foundations.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
    <section id="services" ref={sectionRef} className="relative bg-brand-surface py-16 lg:py-28 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-1 absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-brand-amber/[0.05] blur-[120px]" />
        <div className="blob-2 absolute bottom-0 left-[5%] w-[350px] h-[350px] rounded-full bg-indigo-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[11px] tracking-[0.4em] uppercase text-brand-amber font-semibold font-body mb-4"
        >
          What We Do
        </motion.p>

        <h2
          ref={headingRef}
          className="font-display text-brand-white"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          WHAT WE FIX
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-brand-slate max-w-lg mt-4 text-base font-body leading-relaxed"
        >
          Every plumbing issue handled with expertise, upfront pricing, and guaranteed work.
        </motion.p>

        {/* Cards grid */}
        <motion.div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map(({ num, icon: Icon, title, desc }) => (
            <motion.div
              key={num}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 0 0 1px rgba(245,158,11,0.3), 0 0 40px rgba(245,158,11,0.1)',
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="glass rounded-2xl p-8 flex flex-col gap-4 cursor-default relative overflow-hidden group"
            >
              {/* Card-level amber glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)' }}
              />

              {/* Number watermark */}
              <span
                className="absolute top-6 right-7 font-display text-brand-amber leading-none select-none"
                style={{ fontSize: '4rem', opacity: 0.12 }}
              >
                {num}
              </span>

              {/* Icon */}
              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(245,158,11,0.1)',
                  border: '1px solid rgba(245,158,11,0.2)',
                }}
              >
                <Icon size={20} className="text-brand-amber" strokeWidth={1.75} />
              </div>

              <h3 className="font-display text-xl text-brand-white tracking-wide relative">
                {title}
              </h3>

              <p className="text-brand-slate text-sm leading-relaxed font-body relative">{desc}</p>

              <p className="relative text-[11px] tracking-[0.2em] uppercase text-brand-amber font-semibold font-body mt-auto pt-2 flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Request Service <span>→</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
