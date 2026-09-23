"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

const heroVideos = [
  "/videos/hero.mp4",
  "/videos/hero2.mp4",
  "/videos/hero3.mp4",
  "/videos/hero4.mp4",
];

const scrollSections = [
  { image: "/images/portfolio/work1.jpg", overline: "SERVICES", title: "WE PRINT EVERYTHING.", subtitle: "From business cards to billboards.", href: "/#services" },
  { image: "/images/portfolio/work2.jpg", overline: "APPAREL", title: "CUSTOM T-SHIRTS & CAPS.", subtitle: "Screen print. DTF. Embroidery.", href: "/#work" },
  { image: "/images/portfolio/work3.jpg", overline: "LARGE FORMAT", title: "BANNERS & SIGNAGE.", subtitle: "Indoor. Outdoor. Any size.", href: "/#work" },
  { image: "/images/portfolio/work4.jpg", overline: "PACKAGING", title: "BRANDED PACKAGING.", subtitle: "Food. Retail. Corporate.", href: "/#work" },
];

const services = [
  { title: "UV Printing", subtitle: "Any surface", video: "/videos/uv-printing.mp4" },
  { title: "T-Shirts", subtitle: "Screen print & DTF", video: "/videos/t-shirts.mp4" },
  { title: "Cap Embroidery", subtitle: "Stitch by stitch", video: "/videos/cap-embroidery.mp4" },
  { title: "Large Format", subtitle: "Banners & backdrops", video: "/videos/large-format.mp4" },
  { title: "Packaging", subtitle: "Food & gift boxes", video: "/videos/packaging.mp4" },
  { title: "PVC Cards", subtitle: "ID & loyalty", video: "/videos/pvc-cards.mp4" },
];

