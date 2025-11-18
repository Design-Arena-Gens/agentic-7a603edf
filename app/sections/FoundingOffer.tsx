import { JoinForm } from "../components/JoinForm";

const inclusions = [
  "Dedicated liquidity strategist with sovereign desk pedigree",
  "Capital call monitoring across every GP portal and custodian",
  "Guaranteed $500K+ incremental yield or the platform is free",
  "White-glove integration across trust, bank, and brokerage infrastructure",
  "Scenario planning for secondaries, co-invest, and recycling plays"
];

export function FoundingOffer() {
  return (
    <section id="founding-offer" className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-12 md:px-16">
      <div className="rounded-[32px] border border-white/8 bg-[#04070c]/90 p-8 sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-white/50">Founding Member Program</p>
              <h2 className="mt-4 font-suisse text-[clamp(2.4rem,3.6vw,3rem)] font-semibold text-white">
                $15,000 annual charter, capped at 50 families globally.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              We work with principals who steward $20M+ in net worth and demand absolute precision across private equity liquidity. Founding members secure lifetime charter pricing, bespoke onboarding, and direct line to our treasury command center.
            </p>
            <ul className="grid gap-3 text-sm text-white/65">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#f6c66e] to-[#9beae0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-3xl border border-[#f6c66e]/20 bg-[#080d15]/80 p-6 text-sm text-[#f6c66e]">
              <p className="uppercase tracking-[0.32em]">Guarantee Covenant</p>
              <p className="mt-3 text-white/80">
                Miss a capital call or fail to generate $500K in incremental yield within year one? We wire the shortfall within 48 hours. That is the Swiss-grade covenant Accrue Flow extends to every founding member.
              </p>
            </div>
          </div>
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
