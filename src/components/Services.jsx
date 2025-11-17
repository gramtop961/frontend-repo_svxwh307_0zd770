import { Rocket, Sparkles, Palette, Gauge } from 'lucide-react'

const services = [
  {
    title: 'Web Design',
    desc: 'Clean, modern interfaces focused on clarity and conversion.',
    icon: Palette,
  },
  {
    title: 'Web Development',
    desc: 'Robust, scalable builds with performance baked in from the start.',
    icon: Rocket,
  },
  {
    title: 'Motion & Interaction',
    desc: 'Subtle, purposeful animations that elevate user experience.',
    icon: Sparkles,
  },
  {
    title: 'Optimization',
    desc: 'Speed audits, SEO, and UX improvements that move metrics.',
    icon: Gauge,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Services</h2>
          <p className="mt-3 text-white/70">Everything you need to launch a standout digital presence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6">
              <div className="h-10 w-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-medium text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
