export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 brand-gradient opacity-70" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">About NutriTailor</h2>
          <p className="mt-4 text-slate-300">We blend evidence-based nutrition with an AI agent that learns your preferences, goals, and constraints. Get practical advice, smart shopping lists, and adaptive plans that fit real life.</p>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li>• Personalized recommendations grounded in nutrition science</li>
            <li>• Flexible meal planning with swaps and budget awareness</li>
            <li>• Integrates with coaching and curated digital products</li>
          </ul>
        </div>
        <div className="rounded-2xl glass p-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-2xl font-extrabold text-white">7k+</div>
              <div className="text-slate-300 text-sm">Meals generated</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-2xl font-extrabold text-white">98%</div>
              <div className="text-slate-300 text-sm">User satisfaction</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-2xl font-extrabold text-white">24/7</div>
              <div className="text-slate-300 text-sm">AI availability</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50">
              <div className="text-2xl font-extrabold text-white">100%</div>
              <div className="text-slate-300 text-sm">Tailored to you</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
