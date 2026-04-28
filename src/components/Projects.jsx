import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

function Projects({ projects }) {
  return (
    <section id="projects" className="section-space border-b border-white/10">
      <div className="content-grid">
        <SectionHeader
          eyebrow="Case studies"
          title="Production-focused projects"
          description="This portfolio is centered around shipped systems, backend architecture, and product execution. The focus is not visual noise — it is what was built, how it was structured, and how it was delivered in production."
        />

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
