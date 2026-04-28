import ClientGrid from '../components/ClientGrid';
import { clientWork } from '../data/portfolio';

function ClientWorkPage() {
    return (
        <div className="pt-20 pb-20">
            <ClientGrid clients={clientWork} />
        </div>
    );
}

export default ClientWorkPage;
