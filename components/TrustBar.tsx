import { Shield, Star, Zap, Tag } from 'lucide-react'

const items = [
  { icon: Shield, stat: 'Licensed & Insured', sub: 'Fully bonded in GA' },
  { icon: Star, stat: '4.9 / 5 Rating', sub: '247+ verified reviews' },
  { icon: Zap, stat: 'Same-Day Service', sub: 'Call before noon' },
  { icon: Tag, stat: 'Free Estimates', sub: 'No hidden fees' },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-surface border-y border-brand-border py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border">
          {items.map(({ icon: Icon, stat, sub }) => (
            <div
              key={stat}
              className="bg-brand-surface px-8 py-6 flex flex-col gap-1"
            >
              <Icon size={20} className="text-brand-amber mb-1" strokeWidth={1.75} />
              <p className="text-brand-white font-semibold text-sm font-body">{stat}</p>
              <p className="text-brand-muted text-xs tracking-wide uppercase font-body">
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
