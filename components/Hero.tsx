'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Phone, ArrowRight } from 'lucide-react'

const headline1 = 'Plumbing Problems?'
const headline2Words = ['We', 'Fix', 'Them', 'Fast.']

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const illustrationRef = useRef<SVGSVGElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      // Animate wave paths
      if (svgRef.current) {
        const paths = svgRef.current.querySelectorAll('path')
        gsap.to(paths, {
          attr: { d: (i: number) => (i % 2 === 0 ? wavePathAlt1 : wavePathAlt2) },
          duration: 4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          stagger: 0.5,
        })
      }

      // Floating illustration
      if (illustrationRef.current) {
        gsap.to(illustrationRef.current, {
          y: -12,
          duration: 3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      }

      // Stagger headline words
      if (h1Ref.current) {
        const words = h1Ref.current.querySelectorAll('.word')
        gsap.fromTo(
          words,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.3,
          }
        )
      }
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-brand-navy flex items-center overflow-hidden pt-20"
    >
      {/* Animated SVG wave background */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 800"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={wavePath1}
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.06"
        />
        <path
          d={wavePath2}
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.06"
        />
        <path
          d={wavePath3}
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.04"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-brand-red/10 text-brand-red border border-brand-red/20 rounded-full px-4 py-1 text-sm font-medium mb-6"
            >
              Serving Marietta &amp; Cobb County
            </motion.div>

            {/* Headline */}
            <h1
              ref={h1Ref}
              className="text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            >
              <span className="block">
                {headline1.split(' ').map((word, i) => (
                  <span key={i} className="word inline-block opacity-0 mr-3">
                    {word}
                  </span>
                ))}
              </span>
              <span className="block mt-1">
                {headline2Words.map((word, i) => (
                  <span
                    key={i}
                    className={`word inline-block opacity-0 mr-3 ${
                      i < 3 ? 'text-white' : 'text-brand-red'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-gray-300 text-lg mt-4 max-w-lg leading-relaxed"
            >
              Licensed, bonded, and insured plumbers for emergency repairs, drain
              cleaning, and water restoration. Same-day service available.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 flex gap-4 flex-wrap"
            >
              <motion.a
                href="tel:6787721218"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl text-lg select-none"
                whileHover={{ scale: 1.04, filter: 'brightness(1.08)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>

              <motion.a
                href="#quote"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors select-none"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-6 flex gap-6 flex-wrap text-sm text-gray-400"
            >
              <span>✓ Licensed &amp; Insured</span>
              <span>✓ 4.9★ Rating</span>
              <span>✓ Same-Day Available</span>
            </motion.div>
          </div>

          {/* Right column — SVG illustration */}
          <div className="flex items-center justify-center">
            <svg
              ref={illustrationRef}
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-sm lg:max-w-md"
              aria-hidden="true"
            >
              {/* Pipe system illustration */}
              {/* Main vertical pipe */}
              <rect x="185" y="60" width="30" height="180" rx="4" stroke="white" strokeWidth="2.5" fill="none" opacity="0.85" />
              {/* Horizontal pipe top */}
              <rect x="100" y="60" width="200" height="30" rx="4" stroke="white" strokeWidth="2.5" fill="none" opacity="0.85" />
              {/* Left branch */}
              <rect x="100" y="60" width="30" height="120" rx="4" stroke="white" strokeWidth="2" fill="none" opacity="0.7" />
              {/* Right branch */}
              <rect x="270" y="60" width="30" height="120" rx="4" stroke="white" strokeWidth="2" fill="none" opacity="0.7" />
              {/* Elbow connectors */}
              <circle cx="115" cy="180" r="15" stroke="#C8102E" strokeWidth="2.5" fill="none" />
              <circle cx="285" cy="180" r="15" stroke="#C8102E" strokeWidth="2.5" fill="none" />
              {/* Water drop main */}
              <path
                d="M200 280 C200 280 170 250 170 235 C170 218 184 205 200 205 C216 205 230 218 230 235 C230 250 200 280 200 280Z"
                stroke="#C8102E"
                strokeWidth="2.5"
                fill="#C8102E"
                fillOpacity="0.2"
              />
              {/* Shine on drop */}
              <ellipse cx="192" cy="225" rx="5" ry="8" fill="white" opacity="0.3" />
              {/* Small drops */}
              <path
                d="M130 310 C130 310 118 298 118 292 C118 285 123 280 130 280 C137 280 142 285 142 292 C142 298 130 310 130 310Z"
                stroke="white"
                strokeWidth="1.5"
                fill="white"
                fillOpacity="0.1"
              />
              <path
                d="M270 310 C270 310 258 298 258 292 C258 285 263 280 270 280 C277 280 282 285 282 292 C282 298 270 310 270 310Z"
                stroke="white"
                strokeWidth="1.5"
                fill="white"
                fillOpacity="0.1"
              />
              {/* Wrench icon hint */}
              <circle cx="200" cy="355" r="28" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
              <circle cx="200" cy="355" r="20" stroke="#C8102E" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M190 355 L210 355 M200 345 L200 365" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              {/* Decorative circles */}
              <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.12" />
              <circle cx="200" cy="200" r="185" stroke="#C8102E" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

const wavePath1 =
  'M0 400 C 180 350, 360 450, 540 400 S 900 350, 1080 400 S 1260 450, 1440 400 L1440 800 L0 800Z'
const wavePath2 =
  'M0 500 C 200 440, 400 560, 600 500 S 1000 440, 1200 500 S 1380 560, 1440 500 L1440 800 L0 800Z'
const wavePath3 =
  'M0 300 C 240 240, 480 360, 720 300 S 1200 240, 1440 300 L1440 800 L0 800Z'
const wavePathAlt1 =
  'M0 420 C 180 360, 360 470, 540 420 S 900 360, 1080 420 S 1260 470, 1440 420 L1440 800 L0 800Z'
const wavePathAlt2 =
  'M0 480 C 200 420, 400 540, 600 480 S 1000 420, 1200 480 S 1380 540, 1440 480 L1440 800 L0 800Z'
