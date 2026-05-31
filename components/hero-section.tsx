import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export function HeroSection({ onOpenQuote }: { onOpenQuote: () => void }) {
  const scrollToWhyUs = () => {
    const element = document.getElementById("why-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="catering-hero text-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-12 gap-x-8 items-center">
          <div className="md:col-span-7 lg:col-span-7 max-w-2xl">
            <div className="inline-flex items-center gap-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs tracking-[1.5px] font-medium uppercase">
                Now serving Kolkata&apos;s leading corporates
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter font-semibold mb-6 text-balance">
              Corporate dining,
              <br />
              <span className="text-orange-400">reimagined.</span>
            </h1>

            <p className="max-w-lg text-lg md:text-xl text-slate-300 mb-9 leading-relaxed">
              Premium corporate catering rooted in Kolkata&apos;s rich culinary
              heritage. Thoughtfully crafted meals that energize teams and
              elevate every workplace experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenQuote}
                className="group px-8 py-4 bg-white text-slate-900 hover:bg-orange-50 active:bg-white font-semibold text-base rounded-3xl flex items-center justify-center gap-x-3 transition-all shadow-xl shadow-black/10 hover:shadow-2xl"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4 group-active:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToWhyUs}
                className="px-8 py-4 border border-white/30 hover:bg-white/10 font-medium rounded-3xl flex items-center justify-center gap-x-2 transition-all text-base backdrop-blur"
              >
                <Play className="w-4 h-4" />
                <span>Watch our story (1:42)</span>
              </button>
            </div>

            <div className="flex items-center gap-x-8 mt-10 text-sm">
              <div className="flex -space-x-2">
                <Image
                  src="https://picsum.photos/id/1005/32/32"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full ring-2 ring-white/80 object-cover"
                  alt="Client testimonial"
                />
                <Image
                  src="https://picsum.photos/id/1011/32/32"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full ring-2 ring-white/80 object-cover"
                  alt="Client testimonial"
                />
                <Image
                  src="https://picsum.photos/id/1009/32/32"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full ring-2 ring-white/80 object-cover"
                  alt="Client testimonial"
                />
              </div>
              <div className="text-slate-300 text-sm">
                Trusted by{" "}
                <span className="font-semibold text-white">70+</span> corporate
                clients
              </div>
            </div>
          </div>

          {/* Hero visual accent */}
          <div className="hidden lg:block md:col-span-5 mt-10 md:mt-0">
            <div className="relative">
              <div className="aspect-[4/3] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  alt="Modern corporate cafeteria buffet setup at UR Hospitality with stainless steel counters, live serving, and professional catering for office teams in Kolkata"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-x-3 border">
                <div>
                  <div className="text-emerald-600 text-xs font-semibold tracking-wider">
                    LIVE TODAY
                  </div>
                  <div className="font-semibold">Fresh meals served daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
