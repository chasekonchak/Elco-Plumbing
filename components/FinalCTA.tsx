'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="quote" className="bg-[#1B2A3B] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-body text-[11px] tracking-[0.4em] uppercase text-[#B5311A] font-medium mb-5"
        >
          Ready to Fix It?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-white leading-[1.05]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          Need a plumber right now?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-body text-[#7A8A9A] text-base mt-5 leading-relaxed max-w-md mx-auto"
        >
          Call us and a real plumber picks up — not a call center, not a machine. We&apos;ll have someone at your door fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="tel:6787721218"
            className="inline-flex items-center gap-2.5 bg-[#B5311A] text-white font-body font-medium px-8 py-4 rounded-full text-base select-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={16} strokeWidth={2.5} />
            Call (678) 772-1218
          </motion.a>

          <a
            href="#quote-form"
            className="font-body text-sm text-[#7A8A9A] hover:text-white transition-colors duration-200 flex items-center gap-1.5"
          >
            Request a free quote online <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
