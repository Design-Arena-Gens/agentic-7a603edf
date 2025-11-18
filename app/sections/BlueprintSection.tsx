const steps = [
  {
    title: "Vault Intake",
    detail:
      "Map commitments, custodians, FX corridors, and treasury policy. AI ingests capital call history, GP cadence, and tier-1 email routing within 72 hours."
  },
  {
    title: "Neural Surveillance",
    detail:
      "Deploy multilayer detectors across GP portals, capital call notices, and legal docs. Each alert is reconciled in a secure ledger shared with your family office ops."
  },
  {
    title: "Autonomous Execution",
    detail:
      "Forecast liquidity 90 days out, ladder idle capital into bespoke repo, and trigger responses from private bankers, custodians, and FX desks automatically."
  }
];

export function BlueprintSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-12 md:px-16">
      <div className="rounded-[32px] border border-white/8 bg-[#050910]/85 p-8 sm:p-12">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-white/50">90-Second Blueprint</p>
            <h2 className="mt-4 font-suisse text-[clamp(2.1rem,3.1vw,2.8rem)] font-semibold text-white">
              Transition from reactive scramble to autonomous liquidity within 90 days.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-[#03070c]/70 p-6">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40">
                  <span>{step.title}</span>
                  <span className="gradient-text">0{index + 1}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/65">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
