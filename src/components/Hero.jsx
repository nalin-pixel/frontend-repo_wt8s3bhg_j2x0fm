import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 brand-gradient" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-indigo-100">AI Nutrition Therapist</div>
        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]">NutriTailor AI</h1>
        <p className="mt-4 text-lg md:text-xl text-indigo-100/90">Personalized guidance, meal plans, and products for your goals.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#chat" className="btn-primary">Start chatting</a>
          <a href="#pricing" className="btn-secondary">See pricing</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950"></div>
    </section>
  );
}
