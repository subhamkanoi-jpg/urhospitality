import { MapPin, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="max-w-screen-2xl mx-auto px-6 lg:px-8 pt-20 pb-16">
      <div className="grid md:grid-cols-12 gap-x-12 items-center">
        <div className="md:col-span-7">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-accent mb-3">
            OUR STORY
          </div>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter text-balance leading-none mb-8 text-foreground">
            From Kolkata&apos;s
            <br /> kitchens to
            <br /> your boardroom.
          </h2>

          <div className="prose prose-slate max-w-xl text-[15px] text-muted-foreground">
            <p className="mb-5">
              UR Hospitality was born from a simple belief: the meals we serve
              at work should be as nourishing, joyful, and memorable as the ones
              we share at home.
            </p>
            <p>
              Headquartered in the heart of Kolkata, we bring together the
              city&apos;s legendary warmth and culinary depth with world-class
              hygiene standards, modern nutrition science, and seamless
              operational excellence.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-x-2 text-sm bg-card border border-border px-4 h-10 rounded-2xl">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-medium">Salt Lake, Kolkata</span>
            </div>
            <div className="inline-flex items-center gap-x-2 text-sm bg-card border border-border px-4 h-10 rounded-2xl">
              <Users className="w-4 h-4 text-accent" />
              <span className="font-medium">70+ Corporate Partners</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 mt-10 md:mt-0">
          <div className="bg-card border border-border p-8 rounded-3xl premium-shadow">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
                  2015
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Founded in Kolkata
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
                  5,00,000+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Meals served to date
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
                  98.7%
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Client retention rate
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
                  4.9/5
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Average satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
