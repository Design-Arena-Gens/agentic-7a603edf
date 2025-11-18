"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NetworkCanvas } from "./NetworkCanvas";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(155,234,224,0.12),_rgba(4,7,12,0))]">
      <div className="absolute inset-0">
        <NetworkCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070c]/40 via-[#04070c]/65 to-[#04070c]" />
      </div>

      <div className="relative flex min-h-screen flex-col px-6 pb-24 pt-28 sm:px-12 md:px-16 lg:px-24">
        <header className="flex items-center justify-between text-sm tracking-[0.32em] uppercase text-white/60">
          <span>Accrue Flow</span>
          <span className="hidden sm:block">Ultra Private Preview</span>
        </header>

        <div className="mt-20 flex flex-1 flex-col gap-10 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/60 backdrop-blur">
              <span>Founding Member Charter</span>
            </div>

            <h1 className="mt-8 font-suisse text-[clamp(3.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-white">
              Your Private Equity Cash Flow. <span className="gradient-text">Visualized.</span> Guaranteed.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              AI that watches your capital calls 24/7. Forecasts liquidity 90 days in advance. Guarantees zero defaults while unlocking hidden yield across every commitment.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="#founding-offer"
                className="gold-outline relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E252F] to-[#121821] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/90 transition hover:from-[#0E141B] hover:to-[#04070c]"
              >
                Secure Founding Membership
              </Link>

              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.32em] text-white/50">
                <span>Guarantee</span>
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span>$500K+ Hidden Yield</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
            className="relative mt-20 flex w-full max-w-xl flex-col gap-6 rounded-2xl border border-white/10 bg-white/5/10 p-8 backdrop-blur-xl lg:mt-0"
          >
            <div className="absolute inset-0 rounded-2xl border border-[#f6c66e30] opacity-50 blur-sm" />
            <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40">
              <span>Vault Status</span>
              <span>AI WATCH</span>
            </div>
            <div className="relative grid gap-6 text-sm text-white/80">
              <div className="rounded-xl border border-white/10 bg-[#0A0F16]/70 p-4 shadow-glow">
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">Capital Calls</p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-semibold text-white">0 Defaults</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#9beae0]/80">Guaranteed Coverage</p>
                  </div>
                  <div className="text-right text-xs text-white/50">
                    <p>90 Day Forecast</p>
                    <p className="text-[#f6c66e]">+ $540K Yield</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0A1018]/70 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">Liquidity Window</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-white">$12.4M</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#9beae0]/80">Ready Capital</p>
                  </div>
                  <div className="text-right text-xs text-white/60">
                    <p>Optimal Yield Ladder</p>
                    <p className="text-[#f6c66e]">3.7% → 5.2%</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#080E15]/70 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">Alert Precision</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-white">99.2%</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#9beae0]/80">Signal Certainty</p>
                  </div>
                  <div className="text-right text-xs text-white/50">
                    <p>Capital Call Intercept</p>
                    <p className="text-[#f6c66e]">12 hrs Ahead</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="scroll-trace mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.32em] text-white/40">
          <span>Scroll To Validate The Guarantee</span>
        </div>
      </div>
    </section>
  );
}
