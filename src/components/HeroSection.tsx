const HeroSection = () => (
  <section className="gradient-hero relative overflow-hidden py-10 px-5 text-center w-full rounded-b-[30px] shadow-lg">
    <div className="absolute w-[360px] h-[360px] rounded-full bg-azure/20 blur-[70px] -top-20 -right-16 pointer-events-none" />
    <div className="absolute w-[280px] h-[280px] rounded-full bg-navy/40 blur-[70px] -bottom-12 -left-10 pointer-events-none" />
    <div className="max-w-[1000px] mx-auto relative z-10">
      <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.18] text-blue-200 text-[0.7rem] font-bold tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,0.3)]" />
        Simulation gratuite
      </div>
      <h1 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-bold text-primary-foreground leading-[1.1] mb-2">
        Calculateur de prime <em className="italic bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">d'assurance</em>
      </h1>
      <p className="text-blue-200/80 text-sm max-w-[500px] mx-auto mb-5 leading-relaxed">
        9 produits · estimation personnalisée en 30 secondes
      </p>
      <div className="flex justify-center gap-2 flex-wrap">
        {[
          { value: "9", label: "Produits" },
          { value: "30s", label: "Estimation" },
          { value: "100%", label: "Confidentiel" },
          { value: "0 MAD", label: "Gratuit" },
        ].map((s, i) => (
          <div key={i} className="text-center px-5 border-r border-white/[0.12] last:border-r-0">
            <strong className="block font-display text-3xl font-bold text-primary-foreground leading-none">{s.value}</strong>
            <span className="text-[0.7rem] text-blue-300/70 tracking-[0.08em] uppercase">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
