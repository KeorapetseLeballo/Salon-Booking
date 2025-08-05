import React from 'react';
import { Calendar, Star, MapPin, Clock, Users, Award, TrendingUp } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (view: 'booking' | 'admin' | 'providers') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const services = [
    { name: 'Hair Styling', icon: '💇‍♀️', providers: 24 },
    { name: 'Nail Care', icon: '💅', providers: 18 },
    { name: 'Barber Services', icon: '✂️', providers: 16 },
    { name: 'Makeup', icon: '💄', providers: 12 },
    { name: 'Skincare', icon: '🧴', providers: 8 },
    { name: 'Eyebrow Threading', icon: '👁️', providers: 14 }
  ];

  const topSalons = [
    { name: 'Luxe Beauty Studio', rating: 4.9, reviews: 234, location: 'Downtown' },
    { name: 'Style & Grace', rating: 4.8, reviews: 189, location: 'Midtown' },
    { name: 'Urban Cuts', rating: 4.7, reviews: 156, location: 'East Side' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Book Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Beauty Experience</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with top-rated hairdressers, nail techs, barbers, and makeup artists in your area. 
            Book instantly, rate your experience, and discover the best beauty professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('booking')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onNavigate('providers')}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors"
            >
              Find Providers
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.providers} providers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SalonBook?</h2>
            <p className="text-lg text-gray-600">The complete solution for beauty service bookings</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Booking</h3>
              <p className="text-gray-600">Book appointments instantly with real-time availability. No more phone calls or waiting.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Reviews</h3>
              <p className="text-gray-600">Read authentic reviews from real customers to find the perfect provider for you.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Discovery</h3>
              <p className="text-gray-600">Find top-rated beauty professionals near you with detailed salon information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Salons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Top Rated Salons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topSalons.map((salon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{salon.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{salon.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{salon.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{salon.reviews} reviews</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-purple-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Verified Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Partner Salons</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-2xl font-bold">SalonBook</span>
          </div>
          <p className="text-gray-400 mb-6">Connecting beauty professionals with their perfect clients</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;