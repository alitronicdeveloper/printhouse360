import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
    "UV Printing",
    "Graphics Design",
    "T-Shirts & Apparel",
    "Cap Embroidery",
    "Large Format Printing",
    "Packaging & Labels",
  ];

  const company = [
    { label: "Services", href: "/#services" },
    { label: "Our Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-ink border-t border-white/5 overflow-hidden">
      {/* Logo background — kubwa, nyepesi */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/logo.jpg')",
          backgroundSize: "50%",
          backgroundPosition: "center 60%",
          backgroundRepeat: "no-repeat",
          opacity: 0.06,
          filter: "blur(2px)",
        }}
      />

      {/* Watermark text */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-8 left-0 right-0 text-center font-display font-black leading-none text-[18vw] tracking-tighter text-white/[0.02]"
      >
        PRINT360
      </div>

      <div className="relative container pt-20 pb-10">
        {/* Main Grid — 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display font-black text-2xl tracking-tighter text-white">
                PRINTHOUSE<span className="text-pink">360</span>
              </span>
            </Link>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              PrintHouse 360 is a modern printing house in Dar es Salaam, Tanzania. We print, we brand, we deliver. Graphics Design | Logos | Flyers | Banners | Posters | T-Shirts | Mugs | UV Printing | Embroidery | Packaging and more.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/60 hover:text-pink hover:border-pink transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/60 hover:text-pink hover:border-pink transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              Services
            </h4>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-sm text-white/70 hover:text-pink transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              Company
            </h4>
            <ul className="mt-6 space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-pink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              Contact
            </h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-pink shrink-0" strokeWidth={1.5} />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="w-4 h-4 mt-0.5 text-pink shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-pink transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="w-4 h-4 mt-0.5 text-pink shrink-0" strokeWidth={1.5} />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-pink transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-4 h-4 mt-0.5 text-pink shrink-0" strokeWidth={1.5} />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {year} PrintHouse 360. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-pink transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-pink transition-colors">
              Terms
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 text-pink hover:text-white transition-colors"
            >
              Get a Quote <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
