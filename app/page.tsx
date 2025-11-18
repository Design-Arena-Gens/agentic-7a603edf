import { Hero } from "./components/Hero";
import { GuaranteeSection } from "./sections/Guarantee";
import { ControlSection } from "./sections/ControlSection";
import { ProofSection } from "./sections/ProofSection";
import { BlueprintSection } from "./sections/BlueprintSection";
import { FoundingOffer } from "./sections/FoundingOffer";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#04070c]">
      <Hero />
      <GuaranteeSection />
      <ControlSection />
      <ProofSection />
      <BlueprintSection />
      <FoundingOffer />
      <FinalCTA />
      <Footer />
    </main>
  );
}
