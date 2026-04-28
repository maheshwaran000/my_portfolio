import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ROLE = {
    title: 'Independent Full Stack Developer',
    duration: '2024 – Present',
    bullets: [
        'Built and deployed SaaS and business applications',
        'Delivered systems for schools and local businesses',
        'Managed full lifecycle: development → deployment → maintenance',
        'Worked independently and in collaborative environments',
    ],
};

const CLIENTS = [
    'Kenenrkall Solutions Pvt Ltd',
    'Sunx Technologies',
    'Scale Orange',
    'GeoHealth Services Pvt Ltd',
];

const SKILLS = [
    'Full Stack Development (React, Node.js)',
    'API Design & Backend Systems',
    'Database Modeling (MongoDB, Supabase)',
    'Deployment (Linux, VPS, Nginx)',
];

function Divider() {
    return <div className="border-t border-slate-200 my-12" />;
}

function ExperiencePage() {
    return (
        <div className="pt-24 pb-24 animate-fade-in">
            <div className="content-grid">

                {/* ── Header ─────────────────────────────────────── */}
                <header className="mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 mb-3">
                        Experience
                    </p>
                    <h1 className="text-4xl font-black text-slate-900 sm:text-5xl leading-tight">
                        Experience
                    </h1>
                    <p className="mt-4 text-lg text-slate-500 max-w-2xl leading-relaxed">
                        Building and delivering production-ready systems across independent
                        and collaborative environments.
                    </p>
                </header>

                <Divider />

                {/* ── Primary Role ───────────────────────────────── */}
                <section>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
                        <h2 className="text-2xl font-black text-slate-900">
                            {ROLE.title}
                        </h2>
                        <span className="text-sm font-semibold text-slate-400 tabular-nums shrink-0">
                            {ROLE.duration}
                        </span>
                    </div>
                    <ul className="space-y-3">
                        {ROLE.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-brand-500" />
                                <span className="text-slate-600 text-sm leading-relaxed">{b}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <Divider />

                {/* ── Client Engagements ─────────────────────────── */}
                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-3">
                        Client Engagements
                    </h2>
                    <p className="text-sm text-slate-500 mb-6">
                        Worked with organisations including:
                    </p>
                    <ul className="space-y-2 mb-6">
                        {CLIENTS.map((c) => (
                            <li key={c} className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                                <span className="text-sm font-medium text-slate-700">{c}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-slate-400 italic">
                        Detailed project contributions are available in the Client Work section.
                    </p>
                    <div className="mt-5">
                        <Link
                            to="/client-work"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                        >
                            View Client Work
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>

                <Divider />

                {/* ── Skill Highlights ───────────────────────────── */}
                <section>
                    <h2 className="text-2xl font-black text-slate-900 mb-6">
                        Skill Highlights
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                        {SKILLS.map((s) => (
                            <li key={s} className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                                <span className="text-sm text-slate-600">{s}</span>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        </div>
    );
}

export default ExperiencePage;
