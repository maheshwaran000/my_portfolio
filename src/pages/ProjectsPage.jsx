import Projects from '../components/Projects';
import { projects } from '../data/portfolio';

function ProjectsPage() {
    return (
        <div className="pt-20">
            <Projects projects={projects} />
        </div>
    );
}

export default ProjectsPage;
