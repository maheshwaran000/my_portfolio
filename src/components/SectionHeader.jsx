function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black text-brand-950 sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-500 max-w-2xl">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
