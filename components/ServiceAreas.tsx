'use client'

import { motion } from 'framer-motion'

const cities = [
  'Marietta', 'Kennesaw', 'Smyrna', 'Acworth',
  'Woodstock', 'Roswell', 'Sandy Springs', 'Atlanta',
  'Cobb County', 'East Cobb', 'West Cobb', 'Powder Springs',
  'Austell', 'Mableton', 'Vinings', 'Cumberland',
  'Canton', 'Alpharetta', 'Milton', 'Johns Creek',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-[#F5F1EC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-body text-[11px] tracking-[0.4em] uppercase text-[#B5311A] font-medium mb-4"
        >
          Where We Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-black text-[#1B2A3B] leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          We come to you — anywhere within 50 miles of Marietta.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-body text-[#7A7165] text-base max-w-lg leading-relaxed mb-10"
        >
          If you&apos;re in Cobb County or the surrounding metro area, we cover you. Call and we&apos;ll confirm your address.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cities.map((city) => (
            <motion.span
              key={city}
              variants={pillVariants}
              className="bg-white text-[#1B2A3B] font-body text-sm font-medium px-5 py-2.5 rounded-full border border-[#E0D9D0] hover:border-[#B5311A] hover:text-[#B5311A] transition-colors duration-200 cursor-default"
            >
              {city}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
