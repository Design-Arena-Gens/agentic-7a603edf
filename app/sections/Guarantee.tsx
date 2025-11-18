"use client";

import { motion } from "framer-motion";

const proofPoints = [
  {
    title: "Zero Capital Call Defaults",
    body: "Executed via neural intercepts that read every LP notice the second it leaves the GP. Our AI reconciles 14 data providers and pushes instant liquidity orders.",
    stat: "0 Missed Calls",
    accent: "#9beae0"
  },
  {
    title: "$500K Hidden Yield Guarantee",
    body: "We ladder idle cash across FDIC-swept and bespoke repo markets. If we fail to create $500K in incremental yield in 12 months, you keep the platform free.",
    stat: "+$512K",
    accent: "#f6c66e"
  },
  {
    title: "90 Day Forecast Horizon",
    body: "Scenario map every capital call, distribution, and secondary opportunity ninety days forward. Move first in every liquidity event.",
    stat: "90 Days",
    accent: "#9beae0"
  }
];

export function GuaranteeSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 sm:px-12 md:px-16">
      <div className="section-grid rounded-[32px] px-8 py-14 sm:px-12">
        <div className="blur-ring" />
        <div className="relative grid gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-sm uppercase tracking-[0.32em] text-white/50"
            >
              The Accrue Flow Covenant
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 font-suisse text-[clamp(2.5rem,4vw,3.2rem)] font-semibold leading-tight text-white"
            >
              Liquidity command that performs like a Swiss vault with AI reflexes.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-base leading-relaxed text-white/65"
            >
              Founding members receive guaranteed capital call interception, predictive cash laddering, and bespoke treasury execution. Miss a call or fail to clear the $500K yield guarantee and we wire the difference, same day.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="grid gap-6"
          >
            {proofPoints.map((item) => (
              <div key={item.title} className="patterned-border relative rounded-2xl bg-[#060A11]/80 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">{item.title}</div>
                <div className="mt-4 flex items-baseline justify-between">
                  <span
                    className="text-[2.5rem] font-semibold text-white"
                    style={{ textShadow: `0 0 40px ${item.accent}40` }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">Verified</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
