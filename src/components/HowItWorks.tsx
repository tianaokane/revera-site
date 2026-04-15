const steps = [
  {
    number: "01",
    title: "Choose Your Scenario",
    description:
      "Select from a library of job interviews, presentations, sales pitches, and more — or build a custom scenario.",
  },
  {
    number: "02",
    title: "Enter the Environment",
    description:
      "Put on your VR headset or open the browser experience. You're placed in a photorealistic setting with virtual participants.",
  },
  {
    number: "03",
    title: "Practice & Perform",
    description:
      "Engage with AI-driven characters who respond naturally to what you say. Every session feels authentic.",
  },
  {
    number: "04",
    title: "Review & Improve",
    description:
      "After each session, review detailed AI feedback on your performance and track your progress over time.",
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
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From setup to breakthrough — four steps to communication mastery.
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
