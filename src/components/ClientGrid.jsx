import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe } from 'lucide-react';

function ClientGrid({ clients }) {
    return (
        <section className="section-padding">
            <div className="content-grid">
                <div className="mb-12">
                    <h2 className="text-2xl font-black text-brand-950 tracking-tight">Worked With</h2>
                    <p className="mt-4 text-sm text-slate-500 max-w-2xl">
                        Selected client work delivered as an independent/freelance developer.
                        Details shared at a high level to respect client confidentiality.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {clients.map((client) => (
                        <Link
                            key={client.id}
                            to={`/client-work/${client.slug}`}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-premium active:scale-[0.98]"
                        >
                            <div>
                                <div className="flex items-start justify-between">
                                    <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:border-brand-100 group-hover:text-brand-600 transition-colors">
                                        <Globe className="h-5 w-5" />
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-600" />
                                </div>

                                <h3 className="mt-6 font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                                    {client.name}
                                </h3>
                                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                                    {client.contribution}
                                </p>
                            </div>

                            <div className="mt-8 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                View Engagement
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientGrid;
