export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Simple pricing</h2>
        <p className="mt-3 text-slate-300 text-center">Start free. Upgrade when you need more.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl glass p-6">
            <h3 className="text-white font-semibold text-lg">Starter</h3>
            <p className="text-slate-300 mt-2">Chat access + basic tips</p>
            <div className="mt-4 text-3xl font-extrabold text-white">$0</div>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>• 20 chat messages/day</li>
              <li>• Quick meal ideas</li>
              <li>• Macro guidance</li>
            </ul>
            <button className="mt-6 w-full btn-secondary">Get started</button>
          </div>
          <div className="rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-indigo-600/30 to-indigo-400/10 p-6">
            <h3 className="text-white font-semibold text-lg">Pro</h3>
            <p className="text-slate-200 mt-2">Tailored plans + shopping lists</p>
            <div className="mt-4 text-3xl font-extrabold text-white">$19</div>
            <ul className="mt-4 space-y-2 text-slate-100 text-sm">
              <li>• Unlimited chat</li>
              <li>• Weekly meal plans</li>
              <li>• Grocery list optimizer</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">Upgrade</button>
          </div>
          <div className="rounded-2xl glass p-6">
            <h3 className="text-white font-semibold text-lg">Coach</h3>
            <p className="text-slate-300 mt-2">1:1 coaching + AI guidance</p>
            <div className="mt-4 text-3xl font-extrabold text-white">$79</div>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>• Monthly 60-min session</li>
              <li>• Tailored strategy</li>
              <li>• Priority support</li>
            </ul>
            <button className="mt-6 w-full btn-secondary">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
