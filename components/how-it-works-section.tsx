const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We understand your team size, dietary needs, budget, and workplace culture.",
  },
  {
    number: "02",
    title: "Custom Menu & Tasting",
    description:
      "Our chefs create tailored options. You and your team taste and refine.",
  },
  {
    number: "03",
    title: "Seamless Launch",
    description:
      "We handle everything - logistics, staffing, tech setup, and day-one execution.",
  },
  {
    number: "04",
    title: "Continuous Excellence",
    description:
      "Weekly feedback, monthly reviews, and ongoing menu innovation together.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-20 border-b">
      <div className="text-center mb-12">
        <div className="uppercase tracking-[3px] text-xs font-semibold text-accent mb-2">
          SEAMLESS ONBOARDING
        </div>
        <h2 className="heading-serif text-4xl md:text-5xl tracking-tighter text-foreground">
          Getting started is simple.
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 relative">
        {steps.map((step) => (
          <div key={step.number} className="text-center relative">
            <div className="step-number mx-auto w-14 h-14 flex items-center justify-center rounded-full text-xl font-semibold mb-5 shadow-lg">
              {step.number}
            </div>
            <h4 className="font-semibold mb-2 text-foreground">{step.title}</h4>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
