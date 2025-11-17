import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-orange-500/90 text-xs mb-4">fortitudo group</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Bold web experiences that convert.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We craft high-performance websites with motion, clarity, and measurable impact. From concept to launch, we bring your brand to life online.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-black font-medium px-6 py-3 transition-colors">
              Start your project
            </a>
            <a href="#work" className="inline-flex items-center rounded-full border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3 transition-colors">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
