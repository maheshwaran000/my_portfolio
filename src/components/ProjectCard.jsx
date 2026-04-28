import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Database, LayoutPanelLeft, Server, ShieldCheck } from 'lucide-react';

function ProjectCard({ project, isPreview = false }) {
  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/50 p-8 shadow-premium transition-all duration-500 hover:bg-white lg:p-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                • {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {isPreview && (
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50"
            >
              View Case Study
            </Link>
          )}
          <a
            href={project.actions.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand-600 hover:shadow-glow-brand"
          >
            Live Demo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="mt-12 grid gap-16 lg:grid-cols-2">
        <div>
          <h3 className="text-4xl font-black text-brand-950 tracking-tight leading-tight lg:text-5xl">
            <Link to={`/projects/${project.id}`} className="hover:text-brand-600 transition-colors">
              {project.name}
            </Link>
          </h3>

          <div className="mt-10 space-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Problem</h4>
              <p className="mt-3 text-lg leading-relaxed text-slate-600 line-clamp-3">{project.problem}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Solution</h4>
              <p className="mt-3 text-lg leading-relaxed text-slate-600 line-clamp-3">{project.solution}</p>
            </div>

            {!isPreview && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Key Features</h4>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm font-medium text-slate-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={`space-y-8 ${isPreview ? 'hidden lg:block' : ''}`}>
          <div className="rounded-[2rem] border border-slate-100 bg-slate-50/50 p-8">
            <div className="mb-8 flex items-center gap-3">
              <Server className="h-5 w-5 text-brand-600" />
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
                Architecture
              </h4>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Frontend', value: project.architecture.frontend, icon: LayoutPanelLeft },
                { label: 'Backend', value: project.architecture.backend, icon: Code2 },
                { label: 'Database', value: project.architecture.database, icon: Database },
                { label: 'Deployment', value: project.architecture.deployment, icon: Server },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <item.icon className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-500" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.label}</span>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 line-clamp-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isPreview && (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">System Design Thinking</h4>
                <div className="mt-4 grid gap-3">
                  {project.thinking.map((point) => (
                    <div key={point} className="rounded-xl border border-slate-100 bg-white p-4 text-sm font-medium leading-relaxed text-slate-600 shadow-sm">
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              {project.demoCredentials && (
                <div className="rounded-xl bg-brand-50 border border-brand-100 p-5">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-2">Demo Credentials</h5>
                  <div className="text-xs font-mono text-brand-700">
                    Admin: {project.demoCredentials.admin} <br />
                    Teacher: {project.demoCredentials.teacher}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
