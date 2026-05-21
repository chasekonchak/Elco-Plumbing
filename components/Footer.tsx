import { Wrench, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Free Quote', href: '#quote' },
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
    <footer className="bg-brand-navy border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-brand-red" strokeWidth={2.5} />
              <span className="text-white font-bold text-lg">ELCO Plumbing</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              If Water Runs Through It, We Do It. Serving Marietta, GA and the surrounding
              Cobb County area with professional plumbing services.
            </p>
            <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <a href="tel:6787721218" className="hover:text-white transition-colors">
                (678) 772-1218
              </a>
            </div>
            <div className="mt-2 flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>2520 Ruger Dr NE, Marietta, GA 30066</span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-1">
              {serviceAreas.map((area) => (
                <span key={area} className="text-gray-400 text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-gray-500 text-sm">
          <span>© 2025 ELCO Plumbing. All rights reserved.</span>
          <span>Licensed &amp; Insured in Georgia</span>
        </div>
      </div>
    </footer>
  )
}
