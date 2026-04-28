import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SiteHeader from './components/SiteHeader';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ClientWorkPage from './pages/ClientWorkPage';
import ClientDetailPage from './pages/ClientDetailPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import { profile } from './data/portfolio';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50">
      <ScrollToTop />

      {/* Premium Background Layers */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-100" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-premium-gradient" />
      <div className="pointer-events-none fixed inset-0 z-10 noise-overlay" />

      {/* Decorative Blobs */}
      <div className="pointer-events-none fixed left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-brand-200/20 blur-[120px] animate-slow-drift" />
      <div className="pointer-events-none fixed right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet-200/20 blur-[100px] animate-slow-drift" />

      <SiteHeader profile={profile} />

      <main className="relative z-20 min-h-[calc(100vh-140px)] animate-fade-in pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<CaseStudyPage />} />
          <Route path="/client-work" element={<ClientWorkPage />} />
          <Route path="/client-work/:id" element={<ClientDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer name={profile.name} />
    </div>
  );
}

export default App;
