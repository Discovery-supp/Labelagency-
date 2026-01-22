import { useState } from 'react';
import Navigation from './components/Navigation';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import MethodologyPage from './pages/MethodologyPage';
import TrainingPage from './pages/TrainingPage';
import ContactPage from './pages/ContactPage';

export type PageType = 'home' | 'about' | 'services' | 'solutions' | 'methodology' | 'training' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'methodology':
        return <MethodologyPage />;
      case 'training':
        return <TrainingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;
