'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F1EC] border-b border-[#E0D9D0]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="select-none flex flex-col leading-none group">
          <span className="font-display font-bold text-[#1B2A3B] text-xl tracking-tight">
            ELCO
          </span>
          <span className="font-body text-[#7A7165] text-[10px] tracking-[0.25em] uppercase -mt-0.5">
            Plumbing
          </span>
        </a>

        {/* Center nav — desktop */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-sm font-medium text-[#7A7165] hover:text-[#1B2A3B] transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#B5311A] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-body text-xs text-[#7A7165] font-medium">Available Now</span>
          </div>

          <motion.a
            href="tel:6787721218"
            className="flex items-center gap-2 bg-[#B5311A] text-white font-body font-medium text-sm px-5 py-2.5 rounded-full select-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={13} strokeWidth={2.5} />
            (678) 772-1218
          </motion.a>

          <button
            className="lg:hidden text-[#7A7165] hover:text-[#1B2A3B] p-1 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
            className="lg:hidden overflow-hidden border-t border-[#E0D9D0] bg-[#F5F1EC]"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 font-body text-[#7A7165] hover:text-[#1B2A3B] text-sm font-medium border-b border-[#E0D9D0] last:border-b-0 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="tel:6787721218"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full bg-[#B5311A] text-white font-body font-medium text-sm py-3.5 rounded-full text-center tracking-wide"
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
