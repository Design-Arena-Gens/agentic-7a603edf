"use client";

import { useState, useTransition } from "react";

export function JoinForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    startTransition(async () => {
      try {
        const response = await fetch("/api/join", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Failed to submit");
        }

        setStatus("success");
        event.currentTarget.reset();
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#050910]/90 p-8 text-sm backdrop-blur-xl"
    >
      <div className="absolute inset-0 rounded-3xl border border-[#9beae0]/15" />
      <div className="relative flex flex-col gap-3">
        <label className="text-xs uppercase tracking-[0.32em] text-white/50">Full Name</label>
        <input
          name="name"
          required
          placeholder="Alexandra V."
          className="rounded-full border border-white/10 bg-[#0b1019] px-5 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#9beae0] focus:outline-none"
        />
      </div>
      <div className="relative flex flex-col gap-3">
        <label className="text-xs uppercase tracking-[0.32em] text-white/50">Family Office Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="av@marindiacapital.com"
          className="rounded-full border border-white/10 bg-[#0b1019] px-5 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#9beae0] focus:outline-none"
        />
      </div>
      <div className="relative flex flex-col gap-3">
        <label className="text-xs uppercase tracking-[0.32em] text-white/50">Assets Under Management</label>
        <input
          name="aum"
          required
          placeholder="$180M"
          className="rounded-full border border-white/10 bg-[#0b1019] px-5 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#f6c66e] focus:outline-none"
        />
      </div>
      <div className="relative flex flex-col gap-3">
        <label className="text-xs uppercase tracking-[0.32em] text-white/50">Private Equity Commitments</label>
        <input
          name="commitments"
          required
          placeholder="$95M across 14 managers"
          className="rounded-full border border-white/10 bg-[#0b1019] px-5 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#9beae0] focus:outline-none"
        />
      </div>
      <div className="relative flex flex-col gap-3">
        <label className="text-xs uppercase tracking-[0.32em] text-white/50">Liquidity Objectives</label>
        <textarea
          name="objectives"
          rows={3}
          placeholder="Guarantee we never miss a capital call. Deploy idle cash into secured yield."
          className="rounded-2xl border border-white/10 bg-[#0b1019] px-5 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#f6c66e] focus:outline-none"
        />
      </div>
      <div className="relative">
        <button
          type="submit"
          disabled={isPending}
          className="gold-outline relative inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#1b212c] via-[#101722] to-[#070c13] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/80 transition hover:from-[#0e141d] hover:to-[#03070c] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Processing" : "Submit Founding Application"}
        </button>
      </div>
      {status === "success" && (
        <p className="relative text-center text-xs uppercase tracking-[0.3em] text-[#9beae0]">
          Application received. Concierge will schedule vault onboarding in 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="relative text-center text-xs uppercase tracking-[0.3em] text-[#f6c66e]">
          Transmission interrupted. Please retry or contact vault@accrueflow.com.
        </p>
      )}
    </form>
  );
}
