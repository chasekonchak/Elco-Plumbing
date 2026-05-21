'use client'

import { motion } from 'framer-motion'
import { Clock, DollarSign, Shield, ThumbsUp, Phone, MapPin } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'A plumber at your door within hours, not days.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'You approve the price before we touch anything.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully bonded and certified in the state of Georgia.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: "We don't leave until the job is done right.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const rowVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.h2
              className="text-4xl font-bold text-brand-navy leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              Why Marietta Homeowners Call ELCO First
            </motion.h2>

            <motion.div
              className="mt-8 flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={rowVariants}
                  className="flex items-start gap-4"
                >
                  <div className="bg-brand-red/10 rounded-full p-3 w-11 h-11 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-red" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy">{title}</p>
                    <p className="text-brand-text-muted text-sm mt-0.5">{description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — contact card */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-brand-navy rounded-3xl p-10 text-white"
          >
            <p className="text-2xl font-bold">Need a Plumber Now?</p>
            <a
              href="tel:6787721218"
              className="block text-5xl font-black text-brand-red mt-2 hover:text-red-400 transition-colors"
            >
              (678) 772-1218
            </a>

            <div className="mt-4 flex items-start gap-2 text-gray-400">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p>2520 Ruger Dr NE, Marietta, GA 30066</p>
                <p className="mt-1">Available 24/7 for emergencies</p>
              </div>
            </div>

            <motion.a
              href="tel:6787721218"
              className="mt-6 w-full bg-brand-red text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2 select-none"
              whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
