'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Emergency Plumbing',
    desc: "Pipe burst at 2am? Main drain backed up before the holidays? We've answered that call hundreds of times. Real people answer and we're usually at your door within the hour.",
  },
  {
    title: 'Drain Cleaning',
    desc: "Hair clogs, kitchen grease, tree roots in the main line — we've cleared them all. One call and your drains will run like they're supposed to.",
  },
  {
    title: 'Water Heater Repair & Install',
    desc: "Cold shower this morning? We install, repair, and replace water heaters same-day in most cases. Tank or tankless, we'll get your hot water back fast.",
  },
  {
    title: 'Sewer Line Repair',
    desc: "Nobody wants sewer trouble. We use trenchless technology whenever possible so we can fix the problem without turning your whole yard into a dig site.",
  },
  {
    title: 'Water Restoration',
    desc: "Water damage moves fast and gets worse every hour you wait. Our team responds quickly to stop the damage and start restoring your home before it gets out of hand.",
  },
  {
    title: 'Leak Detection',
    desc: "Hidden leaks quietly cost Cobb County homeowners thousands every year. We find them with electronic detection — no guessing, no tearing up your floors to look.",
  },
  {
    title: 'Fixture Repair & Replacement',
    desc: "Dripping faucets, running toilets, broken shut-offs — small problems that waste water and money. We fix them fast, usually in a single visit.",
  },
  {
    title: 'Water Line Repair',
    desc: "Main water line issues can mean low pressure throughout the whole house or a soggy yard. We diagnose and repair them without tearing up your property.",
  },
  {
    title: 'Garbage Disposal',
    desc: "Jammed, leaking, or completely dead — we repair and replace garbage disposals the same day in most cases.",
  },
  {
    title: 'Whole-Home Re-Pipe',
    desc: "Old galvanized or polybutylene pipe? We re-pipe entire homes with modern materials. It's a big job — and we've done hundreds of them across metro Atlanta.",
  },
]

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
    <section id="services" ref={sectionRef} className="bg-white py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-body text-[11px] tracking-[0.4em] uppercase text-[#B5311A] font-medium mb-4"
        >
          What We Do
        </motion.p>

        <h2
          ref={headingRef}
          className="font-display font-black text-[#1B2A3B] leading-[1.05]"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
        >
          Every job, done right the first time.
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-[#7A7165] max-w-lg mt-4 text-base leading-relaxed"
        >
          From a dripping faucet at 8am to a burst pipe at midnight — we&apos;ve handled it all across Marietta, Kennesaw, Smyrna, and the rest of metro Atlanta.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#E8E4DE]">
          {services.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 2) * 0.08 }}
              className="group flex gap-5 py-7 px-2 border-b border-[#E8E4De] hover:bg-[#F5F1EC] transition-colors duration-200 cursor-default"
            >
              <div className="w-1 flex-shrink-0 bg-[#B5311A] rounded-full mt-1 self-start" style={{ height: '1.25rem' }} />
              <div>
                <h3 className="font-body font-medium text-[#1B2A3B] text-base">{title}</h3>
                <p className="font-body text-[#7A7165] text-sm mt-1.5 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
