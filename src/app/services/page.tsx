"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Printer, Layers, Maximize, Palette, Package, Gift, Shirt, GraduationCap, CreditCard, Shield, Sparkles, Frame } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* ============================================================
   REVEAL WRAPPER
   ============================================================ */
function Reveal({
  children,
  from = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate = from === "left" ? "-100px" : "100px";
  const rotate = from === "left" ? "-3deg" : "3deg";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "translateX(0) rotate(0deg)" : `translateX(${translate}) rotate(${rotate})`,
        opacity: visible ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   VIBRATE BOX
   ============================================================ */
function VibrateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative transition-transform duration-300 ${hovering ? "vibrate" : ""} ${className}`}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotY = ((x - cx) / cx) * 6;
        const rotX = ((cy - y) / cy) * 6;
        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;
      }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    icon: Sparkles,
    title: "UV Printing",
    subtitle: "Any surface. Any shape.",
    description: "Direct UV printing on glass, wood, metal, plastic, tiles — permanent, waterproof, and vibrant. Perfect for branded gifts, signage, and premium finishes.",
    features: ["Glass & metal", "Wood & plastic", "Tiles & acrylic", "Long-lasting"],
  },
  {
    icon: Shirt,
    title: "T-Shirts & Apparel",
    subtitle: "Screen print. DTF. Sublimation.",
    description: "Custom t-shirts, polos, hoodies with your brand. From single pieces to 1000+ orders — we deliver on time, in any size.",
    features: ["Screen printing", "DTF transfer", "Sublimation", "Bulk orders"],
  },
  {
    icon: GraduationCap,
    title: "Cap Embroidery",
    subtitle: "Stitch by stitch.",
    description: "Professional embroidery on caps, beanies, and jackets. Your logo — crisp, durable, and premium.",
    features: ["3D puff", "Flat embroidery", "Caps & beanies", "Company uniforms"],
  },
  {
    icon: Maximize,
    title: "Large Format",
    subtitle: "Indoor. Outdoor. Any size.",
    description: "Banners, billboards, backdrops, vehicle wraps, and 4x4 back wheel covers. Weather-resistant inks and premium materials.",
    features: ["Banners & billboards", "Vehicle wraps", "Backdrops", "Window graphics"],
  },
  {
    icon: Package,
    title: "Packaging & Labels",
    subtitle: "Food. Retail. Corporate.",
    description: "Custom food packaging, gift boxes, paper bags, product labels, and stickers. Food-grade materials on request.",
    features: ["Food packaging", "Gift boxes", "Paper bags", "Product labels"],
  },
  {
    icon: CreditCard,
    title: "PVC Cards & ID",
    subtitle: "Premium card printing.",
    description: "PVC ID cards, loyalty cards, membership cards, and event passes. High-quality print with optional chip and magnetic strip.",
    features: ["ID cards", "Loyalty cards", "Membership cards", "Event passes"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    subtitle: "Logos. Flyers. Brochures.",
    description: "Complete design services — logos, brand identities, flyers, brochures, posters, calendars. Our in-house team delivers stunning concepts.",
    features: ["Logo design", "Brand identity", "Marketing materials", "Print-ready files"],
  },
  {
    icon: Printer,
    title: "Digital Printing",
    subtitle: "Fast. Sharp. Full color.",
    description: "Fast turnaround digital printing for business cards, flyers, brochures, catalogs. Small quantities welcome.",
    features: ["Business cards", "Flyers & brochures", "Catalogs", "Small batches"],
  },
  {
    icon: Layers,
    title: "Offset Printing",
    subtitle: "Bulk at best price.",
    description: "High-volume offset printing for magazines, catalogs, calendars, and books. Premium quality at excellent rates.",
    features: ["Magazines & books", "Calendars", "Catalogs", "Bulk orders"],
  },
  {
    icon: Frame,
    title: "Signage & Displays",
    subtitle: "Point of Sale. Frames.",
    description: "Point of Sale displays, wooden frames, canvas prints, exhibition materials. From concept to installation.",
    features: ["POS displays", "Wooden frames", "Canvas prints", "Exhibition stands"],
  },
  {
    icon: Shield,
    title: "Safety Wear",
    subtitle: "Reflective. Durable.",
    description: "Safety vests, reflective jackets, helmets, and company uniforms. Certified materials for industrial use.",
    features: ["Safety vests", "Reflective jackets", "Helmets", "Industrial uniforms"],
  },
  {
    icon: Gift,
    title: "Promotional Items",
    subtitle: "Mugs. Bottles. Pens.",
    description: "Branded mugs, water bottles, pens, notebooks, USB drives, and corporate gifts. Custom packaging available.",
    features: ["Mugs & bottles", "Pens & notebooks", "USB drives", "Corporate gifts"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="relative pt-20">
        {/* ============ HERO ============ */}
        <section className="relative py-20 md:py-32 border-b border-white/5 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div aria-hidden className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-pink/20 blur-[120px]" />
          <div aria-hidden className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-yellow/20 blur-[120px]" />

          <div className="container relative">
            <Reveal from="left">
              <span className="inline-flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                <span className="w-8 h-px bg-pink" />
                SERVICES
              </span>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <h1 className="mt-6 font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl">
                <span className="block text-white/40 text-xl md:text-2xl lg:text-3xl mb-4 font-mono uppercase tracking-[0.3em]">
                  Everything for your brand
                </span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #fef3c7 0%, #ec4899 50%, #fbbf24 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Under one roof.
                </span>
              </h1>
            </Reveal>

            <Reveal from="left" delay={0.2}>
              <p className="mt-8 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
                From a single t-shirt to a full brand identity — we handle every print, branding, and packaging need. Full service, no middlemen, one trusted partner.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ SERVICES GRID ============ */}
        <section className="relative py-24 md:py-32 border-b border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s, i) => (
                <Reveal key={s.title} from={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 0.08}>
                  <VibrateBox className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 hover:border-pink/60 transition-colors cursor-pointer overflow-hidden">
                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-pink to-transparent" />
                    <span className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-pink to-transparent" />
                    <span className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-yellow to-transparent" />
                    <span className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-t from-yellow to-transparent" />

                    {/* Number */}
                    <span className="absolute top-6 right-6 font-mono text-[10px] tracking-widest text-pink">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="grid place-items-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 group-hover:bg-pink group-hover:border-pink transition-colors">
                      <s.icon className="w-6 h-6 text-pink group-hover:text-ink transition-colors" strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-6 font-display font-medium text-2xl leading-tight" style={{ color: "#fef3c7" }}>
                      {s.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-pink/80">
                      {s.subtitle}
                    </p>

                    <p className="mt-4 text-sm text-white/60 leading-relaxed">
                      {s.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[11px] text-white/50">
                          <span className="w-1 h-1 rounded-full bg-pink shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/#contact"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-pink opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Get a Quote
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </VibrateBox>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-pink/15 blur-[120px]" />

          <div className="container relative max-w-3xl text-center">
            <Reveal from="left">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                READY TO PRINT
              </span>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <h2 className="mt-6 font-display font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                <span
                  style={{
                    background: "linear-gradient(135deg, #fef3c7 0%, #ec4899 50%, #fbbf24 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Let's get started.
                </span>
              </h2>
            </Reveal>

            <Reveal from="left" delay={0.2}>
              <p className="mt-8 text-base md:text-lg text-white/60 leading-relaxed">
                Tell us what you need. We'll get back to you with a free quote within 24 hours.
              </p>
            </Reveal>

            <Reveal from="left" delay={0.3}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  href="/#contact"
                  className="send-glow inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink to-yellow text-ink font-bold text-sm uppercase tracking-[0.15em] hover:scale-[1.03] transition-transform"
                >
                  Get a Quote
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:border-pink hover:text-pink transition-colors"
                >
                  See Our Work
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <style jsx global>{`
          @keyframes vibrate {
            0%, 100% { transform: translate(0, 0) rotate(0); }
            10% { transform: translate(-1px, -1px) rotate(-0.5deg); }
            20% { transform: translate(1px, 0px) rotate(0.5deg); }
            30% { transform: translate(-1px, 1px) rotate(-0.3deg); }
            40% { transform: translate(1px, -1px) rotate(0.3deg); }
            50% { transform: translate(-1px, 0px) rotate(0); }
            60% { transform: translate(1px, 1px) rotate(0.4deg); }
            70% { transform: translate(-1px, -1px) rotate(-0.4deg); }
            80% { transform: translate(0px, 1px) rotate(0.2deg); }
            90% { transform: translate(1px, 0px) rotate(-0.2deg); }
          }
          .vibrate {
            animation: vibrate 0.35s linear infinite;
          }
          @keyframes sendGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(236,72,153,0.6), 0 0 40px rgba(251,191,36,0.4);
            }
            50% {
              box-shadow: 0 0 30px rgba(236,72,153,0.9), 0 0 60px rgba(251,191,36,0.6);
            }
          }
          .send-glow {
            animation: sendGlow 2s ease-in-out infinite;
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
