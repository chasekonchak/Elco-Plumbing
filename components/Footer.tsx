import { Wrench, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const serviceLinks = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Water Heater',
  'Sewer Line Repair',
  'Water Restoration',
  'Leak Detection',
]

const serviceAreas = [
  'Marietta', 'Kennesaw', 'Smyrna', 'Acworth',
  'Woodstock', 'Roswell', 'Sandy Springs', 'Atlanta',
]

export default function Footer() {
  return (
    <footer className="relative bg-brand-bg border-t border-white/[0.06] pt-20 pb-10 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[200px] rounded-full bg-brand-amber/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Col 1 */}
          <div>
            <div className="flex items-start gap-2.5 mb-5">
              <Wrench size={19} className="text-brand-amber mt-0.5 flex-shrink-0" strokeWidth={2} />
              <div className="flex flex-col leading-none">
                <span className="font-display text-[1.35rem] text-brand-white tracking-[0.15em]">ELCO</span>
                <span className="text-[9px] font-semibold tracking-[0.35em] text-brand-amber uppercase font-body -mt-0.5">PLUMBING</span>
              </div>
            </div>

            <p className="text-brand-muted text-sm leading-relaxed max-w-[220px] font-body mb-6">
              If water runs through it, we do it. Serving Marietta and Cobb County for over 15 years.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="tel:6787721218"
                className="inline-flex items-center gap-2 text-brand-amber text-sm font-semibold font-body hover:text-brand-amber-light transition-colors"
              >
                <Phone size={13} strokeWidth={2} />
                (678) 772-1218
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-brand-muted flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-brand-muted text-xs font-body leading-relaxed">
                  2520 Ruger Dr NE<br />Marietta, GA 30066
                </p>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-[9px] tracking-[0.35em] uppercase text-brand-muted font-semibold font-body mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-1 text-brand-muted text-sm font-body hover:text-brand-white transition-colors duration-200"
                  >
                    {s}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-60 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-[9px] tracking-[0.35em] uppercase text-brand-muted font-semibold font-body mb-5">
              Service Areas
            </p>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {serviceAreas.map((area) => (
                <span key={area} className="text-brand-muted text-sm font-body hover:text-brand-slate transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-brand-muted font-body">
          <span>© 2025 ELCO Plumbing. All rights reserved.</span>
          <span>Licensed &amp; Insured in Georgia · ROC #XXXXXXX</span>
        </div>
      </div>
    </footer>
  )
}
