const features = [
  {
    icon: "◉",
    title: "Immersive Environments",
    description:
      "Step into realistic boardrooms, conference halls, and interview rooms built for high-fidelity practice.",
  },
  {
    icon: "◎",
    title: "AI-Powered Feedback",
    description:
      "Receive real-time analysis of tone, pacing, eye contact, and body language from our coaching AI.",
  },
  {
    icon: "⊕",
    title: "Adaptive Scenarios",
    description:
      "Dynamic simulations that respond to your performance, scaling difficulty as your skills improve.",
  },
  {
    icon: "◈",
    title: "Progress Analytics",
    description:
      "Track your growth across every session with detailed metrics and personalized improvement paths.",
  },
  {
    icon: "◇",
    title: "Live Coaching Mode",
    description:
      "Practice with a live human coach or peer inside the same virtual space for collaborative growth.",
  },
  {
    icon: "◆",
    title: "Cross-Platform",
    description:
      "Works with leading VR headsets and in your browser — train anywhere, anytime.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Serious Performers
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every feature in Revera is designed to close the gap between
            practice and real-world excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="text-3xl text-sky-400 mb-5">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
