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

const underlineVariants = {
  rest: { scaleX: 0 },
  hovered: { scaleX: 1 },
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      start: '80px top',
      onEnter: () =>
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(15,17,23,0.98)',
          duration: 0.3,
          ease: 'power2.out',
        }),
      onLeaveBack: () =>
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(15,17,23,0.95)',
          duration: 0.3,
          ease: 'power2.out',
        }),
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(15,17,23,0.95)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-start gap-2 select-none">
          <Wrench size={18} className="text-brand-amber mt-1 flex-shrink-0" strokeWidth={2} />
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl text-brand-white tracking-widest">
              ELCO
            </span>
            <span className="text-[10px] font-semibold tracking-[0.3em] text-brand-amber uppercase">
              PLUMBING
            </span>
          </div>
        </a>

        {/* Center links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <motion.a
              key={label}
              href={href}
              initial="rest"
              whileHover="hovered"
              className="relative flex flex-col items-start font-body text-sm font-medium text-brand-slate hover:text-brand-white transition-colors duration-150 pb-1"
            >
              {label}
              <motion.span
                variants={underlineVariants}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute bottom-0 left-0 right-0 h-px bg-brand-amber"
                style={{ originX: 0 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5">
          {/* Availability badge — desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-brand-slate font-medium">Available Now</span>
          </div>

          {/* CTA */}
          <motion.a
            href="tel:6787721218"
            className="flex items-center gap-1.5 bg-brand-amber text-brand-bg font-bold text-sm px-5 py-2 rounded-sm select-none"
            whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={14} strokeWidth={2.5} />
            (678) 772-1218
          </motion.a>

          {/* Mobile hamburger */}
          <motion.button
            className="lg:hidden text-brand-white p-1"
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
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
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-brand-surface border-t border-brand-border"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-brand-slate hover:text-brand-white text-sm font-medium border-b border-brand-border last:border-b-0 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="tel:6787721218"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full bg-brand-amber text-brand-bg font-bold text-sm py-3 rounded-sm text-center tracking-wider"
              >
                CALL (678) 772-1218
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
