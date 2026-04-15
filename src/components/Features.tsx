const features = [
  {
    icon: "◉",
    title: "Immersive Practice Spaces",
    description:
      "Step into realistic interview rooms, presentation spaces, and conversation scenarios designed for focused practice.",
  },
  {
    icon: "◎",
    title: "Structured Feedback",
    description:
      "Review key parts of your performance, from clarity and confidence to pacing, response quality, and delivery.",
  },
  {
    icon: "⊕",
    title: "Adjustable Scenarios",
    description:
      "Practise with different levels of pressure, difficulty, and social context to build confidence gradually.",
  },
  {
    icon: "◈",
    title: "Progress Tracking",
    description:
      "Improve over time through repeat sessions, reflection, and visible development across the skills you want to strengthen.",
  },
  {
    icon: "◇",
    title: "Guided Practice",
    description:
      "Designed to support solo rehearsal, peer feedback, or coached sessions depending on the setting and use case.",
  },
  {
    icon: "◆",
    title: "Flexible Access",
    description:
      "Built with VR in mind, with scope for lightweight browser-based experiences during early development and testing.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Designed for Real-World Practice
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Revera is being designed to make communication practice more
            immersive, structured, and repeatable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="text-3xl text-sky-400 mb-5">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
