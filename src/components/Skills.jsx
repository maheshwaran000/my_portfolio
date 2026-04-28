import {
  Braces,
  Database,
  MonitorSmartphone,
  ServerCog,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

const iconMap = {
  Frontend: MonitorSmartphone,
  Backend: ServerCog,
  Database: Database,
  'DevOps / Deployment': Braces,
};

function Skills({ skills }) {
  return (
    <section id="skills" className="section-padding relative">
      <div className="content-grid">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Engineered for performance"
          description="A specialized stack selection focused on building maintainable, production-ready systems. I prioritize tools that offer type-safety, scalability, and robust operational reliability."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => {
            const Icon = iconMap[group.title] || Braces;

            return (
              <article
                key={group.title}
                className="glass-card flex flex-col rounded-[2rem] p-7 transition-all duration-300 hover:bg-white hover:border-brand-200"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-brand-950 tracking-tight">{group.title}</h3>
                </div>

                <p className="mt-5 flex-grow text-sm leading-relaxed text-slate-500">
                  {group.note}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] font-mono font-medium text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
