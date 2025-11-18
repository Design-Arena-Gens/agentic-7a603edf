import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-12 md:px-16">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#070C14] via-[#0F1621] to-[#04070c] p-12">
        <div className="absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#f6c66e]/30 to-transparent blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-white/50">Guarantee Activated</p>
            <h2 className="mt-4 font-suisse text-[clamp(2.4rem,3.5vw,3.1rem)] font-semibold text-white">
              Secure your seat before the vault closes at 50 founding families.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Your capital deserves sovereign-grade liquidity intelligence. Accrue Flow is the only platform underwriting your capital call guarantee while manufacturing hidden yield.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link
              href="#founding-offer"
              className="gold-outline inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E252F] to-[#121821] px-7 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/80 transition hover:from-[#0e141d] hover:to-[#04070c]"
            >
              Secure Founding Membership
            </Link>
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">
              Underwriting closes once $500K yield is demonstrated per member.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
