export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-24 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Let’s build something bold</h2>
        <p className="mt-4 text-white/70">Tell us about your goals and we’ll come back with a clear plan, timeline, and budget.</p>
        <form className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          <input type="text" placeholder="Your name" className="rounded-lg bg-white/5 border border-white/10 focus:border-orange-500/60 focus:outline-none px-4 py-3 text-sm placeholder:text-white/50" />
          <input type="email" placeholder="Email address" className="rounded-lg bg-white/5 border border-white/10 focus:border-orange-500/60 focus:outline-none px-4 py-3 text-sm placeholder:text-white/50" />
          <input type="text" placeholder="Company" className="rounded-lg bg-white/5 border border-white/10 focus:border-orange-500/60 focus:outline-none px-4 py-3 text-sm placeholder:text-white/50 sm:col-span-2" />
          <textarea placeholder="Tell us about the project" rows={4} className="rounded-lg bg-white/5 border border-white/10 focus:border-orange-500/60 focus:outline-none px-4 py-3 text-sm placeholder:text-white/50 sm:col-span-2" />
          <div className="sm:col-span-2">
            <button type="button" className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-black font-medium px-6 py-3">
              Request proposal
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
