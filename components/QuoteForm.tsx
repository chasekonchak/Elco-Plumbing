'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, CheckCircle } from 'lucide-react'

const services = [
  'Emergency Plumbing Repair',
  'Drain Cleaning',
  'Water Heater Installation & Repair',
  'Sewer Line Repair',
  'Water Restoration',
  'Leak Detection',
  'Other',
]

const fieldVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.08 },
  }),
}

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  message: string
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.phone) return
    setSubmitted(true)
  }

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all duration-200 bg-gray-50 focus:bg-white'

  return (
    <section id="quote" className="bg-brand-navy py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              className="text-4xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              Request a Free Plumbing Quote
            </motion.h2>
            <motion.p
              className="text-gray-400 mt-4 text-base leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Describe your plumbing issue and we&apos;ll get back to you within minutes.
              No obligation, no spam — just fast, honest help.
            </motion.p>

            <motion.a
              href="tel:6787721218"
              className="mt-8 inline-flex items-center gap-3 bg-brand-red text-white font-bold px-8 py-4 rounded-xl text-lg select-none"
              whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Phone className="w-5 h-5" />
              (678) 772-1218
            </motion.a>

            <motion.div
              className="mt-6 flex flex-col gap-2 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <span>✓ No spam</span>
              <span>✓ Respond within minutes</span>
              <span>✓ Free, no obligation</span>
            </motion.div>
          </div>

          {/* Right — form card */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-brand-navy">Request Received!</h3>
                  <p className="text-brand-text-muted text-sm max-w-xs">
                    We&apos;ll review your info and reach out within minutes. For urgent
                    issues, call{' '}
                    <a href="tel:6787721218" className="text-brand-red font-semibold">
                      (678) 772-1218
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Jane Smith' },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '(678) 555-1234' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'jane@example.com' },
                  ].map(({ label, name, type, placeholder }, i) => (
                    <motion.div
                      key={name}
                      custom={i}
                      variants={fieldVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        value={form[name as keyof FormState]}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    custom={3}
                    variants={fieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div
                    custom={4}
                    variants={fieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe your plumbing issue…"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </motion.div>

                  <motion.div
                    custom={5}
                    variants={fieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={handleSubmit}
                      className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg select-none mt-1"
                      whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get My Free Quote
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
