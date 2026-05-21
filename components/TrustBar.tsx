'use client'

import { motion } from 'framer-motion'
import { Shield, Star, Zap, Tag } from 'lucide-react'

const items = [
  {
    icon: Shield,
    stat: 'Licensed & Insured',
    sub: 'Fully bonded in GA',
  },
  {
    icon: Star,
    stat: '4.9 / 5 Rating',
    sub: '247+ verified reviews',
  },
  {
    icon: Zap,
    stat: 'Same-Day Service',
    sub: 'Call before noon',
  },
  {
    icon: Tag,
    stat: 'Free Estimates',
    sub: 'No hidden fees',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map(({ icon: Icon, stat, sub }) => (
            <motion.div
              key={stat}
              variants={itemVariants}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="bg-brand-red/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-1">
                <Icon className="w-5 h-5 text-brand-red" strokeWidth={2} />
              </div>
              <p className="font-bold text-brand-navy text-base">{stat}</p>
              <p className="text-brand-text-muted text-sm">{sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
