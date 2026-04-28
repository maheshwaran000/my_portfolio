import Hero from '../components/Hero';
import InstantProofBar from '../components/InstantProofBar';
import ClientGrid from '../components/ClientGrid';
import ProjectCard from '../components/ProjectCard';
import { profile, instantProof, projects, clientWork } from '../data/portfolio';

function HomePage() {
    const featuredProject = projects.find(p => p.featured) || projects[0];

    return (
        <>
            <Hero profile={profile} />
            {/* <InstantProofBar proof={instantProof} /> */}

            <ClientGrid clients={clientWork} />

            <section className="section-padding bg-slate-50/50">
                <div className="content-grid">
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-brand-950 tracking-tight">Featured Project</h2>
                    </div>
                    <ProjectCard project={featuredProject} isPreview={true} />
                </div>
            </section>
        </>
    );
}

export default HomePage;
