"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const services = ["Digital Printing", "Offset Printing", "Large Format", "Branding & Design", "Packaging", "Promotional Items"];

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={onSubmit} className="relative rounded-2xl border border-white/10 bg-ink-soft/60 backdrop-blur p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Jina lako" name="name" placeholder="Amina Hassan" required />
        <Field label="Kampuni" name="company" placeholder="Kili Coffee Ltd" />
        <Field label="Barua pepe" name="email" type="email" placeholder="amina@kilicoffee.co.tz" required />
        <Field label="Simu" name="phone" type="tel" placeholder="+255 7XX XXX XXX" required />
      </div>

      <div className="mt-5">
        <label className="block font-mono text-xs uppercase tracking-widest text-cyan mb-3">Huduma unayohitaji</label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <label key={s} className="cursor-pointer text-sm px-4 py-2 rounded-full border border-white/10 text-cream/70 hover:border-cyan hover:text-cream transition-colors has-[:checked]:bg-cyan has-[:checked]:text-ink has-[:checked]:border-cyan">
              <input type="checkbox" name="services" value={s} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-cyan mb-3">Maelezo ya kazi</label>
        <textarea id="message" name="message" rows={5} placeholder="Tuambie kuhusu kazi yako — aina ya bidhaa, ukubwa, kiasi, muda..." className="w-full rounded-xl bg-ink border border-white/10 focus:border-cyan outline-none px-4 py-3 text-cream placeholder:text-muted/60 transition-colors resize-none" />
      </div>

      <button type="submit" disabled={sent} className="mt-6 inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-full bg-cyan text-ink font-semibold hover:bg-orange hover:text-white transition-colors disabled:opacity-70">
        {sent ? (<><CheckCircle2 className="w-5 h-5" />Ombi lako limepokelewa!</>) : (<><Send className="w-4 h-4" />Tuma Ombi la Nukuu</>)}
      </button>

      <p className="mt-4 text-xs text-muted">Tutakujibu ndani ya saa 24 za kazi.</p>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; }) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-xs uppercase tracking-widest text-cyan mb-3">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className="w-full rounded-xl bg-ink border border-white/10 focus:border-cyan outline-none px-4 py-3 text-cream placeholder:text-muted/60 transition-colors" />
    </div>
  );
}
