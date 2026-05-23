const serviceLinks = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Water Heater',
  'Sewer Line Repair',
  'Water Restoration',
  'Leak Detection',
]

export default function Footer() {
  return (
    <footer className="bg-[#111D2B] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-[#1E2F40]">
          {/* Col 1 — brand */}
          <div>
            <div className="mb-5">
              <p className="font-display font-bold text-white text-xl leading-none tracking-tight">ELCO</p>
              <p className="font-body text-[#7A8A9A] text-[10px] tracking-[0.25em] uppercase mt-0.5">Plumbing</p>
            </div>
            <p className="font-body text-[#7A8A9A] text-sm leading-relaxed max-w-[220px]">
              Family-owned and operated, serving Marietta and metro Atlanta since 2009.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href="tel:6787721218"
                className="font-body text-sm font-medium text-[#B5311A] hover:text-white transition-colors duration-200"
              >
                (678) 772-1218
              </a>
              <p className="font-body text-[#7A8A9A] text-xs leading-relaxed">
                24/7 Emergency &middot; Mon&ndash;Sat 7am&ndash;7pm
              </p>
              <p className="font-body text-[#7A8A9A] text-xs">
                2520 Ruger Dr NE, Marietta, GA 30066
              </p>
            </div>
          </div>

          {/* Col 2 — services */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#7A8A9A] font-medium mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-body text-[#7A8A9A] text-sm hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — right info */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#7A8A9A] font-medium mb-5">
              License &amp; Coverage
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-body text-[#7A8A9A] text-sm leading-relaxed">
                Licensed &amp; Insured in Georgia
              </p>
              <p className="font-body text-[#7A8A9A] text-sm leading-relaxed">
                Serving Metro Atlanta &amp; Cobb County
              </p>
              <p className="font-body text-[#7A8A9A] text-sm leading-relaxed">
                Within 50 miles of Marietta
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#services"
                className="inline-block font-body text-sm font-medium bg-[#B5311A] text-white px-6 py-3 rounded-full hover:bg-[#9E2A16] transition-colors duration-200"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs font-body text-[#4A5A6A]">
          <span>&copy; 2025 ELCO Plumbing. All rights reserved.</span>
          <span>Licensed &amp; Insured in Georgia &middot; Serving Metro Atlanta Since 2009</span>
        </div>
      </div>
    </footer>
  )
}
