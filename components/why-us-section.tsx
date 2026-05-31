import {
  ShieldCheck,
  Leaf,
  Users,
  RefreshCw,
  Palette,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Hygiene & Safety First",
    description:
      "FSSAI licensed central kitchen, daily audits, HACCP protocols, temperature-controlled logistics, and zero-compromise on food safety. Your team's health is non-negotiable.",
  },
  {
    icon: Leaf,
    title: "Local, Seasonal & Sustainable",
    description:
      "We source fresh produce from local mandis and farmers. Minimal plastic, responsible waste practices, and menus that celebrate West Bengal's seasonal bounty.",
  },
  {
    icon: Users,
    title: "Warm Indian Hospitality",
    description:
      "Our team is trained in genuine hospitality - not just service. Every interaction carries the legendary warmth Kolkata is known for.",
  },
  {
    icon: RefreshCw,
    title: "Tech-Enabled Operations",
    description:
      "Real-time meal tracking, feedback app, digital menu boards, and consolidated monthly reports. Modern systems for modern enterprises.",
  },
  {
    icon: Palette,
    title: "Customization at Scale",
    description:
      "From Jain & vegan options to high-protein athlete meals and regional preferences - we adapt without ever compromising on taste or quality.",
  },
  {
    icon: Handshake,
    title: "True Partnership Approach",
    description:
      "Dedicated relationship manager, quarterly business reviews, and proactive menu innovation. We grow with your organization.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-primary text-primary-foreground py-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-accent text-xs tracking-[3px] font-semibold mb-3">
            THE UR DIFFERENCE
          </div>
          <h2 className="heading-serif text-primary-foreground text-4xl md:text-5xl tracking-tighter">
            Why leading Kolkata companies choose UR Hospitality.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card bg-white/5 border border-white/10 p-8 rounded-3xl"
            >
              <div className="text-accent mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
              <p className="text-slate-300 text-[15px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
