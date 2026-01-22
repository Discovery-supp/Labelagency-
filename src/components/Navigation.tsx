import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PageType } from '../App';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Accueil', page: 'home' },
    { label: 'À Propos', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Méthodologie', page: 'methodology' },
    { label: 'Formation', page: 'training' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#0a1628] shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <h1 className="text-2xl font-bold text-white">Label Agency</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-pink-500 border-b-2 border-pink-500'
                    : 'text-gray-300 hover:text-pink-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === item.page
                    ? 'bg-pink-500/20 text-pink-400'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
