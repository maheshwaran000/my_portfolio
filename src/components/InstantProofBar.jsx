import { CheckCircle2 } from 'lucide-react';

function InstantProofBar({ proof }) {
    return (
        <section className="bg-slate-900 overflow-hidden relative border-y border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 via-transparent to-brand-600/10" />
            <div className="content-grid relative py-6">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                    {proof.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/10 text-brand-400">
                                <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-bold tracking-tight text-slate-100 sm:text-base">
                                {stat.replace('✔ ', '')}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InstantProofBar;
