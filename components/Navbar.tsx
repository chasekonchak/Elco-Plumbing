'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Wrench, Menu, X, Phone } from 'lucide-react'

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
    gsap.to(navRef.current, {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      scrollTrigger: {
        trigger: document.body,
        start: 'top+=50 top',
        end: 'top+=51 top',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white py-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-brand-red" strokeWidth={2.5} />
            <span className="text-brand-navy font-bold text-xl tracking-tight">
              ELCO Plumbing
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-brand-red transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href="tel:6787721218"
              className="bg-brand-red text-white rounded-full px-5 py-2 text-sm font-semibold flex items-center gap-2 select-none"
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-3.5 h-3.5" />
              (678) 772-1218
            </motion.a>

            <motion.button
              className="md:hidden p-2 text-brand-navy"
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
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
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-gray-700 hover:text-brand-red font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:6787721218"
                className="bg-brand-red text-white rounded-full px-5 py-3 text-sm font-semibold text-center"
                onClick={() => setMobileOpen(false)}
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
