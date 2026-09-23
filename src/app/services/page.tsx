"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  { title: "UV Printing", subtitle: "Any surface. Any shape.", description: "Direct UV printing on glass, wood, metal, plastic, tiles — permanent, waterproof, and vibrant.", video: "/videos/uv-printing.mp4" },
  { title: "T-Shirts & Apparel", subtitle: "Screen print. DTF. Sublimation.", description: "Custom t-shirts, polos, hoodies with your brand.", video: "/videos/t-shirts.mp4" },
  { title: "Cap Embroidery", subtitle: "Stitch by stitch.", description: "Professional embroidery on caps, beanies, and jackets.", video: "/videos/cap-embroidery.mp4" },
  { title: "Large Format", subtitle: "Indoor. Outdoor. Any size.", description: "Banners, billboards, backdrops, vehicle wraps.", video: "/videos/large-format.mp4" },
  { title: "Packaging & Labels", subtitle: "Food. Retail. Corporate.", description: "Custom food packaging, gift boxes, paper bags, labels.", video: "/videos/packaging.mp4" },
  { title: "PVC Cards & ID", subtitle: "Premium card printing.", description: "PVC ID cards, loyalty cards, membership cards.", video: "/videos/pvc-cards.mp4" },
  { title: "Graphic Design", subtitle: "Logos. Flyers. Brochures.", description: "Complete design services — logos, brand identities.", video: "/videos/work/video1.mp4" },
  { title: "Digital Printing", subtitle: "Fast. Sharp. Full color.", description: "Fast turnaround digital printing for business cards.", video: "/videos/work/video2.mp4" },
  { title: "Offset Printing", subtitle: "Bulk at best price.", description: "High-volume offset printing for magazines, catalogs.", video: "/videos/work/video3.mp4" },
  { title: "Signage & Displays", subtitle: "Point of Sale. Frames.", description: "Point of Sale displays, wooden frames, canvas prints.", video: "/videos/work/video4.mp4" },
  { title: "Safety Wear", subtitle: "Reflective. Durable.", description: "Safety vests, reflective jackets, helmets.", video: "/videos/work/video5.mp4" },
  { title: "Promotional Items", subtitle: "Mugs. Bottles. Pens.", description: "Branded mugs, water bottles, pens, notebooks.", video: "/videos/work/video6.mp4" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="relative">
        {/* HERO */}
        <section className="relative min-h-screen w-full overflow-hidden flex items-center">
          <video autoPlay muted loop playsInline preload="metadata" disablePictureInPicture poster="/images/portfolio/work2.jpg" className="absolute inset-0 w-full h-full object-cover" {...{ "webkit-playsinline": "true" }}>
            <source src="/videos/uv-printing.mp4" type="video/mp4" />
          </video>

          <div aria-hidden className="absolute inset-0 bg-ink/40" />
          <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(10,10,31,0.4) 0%, rgba(10,10,31,0.1) 55%, rgba(10,10,31,0.55) 100%)" }} />

          <div className="container relative z-10 py-24">
            <Reveal from="left">
              <span className="inline-flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                <span className="w-8 h-px bg-pink" />
                SERVICES
              </span>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <h1 className="mt-6 font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl">
                <span className="block text-white/50 text-xl md:text-2xl lg:text-3xl mb-4 font-mono uppercase tracking-[0.3em]">
                  Everything for your brand
                </span>
                <span className="block" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #ec4899 50%, #fbbf24 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Under one roof.
                </span>
              </h1>
            </Reveal>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 md:py-24 bg-ink">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Reveal key={s.title} from={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 0.08}>
                  <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 hover:border-pink/50 transition-colors">
                    <video autoPlay muted loop playsInline preload="metadata" disablePictureInPicture className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" {...{ "webkit-playsinline": "true" }}>
                      <source src={s.video} type="video/mp4" />
                    </video>

                    <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(10,10,31,0.95) 0%, rgba(10,10,31,0.4) 50%, rgba(10,10,31,0.1) 100%)" }} />

                    <span className="absolute top-6 left-6 font-mono text-[10px] tracking-widest text-pink z-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full bg-cream text-ink opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-pink">{s.subtitle}</p>
                      <h3 className="mt-2 font-display font-medium text-xl md:text-2xl leading-tight" style={{ color: "#fef3c7", textShadow: "0 2px 15px rgba(0,0,0,0.95)" }}>
                        {s.title}
                      </h3>
                      <p className="mt-3 text-xs md:text-sm text-white/80 leading-relaxed max-w-xs" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}>
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
