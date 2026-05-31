import {
  Building2,
  CalendarCheck,
  HeartPulse,
  Utensils,
  Truck,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Cafeteria Management",
    description:
      "End-to-end daily meal solutions for offices, IT parks, and manufacturing units. Fresh menus daily, nutrition-balanced options, and zero operational hassle for your admin team.",
    tag: "Ideal for 100-2000+ employees",
  },
  {
    icon: CalendarCheck,
    title: "Corporate Events & Conferences",
    description:
      "Impeccable catering for board meetings, product launches, annual days, training programs, and client events. Themed menus, live counters, and white-glove service.",
    tag: "From 25 to 2000+ guests",
  },
  {
    icon: HeartPulse,
    title: "Wellness & Nutrition Programs",
    description:
      "Collaborate with your HR & wellness teams. Calorie-conscious, protein-rich, diabetic-friendly, and gut-health menus. Monthly nutrition reports and employee feedback loops.",
    tag: "Data-driven & personalized",
  },
  {
    icon: Utensils,
    title: "Themed & Festive Experiences",
    description:
      "Celebrate Indian festivals and regional flavours at work - Durga Puja special thalis, regional cuisine weeks, Diwali sweets counters, and Republic Day fusion menus.",
    tag: "Authentic & memorable",
  },
  {
    icon: Truck,
    title: "Pantry & Micro-Kitchen Solutions",
    description:
      "Daily stocked healthy snacks, beverages, fresh fruits, and grab-and-go breakfast/lunch options. Perfect for hybrid offices and co-working spaces.",
    tag: "Flexible subscription model",
  },
  {
    icon: Globe,
    title: "Multi-Location & Enterprise Solutions",
    description:
      "Seamless catering across multiple offices and sites in Kolkata and West Bengal. Centralized menu control, consistent quality, and consolidated billing & reporting.",
    tag: "Scalable for enterprise",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-card py-16 border-y">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs font-semibold text-accent mb-2">
              WHAT WE OFFER
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl tracking-tighter text-foreground">
              Services tailored for
              <br />
              modern workplaces.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground mt-4 md:mt-0 md:text-right">
            From daily cafeteria operations to high-stakes corporate events - we
            handle every detail with precision and warmth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group bg-card border border-border p-8 rounded-3xl hover:border-accent/30"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-2xl mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl md:text-2xl tracking-tight mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>
              <div className="text-xs uppercase tracking-wider font-medium text-accent flex items-center gap-x-1.5">
                {service.tag} <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
