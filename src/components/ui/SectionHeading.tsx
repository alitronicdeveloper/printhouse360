export default function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: React.ReactNode; description?: string; align?: "left" | "center"; }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="w-8 h-px bg-cyan" />
        <span className="font-mono text-xs uppercase tracking-widest text-cyan">{eyebrow}</span>
      </div>
      <h2 className="heading-lg mt-5">{title}</h2>
      {description && <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">{description}</p>}
    </div>
  );
}
