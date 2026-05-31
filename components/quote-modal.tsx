"use client";

import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    companyName: "",
    email: "",
    phone: "",
    meals: "",
    serviceType: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with a form service
    console.log("[v0] Quote form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        fullName: "",
        designation: "",
        companyName: "",
        email: "",
        phone: "",
        meals: "",
        serviceType: "",
        requirements: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-card w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="px-8 pt-7 pb-5 border-b flex items-center justify-between">
            <div>
              <div className="font-semibold text-2xl tracking-tight text-foreground">
                Let&apos;s discuss your needs
              </div>
              <div className="text-sm text-muted-foreground">
                We&apos;ll get back to you within 4 business hours
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-3xl leading-none text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-foreground">
                Thank you! Request received.
              </h3>
              <p className="text-muted-foreground">
                Our team will contact you within 4 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-medium tracking-wider text-muted-foreground mb-1.5"
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-border focus:border-accent bg-background text-foreground px-4 py-3 text-sm rounded-2xl outline-none transition-colors"
                    placeholder="Rahul Sharma"
                  />
                </div>
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-xs font-medium tracking-wider text-muted-foreground mb-1.5"
                  >
                    DESIGNATION
                  </label>
                  <input
                    type="text"
                    id="designation"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full border border-border focus:border-accent bg-background text-foreground px-4 py-3 text-sm rounded-2xl outline-none transition-colors"
                    placeholder="HR Manager / Admin Head"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-xs font-medium tracking-wider text-muted-foreground mb-1.5"
                >
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  id="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border border-border focus:border-accent bg-background text-foreground px-4 py-3 text-sm rounded-2xl outline-none transition-colors"
                  placeholder="Acme Technologies Pvt Ltd"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium tracking-wider text-muted-foreground mb-1.5"
                  >
                    WORK EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-border focus:border-accent bg-background text-foreground px-4 py-3 text-sm rounded-2xl outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium tracking-wider text-muted-foreground mb-1.5"
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-border focus:border-accent bg-background text-foreground px-4 py-3 text-sm rounded-2xl outline-none transition-colors"
                    placeholder="+91 98XXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="meals"
                    className="block text-xs font-medium tracking-wider text-muted-foreground mb-1.5"
                  >
                    APPROX. DAILY MEALS
                  </label>
                  <select
                    id="meals"
                    required
                    value={formData.meals}
                    onChange={handleChange}
                    className="w-full border border-border focus:border-accent bg-background text-foreground px-4 py-3 text-sm rounded-2xl outline-none transition-colors"
                  >
                    <option value="">Select range</option>
                    <option value="50-100">50 - 100 meals/day</option>
                    <option value="100-250">100 - 250 meals/day</option>
                    <option value="250-500">250 - 500 meals/day</option>
                    <option value="500-1000">500 - 1000 meals/day</option>
                    <option value="1000+">1000+ meals/day</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-xs font-medium tracking-wider text-muted-foreground mb-1.5"
                  >
                    SERVICE TYPE
                  </label>
                  <select
                    id="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full border border-border focus:border-accent bg-background text-foreground px-4 py-3 text-sm rounded-2xl outline-none transition-colors"
                  >
                    <option value="">Select primary need</option>
                    <option value="Daily Cafeteria">
                      Daily Corporate Cafeteria
                    </option>
                    <option value="Events Only">
                      Events &amp; Conferences Only
                    </option>
                    <option value="Both">Both Cafeteria + Events</option>
                    <option value="Wellness Program">
                      Wellness / Nutrition Program
                    </option>
                    <option value="Pantry">Pantry &amp; Micro Kitchen</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="block text-xs font-medium tracking-wider text-muted-foreground mb-1.5"
                >
                  ANY SPECIFIC REQUIREMENTS?
                </label>
                <textarea
                  id="requirements"
                  rows={3}
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full border border-border focus:border-accent bg-background text-foreground px-4 py-3 text-sm rounded-2xl outline-none transition-colors resize-y"
                  placeholder="E.g., High protein focus, regional Bengali options, Jain menu, live counters for events..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-[17px] bg-primary hover:bg-primary/90 active:bg-primary transition-colors text-primary-foreground font-semibold rounded-2xl flex items-center justify-center gap-x-2 text-base"
              >
                Submit Request <Send className="w-4 h-4 ml-1" />
              </button>

              <p className="text-[10px] text-center text-muted-foreground">
                We respect your time. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
