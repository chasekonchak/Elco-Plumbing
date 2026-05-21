'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Wrench, Phone, Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      start: '80px top',
      onEnter: () =>
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(4, 5, 10, 0.85)',
          duration: 0.4,
          ease: 'power2.out',
        }),
      onLeaveBack: () =>
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(4, 5, 10, 0.5)',
          duration: 0.4,
          ease: 'power2.out',
        }),
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/[0.06]"
      style={{
        backgroundColor: 'rgba(4, 5, 10, 0.5)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-start gap-2.5 select-none group">
          <motion.div
            whileHover={{ rotate: -15 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Wrench size={20} className="text-brand-amber mt-0.5 flex-shrink-0" strokeWidth={2} />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[1.4rem] text-brand-white tracking-[0.15em]">
              ELCO
            </span>
            <span className="text-[9px] font-semibold tracking-[0.35em] text-brand-amber uppercase font-body -mt-0.5">
              PLUMBING
            </span>
          </div>
        </a>

        {/* Center nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <motion.a
              key={label}
              href={href}
              initial="rest"
              whileHover="hovered"
              className="relative py-1 font-body text-sm font-medium text-brand-slate hover:text-brand-white transition-colors duration-200"
            >
              {label}
              <motion.span
                variants={{ rest: { scaleX: 0, opacity: 0 }, hovered: { scaleX: 1, opacity: 1 } }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                style={{ originX: 0 }}
                className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-brand-amber to-brand-amber-light"
              />
            </motion.a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-xs text-brand-slate font-medium font-body">Available Now</span>
          </div>

          <motion.a
            href="tel:6787721218"
            className="flex items-center gap-2 bg-brand-amber text-brand-bg font-bold text-sm px-5 py-2.5 rounded-full select-none font-body"
            whileHover={{
              scale: 1.04,
              boxShadow: '0 0 25px rgba(245,158,11,0.5), 0 0 50px rgba(245,158,11,0.2)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={13} strokeWidth={2.5} />
            (678) 772-1218
          </motion.a>

          <motion.button
            className="lg:hidden text-brand-slate hover:text-brand-white p-1 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.88 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/[0.06]"
            style={{
              backgroundColor: 'rgba(4, 5, 10, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-brand-slate hover:text-brand-white text-sm font-medium border-b border-white/[0.06] last:border-b-0 transition-colors font-body"
                >
                  {label}
                </a>
              ))}
              <a
                href="tel:6787721218"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full bg-brand-amber text-brand-bg font-bold text-sm py-3.5 rounded-full text-center tracking-wide font-body"
              >
                Call (678) 772-1218
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
