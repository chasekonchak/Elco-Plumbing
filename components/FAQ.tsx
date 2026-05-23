'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: "Do you charge extra for emergency or after-hours calls?",
    a: "Yes — emergency and after-hours calls do carry a higher rate than standard service. We'll tell you the rate before we come out so there are no surprises. For most emergencies, people find the peace of mind well worth it.",
  },
  {
    q: "How fast can you actually get to my house?",
    a: "For emergencies, our average response time is 47 minutes in the Marietta area. For scheduled service, we offer same-day appointments in most cases. We don't give you a four-hour window and then show up at the tail end of it.",
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Every technician at ELCO is fully licensed in the state of Georgia, bonded, and insured. We carry general liability insurance and workers' compensation. You can ask to see documentation anytime — we'll show you before we start.",
  },
  {
    q: "Do you give free estimates?",
    a: "Yes. For non-emergency work, we'll come out, look at the job, and give you a written estimate at no charge. For emergency calls, we assess the situation and quote you before we start work. You're never committed until you approve the price.",
  },
  {
    q: "Why not just call one of the bigger plumbing companies?",
    a: "Bigger companies mean call centers, dispatch queues, and technicians who've never been to your neighborhood. When you call ELCO, you get a local plumber who's fixed pipes on your street before — and who knows that your reputation in a community like Marietta depends on every single job.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-16 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-body text-[11px] tracking-[0.4em] uppercase text-[#B5311A] font-medium mb-4"
        >
          Common Questions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-black text-[#1B2A3B] leading-[1.05] mb-12"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          Things people ask before they call.
        </motion.h2>

        <div className="flex flex-col divide-y divide-[#E8E4DE]">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="py-1">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="font-body font-medium text-[#1B2A3B] text-base leading-snug group-hover:text-[#B5311A] transition-colors duration-200">
                  {q}
                </span>
                <span className="flex-shrink-0 text-[#B5311A]">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-[#7A7165] text-base leading-relaxed pb-5 pr-8">
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
