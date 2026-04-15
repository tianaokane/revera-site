export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sky-500/5 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 text-sky-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
          Prototype in Progress
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Train Like It{"'"}s <span className="gradient-text">Real.</span>
          <br />
          Perform Like It Matters.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Revera is an immersive communication training platform in development,
          designed to help people practise interviews, presentations, and other
          high-pressure conversations in realistic simulated environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5">
            Join Waitlist
          </button>
          <button className="card-glass text-white font-medium px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5">
            See the Concept
          </button>
        </div>

        <p className="text-slate-500 text-sm mt-6">
          Starting with interviews, presentations, and real-world communication
          practice
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
