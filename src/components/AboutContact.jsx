import { Github, Mail, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/portfolio';

function AboutContact() {
  const links = [
    {
      label: 'Email',
      href: profile.contacts.email,
      icon: Mail,
      value: profile.contacts.email.replace('mailto:', ''),
    },
    {
      label: 'Phone',
      href: profile.contacts.phone,
      icon: Phone,
      value: '+91 95155 21725',
    },
    {
      label: 'GitHub',
      href: profile.contacts.github,
      icon: Github,
      value: profile.contacts.github.replace('https://', ''),
    },

  ];

  return (
    <section id="contact" className="section-padding">
      <div className="content-grid">
        <SectionHeader
          eyebrow="Delivery"
          title="The Builder Discipline"
          description="Focusing on solving operational problems with robust architecture, stable systems, and production-ready execution."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <article className="glass-card flex flex-col rounded-[2.5rem] p-8 sm:p-10 transition-all duration-300 hover:bg-white">
            <div className="flex items-center gap-3 text-brand-600">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="text-xl font-bold text-brand-950 tracking-tight">System Reliability</h3>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                I building systems that remain predictable under scale. The goal is to deliver
                <span className="text-brand-950 font-semibold"> maintainable codebases</span> backed by
                <span className="text-brand-950 font-semibold"> stable infrastructure</span>.
              </p>
              <p>
                I prioritize removing unnecessary complexity. This approach allows products to iterate
                and scale with confidence while maintaining operational reliability.
              </p>
            </div>

            <div className="mt-auto pt-10">
              <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">MK</div>
                <div>
                  <div className="text-sm font-bold text-brand-950">{profile.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Full Stack Developer</div>
                </div>
              </div>
            </div>
          </article>

          <aside className="glass-card rounded-[2.5rem] p-8 sm:p-10 transition-all hover:bg-white">
            <h3 className="text-xl font-bold text-brand-950 tracking-tight">Project Inquiries</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Open for full-time remote roles and product-oriented engineering deployments.
            </p>

            <div className="mt-10 grid gap-4">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-transparent bg-slate-50 p-5 transition-all hover:border-brand-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</div>
                        <div className="text-sm font-bold text-brand-950 mt-0.5">{item.value}</div>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-950" />
                  </a>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default AboutContact;
