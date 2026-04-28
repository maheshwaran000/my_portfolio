import TechnicalDepth from '../components/TechnicalDepth';
import { technicalDepth } from '../data/portfolio';

function SkillsPage() {
    return (
        <div className="pt-20">
            <TechnicalDepth depth={technicalDepth} />
        </div>
    );
}

export default SkillsPage;
