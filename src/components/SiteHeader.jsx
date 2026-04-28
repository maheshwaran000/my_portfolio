import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react';

function MobileSidebar({ isOpen, onClose, navLinks }) {
  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] md:hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
    >
      {/* Backdrop — tap to close */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
          }`}
      />

      {/* Sidebar Drawer — solid white */}
      <div
        className={`absolute right-0 top-0 flex h-full w-[85%] flex-col bg-white shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Navigation
          </span>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 active:scale-90"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-2xl px-6 py-4 transition-all ${isActive
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                  : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              <span className="text-sm font-bold uppercase tracking-[0.2em]">
                {link.label}
              </span>
              <ArrowUpRight className="h-4 w-4 opacity-40" />
            </NavLink>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="mt-auto border-t border-slate-100 p-6">
          <Link
            to="/contact"
            onClick={onClose}
            className="group flex flex-col items-start gap-4 rounded-3xl bg-brand-600 p-6 transition-all hover:bg-brand-700 active:scale-[0.98]"
          >
            <div className="flex w-full items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-200">
                Project Inquiry
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <span className="text-xl font-black text-white">Work Together</span>
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}

function SiteHeader({ profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-2xl transition-all duration-300">
        <div className="content-grid flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="group relative z-50 flex items-center gap-3 transition-transform active:scale-95"
            aria-label="Mahesh K homepage"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all group-hover:border-brand-200 group-hover:bg-brand-50">
              <Code2 className="h-5 w-5 text-brand-600" />
            </span>
            <span className="text-sm font-bold tracking-tight text-brand-950">
              {profile.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {profile.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `group relative py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-600 ${isActive ? 'text-brand-600' : 'text-slate-500'
                  }`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-600 transition-all group-hover:w-full" />
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-brand-600 transition-all hover:border-brand-300 hover:bg-brand-100 active:scale-95"
            >
              Work Together
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 transition-all hover:bg-slate-800 active:scale-95 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Sidebar rendered via portal — outside header, no filter inheritance */}
      <MobileSidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navLinks={profile.navLinks}
      />
    </>
  );
}

export default SiteHeader;
