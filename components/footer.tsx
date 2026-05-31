import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 pt-14 pb-10">
        <div className="grid md:grid-cols-12 gap-y-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-x-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold">
                UR
              </div>
              <div className="font-semibold text-2xl tracking-tighter text-foreground">
                UR Hospitality
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium corporate catering with the heart of Kolkata and the
              precision of modern hospitality.
            </p>

            <div className="mt-6 flex gap-x-4 text-xl text-muted-foreground">
              <Link
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 text-sm">
            <div className="font-semibold mb-4 tracking-wider text-xs uppercase text-foreground">
              Company
            </div>
            <div className="space-y-[9px] text-muted-foreground">
              <div>
                <Link href="#about" className="hover:text-accent">
                  Our Story
                </Link>
              </div>
              <div>
                <Link href="#why-us" className="hover:text-accent">
                  The UR Way
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-accent">
                  Careers
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-accent">
                  Sustainability
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 text-sm">
            <div className="font-semibold mb-4 tracking-wider text-xs uppercase text-foreground">
              Headquarters
            </div>
            <div className="text-muted-foreground leading-relaxed">
              AE-287, Salt Lake
              <br />
              Kolkata - 700064
              <br />
              West Bengal, India
            </div>

            <div className="mt-5 space-y-1 text-sm">
              <Link
                href="tel:+919830715557"
                className="block hover:text-accent font-medium text-foreground"
              >
                +91 98307 15557
              </Link>
              <Link
                href="mailto:hello@urhospitality.in"
                className="block hover:text-accent text-muted-foreground"
              >
                hello@urhospitality.in
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-14 pt-8 flex flex-col md:flex-row gap-y-3 md:items-center justify-between text-xs text-muted-foreground">
          <div>
            &copy; 2026 UR Hospitality Pvt. Ltd. All rights reserved. FSSAI
            License No. XXXXXXXX
          </div>
          <div className="flex gap-x-5">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground">
              Food Safety Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
