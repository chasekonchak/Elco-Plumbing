import { Wrench, Phone, MapPin } from 'lucide-react'

const serviceLinks = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Water Heater',
  'Sewer Line Repair',
  'Water Restoration',
  'Leak Detection',
]

const serviceAreas = [
  'Marietta',
  'Kennesaw',
  'Smyrna',
  'Acworth',
  'Woodstock',
  'Roswell',
  'Sandy Springs',
  'Atlanta',
]

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Col 1 */}
          <div>
            <div className="flex items-start gap-2">
              <Wrench
                size={18}
                className="text-brand-amber mt-1 flex-shrink-0"
                strokeWidth={2}
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl text-brand-white tracking-widest">
                  ELCO
                </span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-brand-amber uppercase font-body">
                  PLUMBING
                </span>
              </div>
            </div>

            <p className="text-brand-muted text-sm mt-4 leading-relaxed max-w-xs font-body">
              If water runs through it, we do it. Serving Marietta and Cobb
              County for over 15 years.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <Phone size={14} className="text-brand-amber flex-shrink-0" strokeWidth={2} />
              <a
                href="tel:6787721218"
                className="text-brand-amber font-semibold text-sm font-body hover:text-brand-amber-light transition-colors"
              >
                (678) 772-1218
              </a>
            </div>

            <div className="mt-1 flex items-start gap-2">
              <MapPin
                size={14}
                className="text-brand-muted flex-shrink-0 mt-0.5"
                strokeWidth={1.75}
              />
              <p className="text-brand-muted text-xs font-body">
                2520 Ruger Dr NE, Marietta, GA 30066
              </p>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted font-semibold font-body mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-brand-muted text-sm font-body hover:text-brand-white transition-colors duration-150"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted font-semibold font-body mb-5">
              Service Areas
            </p>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {serviceAreas.map((area) => (
                <span key={area} className="text-brand-muted text-sm font-body">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-brand-muted font-body">
          <span>© 2025 ELCO Plumbing. All rights reserved.</span>
          <span>Licensed &amp; Insured in Georgia · ROC #XXXXXXX</span>
        </div>
      </div>
    </footer>
  )
}
