"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export function Navbar({ onOpenQuote }: { onOpenQuote: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-x-3">
            <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center text-accent-foreground font-bold text-lg shadow-sm">
              UR
            </div>
            <div>
              <div className="font-semibold text-xl lg:text-2xl tracking-tighter text-foreground">
                UR Hospitality
              </div>
              <div className="text-[10px] text-muted-foreground -mt-1 tracking-[2px]">
                EST. 2015 - KOLKATA
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-9 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link text-muted-foreground hover:text-foreground"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link text-muted-foreground hover:text-foreground"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="nav-link text-muted-foreground hover:text-foreground"
            >
              Why UR
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="nav-link text-muted-foreground hover:text-foreground"
            >
              Clients
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-x-3">
            <Link
              href="tel:+919830715557"
              className="flex items-center gap-x-2 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98307 15557</span>
            </Link>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-primary hover:bg-primary/90 active:bg-primary transition-all text-primary-foreground text-sm font-semibold rounded-2xl flex items-center gap-x-2 shadow-lg shadow-primary/20"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-2xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-card px-6 py-6">
          <div className="flex flex-col gap-y-4 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-muted-foreground text-left"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="py-2 text-muted-foreground text-left"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="py-2 text-muted-foreground text-left"
            >
              The UR Difference
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="py-2 text-muted-foreground text-left"
            >
              Trusted By
            </button>

            <div className="pt-4 border-t flex flex-col gap-y-3">
              <Link
                href="tel:+919830715557"
                className="flex items-center justify-center gap-x-2 py-3 text-muted-foreground border border-border rounded-2xl"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Us</span>
              </Link>
              <button
                onClick={() => {
                  onOpenQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-2xl flex items-center justify-center gap-x-2"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
