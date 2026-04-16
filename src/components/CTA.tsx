export default function CTA() {
  return (
    <section id="cta" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl overflow-hidden card-glass p-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Shape Revera Early
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join the waitlist to follow development, see early builds, and
              register your interest in testing the platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-10 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5">
                Join Waitlist
              </button>
            </div>

            <p className="text-slate-500 text-sm mt-5">
              Early concept website for an in-development product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
