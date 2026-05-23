'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    title: 'Emergency Plumbing',
    tag: '24 / 7',
    desc: "Pipe burst at 2am? Main drain backed up before the holidays? We've answered that call hundreds of times. Real people answer — and we're usually at your door within the hour.",
  },
  {
    num: '02',
    title: 'Drain Cleaning',
    tag: 'Same Day',
    desc: "Hair clogs, kitchen grease, tree roots in the main line — we've cleared them all. One call and your drains will run like they're supposed to.",
  },
  {
    num: '03',
    title: 'Water Heater',
    tag: 'Tank & Tankless',
    desc: "Cold shower this morning? We install, repair, and replace water heaters same-day in most cases. Tank or tankless, we'll get your hot water back fast.",
  },
  {
    num: '04',
    title: 'Sewer Line Repair',
    tag: 'Trenchless',
    desc: "Nobody wants sewer trouble. We use trenchless technology whenever possible so we can fix the problem without turning your whole yard into a dig site.",
  },
  {
    num: '05',
    title: 'Water Restoration',
    tag: 'Fast Response',
    desc: "Water damage moves fast and gets worse every hour you wait. Our team responds quickly to stop the damage and start restoring your home before it gets out of hand.",
  },
  {
    num: '06',
    title: 'Leak Detection',
    tag: 'Electronic',
    desc: "Hidden leaks quietly cost Cobb County homeowners thousands every year. We find them with electronic detection — no guessing, no tearing up your floors to look.",
  },
  {
    num: '07',
    title: 'Fixture Repair',
    tag: 'Single Visit',
    desc: "Dripping faucets, running toilets, broken shut-offs — small problems that waste water and money. We fix them fast, usually in a single visit.",
  },
  {
    num: '08',
    title: 'Water Line Repair',
    tag: 'No Dig Option',
    desc: "Main water line issues can mean low pressure throughout the whole house or a soggy yard. We diagnose and repair them without tearing up your property.",
  },
  {
    num: '09',
    title: 'Garbage Disposal',
    tag: 'Same Day',
    desc: "Jammed, leaking, or completely dead — we repair and replace garbage disposals the same day in most cases. Fast, clean, done.",
  },
  {
    num: '10',
    title: 'Whole-Home Re-Pipe',
    tag: 'Full Service',
    desc: "Old galvanized or polybutylene pipe? We re-pipe entire homes with modern materials. It's a big job — and we've done hundreds of them across metro Atlanta.",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      // Heading reveal
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

      // Horizontal scroll — desktop only
      if (window.innerWidth < 1024) return

      const pin = pinRef.current
      const track = trackRef.current
      if (!pin || !track) return

      const getScrollAmount = () => -(track.scrollWidth - pin.offsetWidth)

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${Math.abs(getScrollAmount())}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`
            }
            if (countRef.current) {
              const idx = Math.min(
                services.length,
                Math.ceil(self.progress * services.length) + 1
              )
              countRef.current.textContent = String(Math.min(idx, services.length))
            }
          },
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section id="services" ref={sectionRef} className="bg-white">
      {/* Section header — normal flow */}
      <div className="max-w-7xl mx-auto px-6 pt-16 lg:pt-28 pb-10 lg:pb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-body text-[11px] tracking-[0.4em] uppercase text-[#B5311A] font-medium mb-4"
        >
          What We Do
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            ref={headingRef}
            className="font-display font-black text-[#1B2A3B] leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
          >
            Every job, done right the first time.
          </h2>

          {/* Progress indicator — desktop only */}
          <div className="hidden lg:flex items-center gap-4 pb-1 flex-shrink-0">
            <span className="font-body text-xs text-[#7A7165]">
              <span ref={countRef}>1</span>
              <span className="text-[#C8C2B8]"> / {services.length}</span>
            </span>
            <div className="relative w-32 h-px bg-[#E8E4DE] overflow-hidden rounded-full">
              <div
                ref={progressBarRef}
                className="absolute inset-y-0 left-0 bg-[#B5311A] transition-none rounded-full"
                style={{ width: '0%' }}
              />
            </div>
            <span className="font-body text-xs text-[#C8C2B8] tracking-wide">scroll to explore</span>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-[#7A7165] max-w-lg mt-4 text-base leading-relaxed"
        >
          From a dripping faucet at 8am to a burst pipe at midnight — we&apos;ve handled it all across Marietta, Kennesaw, Smyrna, and the rest of metro Atlanta.
        </motion.p>
      </div>

      {/* ── Desktop: pinned horizontal scroll ── */}
      <div
        ref={pinRef}
        className="hidden lg:block h-screen bg-[#F5F1EC] overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex h-full items-stretch gap-5 pl-6 lg:pl-16 pr-24 py-8 will-change-transform"
        >
          {services.map(({ num, title, tag, desc }) => (
            <div
              key={num}
              className="flex-shrink-0 w-[320px] bg-white rounded-2xl p-8 flex flex-col border border-[#E8E4DE] hover:border-[#B5311A]/30 transition-colors duration-300 group"
            >
              {/* Number + tag */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-display font-black text-[#B5311A] leading-none"
                  style={{ fontSize: '3.5rem', opacity: 0.18 }}
                >
                  {num}
                </span>
                <span className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-[#B5311A] bg-[#B5311A]/8 px-2.5 py-1 rounded-full border border-[#B5311A]/20 mt-1">
                  {tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-[#1B2A3B] leading-snug mb-3"
                style={{ fontSize: '1.35rem' }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="font-body text-[#7A7165] text-sm leading-relaxed flex-1">
                {desc}
              </p>

              {/* CTA */}
              <div className="mt-6 pt-5 border-t border-[#E8E4DE]">
                <a
                  href="tel:6787721218"
                  className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-[#B5311A] group-hover:gap-2.5 transition-all duration-200"
                >
                  Request Service <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}

          {/* End card — CTA */}
          <div className="flex-shrink-0 w-[320px] bg-[#1B2A3B] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#B5311A] font-medium mb-4">
                All 10 Services
              </p>
              <h3
                className="font-display font-bold text-white leading-snug"
                style={{ fontSize: '1.5rem' }}
              >
                Not sure what you need?
              </h3>
              <p className="font-body text-[#7A8A9A] text-sm mt-3 leading-relaxed">
                Call us and describe what&apos;s happening. A real plumber will tell you exactly what it is and what it costs.
              </p>
            </div>
            <a
              href="tel:6787721218"
              className="inline-flex items-center justify-center gap-2 bg-[#B5311A] text-white font-body font-medium text-sm px-6 py-3.5 rounded-full mt-6 hover:bg-[#9E2A16] transition-colors duration-200"
            >
              Call (678) 772-1218
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical list ── */}
      <div className="lg:hidden border-t border-[#E8E4DE] mx-6">
        {services.map(({ num, title, desc }) => (
          <div
            key={num}
            className="flex gap-5 py-6 border-b border-[#E8E4DE] last:border-b-0"
          >
            <div className="w-1 flex-shrink-0 bg-[#B5311A] rounded-full mt-1 self-start" style={{ height: '1.1rem' }} />
            <div>
              <h3 className="font-body font-medium text-[#1B2A3B] text-base">{title}</h3>
              <p className="font-body text-[#7A7165] text-sm mt-1.5 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
