import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

function Experience({ experience }) {
  return (
    <section id="experience" className="section-padding relative">
      <div className="content-grid">
        <SectionHeader
          eyebrow="Evidence"
          title="Product Delivery"
          description="A track record of taking complex systems from initial requirements to production-ready deployment."
        />

        <article className="glass-card overflow-hidden rounded-[2.5rem] p-8 sm:p-10 transition-all duration-300 hover:bg-white">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                Current Identity
              </div>

              <h3 className="mt-5 text-3xl font-black text-brand-950 tracking-tight leading-tight">{experience.role}</h3>
              <p className="mt-2.5 text-lg font-medium text-slate-500">{experience.context}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {experience.bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex gap-4 rounded-2xl border border-transparent bg-slate-50 p-6 transition-all hover:bg-white hover:border-brand-100 hover:shadow-sm"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium leading-relaxed text-slate-600">{bullet}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
