"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/70 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container relative flex items-center justify-between">
          {/* LEFT — Hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="group flex items-center gap-3 text-white hover:text-pink transition-colors"
          >
            <span className="grid place-items-center w-10 h-10 rounded-full border border-white/30 group-hover:border-pink transition-colors">
              <Menu className="w-4 h-4" />
            </span>
            <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.3em]">
              Menu
            </span>
          </button>

          {/* CENTER — Logo */}
          <Link
            href="/"
            aria-label="PrintHouse 360 Home"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <span className="font-display font-black text-xl md:text-2xl lg:text-3xl tracking-tighter text-white hover:text-pink transition-colors">
              PRINTHOUSE<span className="text-pink">360</span>
            </span>
          </Link>

          {/* RIGHT — CTA */}
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="inline-flex items-center gap-2 text-white hover:text-pink transition-colors"
          >
            <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.3em]">
              Call
            </span>
            <span className="grid place-items-center w-10 h-10 rounded-full border border-white/30 hover:border-pink transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </header>

      {/* ============ SLIDE-IN MENU FROM LEFT ============ */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-ink/70 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-full max-w-sm md:max-w-md z-[70] bg-ink border-r border-white/10 transform transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 md:p-10">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid place-items-center w-9 h-9 rounded-full border border-white/30 hover:border-pink hover:text-pink text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              Menu
            </span>
          </div>

          {/* Menu Items — aligned RIGHT, smaller (Atlantis style) */}
          <nav className="flex-1 flex flex-col justify-center items-end gap-1">
            {menuItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group relative font-display font-medium text-xl md:text-2xl tracking-tight text-white hover:text-pink transition-colors py-1"
                style={{
                  transform: open ? "translateX(0)" : "translateX(20px)",
                  opacity: open ? 1 : 0,
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06 + 0.15}s`,
                }}
              >
                <span className="inline-flex items-center gap-3">
                  {item.label}
                  <span className="w-0 h-px bg-pink transition-all duration-300 group-hover:w-6" />
                </span>
                <span className="absolute right-0 -bottom-1 h-px w-0 bg-pink transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Bottom — contact, aligned right */}
          <div
            className="space-y-5 pt-6 border-t border-white/10 text-right"
            style={{
              transform: open ? "translateX(0)" : "translateX(20px)",
              opacity: open ? 1 : 0,
              transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s`,
            }}
          >
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">
                Phone
              </div>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="mt-1 block font-display font-medium text-base text-white hover:text-pink transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">
                Location
              </div>
              <div className="mt-1 text-xs text-white/70 leading-relaxed">
                {siteConfig.contact.address}
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 text-xs">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-pink transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-pink transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