const clients = ["DRTC", "Zash", "Imperial Healthcare", "MK Tech Africa", "Tedx Kivukoni", "Taste Point"];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideo]);

  function toggleSound() {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  }

  function handleVideoEnd() {
    setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
  }

  return (
    <>
      <Header />

      <main className="relative">
        {/* ============ STICKY HERO VIDEO ============ */}
        <section className="sticky top-0 h-screen min-h-150 w-full overflow-hidden" style={{ zIndex: 0 }}>
          <video
            ref={videoRef}
            key={currentVideo}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            onEnded={handleVideoEnd}
            disablePictureInPicture
            poster="/images/portfolio/work1.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            {...{ "webkit-playsinline": "true" }}
          >
            <source src={heroVideos[currentVideo]} type="video/mp4" />
          </video>

          {/* Overlay — nyepesi sana */}
          <div aria-hidden className="absolute inset-0 bg-ink/10" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(10,10,31,0.35) 0%, rgba(10,10,31,0.05) 55%, rgba(10,10,31,0.4) 100%)",
            }}
          />

          <div className="relative z-10 h-full flex flex-col">
            <div className="h-20" />

            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em]" style={{ color: "#fbbf24", textShadow: "0 2px 20px rgba(0,0,0,1)" }}>
                PRINTHOUSE 360
              </span>

              <h1 className="mt-5 font-display font-medium text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-3xl" style={{ color: "#fef3c7", textShadow: "0 6px 40px rgba(0,0,0,1), 0 3px 15px rgba(0,0,0,0.95)" }}>
                THIS IS IT.
              </h1>

              <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed" style={{ color: "#fde68a", textShadow: "0 2px 20px rgba(0,0,0,1)" }}>
                Tanzania's premium printing house.
                <br />
                UV. Apparel. Packaging. Signage.
                <br />
                Dar es Salaam.
              </p>

              <div className="mt-8">
                <Link href="#services" className="inline-flex items-center justify-center px-6 py-3 border text-sm font-medium hover:bg-white hover:text-ink transition-colors" style={{ borderColor: "#fef3c7", color: "#fef3c7" }}>
                  Explore
                </Link>
              </div>
            </div>

            <div className="pb-8 px-6 md:px-10 flex items-end justify-between">
              <div className="flex items-center gap-2">
                {heroVideos.map((_, i) => (
                  <button key={i} onClick={() => setCurrentVideo(i)} aria-label={`Video ${i + 1}`} className={`h-1 rounded-full transition-all duration-300 ${i === currentVideo ? "w-8 bg-pink" : "w-1.5 bg-white/50 hover:bg-white/80"}`} />
                ))}
              </div>

              <button onClick={toggleSound} aria-label={muted ? "Unmute" : "Mute"} className="grid place-items-center w-11 h-11 rounded-full border backdrop-blur bg-ink/40 hover:border-pink hover:text-pink transition-colors" style={{ borderColor: "rgba(254,243,199,0.7)", color: "#fef3c7" }}>
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <div className="flex flex-col items-center gap-1.5" style={{ color: "#fde68a" }}>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* ============ STICKY STACK SECTIONS ============ */}
        {scrollSections.map((section, i) => (
          <section key={i} className="sticky top-0 h-screen min-h-150 w-full overflow-hidden bg-ink" style={{ zIndex: i + 1 }}>
            <Image src={section.image} alt={section.title} fill priority={i === 0} className="object-cover" sizes="100vw" />

            {/* Overlay — nyepesi */}
            <div aria-hidden className="absolute inset-0 bg-ink/10" />
            <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(10,10,31,0.4) 0%, rgba(10,10,31,0.05) 55%, rgba(10,10,31,0.5) 100%)" }} />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <Reveal from={i % 2 === 0 ? "left" : "right"}>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em]" style={{ color: "#fbbf24", textShadow: "0 2px 20px rgba(0,0,0,1)" }}>
                  {section.overline}
                </span>
              </Reveal>
              <Reveal from={i % 2 === 0 ? "left" : "right"} delay={0.1}>
                <h2 className="mt-5 font-display font-medium text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-3xl" style={{ color: "#fef3c7", textShadow: "0 6px 40px rgba(0,0,0,1), 0 3px 15px rgba(0,0,0,0.95)" }}>
                  {section.title}
                </h2>
              </Reveal>
              <Reveal from={i % 2 === 0 ? "left" : "right"} delay={0.2}>
                <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed" style={{ color: "#fde68a", textShadow: "0 2px 20px rgba(0,0,0,1)" }}>
                  {section.subtitle}
                </p>
              </Reveal>
              <Reveal from={i % 2 === 0 ? "left" : "right"} delay={0.3}>
                <div className="mt-8">
                  <Link href={section.href} className="inline-flex items-center justify-center px-6 py-3 border text-sm font-medium hover:bg-white hover:text-ink transition-colors" style={{ borderColor: "#fef3c7", color: "#fef3c7" }}>
                    Explore
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        ))}

        {/* ============ SERVICES NA VIDEO ============ */}
        <section id="services" className="relative py-24 md:py-40 border-b border-white/5 bg-ink" style={{ zIndex: 10 }}>
          <div className="container">
            <div className="text-center mb-20">
              <Reveal from="left">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">SERVICES</span>
              </Reveal>
              <Reveal from="left" delay={0.1}>
                <h2 className="mt-5 font-display font-medium text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-3xl mx-auto" style={{ color: "#fef3c7" }}>
                  Everything for your brand.
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s, i) => (
                <Reveal key={s.title} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                  <div className="group relative aspect-square rounded-2xl border border-white/10 bg-ink-soft overflow-hidden hover:border-pink/50 transition-colors">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      disablePictureInPicture
                      poster="/images/portfolio/work1.jpg"
                      className="absolute inset-0 w-full h-full object-cover"
                      {...{ "webkit-playsinline": "true" }}
                    >
                      <source src={s.video} type="video/mp4" />
                    </video>

                    {/* Overlay — nyepesi sana ili video ionekane */}
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,10,31,0.9) 0%, rgba(10,10,31,0.3) 40%, rgba(10,10,31,0.05) 100%)",
                      }}
                    />

                    <span className="absolute top-6 left-6 font-mono text-[10px] tracking-widest text-pink z-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
                      <h3 className="font-display font-medium text-xl md:text-2xl leading-tight" style={{ color: "#fef3c7", textShadow: "0 2px 15px rgba(0,0,0,0.95)" }}>
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm" style={{ color: "#fde68a", textShadow: "0 2px 10px rgba(0,0,0,0.95)" }}>
                        {s.subtitle}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CLIENTS ============ */}
        <section className="relative py-20 md:py-32 border-b border-white/5 bg-ink" style={{ zIndex: 10 }}>
          <div className="container">
            <Reveal from="left">
              <p className="text-center font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60">TRUSTED BY</p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {clients.map((client, i) => (
                <Reveal key={client} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
                  <div className="text-center font-display font-medium text-base md:text-lg text-white/50 hover:text-pink transition-colors">
                    {client}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

/* ============================================================
   CONTACT SECTION
   ============================================================ */

function ContactSection() {
  const infoItems = [
    { label: "PHONE", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phoneRaw}` },
    { label: "LOCATION", value: siteConfig.contact.address },
    { label: "HOURS", value: siteConfig.contact.hours },
    { label: "EMAIL", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink border-t border-white/5" style={{ zIndex: 10 }}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div aria-hidden className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-pink/20 blur-[80px] md:blur-[120px]" />
      <div aria-hidden className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-yellow/20 blur-[80px] md:blur-[120px]" />

      <div className="relative py-24 md:py-40">
        <div className="container max-w-5xl">
          <div className="text-center mb-20">
            <Reveal from="left">
              <span className="inline-flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                <span className="w-8 h-px bg-pink" />
                CONTACT
                <span className="w-8 h-px bg-pink" />
              </span>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <h2 className="mt-6 font-display font-medium text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
                <span className="block text-white/40 text-xl md:text-2xl lg:text-3xl mb-2 font-mono uppercase tracking-[0.3em]">
                  Ready when you are.
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
                  Let's create something<br />extraordinary.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
              {infoItems.map((item, i) => (
                <Reveal key={item.label} from="left" delay={i * 0.1}>
                  <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 overflow-hidden hover:border-pink/60 transition-colors">
                    <span className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-pink to-transparent" />
                    <span className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-pink to-transparent" />

                    <div className="relative font-mono text-[10px] uppercase tracking-[0.3em] text-pink/80">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="relative mt-3 block font-display font-medium text-lg md:text-xl text-white hover:text-pink transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="relative mt-3 font-display font-medium text-base md:text-lg text-white/90 leading-snug">
                        {item.value}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal from="right" delay={0.3} className="md:col-span-3">
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-pink via-white/10 to-yellow">
                <form action="#" className="relative rounded-3xl bg-ink p-6 md:p-10 space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <GlowInput label="YOUR NAME" type="text" placeholder="John Doe" />
                    <GlowInput label="EMAIL" type="email" placeholder="john@email.com" />
                  </div>

                  <GlowTextarea label="WHAT DO YOU NEED?" placeholder="Tell us about your project..." />

                  <button
                    type="submit"
                    className="send-glow group relative w-full px-8 py-4 rounded-full bg-gradient-to-r from-pink to-yellow text-ink font-bold text-sm uppercase tracking-[0.2em] overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Request
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
                    />
                  </button>

                  <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    We reply within 24 hours
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlowInput({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-pink mb-3">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          required
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`relative w-full rounded-lg bg-white/[0.03] border outline-none px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 ${
            focused ? "border-pink bg-white/[0.06]" : "border-white/10 hover:border-pink/40"
          }`}
          style={
            focused
              ? {
                  boxShadow:
                    "0 0 0 3px rgba(236,72,153,0.15), 0 0 20px rgba(236,72,153,0.5), inset 0 0 20px rgba(251,191,36,0.08)",
                }
              : undefined
          }
        />
        {focused && (
          <>
            <span className="pointer-events-none absolute -top-1 -left-1 w-2 h-2 rounded-full bg-pink animate-ping" />
            <span className="pointer-events-none absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-yellow animate-ping" style={{ animationDelay: "0.2s" }} />
          </>
        )}
      </div>
    </div>
  );
}

function GlowTextarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-pink mb-3">
        {label}
      </label>
      <div className="relative">
        <textarea
          rows={5}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`relative w-full rounded-lg bg-white/[0.03] border outline-none px-4 py-3 text-white placeholder:text-white/30 resize-none transition-all duration-300 ${
            focused ? "border-pink bg-white/[0.06]" : "border-white/10 hover:border-pink/40"
          }`}
          style={
            focused
              ? {
                  boxShadow:
                    "0 0 0 3px rgba(236,72,153,0.15), 0 0 20px rgba(236,72,153,0.5), inset 0 0 20px rgba(251,191,36,0.08)",
                }
              : undefined
          }
        />
        {focused && (
          <>
            <span className="pointer-events-none absolute -top-1 -left-1 w-2 h-2 rounded-full bg-pink animate-ping" />
            <span className="pointer-events-none absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-yellow animate-ping" style={{ animationDelay: "0.2s" }} />
          </>
        )}
      </div>
    </div>
  );
}
