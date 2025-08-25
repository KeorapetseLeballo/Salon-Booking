import React, { useState } from 'react';
import { Scissors, Calendar, Star, MapPin, Clock, User, Menu, X } from 'lucide-react';
import LandingPage from './components/LandingPage';
import ClientBooking from './components/ClientBooking';
import AdminDashboard from './components/AdminDashboard';
import ProviderProfiles from './components/ProviderProfiles';

type View = 'landing' | 'booking' | 'admin' | 'providers';

function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'booking':
        return <ClientBooking onBack={() => setCurrentView('landing')} />;
      case 'admin':
        return <AdminDashboard onBack={() => setCurrentView('landing')} />;
      case 'providers':
        return <ProviderProfiles onBack={() => setCurrentView('landing')} />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  if (currentView !== 'landing') {
    return renderView();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Scissors className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">Good Hair Saloon</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentView('booking')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Book Now
              </button>
              <button
                onClick={() => setCurrentView('providers')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Find Providers
              </button>
              <button
                onClick={() => setCurrentView('admin')}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Provider Login
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-100">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => {
                    setCurrentView('booking');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-left"
                >
                  Book Now
                </button>
                <button
                  onClick={() => {
                    setCurrentView('providers');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-left"
                >
                  Find Providers
                </button>
                <button
                  onClick={() => {
                    setCurrentView('admin');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors text-center"
                >
                  Provider Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {renderView()}
    </div>
  );
}

export default App;