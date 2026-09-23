export default function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee border-y border-white/5 py-6 ${className}`}>
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span key={i} className="marquee__item font-display font-extrabold text-3xl md:text-5xl tracking-tight text-cream/90 inline-flex items-center gap-6">
            {item}
            <span className="w-2 h-2 rounded-full bg-orange" />
          </span>
        ))}
      </div>
    </div>
  );
}
