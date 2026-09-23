"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

const categories = ["All", "Apparel", "Printing", "Signage", "Packaging", "Branding"];

const works = [
  { title: "Custom Printing", category: "Printing", video: "/videos/work/video1.mp4" },
  { title: "Branded Apparel", category: "Apparel", video: "/videos/work/video2.mp4" },
  { title: "Custom Production", category: "Printing", video: "/videos/work/video3.mp4" },
  { title: "Behind the Scenes", category: "Branding", video: "/videos/work/video4.mp4" },
  { title: "Large Format Work", category: "Signage", video: "/videos/work/video5.mp4" },
  { title: "Packaging & Print", category: "Packaging", video: "/videos/work/video6.mp4" },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((w) => w.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const next = () => setCurrentIndex((i) => (i + 1) % filteredWorks.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + filteredWorks.length) % filteredWorks.length);

  return (
    <>
      <Header />

      <main className="relative">
        {/* HERO */}
        <section className="relative min-h-screen w-full overflow-hidden flex items-center">
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
            <source src="/videos/work/video1.mp4" type="video/mp4" />
          </video>

          <div aria-hidden className="absolute inset-0 bg-ink/60" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(10,10,31,0.5) 0%, rgba(10,10,31,0.2) 55%, rgba(10,10,31,0.7) 100%)",
            }}
          />

          <div className="container relative z-10 py-24">
            <Reveal from="left">
              <span className="inline-flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink">
                <span className="w-8 h-px bg-pink" />
                OUR WORK
              </span>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <h1 className="mt-6 font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl">
                <span className="block text-white/50 text-xl md:text-2xl lg:text-3xl mb-4 font-mono uppercase tracking-[0.3em]">
                  Portfolio
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
                  Crafted with<br />precision.
                </span>
              </h1>
            </Reveal>

            <Reveal from="left" delay={0.2}>
              <p className="mt-8 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
                A selection of our recent work — from apparel and branding to large format and packaging.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FILTER */}
        <section className="py-6 md:py-12 border-b border-white/5 bg-ink">
          <div className="container">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-pink to-yellow text-ink"
                      : "border border-white/15 text-white/70 hover:border-pink/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* GRID — desktop, CAROUSEL — mobile */}
        <section className="py-12 md:py-24 bg-ink">
          <div className="container">
            {/* DESKTOP GRID */}
            {!isMobile && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorks.map((w, i) => (
                  <Reveal key={w.title} from={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 0.08}>
                    <div className="group relative block aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 hover:border-pink/50 transition-colors">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        disablePictureInPicture
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        {...{ "webkit-playsinline": "true" }}
                      >
                        <source src={w.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 pointer-events-none" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-pink">
                          {w.category}
                        </span>
                        <h3
                          className="mt-2 font-display font-medium text-xl md:text-2xl leading-tight"
                          style={{ color: "#fef3c7", textShadow: "0 2px 15px rgba(0,0,0,0.95)" }}
                        >
                          {w.title}
                        </h3>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* MOBILE CAROUSEL — video moja kwa wakati */}
            {isMobile && filteredWorks.length > 0 && (
              <div className="relative">
                {/* Current video */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                  <video
                    key={filteredWorks[currentIndex].video}
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
                    <source src={filteredWorks[currentIndex].video} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent pointer-events-none" />

                  {/* Info */}
                  <div className="absolute inset-x-0 bottom-0 p-5 pointer-events-none">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-pink">
                      {filteredWorks[currentIndex].category}
                    </span>
                    <h3
                      className="mt-2 font-display font-medium text-xl leading-tight"
                      style={{ color: "#fef3c7", textShadow: "0 2px 15px rgba(0,0,0,0.95)" }}
                    >
                      {filteredWorks[currentIndex].title}
                    </h3>
                  </div>

                  {/* Counter */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur text-xs font-mono text-white">
                    {currentIndex + 1} / {filteredWorks.length}
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-6 flex items-center justify-center gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="grid place-items-center w-11 h-11 rounded-full border border-white/20 text-white hover:border-pink hover:text-pink transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {filteredWorks.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        aria-label={`Go to video ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentIndex ? "w-6 bg-pink" : "w-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    aria-label="Next"
                    className="grid place-items-center w-11 h-11 rounded-full border border-white/20 text-white hover:border-pink hover:text-pink transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {filteredWorks.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/60">No projects in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-40 border-t border-white/5 overflow-hidden bg-ink">
          <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-pink/15 blur-[80px] md:blur-[120px]" />

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
                  Ready to be next?
                </span>
              </h2>
            </Reveal>

            <Reveal from="left" delay={0.2}>
              <p className="mt-8 text-base md:text-lg text-white/60 leading-relaxed">
                From a single t-shirt to a full brand identity — we bring your ideas to life.
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
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:border-pink hover:text-pink transition-colors"
                >
                  Back Home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
