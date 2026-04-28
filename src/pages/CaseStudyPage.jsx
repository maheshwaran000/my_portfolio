import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowUpRight,
    Code2,
    Database,
    LayoutPanelLeft,
    Server,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';
import { projects } from '../data/portfolio';

function CaseStudyPage() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-slate-900">Project Not Found</h2>
                <Link to="/projects" className="mt-4 text-brand-600 hover:underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <article className="pb-24 animate-fade-in">
            {/* Split-Screen Header Section */}
            <section className="relative overflow-hidden bg-white pt-24 pb-20 border-b border-slate-100">
                {/* Subtle Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute left-[10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-brand-100/20 blur-[120px]" />
                    <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-100/20 blur-[100px]" />
                </div>

                <div className="content-grid relative z-10">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-all hover:text-brand-600"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Link>

                    <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
                                {project.category}
                            </span>
                            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                                {project.name}
                            </h1>
                            <p className="mt-8 text-xl leading-relaxed text-slate-600 font-medium max-w-xl">
                                {project.solution}
                            </p>

                            <div className="mt-12">
                                <a
                                    href={project.actions.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-3 rounded-2xl bg-brand-600 px-8 py-4 text-sm font-bold text-white shadow-premium transition-all hover:bg-brand-700 hover:shadow-glow-brand active:scale-95"
                                >
                                    View Live Demo
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl p-2 transition-transform duration-500 hover:scale-[1.02]">
                                <div className="overflow-hidden rounded-[1.5rem]">
                                    <img
                                        src="/screenshots/hero-bg.png"
                                        alt="School Management SaaS Dashboard"
                                        className="h-full w-full object-cover shadow-inner"
                                    />
                                </div>
                            </div>
                            {/* Decorative Shadow Blur */}
                            <div className="absolute -inset-4 z-0 rounded-[2.5rem] bg-brand-400/20 blur-3xl opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="content-grid mt-20">
                <div className="grid gap-16 lg:grid-cols-[1fr_0.4fr]">
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">The Problem</h2>
                            <p className="mt-6 text-xl leading-relaxed text-slate-600">
                                {project.problem}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">Key Features</h2>
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {project.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                                        <CheckCircle2 className="h-5 w-5 text-brand-600" />
                                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">System Design Thinking</h2>
                            <div className="mt-8 space-y-4">
                                {project.thinking.map((point) => (
                                    <div key={point} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                                        <p className="text-base leading-relaxed text-slate-600">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">Evidence & Visuals</h2>
                            <div className="mt-12 space-y-12">
                                {project.screenshots.map((img) => (
                                    <div key={img.alt} className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl transition-all hover:shadow-2xl">
                                        <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                {img.alt}
                                            </span>
                                            <div className="flex gap-1.5">
                                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                                <div className="h-2 w-2 rounded-full bg-slate-200" />
                                            </div>
                                        </div>
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-8">
                        <div className="sticky top-32 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                            <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
                                <Server className="h-4 w-4" />
                                Technical Stack
                            </h3>

                            <div className="mt-10 space-y-8">
                                {[
                                    { label: 'Frontend', value: project.architecture.frontend, icon: LayoutPanelLeft },
                                    { label: 'Backend', value: project.architecture.backend, icon: Code2 },
                                    { label: 'Database', value: project.architecture.database, icon: Database },
                                    { label: 'Auth', value: project.architecture.auth, icon: ShieldCheck },
                                    { label: 'Deployment', value: project.architecture.deployment, icon: Server },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                            <item.icon className="h-3 w-3" />
                                            {item.label}
                                        </div>
                                        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {project.demoCredentials && (
                                <div className="mt-10 rounded-2xl bg-brand-50 p-6 border border-brand-100">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-600">Demo Access</h4>
                                    <div className="mt-3 font-mono text-xs text-brand-800">
                                        User-id: {project.demoCredentials.userId} <br />
                                        Password: {project.demoCredentials.password}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}

export default CaseStudyPage;
