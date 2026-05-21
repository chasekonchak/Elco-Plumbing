'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  'Emergency Repair',
  'Drain Cleaning',
  'Water Heater',
  'Sewer Line',
  'Water Restoration',
  'Leak Detection',
  'Other',
]

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const BORDER_DEFAULT = '#2A3040'
const BORDER_FOCUS = '#F59E0B'

const inputBase =
  'bg-brand-bg text-brand-white placeholder:text-brand-muted px-4 py-3 rounded-sm w-full text-sm font-body outline-none'

function FieldLabel({ children }: { children: string }) {
  return (
    <p className="text-xs tracking-widest uppercase text-brand-muted mb-2 font-body font-semibold">
      {children}
    </p>
  )
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.phone) return
    setSubmitted(true)
  }

  return (
    <section
      id="quote"
      ref={sectionRef}
      className="bg-brand-surface border-t border-brand-border py-16 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-brand-amber font-semibold font-body mb-4">
              Free Quote
            </p>
            <h2
              ref={headingRef}
              className="font-display text-brand-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              GET A FREE QUOTE
            </h2>
            <p className="text-brand-slate mt-4 max-w-sm text-base font-body leading-relaxed">
              Describe your issue. We respond within minutes — no spam, no
              obligation.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {['→ No spam, ever', '→ Response within minutes', '→ Free, no obligation'].map(
                (item) => (
                  <p key={item} className="text-sm text-brand-slate font-body">
                    {item}
                  </p>
                )
              )}
            </div>

            <p className="font-display text-brand-amber mt-10" style={{ fontSize: '2rem' }}>
              678.772.1218
            </p>
            <p className="text-xs text-brand-muted font-body mt-1">or call us directly</p>
          </div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-brand-card border border-brand-border p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <Check size={48} className="text-brand-amber" strokeWidth={1.5} />
                  <h3 className="font-display text-3xl text-brand-white">
                    REQUEST RECEIVED
                  </h3>
                  <p className="text-brand-slate font-body text-sm">
                    {"We'll call you within minutes."}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                  >
                    <FieldLabel>Name</FieldLabel>
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputBase}
                      style={{ border: `1px solid ${BORDER_DEFAULT}` }}
                      whileFocus={{ borderColor: BORDER_FOCUS }}
                      transition={{ duration: 0.15 }}
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <FieldLabel>Phone</FieldLabel>
                    <motion.input
                      type="tel"
                      name="phone"
                      placeholder="(678) 555-1234"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputBase}
                      style={{ border: `1px solid ${BORDER_DEFAULT}` }}
                      whileFocus={{ borderColor: BORDER_FOCUS }}
                      transition={{ duration: 0.15 }}
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  >
                    <FieldLabel>Email</FieldLabel>
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputBase}
                      style={{ border: `1px solid ${BORDER_DEFAULT}` }}
                      whileFocus={{ borderColor: BORDER_FOCUS }}
                      transition={{ duration: 0.15 }}
                    />
                  </motion.div>

                  {/* Service */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <FieldLabel>Service Needed</FieldLabel>
                    <motion.select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputBase} cursor-pointer`}
                      style={{
                        border: `1px solid ${BORDER_DEFAULT}`,
                        backgroundColor: '#0F1117',
                      }}
                      whileFocus={{ borderColor: BORDER_FOCUS }}
                      transition={{ duration: 0.15 }}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </motion.select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  >
                    <FieldLabel>Message</FieldLabel>
                    <motion.textarea
                      name="message"
                      rows={4}
                      placeholder="Describe your plumbing issue…"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputBase} resize-none`}
                      style={{ border: `1px solid ${BORDER_DEFAULT}` }}
                      whileFocus={{ borderColor: BORDER_FOCUS }}
                      transition={{ duration: 0.15 }}
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.button
                    onClick={handleSubmit}
                    className="bg-brand-amber text-brand-bg font-bold w-full py-4 rounded-sm tracking-wider text-sm mt-1 font-body select-none"
                    whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    SEND REQUEST →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
