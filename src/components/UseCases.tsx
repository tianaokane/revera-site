const useCases = [
  {
    label: "Job Interviews",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Walk into your next interview having already faced it a hundred times. Practice responses, manage nerves, and nail your delivery.",
  },
  {
    label: "Public Speaking",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Fill a virtual auditorium and present your ideas with confidence. Overcome stage fright before it ever becomes an issue.",
  },
  {
    label: "Sales & Pitching",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Rehearse your pitch in realistic client environments. Sharpen your persuasion and objection-handling in a safe space.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Scenarios. Real Outcomes.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Revera trains you for the moments that define your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((uc) => (
            <div
              key={uc.label}
              className="group relative rounded-2xl overflow-hidden cursor-default"
            >
              <img
                src={uc.image}
                alt={uc.label}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2 block">
                  {uc.label}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {uc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
