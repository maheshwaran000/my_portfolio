import SectionHeader from './SectionHeader';
import { Layers, ShieldCheck, Database, Server } from 'lucide-react';

function TechnicalDepth({ depth }) {
    const icons = [Layers, ShieldCheck, Database, Server];

    return (
        <section id="depth" className="section-padding bg-slate-50/50">
            <div className="content-grid">
                <SectionHeader
                    eyebrow="Engineering Validation"
                    title="Technical Depth"
                    description="A breakdown of my approach to building secure, scalable, and maintainable systems."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {depth.map((item, i) => {
                        const Icon = icons[i] || Layers;
                        return (
                            <div
                                key={item.title}
                                className="group glass-card rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-glow-brand"
                            >
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-brand-950 tracking-tight">{item.title}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TechnicalDepth;
