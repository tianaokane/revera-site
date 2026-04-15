const useCases = [
  {
    label: "Job Interviews",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Practise common interview scenarios, manage nerves, and build confidence before the real thing.",
  },
  {
    label: "Public Speaking",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Rehearse presentations in a more realistic setting and get more comfortable speaking under pressure.",
  },
  {
    label: "Difficult Conversations",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Prepare for challenging conversations where confidence, clarity, and composure matter.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for the Moments That Matter
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Revera starts with communication training for interviews,
            presentations, and other high-pressure speaking scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.label}
              className="group relative rounded-2xl overflow-hidden cursor-default"
            >
              <img
                src={useCase.image}
                alt={useCase.label}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2 block">
                  {useCase.label}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
