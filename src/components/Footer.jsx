function Footer({ name }) {
  return (
    <footer className="relative mt-20 border-t border-slate-200 bg-white shadow-sm">
      <div className="content-grid flex flex-col gap-6 py-12 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
            <span className="text-brand-600 font-black">M</span>
          </div>
          <p>© {new Date().getFullYear()} {name}</p>
        </div>
        <p className="text-slate-300">Based on real projects and production work, shared with respect for client confidentiality.</p>
      </div>
    </footer>
  );
}

export default Footer;
