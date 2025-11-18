"use client";

import { motion } from "framer-motion";

const modules = [
  {
    label: "Capital Call Radar",
    headline: "Neural parsing on every LP notice",
    bullets: [
      "OCR + protocol decoding across PDF, portal, and email streams within 90 seconds",
      "Confidence-weighted intercepts flag anomalies before execution",
      "Auto-initiates sweep instructions through your custody stack"
    ]
  },
  {
    label: "Liquidity Autopilot",
    headline: "Treasury ladder optimized in real time",
    bullets: [
      "Routes idle cash into bespoke term ladders modeled on your draw schedules",
      "Integrates with custodians and private banks to settle FX and repo instantly",
      "Backtests every allocation against your private equity waterfall"
    ]
  },
  {
    label: "Signal Room",
    headline: "Unified view of capital pressure",
    bullets: [
      "Three horizon dashboards: 72 hours, 30 days, 90 days",
      "Mark-to-market on secondaries, distributions, and recycling clauses",
      "Executive-grade memos generated for family office teams"
    ]
  }
];

export function ControlSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-12 md:px-16">
      <div className="rounded-[32px] border border-white/8 bg-[#060a11]/80 p-8 sm:p-12">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-white/50">Command Modules</p>
            <h2 className="mt-4 font-suisse text-[clamp(2.2rem,3.5vw,3rem)] font-semibold text-white">
              One cockpit. Every capital call, liquidity flow, and tactical yield decision.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Configured for principals managing $50M-$500M in commitments. Accrue Flow fuses AI detection with treasury-grade execution so you operate like a sovereign fund without the headcount.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {modules.map((module, index) => (
            <motion.article
              key={module.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className="relative flex flex-col gap-6 rounded-3xl border border-white/8 bg-[#050910]/70 p-6"
            >
              <span className="text-xs uppercase tracking-[0.32em] text-[#9beae0]/80">{module.label}</span>
              <h3 className="text-xl font-semibold text-white">{module.headline}</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-white/60">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#f6c66e] to-[#9beae0]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
