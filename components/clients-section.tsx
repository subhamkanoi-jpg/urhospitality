import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    rating: 4.5,
    quote:
      "UR transformed our office lunch experience. Our employees actually look forward to cafeteria time now. The Bengali fusion thalis and the consistent quality have been game-changers for team morale.",
    name: "Priya Menon",
    title: "Head of People Operations",
    company: "Tech Mahindra (Kolkata GCC)",
    image: "https://picsum.photos/id/1005/44/44",
  },
  {
    rating: 5,
    quote:
      "For our annual leadership offsite and monthly town halls, UR has been flawless. Their attention to detail, beautiful presentation, and ability to handle last-minute dietary requests is unmatched in Kolkata.",
    name: "Arjun Basu",
    title: "Director - Administration",
    company: "HSBC Kolkata",
    image: "https://picsum.photos/id/1012/44/44",
  },
  {
    rating: 5,
    quote:
      "As a manufacturing unit with 800+ workers, finding reliable, hygienic, and tasty daily meals was a constant challenge. UR has delivered consistently for 14 months with zero food safety issues. Highly recommended.",
    name: "Sanjay Agarwal",
    title: "Plant HR Head",
    company: "A leading auto-component manufacturer, Howrah",
    image: "https://picsum.photos/id/1006/44/44",
  },
];

const industries = [
  "Leading IT/ITES",
  "BFSI & NBFCs",
  "Manufacturing",
  "Pharma & Healthcare",
  "Co-working Spaces",
  "Consulting Firms",
];

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-x-1 text-amber-400 mb-4">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 fill-current" />}
    </div>
  );
}

export function ClientsSection() {
  return (
    <section id="clients" className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-y-12">
        {/* Left: Trusted By */}
        <div className="lg:w-5/12">
          <div className="lg:sticky lg:top-24">
            <div className="uppercase tracking-[3px] text-xs font-semibold text-accent mb-3">
              TRUSTED BY
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl tracking-tighter leading-none mb-6 text-foreground">
              Kolkata&apos;s most
              <br />
              ambitious teams.
            </h2>
            <p className="text-muted-foreground max-w-sm">
              From fast-growing startups in New Town to legacy manufacturing
              houses and global capability centers in Sector V.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 opacity-80">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="text-xs font-medium px-4 py-3 bg-card border rounded-2xl text-center"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Testimonials */}
        <div className="lg:w-7/12">
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-card border border-border p-8 rounded-3xl premium-shadow"
              >
                <RatingStars rating={testimonial.rating} />
                <blockquote className="text-lg leading-tight text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-x-3">
                  <Image
                    src={testimonial.image}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover"
                    alt={testimonial.name}
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.title},{" "}
                      <span className="font-medium">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
