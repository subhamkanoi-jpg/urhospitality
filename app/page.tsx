"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustBar } from "@/components/trust-bar";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ClientsSection } from "@/components/clients-section";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { QuoteModal } from "@/components/quote-modal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <>
      <Navbar onOpenQuote={openQuoteModal} />
      <main>
        <HeroSection onOpenQuote={openQuoteModal} />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <HowItWorksSection />
        <ClientsSection />
        <CTABanner onOpenQuote={openQuoteModal} />
      </main>
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
}
