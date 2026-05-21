'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const serviceOptions = [
  'Emergency Repair',
  'Drain Cleaning',
  'Water Heater',
  'Sewer Line',
  'Water Restoration',
  'Leak Detection',
  'Other / Not Sure',
]

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

function FieldLabel({ children }: { children: string }) {
  return (
    <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-2 font-body font-semibold">
      {children}
    </p>
  )
}

function FormField({ label, children, delay }: { label: string; children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      <FieldLabel>{label}</FieldLabel>
      {children}
    </motion.div>
  )
}

const inputStyle: React.CSSProperties = {
  background: 'rgba(7,8,16,0.8)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#EEF2FF',
  borderRadius: '0.75rem',
  width: '100%',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

const FOCUS_STYLE = {
  borderColor: 'rgba(245,158,11,0.6)',
  boxShadow: '0 0 0 3px rgba(245,158,11,0.1)',
}

function GlassInput({ type = 'text', name, placeholder, value, onChange }: {
  type?: string; name: string; placeholder?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      type={type} name={name} placeholder={placeholder} value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputStyle, ...(focused ? FOCUS_STYLE : {}), caretColor: '#F59E0B' }}
    />
  )
}

function GlassSelect({ name, value, onChange, options }: {
  name: string; value: string; options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  const [focused, setFocused] = useState(false)
  return (
    <select
      name={name} value={value} onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputStyle, cursor: 'pointer', ...(focused ? FOCUS_STYLE : {}) }}
    >
      <option value="" style={{ background: '#0C0D18' }}>Select a service…</option>
      {options.map((o) => (
        <option key={o} value={o} style={{ background: '#0C0D18' }}>{o}</option>
      ))}
    </select>
  )
}

function GlassTextarea({ name, placeholder, value, onChange }: {
  name: string; placeholder?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea
      name={name} rows={4} placeholder={placeholder} value={value} onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputStyle, resize: 'none', caretColor: '#F59E0B', ...(focused ? FOCUS_STYLE : {}) }}
    />
  )
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', service: '', message: '' })
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
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
          }
        )
      }
    },
    { scope: sectionRef }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.phone) return
    setSubmitted(true)
  }

  return (
    <section id="quote" ref={sectionRef} className="relative bg-brand-bg py-16 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-1 absolute -bottom-20 right-[10%] w-[500px] h-[500px] rounded-full bg-brand-amber/[0.06] blur-[120px]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-[11px] tracking-[0.4em] uppercase text-brand-amber font-semibold font-body mb-4"
            >
              {"Let's Talk"}
            </motion.p>

            <h2 ref={headingRef} className="font-display text-brand-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              GET A FREE QUOTE
            </h2>

            <p className="text-brand-slate mt-4 text-base font-body leading-relaxed max-w-sm">
              Fill out the form and a real plumber — not a bot, not a call center — will reach
              out within minutes. We&apos;ve been doing this in the metro Atlanta area since
              2009 and we still answer our own phones.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                '→ No spam, ever',
                '→ A real person responds — usually within minutes',
                '→ Free estimate, no strings attached',
              ].map((item) => (
                <p key={item} className="text-sm text-brand-slate font-body">{item}</p>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xs tracking-widest uppercase text-brand-muted font-body mb-2">
                Or call us directly
              </p>
              <a
                href="tel:6787721218"
                className="font-display text-brand-amber text-glow-amber hover:text-brand-amber-light transition-colors"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
              >
                678.772.1218
              </a>
            </div>
          </div>

          {/* Right — glass form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="glass rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.4), transparent)' }}
            />
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-amber/[0.08] blur-[50px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 240, damping: 20 }}
                  className="relative flex flex-col items-center justify-center py-16 gap-5 text-center"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(245,158,11,0.12)',
                      border: '1px solid rgba(245,158,11,0.3)',
                      boxShadow: '0 0 40px rgba(245,158,11,0.2)',
                    }}
                  >
                    <Check size={36} className="text-brand-amber" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-brand-white">GOT IT!</h3>
                    <p className="text-brand-slate font-body text-sm mt-2 max-w-xs">
                      We&apos;ll reach out shortly — usually within a few minutes during business hours.
                      For emergencies, call us directly at (678) 772-1218.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex flex-col gap-5">
                  <FormField label="Your Name" delay={0.05}>
                    <GlassInput name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} />
                  </FormField>
                  <FormField label="Best Phone Number" delay={0.1}>
                    <GlassInput type="tel" name="phone" placeholder="(678) 555-1234" value={form.phone} onChange={handleChange} />
                  </FormField>
                  <FormField label="Email Address" delay={0.15}>
                    <GlassInput type="email" name="email" placeholder="jane@example.com" value={form.email} onChange={handleChange} />
                  </FormField>
                  <FormField label="What Do You Need Help With?" delay={0.2}>
                    <GlassSelect name="service" value={form.service} onChange={handleChange} options={serviceOptions} />
                  </FormField>
                  <FormField label="Tell Us More (Optional)" delay={0.25}>
                    <GlassTextarea name="message" placeholder="What's going on? The more detail the better…" value={form.message} onChange={handleChange} />
                  </FormField>
                  <motion.button
                    onClick={handleSubmit}
                    className="mt-2 w-full bg-brand-amber text-brand-bg font-bold py-4 rounded-full text-sm tracking-wider font-body select-none flex items-center justify-center gap-2"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(245,158,11,0.2)',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    SEND MY REQUEST
                    <ArrowRight size={15} />
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
