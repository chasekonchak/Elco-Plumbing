'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    quote:
      "ELCO saved the day when our pipe burst on a Sunday morning. They arrived within the hour and had everything fixed before lunch. Incredibly professional and fair pricing — I won't call anyone else.",
    name: 'Jennifer Hollis',
    city: 'Marietta, GA',
    initials: 'JH',
  },
  {
    quote:
      "I've used ELCO twice now — once for a water heater replacement and once for a stubborn drain. Both times they were on time, explained everything clearly, and left the area spotless. Highly recommend.",
    name: 'Marcus Webb',
    city: 'Kennesaw, GA',
    initials: 'MW',
  },
  {
    quote:
      "After getting quotes from three companies, ELCO was not only the most affordable but also the most thorough in explaining what needed to be done. They found a leak two other plumbers missed. Outstanding.",
    name: 'Denise Trammell',
    city: 'Smyrna, GA',
    initials: 'DT',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-brand-gray py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-brand-navy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-brand-text-muted mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Hundreds of happy homeowners across Cobb County trust ELCO for all their
            plumbing needs.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map(({ quote, name, city, initials }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 shadow-sm cursor-default"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    &#9733;
                  </span>
                ))}
              </div>

              <p className="italic text-gray-600 mt-4 text-sm leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="border-t border-gray-100 mt-6 pt-5 flex items-center gap-3">
                <div className="bg-brand-red/10 text-brand-red font-bold w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
