import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Rocket, ShieldCheck, Workflow } from 'lucide-react';

function Hero({ profile }) {
  return (
    <section id="top" className="section-padding relative overflow-hidden">
      <div className="content-grid">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">
              <Code2 className="h-3 w-3" />
              Available for Remote Roles
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.1] sm:text-6xl lg:text-8xl">
              <span className="text-gradient inline-block">{profile.name}</span>
            </h1>

            <p className="mt-8 text-lg font-medium text-brand-900 sm:text-xl lg:text-2xl">
              {profile.title}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
              {profile.impactStatement}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={profile.ctas.primary.href}
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-brand-600 hover:shadow-glow-brand"
              >
                {profile.ctas.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/projects/school-management-saas"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/50 px-7 py-4 text-sm font-bold text-slate-700 backdrop-blur-md transition-all hover:border-brand-300 hover:bg-white active:scale-95"
              >
                {profile.ctas.secondary.label}
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-100/40 via-transparent to-violet-100/40 blur-2xl transition-all group-hover:opacity-100" />

            <div className="glass-card relative rounded-[2rem] p-6 sm:p-8">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Engineering Proof
                </span>
                <h2 className="mt-2 text-2xl font-bold text-brand-950 tracking-tight">
                  Built for Production
                </h2>
              </div>

              <div className="grid gap-4">
                {[
                  { title: 'End-to-End Ownership', desc: 'From architecture to deployment.', icon: Rocket },
                  { title: 'Production Ready', desc: 'Deployed on Linux VPS with Nginx.', icon: ShieldCheck },
                  { title: 'System-First Thinking', desc: 'Modular, scalable CRUD patterns.', icon: Workflow },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group/item flex items-start gap-4 rounded-2xl border border-transparent bg-slate-50 p-5 transition-all hover:border-brand-100 hover:bg-white hover:shadow-sm"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover/item:bg-brand-600 group-hover/item:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-brand-950 tracking-tight">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
                  Primary Tech Stack
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    'React', 'Node.js', 'Express', 'MongoDB', 'Linux', 'Nginx'
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-mono text-slate-500 transition-all hover:border-brand-400 hover:text-brand-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;
