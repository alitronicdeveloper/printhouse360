"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Target, Heart, Zap, Users, Award, Globe } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

const values = [
  { icon: Target, title: "Quality", description: "Every project printed to international standard. We never let anything less than our best out the door." },
  { icon: Zap, title: "Speed", description: "We know time matters. We deliver on schedule, every single time." },
  { icon: Heart, title: "Customers First", description: "We partner with our clients like teammates, not transactions." },
  { icon: Users, title: "Team", description: "Skilled printers, designers, and craftsmen — one strong team." },
  { icon: Award, title: "Integrity", description: "Transparent pricing, clear communication, promises kept." },
  { icon: Globe, title: "Innovation", description: "Modern technology and creative techniques from around the world." },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "2K+", label: "Projects Delivered" },
  { value: "500+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="relative">
        {/* ============ HERO — VIDEO MANAGER + TEXT JUU ============ */}
        <section className="relative min-h-screen h-screen w-full overflow-hidden flex items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/work/video4.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div aria-hidden className="absolute inset-0 bg-ink/65" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(10,10,31,0.5) 0%, rgba(10,10,31,0.2) 55%, rgba(10,10,31,0.75) 100%)",
            }}
          />

          <div className="container relative z-10">
            <Reveal from="left">
              <span className="inline-flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                <span className="w-8 h-px bg-pink" />
                ABOUT US
              </span>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <h1 className="mt-6 font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl">
                <span className="block text-white/50 text-xl md:text-2xl lg:text-3xl mb-4 font-mono uppercase tracking-[0.3em]">
                  PrintHouse 360
                </span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #fef3c7 0%, #ec4899 50%, #fbbf24 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 6px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  Print your<br />vision.
                </span>
              </h1>
            </Reveal>

            <Reveal from="left" delay={0.2}>
              <p className="mt-8 max-w-xl text-base md:text-lg text-white/80 leading-relaxed" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8)" }}>
                We're a modern printing house based in Dar es Salaam, Tanzania. From a single t-shirt to a full brand identity — we bring ideas to life with precision, speed, and a personal touch.
              </p>
            </Reveal>

            <Reveal from="left" delay={0.3}>
              <div className="mt-16 flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-white/60">
                <span className="w-10 h-px bg-white/40" />
                Scroll to explore
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ STORY ============ */}
        <section className="relative py-24 md:py-32 border-b border-white/5 overflow-hidden bg-ink">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <Reveal from="left">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                  OUR STORY
                </span>
                <h2 className="mt-5 font-display font-medium text-3xl md:text-5xl leading-[1.1] tracking-tight" style={{ color: "#fef3c7" }}>
                  From a small studio to a trusted printing house.
                </h2>
              </Reveal>

              <Reveal from="right" delay={0.15}>
                <div className="space-y-6 text-white/70 leading-relaxed">
                  <p>
                    PrintHouse 360 began as a small printing studio in Dar es Salaam. One machine, a handful of clients, and a big dream — to make Tanzanian printing world-class.
                  </p>
                  <p>
                    Today, we work with some of the country's leading brands. We've grown, but we never changed our rule: <span className="text-pink">quality first, customers first, always.</span>
                  </p>
                  <p>
                    From business cards to billboards, from food packaging to promotional items — we do it all with care, craft, and love.
                  </p>

                  <ul className="mt-8 space-y-3">
                    {[
                      "Modern digital and offset machines",
                      "Experienced in-house design team",
                      "Delivery across Tanzania",
                      "24/7 customer support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="relative py-20 md:py-32 border-b border-white/5 bg-ink">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                  <div className="md:border-l border-white/10 md:pl-6 first:border-l-0 first:pl-0">
                    <div className="font-mono text-[10px] text-pink">{String(i + 1).padStart(2, "0")}</div>
                    <div
                      className="mt-4 font-display font-bold text-4xl md:text-5xl"
                      style={{
                        background: "linear-gradient(135deg, #fef3c7 0%, #ec4899 50%, #fbbf24 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-white/60">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ VALUES ============ */}
        <section className="relative py-24 md:py-32 border-b border-white/5 bg-ink">
          <div className="container">
            <Reveal from="left" className="text-center mb-20">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                OUR VALUES
              </span>
              <h2 className="mt-5 font-display font-medium text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight" style={{ color: "#fef3c7" }}>
                What drives us.
              </h2>
              <p className="mt-5 max-w-lg mx-auto text-sm md:text-base text-white/60 leading-relaxed">
                The principles that guide every project we take on.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <Reveal key={v.title} from={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 0.1}>
                  <VibrateBox className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 hover:border-pink/60 transition-colors cursor-pointer overflow-hidden">
                    <span className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-pink to-transparent" />
                    <span className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-pink to-transparent" />

                    <div className="grid place-items-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 group-hover:bg-pink group-hover:border-pink transition-colors">
                      <v.icon className="w-6 h-6 text-pink group-hover:text-ink transition-colors" strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-8 font-display font-medium text-xl md:text-2xl" style={{ color: "#fef3c7" }}>
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">{v.description}</p>
                  </VibrateBox>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative py-24 md:py-40 overflow-hidden bg-ink">
          <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-pink/15 blur-[120px]" />

          <div className="container relative max-w-3xl text-center">
            <Reveal from="left">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                LET'S WORK TOGETHER
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
                  Ready to start?
                </span>
              </h2>
            </Reveal>

            <Reveal from="left" delay={0.2}>
              <p className="mt-8 text-base md:text-lg text-white/60 leading-relaxed">
                Tell us about your project. We'll get back to you with a free quote within 24 hours.
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
