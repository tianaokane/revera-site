const steps = [
  {
    number: "01",
    title: "Choose a scenario",
    description:
      "Start with communication challenges such as interviews, presentations, and other high-pressure speaking situations.",
  },
  {
    number: "02",
    title: "Enter the environment",
    description:
      "Step into an immersive practice space designed to simulate pressure more realistically than traditional rehearsal.",
  },
  {
    number: "03",
    title: "Practise and reflect",
    description:
      "Work through the scenario, test your responses, and build confidence through repetition and structured practice.",
  },
  {
    number: "04",
    title: "Improve over time",
    description:
      "Use feedback, self-review, and repeated sessions to strengthen performance where it matters most.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Revera Works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Revera is being designed to make communication practice more
            immersive, repeatable, and useful.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-6 mx-auto">
                  <span className="text-sky-400 font-bold text-sm font-mono">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
