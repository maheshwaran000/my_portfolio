import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe, Briefcase, Code2, Info } from 'lucide-react';
import { clientWork } from '../data/portfolio';

function ClientDetailPage() {
    const { id } = useParams();
    const client = clientWork.find((c) => c.slug === id);

    if (!client) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-slate-900">Client Not Found</h2>
                <Link to="/client-work" className="mt-4 text-brand-600 hover:underline">
                    Back to Client Work
                </Link>
            </div>
        );
    }

    return (
        <article className="pb-24">
            {/* Header */}
            <section className="bg-slate-50 pt-32 pb-20 border-b border-slate-200">
                <div className="content-grid">
                    <Link
                        to="/client-work"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-brand-600"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Client Work
                    </Link>

                    <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
                                {client.name}
                            </h1>
                            <a
                                href={client.website}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-brand-600 hover:underline"
                            >
                                {new URL(client.website).hostname}
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-6 py-4 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Role</span>
                                <span className="text-sm font-bold text-slate-700">{client.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="content-grid mt-20">
                <div className="grid gap-16 lg:grid-cols-[1fr_0.4fr]">
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600 flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                Contribution
                            </h2>
                            <ul className="mt-8 space-y-4">
                                {client.details.map((detail, index) => (
                                    <li key={index} className="flex items-start gap-4 text-xl leading-relaxed text-slate-600">
                                        <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600 flex items-center gap-2">
                                <Code2 className="h-4 w-4" />
                                Technical Work
                            </h2>
                            <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50 p-8">
                                <p className="text-lg leading-relaxed text-slate-700 font-medium whitespace-pre-wrap">
                                    {client.technicalWork}
                                </p>
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-8">
                        {client.notes && (
                            <div className="rounded-[2.5rem] bg-amber-50 border border-amber-100 p-8">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700">
                                    <Info className="h-4 w-4" />
                                    Note
                                </div>
                                <p className="mt-4 text-sm leading-relaxed text-amber-900/70">
                                    {client.notes}
                                </p>
                            </div>
                        )}

                        <div className="rounded-[2.5rem] bg-brand-600 p-8 text-white">
                            <h3 className="text-lg font-bold leading-tight">Looking for similar collaboration?</h3>
                            <p className="mt-4 text-sm text-brand-100 leading-relaxed">
                                I help companies build production-ready systems from the ground up or as part of a high-performing team.
                            </p>
                            <Link
                                to="/contact"
                                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-600 transition-transform active:scale-95"
                            >
                                Let&apos;s Connect
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}

export default ClientDetailPage;
