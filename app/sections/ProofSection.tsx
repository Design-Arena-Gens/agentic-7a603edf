"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    label: "Capital Call Intercepts",
    value: "1,284",
    context: "Caught before funds left custody",
    delta: "+12.6%",
    tone: "#9beae0"
  },
  {
    label: "Treasury Yield Delta",
    value: "$518K",
    context: "12-month uplift vs. baseline",
    delta: "+3.9%",
    tone: "#f6c66e"
  },
  {
    label: "Secondary Opportunities Surfaced",
    value: "47",
    context: "Executed inside 18 hours",
    delta: "91% fill",
    tone: "#9beae0"
  }
];

const validations = [
  {
    firm: "Geneva Sovereign Family Office",
    quote:
      "We delegated every capital call monitor to Accrue Flow. Zero misses, tighter FX execution, and we now reinvest distributions within hours.",
    title: "Chief Investment Officer"
  },
  {
    firm: "Baltic Meridian Partners",
    quote:
      "Their AI saw a $14M drawdown five days early. We rebalanced fixed income in minutes and captured 5.4% yield on the idle cash while we waited.",
    title: "Managing Partner"
  }
];

export function ProofSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-12 md:px-16">
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-[28px] border border-white/8 bg-[#050910]/80 p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.32em] text-white/50">Quantitative Proof</p>
          <h2 className="mt-4 font-suisse text-[clamp(2.1rem,3.3vw,2.9rem)] font-semibold text-white">
            The liquidity desk trusted by principals managing $9.6B in private equity exposure.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl border border-white/10 bg-[#03070c]/80 p-5"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">{metric.label}</p>
                <p
                  className="mt-3 text-[2.3rem] font-semibold text-white"
                  style={{ textShadow: `0 0 24px ${metric.tone}55` }}
                >
                  {metric.value}
                </p>
                <p className="text-xs uppercase tracking-[0.26em] text-white/40">{metric.context}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  {metric.delta}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {validations.map((validation) => (
            <motion.blockquote
              key={validation.firm}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7 }}
              className="patterned-border relative grow rounded-[24px] bg-[#060a11]/80 p-8"
            >
              <p className="text-sm leading-relaxed text-white/70">“{validation.quote}”</p>
              <footer className="mt-6 text-xs uppercase tracking-[0.32em] text-white/40">
                {validation.firm} · {validation.title}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
