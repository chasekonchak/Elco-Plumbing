'use client'

import { motion } from 'framer-motion'
import { Shield, Star, Zap, Tag } from 'lucide-react'

const items = [
  {
    icon: Shield,
    stat: 'Licensed & Insured',
    sub: 'Every tech bonded in GA',
  },
  {
    icon: Star,
    stat: '4.9 / 5 Rating',
    sub: '247 neighbors reviewed us',
  },
  {
    icon: Zap,
    stat: 'Same-Day Service',
    sub: 'Call us — we actually show up',
  },
  {
    icon: Tag,
    stat: 'Free Estimates',
    sub: 'No surprises on the invoice',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function TrustBar() {
  return (
    <section className="relative bg-brand-surface border-y border-white/[0.06] py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-brand-amber/[0.04] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map(({ icon: Icon, stat, sub }) => (
            <motion.div
              key={stat}
              variants={itemVariants}
              whileHover={{
                boxShadow: '0 0 0 1px rgba(245,158,11,0.25), 0 0 20px rgba(245,158,11,0.08)',
                y: -2,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="glass rounded-2xl px-6 py-6 flex flex-col gap-2 cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
              >
                <Icon size={18} className="text-brand-amber" strokeWidth={1.75} />
              </div>
              <p className="text-brand-white font-semibold text-sm font-body">{stat}</p>
              <p className="text-brand-muted text-xs tracking-wide font-body">{sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
