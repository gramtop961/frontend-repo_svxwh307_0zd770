const projects = [
  {
    title: 'Aurora Analytics',
    tag: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Helios Energy',
    tag: 'CleanTech Website',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Vertex Studio',
    tag: 'Creative Agency',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1974&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Selected work</h2>
            <p className="mt-3 text-white/70">Recent projects that blend aesthetics with performance.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-black font-medium px-5 py-2.5">Work with us</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-xs text-white/60 mt-1">{p.tag}</p>
                </div>
                <span className="text-orange-400">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
